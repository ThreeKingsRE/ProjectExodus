import { cache } from 'react'
import { prisma } from '@/lib/db'
import { publicProjectFields } from './public-view'

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
  return project ? publicProjectFields(project) : null
})
