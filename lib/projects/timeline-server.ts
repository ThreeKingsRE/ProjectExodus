import { canEditItem, canReassignOrDelete } from './timeline'

export const itemInclude = { createdBy: { select: { id: true, name: true } } } as const

/** Shape an item for one viewer, with what they're allowed to do with it. */
export function itemForViewer(item: any, viewer: Parameters<typeof canEditItem>[1]) {
  return {
    id: item.id,
    kind: item.kind,
    title: item.title,
    description: item.description,
    location: item.location,
    startAt: item.startAt,
    endAt: item.endAt,
    allDay: item.allDay,
    status: item.status,
    assigneeIds: item.assigneeIds,
    milestoneId: item.milestoneId,
    color: item.color,
    imported: !!item.externalUid,
    createdBy: item.createdBy,
    updatedAt: item.updatedAt,
    canEdit: canEditItem(item, viewer),
    canReassign: canReassignOrDelete(item, viewer),
  }
}
