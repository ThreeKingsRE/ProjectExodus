import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'
import { normalizeLayout, defaultLayout } from '@/lib/menu/layout'

// The signed-in member's arrangement of the phone menu.
// GET -> { layout, custom }   PUT { layout } saves   DELETE puts it back to the standard menu
async function me() {
  const session = await auth()
  return session?.user?.id ?? null
}
const no = () => NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })

export async function GET() {
  const id = await me(); if (!id) return no()
  const u = await prisma.user.findUnique({ where: { id }, select: { menuLayout: true } })
  return NextResponse.json({ success: true, data: { layout: u?.menuLayout ? normalizeLayout(u.menuLayout) : defaultLayout(), custom: !!u?.menuLayout } })
}

export async function PUT(request: Request) {
  const id = await me(); if (!id) return no()
  const b = await request.json().catch(() => null)
  if (!b || typeof b.layout !== 'object' || !b.layout) return NextResponse.json({ success: false, error: 'Nothing to save.' }, { status: 400 })
  const layout = normalizeLayout(b.layout)
  await prisma.user.update({ where: { id }, data: { menuLayout: layout } })
  return NextResponse.json({ success: true, data: { layout, custom: true } })
}

export async function DELETE() {
  const id = await me(); if (!id) return no()
  await prisma.user.update({ where: { id }, data: { menuLayout: Prisma.DbNull } })
  return NextResponse.json({ success: true, data: { layout: defaultLayout(), custom: false } })
}
