// Shared Prisma include for initiative updates, shaped like community feed posts.
export function updateInclude(userId: string) {
  return {
    user: { select: { id: true, name: true, image: true, headline: true } },
    media: { orderBy: { order: 'asc' as const } },
    project: { select: { id: true, name: true, slug: true } },
    likes: { where: { userId }, select: { id: true } },
    comments: {
      where: { parentId: null },
      include: { user: { select: { id: true, name: true, image: true } } },
      orderBy: { createdAt: 'desc' as const },
      take: 3,
    },
    _count: { select: { likes: true, comments: true } },
  }
}
