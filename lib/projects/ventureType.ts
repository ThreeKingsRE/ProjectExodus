// Optional "what kind of initiative is this" label, stored in Project.layoutConfig.
// Owners pick a preset or choose OTHER and type their own.

export const VENTURE_TYPES = [
  'STARTUP',
  'NONPROFIT',
  'SOCIAL_ENTERPRISE',
  'INVENTION',
  'COMMUNITY_BUILD',
  'RESEARCH',
  'OTHER',
] as const
export type VentureType = (typeof VENTURE_TYPES)[number]

export const VENTURE_TYPE_LABEL: Record<VentureType, string> = {
  STARTUP: 'Startup',
  NONPROFIT: 'Nonprofit',
  SOCIAL_ENTERPRISE: 'Social enterprise',
  INVENTION: 'Invention',
  COMMUNITY_BUILD: 'Community build',
  RESEARCH: 'Research project',
  OTHER: 'Other',
}

export interface VentureTypeValue {
  ventureType: VentureType | null
  ventureTypeOther: string
}

/** Normalize request input. Returns null when nothing about the type was sent. */
export function parseVentureType(body: Record<string, unknown>): VentureTypeValue | null {
  if (body.ventureType === undefined && body.ventureTypeOther === undefined) return null
  const raw = typeof body.ventureType === 'string' ? body.ventureType : ''
  const ventureType = (VENTURE_TYPES as readonly string[]).includes(raw) ? (raw as VentureType) : null
  const other = typeof body.ventureTypeOther === 'string' ? body.ventureTypeOther.trim().slice(0, 60) : ''
  if (ventureType === 'OTHER' && !other) return { ventureType: null, ventureTypeOther: '' }
  return { ventureType, ventureTypeOther: ventureType === 'OTHER' ? other : '' }
}

/** Display label, or null when the owner didn't set one. */
export function ventureTypeLabel(layoutConfig: unknown): string | null {
  const cfg = (layoutConfig && typeof layoutConfig === 'object' ? layoutConfig : {}) as Record<string, unknown>
  const type = cfg.ventureType as VentureType | undefined
  if (!type || !(VENTURE_TYPES as readonly string[]).includes(type)) return null
  if (type === 'OTHER') return typeof cfg.ventureTypeOther === 'string' && cfg.ventureTypeOther ? cfg.ventureTypeOther : null
  return VENTURE_TYPE_LABEL[type]
}
