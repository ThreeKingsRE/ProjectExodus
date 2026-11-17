import { getPublicProject } from '@/lib/projects/get-public-project'
import { initiativeQrSvg } from '@/lib/projects/share-qr'

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getPublicProject(slug)
  if (!project) return new Response('Public initiative not found', { status: 404, headers: { 'Cache-Control': 'no-store' } })
  return new Response(initiativeQrSvg(project.slug), {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Content-Disposition': 'inline; filename="initiative-qr.svg"',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; sandbox",
    },
  })
}
