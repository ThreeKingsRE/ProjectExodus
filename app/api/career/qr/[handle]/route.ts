import { prisma } from '@/lib/db/prisma'
import { careerQrSvg } from '@/lib/career/server'

// GET /api/career/qr/[handle] - QR code (SVG) for a portfolio, to print on a truck, card or invoice
export async function GET(_request: Request, { params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const profile = await prisma.careerProfile.findUnique({ where: { handle }, select: { handle: true } })
  if (!profile) return new Response('Portfolio not found', { status: 404, headers: { 'Cache-Control': 'no-store' } })
  return new Response(careerQrSvg(profile.handle), {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Content-Disposition': `inline; filename="my-career-qr.svg"`,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; sandbox",
    },
  })
}
