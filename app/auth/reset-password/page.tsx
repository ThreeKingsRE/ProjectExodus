'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

function ResetForm() {
  const token = useSearchParams().get('token') ?? ''
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (password !== confirm) return setError('The two passwords don’t match.')
    setLoading(true)
    try {
      const res = await fetch('/api/auth/password/reset', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, password }) })
      const data = await res.json().catch(() => ({}))
      if (res.ok) setDone(true)
      else setError(res.status === 429 ? 'Too many attempts. Please wait a while.' : data.error || 'Something went wrong.')
    } catch {
      setError('Could not reach the server. Check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!token) {
    return <p className="text-center text-[var(--foreground)]">This link is missing its token. <Link className="text-theme-primary" href="/auth/forgot-password">Request a new one</Link>.</p>
  }
  if (done) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-[var(--foreground)]">Your password has been updated.</p>
        <Link href="/auth/signin"><Button className="w-full">Sign in</Button></Link>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="New password" type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
      <Input label="Confirm new password" type="password" name="confirm" required value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" />
      <p className="text-xs text-theme-muted">At least 12 characters, with upper- and lowercase letters, a number and a symbol.</p>
      <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Saving...' : 'Set new password'}</Button>
      {error && <p className="text-sm text-theme-secondary font-semibold">{error}{error.includes('expired') && <> <Link className="text-theme-primary" href="/auth/forgot-password">Get a new link</Link>.</>}</p>}
    </form>
  )
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-[var(--muted)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-[var(--foreground)]">Choose a new password</CardTitle>
            <CardDescription className="text-theme-muted">Pick something you don&apos;t use anywhere else.</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={null}><ResetForm /></Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
