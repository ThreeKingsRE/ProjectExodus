import 'server-only'
import { readFile } from 'fs/promises'
import path from 'path'
import { cache } from 'react'
import { prisma } from '@/lib/db'
import { isPublicProject } from './public-view'
import { PRIVATE_FILES_DIR } from './live-tables-server'

// Read-only previews of an initiative's files for visitors who aren't signed in.
// An organizer opts in by shipping private/projects/<slug>/previews/manifest.json
// with page images, sheet values and text copies made from their files. The
// original files stay in /private and download only for team members through
// /projects/[...path]; nothing here links to them.

export type PreviewKind = 'pages' | 'sheets' | 'text'

export interface PreviewItem {
  id: string
  title: string
  group: string
  kind: PreviewKind
  summary?: string
  /** Number of page images (kind 'pages'): 01.jpg, 02.jpg, … */
  pages?: number
  /** File inside the previews folder (kinds 'sheets' and 'text') */
  source?: string
  current?: boolean
}

export interface SheetPreview { name: string; rows: string[][]; truncated?: boolean }

const SLUG = /^[a-z0-9][a-z0-9-]{0,80}$/
const ID = /^[a-z0-9][a-z0-9.-]{0,80}$/
const SOURCE = /^(models|text)\/[a-z0-9][a-z0-9.-]{0,80}\.(json|md)$/

const folder = (slug: string) => path.join(PRIVATE_FILES_DIR, 'projects', slug, 'previews')

function validItem(item: unknown): item is PreviewItem {
  if (!item || typeof item !== 'object') return false
  const i = item as Record<string, unknown>
  if (typeof i.id !== 'string' || !ID.test(i.id) || i.id.includes('..')) return false
  if (typeof i.title !== 'string' || typeof i.group !== 'string') return false
  if (i.kind === 'pages') return Number.isInteger(i.pages) && (i.pages as number) > 0 && (i.pages as number) <= 200
  if (i.kind === 'sheets' || i.kind === 'text') return typeof i.source === 'string' && SOURCE.test(i.source) && !i.source.includes('..')
  return false
}

/** True when the initiative exists and its overview is public. */
export const isPublicSlug = cache(async (slug: string) => {
  if (!SLUG.test(slug)) return false
  const project = await prisma.project.findUnique({ where: { slug }, select: { visibility: true, layoutConfig: true } }).catch(() => null)
  return !!project && isPublicProject(project)
})

export const getPreviewItems = cache(async (slug: string): Promise<PreviewItem[]> => {
  if (!SLUG.test(slug)) return []
  try {
    const raw = JSON.parse(await readFile(path.join(folder(slug), 'manifest.json'), 'utf8'))
    return Array.isArray(raw?.items) ? raw.items.filter(validItem) : []
  } catch {
    return []
  }
})

export async function getPreviewItem(slug: string, id: string): Promise<PreviewItem | null> {
  return (await getPreviewItems(slug)).find((item) => item.id === id) ?? null
}

export async function readPreviewSheets(slug: string, item: PreviewItem): Promise<SheetPreview[]> {
  if (item.kind !== 'sheets' || !item.source) return []
  try {
    const raw = JSON.parse(await readFile(path.join(folder(slug), item.source), 'utf8'))
    return Array.isArray(raw?.sheets) ? raw.sheets : []
  } catch {
    return []
  }
}

export async function readPreviewText(slug: string, item: PreviewItem): Promise<string> {
  if (item.kind !== 'text' || !item.source) return ''
  try {
    return await readFile(path.join(folder(slug), item.source), 'utf8')
  } catch {
    return ''
  }
}

/** One page image (1-based) of a 'pages' preview, or null. */
export async function readPreviewPage(slug: string, item: PreviewItem, page: number): Promise<Buffer | null> {
  if (item.kind !== 'pages' || !Number.isInteger(page) || page < 1 || page > (item.pages ?? 0)) return null
  try {
    return await readFile(path.join(folder(slug), item.id, `${String(page).padStart(2, '0')}.jpg`))
  } catch {
    return null
  }
}
