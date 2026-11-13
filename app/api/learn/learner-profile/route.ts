import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'

// Digital Scroll learner settings: age band (for connecting with peers) and
// whether notes sync to the account.
//
// GET  -> { ageBand: 'TEEN' | 'ADULT' | null, syncScrollNotes: boolean }
// PUT  { ageBand?, syncScrollNotes? }
//
// Turning sync off deletes the server copies of the user's PRIVATE notes;
// notes they've shared with peers stay until they're made private again.

const bodySchema = z.object({
  ageBand: z.enum(['TEEN', 'ADULT']).optional(),
  syncScrollNotes: z.boolean().optional(),
})

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }
  const profile = await prisma.learnerProfile.findUnique({ where: { userId: session.user.id } })
  return NextResponse.json({
    success: true,
    data: { ageBand: profile?.ageBand ?? null, syncScrollNotes: profile?.syncScrollNotes ?? false },
  })
}

export async function PUT(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }
    const userId = session.user.id
    const parsed = bodySchema.safeParse(await request.json().catch(() => null))
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
    }

    const existing = await prisma.learnerProfile.findUnique({ where: { userId } })
    // Age band can be set once by the learner; changing it later goes through support,
    // so nobody can hop between the teen and adult groups.
    if (parsed.data.ageBand && existing?.ageBand && existing.ageBand !== parsed.data.ageBand) {
      return NextResponse.json(
        { success: false, error: 'Age group is already set. Contact support to change it.' },
        { status: 409 }
      )
    }

    const profile = await prisma.learnerProfile.upsert({
      where: { userId },
      create: { userId, ...parsed.data },
      update: parsed.data,
    })

    if (parsed.data.syncScrollNotes === false) {
      await prisma.scrollNote.deleteMany({ where: { userId, visibility: 'PRIVATE' } })
    }

    return NextResponse.json({
      success: true,
      data: { ageBand: profile.ageBand, syncScrollNotes: profile.syncScrollNotes },
    })
  } catch (error) {
    console.error('Error updating learner profile:', error)
    return NextResponse.json({ success: false, error: 'Failed to update settings' }, { status: 500 })
  }
}
