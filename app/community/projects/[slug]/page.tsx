import type { Metadata } from 'next'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { getPublicProject } from '@/lib/projects/get-public-project'
import { getPreviewItems } from '@/lib/projects/public-previews'
import { PublicInitiativeOverview } from '@/components/projects/PublicInitiativeOverview'
import ProjectWorkspace from './ProjectWorkspace'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getPublicProject(slug).catch(() => null)
  if (!project) return { title: 'Community initiative', robots: { index: false, follow: false } }
  const url = `https://www.projxodus.com/community/projects/${encodeURIComponent(slug)}`
  const image = `${url}/opengraph-image`
  return {
    metadataBase: new URL('https://www.projxodus.com'),
    title: `${project.name} | Project Exodus`, description: project.description,
    alternates: { canonical: url },
    openGraph: { title: project.name, description: project.description, url, type: 'website', siteName: 'Project Exodus', images: [{ url: image, width: 1200, height: 630, alt: `${project.name} · Project Exodus initiative` }] },
    twitter: { card: 'summary_large_image', title: project.name, description: project.description, images: [image] },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const session = await auth()
  if (session?.user?.id) return <ProjectWorkspace params={Promise.resolve({ slug })} />
  const project = await getPublicProject(slug)
  if (!project) redirect(`/auth/signin?callbackUrl=${encodeURIComponent(`/community/projects/${slug}`)}`)
  const previews = await getPreviewItems(slug)
  return <PublicInitiativeOverview project={project} previews={previews} />
}
