import { ImageResponse } from 'next/og'
import { getPublicProject } from '@/lib/projects/get-public-project'

export const alt = 'A public initiative on Project Exodus'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getPublicProject(slug).catch(() => null)
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#173b2d', color: '#f6f4e9', padding: '58px 66px', borderBottom: '16px solid #b9d38b' }}>
      <div style={{ display: 'flex', fontSize: 24, letterSpacing: 5, color: '#c7dfa6' }}>PROJECT EXODUS · COMMUNITY INITIATIVE</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 76, lineHeight: 1.06, fontWeight: 700 }}>{project?.name.slice(0, 90) || 'Build something together.'}</div>
        <div style={{ display: 'flex', fontSize: 28, lineHeight: 1.4, marginTop: 28, color: '#d9e4ce' }}>{(project?.tagline || project?.description || 'Discover community-led initiatives on Project Exodus.').slice(0, 180)}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#c7dfa6' }}><span>Read the idea. Follow the work. Get involved.</span><span>projxodus.com</span></div>
    </div>, size,
  )
}
