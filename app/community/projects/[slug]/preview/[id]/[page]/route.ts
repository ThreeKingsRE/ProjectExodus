import { NextRequest, NextResponse } from 'next/server'
import { getPreviewItem, isPublicSlug, readPreviewPage } from '@/lib/projects/public-previews'

// Page images of a public initiative's file previews (decks, the study). Served
// only while the initiative's overview is public; anything else gets 404.

export const runtime = 'nodejs'

const notFound = () => new NextResponse('Not found', { status: 404, headers: { 'Cache-Control': 'no-store' } })

export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string; id: string; page: string }> }) {
  const { slug, id, page } = await params
  const match = /^(\d{1,3})\.jpg$/.exec(page)
  if (!match || !(await isPublicSlug(slug))) return notFound()
  const item = await getPreviewItem(slug, id)
  if (!item) return notFound()
  const body = await readPreviewPage(slug, item, Number(match[1]))
  if (!body) return notFound()
  return new NextResponse(new Uint8Array(body), {
    headers: {
      'Content-Type': 'image/jpeg',
      'Content-Disposition': 'inline',
      'Cache-Control': 'public, max-age=300, s-maxage=3600',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
