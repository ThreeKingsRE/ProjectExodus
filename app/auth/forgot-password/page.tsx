'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ArrowLeft } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [devUrl, setDevUrl] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/auth/password/forgot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      const data = await res.json().catch(() => ({}))
      if (res.status === 429) setError('Too many requests. Please wait a while and try again.')
      else if (!res.ok) setError(data.error || 'Something went wrong. Please try again.')
      else { setMessage(data.message); setDevUrl(data.devResetUrl ?? null) }
    } catch {
      setError('Could not reach the server. Check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--muted)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link href="/auth/signin">
            <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-2" />Back to Sign In</Button>
          </Link>
        </div>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-[var(--foreground)]">Forgot your password?</CardTitle>
            <CardDescription className="text-theme-muted">Enter your email and we&apos;ll send you a link to choose a new one.</CardDescription>
          </CardHeader>
          <CardContent>
            {message ? (
              <div className="space-y-4 text-center">
                <p className="text-[var(--foreground)]">{message}</p>
                <p className="text-sm text-theme-muted">The link works for 1 hour. Check your spam folder if it doesn&apos;t arrive.</p>
                {devUrl && <p className="text-xs break-all text-theme-muted">Dev only: <a className="text-theme-primary" href={devUrl}>{devUrl}</a></p>}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input label="Email" type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Sending...' : 'Send reset link'}</Button>
                {error && <p className="text-sm text-theme-secondary font-semibold">{error}</p>}
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
