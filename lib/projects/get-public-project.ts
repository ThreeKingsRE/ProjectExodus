import { cache } from 'react'
import { prisma } from '@/lib/db'
import { publicProjectFields } from './public-view'
import { ventureTypeLabel } from './ventureType'
import { liveTablesForText } from './live-tables-server'

export const getPublicProject = cache(async (slug: string) => {
  const project = await prisma.project.findUnique({
    where: { slug },
    select: {
      id: true, name: true, slug: true, description: true, goal: true,
      status: true, coverImage: true, visibility: true, layoutConfig: true,
      creator: { select: { id: true, name: true } },
      _count: { select: { members: true } },
    },
  })
  const fields = project ? publicProjectFields(project) : null
  if (!fields) return null
  // Latest public updates, read-only for visitors who aren't signed in
  const updates = await prisma.socialPost.findMany({
    where: { projectId: project!.id, visibility: 'PUBLIC' },
    orderBy: [{ isPinned: 'desc' }, { createdAt: 'desc' }],
    take: 3,
    select: {
      id: true, title: true, content: true, createdAt: true,
      user: { select: { name: true } },
      media: { where: { type: 'IMAGE' }, orderBy: { order: 'asc' }, take: 1, select: { url: true } },
      _count: { select: { likes: true, comments: true } },
    },
  })
  // Live tables in the story: cached rows only, never the source file
  const liveTables = await liveTablesForText(project!.id, fields.story).catch(() => ({}))
  return {
    ...fields,
    liveTables,
    ventureType: ventureTypeLabel(project!.layoutConfig),
    updates: updates.map((u: any) => ({
      id: u.id,
      title: u.title,
      excerpt: u.content.length > 280 ? `${u.content.slice(0, 277)}…` : u.content,
      createdAt: u.createdAt.toISOString(),
      author: u.user?.name ?? null,
      image: u.media[0]?.url ?? null,
      likes: u._count.likes,
      comments: u._count.comments,
    })),
  }
})
