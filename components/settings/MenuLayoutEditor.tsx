'use client'

// Settings → Menu layout: arrange the phone menu. Move sections and items up or down
// (an item at the edge of a section hops into the next one), send an item to any
// section, hide what you don't use, and bring hidden items back. Saved to the account.

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUp, Eye, EyeOff, RotateCcw } from 'lucide-react'
import { MENU_ICONS } from '@/components/layout/menuIcons'
import { MENU_SECTIONS, defaultLayout, hideItem, isMenuItemLive, itemById, moveItem, moveItemToSection, moveSection, normalizeLayout, resolveMenu, showItem, type MenuLayout } from '@/lib/menu/layout'
import { useMenuLayout } from '@/lib/menu/useMenuLayout'

const btn = 'no-min-size inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] disabled:opacity-30'

export function MenuLayoutEditor({ userId }: { userId: string }) {
  const { layout: saved, custom, save } = useMenuLayout(userId)
  const [draft, setDraft] = useState<MenuLayout>(saved)
  const [dirty, setDirty] = useState(false)
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')
  useEffect(() => { if (!dirty) setDraft(saved) }, [saved, dirty])

  const edit = (f: (l: MenuLayout) => MenuLayout) => { setDraft((d) => f(d)); setDirty(true); setMsg('') }
  const sections = resolveMenu(draft, true, true)
  const hidden = draft.hidden.filter(isMenuItemLive).map((id) => itemById.get(id)!).filter(Boolean)

  async function commit(next: MenuLayout | null) {
    setBusy(true)
    const ok = await save(next)
    setBusy(false); setMsg(ok ? (next ? 'Saved. Your menu is updated.' : 'Back to the standard menu.') : 'Couldn’t save. Try again.')
    if (ok) { setDirty(false); if (!next) setDraft(defaultLayout()) }
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-black">Menu layout</h2>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">Arrange your menu the way you use it. Use the arrows to move sections and items, pick a section to send an item to, or hide what you don’t need. Your layout is saved to your account and follows you to every device.</p>
      </div>

      <ol className="space-y-3">
        {sections.map((s, si) => (
          <li key={s.id} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3">
            <div className="flex items-center gap-2">
              <h3 className="min-w-0 flex-1 truncate text-sm font-black uppercase tracking-wide">{s.name}</h3>
              <button type="button" className={btn} aria-label={`Move ${s.name} section up`} disabled={si === 0} onClick={() => edit((l) => moveSection(l, s.id, -1))}><ArrowUp className="h-4 w-4" /></button>
              <button type="button" className={btn} aria-label={`Move ${s.name} section down`} disabled={si === sections.length - 1} onClick={() => edit((l) => moveSection(l, s.id, 1))}><ArrowDown className="h-4 w-4" /></button>
            </div>
            {s.items.length === 0 && <p className="mt-2 text-xs text-[var(--muted-foreground)]">Empty. Send an item here from another section.</p>}
            <ul className="mt-2 divide-y divide-[var(--border)]">
              {s.items.map((it, ii) => {
                const Icon = MENU_ICONS[it.icon]
                const first = si === 0 && ii === 0, last = si === sections.length - 1 && ii === s.items.length - 1
                return (
                  <li key={it.id} className="flex flex-wrap items-center gap-2 py-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] text-[var(--primary)]">{Icon && <Icon className="h-[18px] w-[18px]" />}</span>
                    <span className="min-w-0 flex-1 truncate text-[15px] font-medium">{it.label}</span>
                    <div className="flex w-full items-center gap-1.5 sm:w-auto">
                    <select aria-label={`Section for ${it.label}`} value={s.id} onChange={(e) => edit((l) => moveItemToSection(l, it.id, e.target.value))}
                      className="no-min-size mr-auto h-8 min-w-0 max-w-[8rem] rounded-lg border border-[var(--border)] bg-[var(--background)] px-1.5 text-xs">
                      {MENU_SECTIONS.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}
                    </select>
                    <button type="button" className={btn} aria-label={`Move ${it.label} up`} disabled={first} onClick={() => edit((l) => moveItem(l, it.id, -1))}><ArrowUp className="h-4 w-4" /></button>
                    <button type="button" className={btn} aria-label={`Move ${it.label} down`} disabled={last} onClick={() => edit((l) => moveItem(l, it.id, 1))}><ArrowDown className="h-4 w-4" /></button>
                    <button type="button" className={btn} aria-label={`Hide ${it.label}`} onClick={() => edit((l) => hideItem(l, it.id))}><EyeOff className="h-4 w-4" /></button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ol>

      <section className="rounded-2xl border border-dashed border-[var(--border)] p-3">
        <h3 className="text-sm font-black uppercase tracking-wide">Hidden</h3>
        {hidden.length === 0
          ? <p className="mt-1 text-xs text-[var(--muted-foreground)]">Nothing hidden. Hide an item and it will wait here until you want it back.</p>
          : <ul className="mt-2 flex flex-wrap gap-2">
            {hidden.map((it) => <li key={it.id}><button type="button" onClick={() => edit((l) => showItem(l, it.id))} className="no-min-size inline-flex h-8 items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 text-xs font-semibold"><Eye className="h-3.5 w-3.5" aria-hidden />Add back {it.label}</button></li>)}
          </ul>}
      </section>

      <div className="sticky bottom-3 z-10 flex flex-wrap items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)]/95 p-3 backdrop-blur">
        <button type="button" disabled={!dirty || busy} onClick={() => commit(normalizeLayout(draft))} className="no-min-size h-10 rounded-full bg-[var(--primary)] px-5 text-sm font-bold disabled:opacity-40" style={{ color: 'var(--primary-foreground)' }}>{busy ? 'Saving…' : 'Save menu'}</button>
        <button type="button" disabled={busy || (!custom && !dirty)} onClick={() => commit(null)} className="no-min-size inline-flex h-10 items-center gap-1.5 rounded-full border border-[var(--border)] px-4 text-sm font-semibold disabled:opacity-40"><RotateCcw className="h-4 w-4" aria-hidden />Reset to standard</button>
        {dirty && !msg && <span className="text-xs text-[var(--muted-foreground)]">Unsaved changes</span>}
        {msg && <span role="status" className="text-xs text-[var(--muted-foreground)]">{msg}</span>}
      </div>
    </div>
  )
}
