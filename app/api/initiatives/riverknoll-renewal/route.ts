import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import plan from '@/data/riverknoll-renewal.json'

export const dynamic = 'force-dynamic'

// Return only participation state, not the creator's profile or member identities.
export async function GET() {
  try {
    const session = await auth()
    const project = await prisma.project.findUnique({
      where: { slug: plan.slug },
      select: {
        id: true, creatorId: true, visibility: true,
        _count: { select: { members: true } },
        members: { where: { userId: session?.user?.id || '' }, select: { userId: true } },
      },
    })
    if (!project?.id || project.visibility !== 'PUBLIC') return NextResponse.json({ project: null }, { headers: { 'Cache-Control': 'no-store' } })
    return NextResponse.json({ project: {
      id: project.id,
      members: project._count.members,
      isMember: project.members.length > 0,
      isOwner: project.creatorId === session?.user?.id,
    } }, { headers: { 'Cache-Control': 'no-store' } })
  } catch {
    return NextResponse.json({ error: 'Community workspace is temporarily unavailable.' }, { status: 503 })
  }
}

// Explicit, repeat-safe initialization. Reading the proposal never creates data.
export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (origin && origin !== new URL(request.url).origin) return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 })
  if (!request.headers.get('content-type')?.includes('application/json')) return NextResponse.json({ error: 'JSON request required.' }, { status: 415 })
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Please sign in.' }, { status: 401 })

  try {
    // Use the current database role, never a client-updated JWT role, for activation.
    const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { role: true } })
    if (!user || !['ADMIN', 'SUPER_ADMIN'].includes(user.role)) return NextResponse.json({ error: 'A site administrator must activate this initiative.' }, { status: 403 })
    const limited = await rateLimit(request, { id: 'riverknoll-activation', limit: 10, windowSeconds: 3600 })
    if (!limited.success) return rateLimitResponse(limited.reset)

    const existing = await prisma.project.findUnique({ where: { slug: plan.slug }, select: { id: true } })
    if (existing?.id) return NextResponse.json({ success: true, id: existing.id, created: false })

    try {
      const project = await prisma.project.create({
        data: {
          name: plan.title, slug: plan.slug, description: plan.summary, goal: plan.mission,
          status: 'PLANNING', visibility: 'PUBLIC', coverImage: plan.coverImage,
          creatorId: session.user.id,
          layoutConfig: {
            templateId: plan.slug, publicAttribution: plan.attribution, tagline: plan.tagline,
            mission: plan.mission, category: 'advocacy', theme: 'nature',
            proposalRevision: plan.revision,
            settings: { enableDiscussions: true, enableResearch: true, enableLearning: false, requireApproval: false },
          },
          members: { create: { userId: session.user.id, role: 'OWNER' } },
          discussions: { create: plan.questions.map(question => ({
            title: question.title, content: question.text, authorId: session.user.id, isPinned: true,
          })) },
        },
        select: { id: true },
      })
      // Nested creation is atomic: no project can be left without its owner or starter topics.
      if (!project?.id) throw new Error('Database did not return a project.')
      return NextResponse.json({ success: true, id: project.id, created: true }, { status: 201 })
    } catch (error) {
      // A simultaneous activation may have won the unique-slug race.
      if ((error as { code?: string }).code === 'P2002') {
        const project = await prisma.project.findUnique({ where: { slug: plan.slug }, select: { id: true } })
        if (project?.id) return NextResponse.json({ success: true, id: project.id, created: false })
      }
      throw error
    }
  } catch (error) {
    console.error('Riverknoll activation failed:', error)
    return NextResponse.json({ error: 'Could not activate the community workspace. Please try again.' }, { status: 503 })
  }
}
