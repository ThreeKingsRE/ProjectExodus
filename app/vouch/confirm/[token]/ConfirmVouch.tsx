'use client'

// Confirming takes a tap, so email link scanners that open the link can't confirm on their own.

import { useState } from 'react'
import { BadgeCheck, Loader2 } from 'lucide-react'

export default function ConfirmVouch({ token, notMe }: { token: string; notMe: boolean }) {
  const [state, setState] = useState<'idle' | 'busy' | 'verified' | 'declined'>('idle')
  const [error, setError] = useState<string | null>(null)
  const act = async (action: 'confirm' | 'decline') => {
    setState('busy'); setError(null)
    try {
      const res = await fetch(`/api/career/confirm/${token}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action }) })
      const j = await res.json()
      if (!j.success) throw new Error(j.error)
      setState(j.data.status)
    } catch (e) { setError(e instanceof Error && e.message ? e.message : 'Something went wrong.'); setState('idle') }
  }
  if (state === 'verified') {
    return <div className="rounded-2xl border border-emerald-600/30 bg-emerald-600/10 p-5 text-center"><BadgeCheck className="mx-auto h-10 w-10 text-emerald-600" aria-hidden /><h1 style={{ fontSize: '1.35rem' }} className="mt-2 font-black">Vouch confirmed</h1><p className="mt-1 text-sm">Thank you. Your seal now shows on their portfolio.</p></div>
  }
  if (state === 'declined') {
    return <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center"><h1 style={{ fontSize: '1.35rem' }} className="font-black">Removed</h1><p className="mt-1 text-sm">The vouch was removed. Thanks for telling us.</p></div>
  }
  return (
    <div className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center">
      <h1 style={{ fontSize: '1.35rem' }} className="font-black">{notMe ? 'Didn’t vouch for this?' : 'Confirm your vouch'}</h1>
      <p className="text-sm text-[var(--muted-foreground)]">{notMe ? 'If someone used your email without asking, remove the vouch.' : 'Tap confirm so your “Vouched by” seal appears on their portfolio.'}</p>
      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
      <div className="flex flex-col items-center gap-2">
        {!notMe && <button type="button" disabled={state === 'busy'} onClick={() => act('confirm')} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--primary)] px-6 text-sm font-bold text-[var(--primary-foreground)] disabled:opacity-60">{state === 'busy' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />} Confirm</button>}
        <button type="button" disabled={state === 'busy'} onClick={() => act('decline')} className={notMe ? 'inline-flex min-h-11 items-center rounded-full bg-red-600 px-6 text-sm font-bold text-white' : 'text-xs text-[var(--muted-foreground)] underline'}>
          {notMe ? 'Remove the vouch' : 'This wasn’t me'}
        </button>
      </div>
    </div>
  )
}
