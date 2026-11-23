'use client'

import { useState } from 'react'
import { Loader2, MailCheck } from 'lucide-react'

const input = 'w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-[var(--primary)]'

export default function VouchForm({ token, hash, owner, initialName, initialRole }: { token: string; hash: string; owner: string; initialName: string; initialRole: string }) {
  const [name, setName] = useState(initialName), [role, setRole] = useState(initialRole), [company, setCompany] = useState('')
  const [email, setEmail] = useState(''), [comment, setComment] = useState('')
  const [anonymous, setAnonymous] = useState(false), [anonymousAs, setAnonymousAs] = useState('')
  const [agree, setAgree] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState<'awaiting-email' | 'declined' | null>(null)
  const [emailed, setEmailed] = useState(true)

  const send = async (body: object) => {
    setBusy(true); setError(null)
    try {
      const res = await fetch(`/api/career/vouch/${token}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const j = await res.json()
      if (!j.success) throw new Error(j.error)
      setDone(j.data.status); setEmailed(j.data.emailed !== false)
    } catch (e) { setError(e instanceof Error && e.message ? e.message : 'Something went wrong. Try again.') }
    setBusy(false)
  }

  if (done === 'declined') return <p className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-sm">Thanks for letting us know. {owner} will see that you declined.</p>
  if (done) {
    return (
      <div className="rounded-2xl border border-emerald-600/30 bg-emerald-600/10 p-4 text-sm">
        <p className="flex items-center gap-2 font-bold"><MailCheck className="h-5 w-5 text-emerald-600" aria-hidden /> One last step: check your email</p>
        <p className="mt-1">{emailed ? `We sent a link to ${email}. Open it and tap “Confirm” so your vouch shows on ${owner}’s portfolio.` : 'We couldn’t send the confirmation email right now. Please try again later.'}</p>
      </div>
    )
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); send({ action: 'sign', hash, signerName: name, signerRole: role, signerCompany: company, signerEmail: email, comment, anonymous, anonymousAs }) }}
      className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3 text-xs sm:p-4">
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="font-semibold">Your name<input required value={name} onChange={(e) => setName(e.target.value)} maxLength={80} className={`${input} mt-1`} /></label>
        <label className="font-semibold">Your email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${input} mt-1`} />
          <span className="mt-0.5 block font-normal text-[var(--muted-foreground)]">We email you to confirm. Never shown publicly.</span></label>
        <label className="font-semibold">Your role<input value={role} onChange={(e) => setRole(e.target.value)} maxLength={80} placeholder="Site supervisor, homeowner…" className={`${input} mt-1`} /></label>
        <label className="font-semibold">Company <span className="font-normal text-[var(--muted-foreground)]">(optional)</span><input value={company} onChange={(e) => setCompany(e.target.value)} maxLength={80} className={`${input} mt-1`} /></label>
        <label className="font-semibold sm:col-span-2">A few words <span className="font-normal text-[var(--muted-foreground)]">(optional)</span>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} maxLength={600} rows={3} placeholder="Clean work, on time, would hire again." className={`${input} mt-1`} /></label>
      </div>
      <label className="flex items-start gap-2">
        <input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} className="mt-0.5 h-4 w-4" />
        <span>Don’t show my name. Show me as a description instead.</span>
      </label>
      {anonymous && <input value={anonymousAs} onChange={(e) => setAnonymousAs(e.target.value)} maxLength={80} placeholder="Homeowner, Rochester NY" aria-label="Show me as" className={input} />}
      <label className="flex items-start gap-2">
        <input type="checkbox" required checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4 w-4" />
        <span>I saw, supervised or paid for this work, and it’s shown honestly.</span>
      </label>
      {error && <p role="alert" className="text-red-600">{error}</p>}
      <div className="flex flex-wrap items-center gap-2">
        <button type="submit" disabled={busy} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[var(--primary)] px-5 text-sm font-bold text-[var(--primary-foreground)] disabled:opacity-60">
          {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />} Vouch for this work
        </button>
        <button type="button" disabled={busy} onClick={() => { if (confirm('Decline this request?')) send({ action: 'decline' }) }} className="min-h-10 rounded-full px-4 text-sm font-semibold text-[var(--muted-foreground)] hover:bg-[var(--muted)]">I can’t vouch for this</button>
      </div>
    </form>
  )
}
