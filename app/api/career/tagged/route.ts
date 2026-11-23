import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { postInclude, publicPost, type PublicPost } from '@/lib/career/server'

// GET /api/career/tagged - work posts I'm tagged in (not other people's private posts)
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const rows = await prisma.careerPost.findMany({
    where: { people: { some: { userId: session.user.id } }, visibility: { in: ['PUBLIC', 'MEMBERS'] } },
    orderBy: { createdAt: 'desc' }, take: 200, include: postInclude(true),
  })
  const data: PublicPost[] = rows.map(publicPost)
  return NextResponse.json({ success: true, data })
}
