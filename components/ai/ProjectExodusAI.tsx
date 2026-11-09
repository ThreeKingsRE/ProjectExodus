'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { MessageCircle, X, Send, Leaf, Sparkles, Moon } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useSageContextSafe } from './SageContext'
import { SageNapAnimation } from './SageNapAnimation'

/** Trigger haptic feedback on supported devices (iPad, iPhone, Android) */
function triggerHaptic(duration: number = 10) {
  try {
    if (navigator.vibrate) {
      navigator.vibrate(duration)
    }
  } catch {
    // Vibration API not available — silently ignore
  }
}

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const TOOL_STATUS: Record<string, string> = {
  search_products: 'Searching products…',
  search_articles: 'Searching articles…',
  search_learning: 'Searching learning modules…',
}

/**
 * Render Sage's reply with minimal, safe markdown: **bold** and [text](url)
 * links. Builds React elements (never HTML strings). On-site links use Next
 * <Link>; external links must be http(s) and open in a new tab.
 */
function SageText({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g
  let last = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    if (match[3] !== undefined) {
      parts.push(<strong key={key++}>{match[3]}</strong>)
    } else {
      const [, label, href] = match
      if (href.startsWith('/') && !href.startsWith('//')) {
        parts.push(
          <Link key={key++} href={href} className="underline font-semibold">
            {label}
          </Link>
        )
      } else if (/^https?:\/\//i.test(href)) {
        parts.push(
          <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            {label}
          </a>
        )
      } else {
        parts.push(label) // drop unsafe schemes (javascript:, data:, ...)
      }
    }
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}

export function ProjectExodusAI() {
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [hasGreeted, setHasGreeted] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const sageContext = useSageContextSafe()

  // Register the button ref with context
  useEffect(() => {
    if (sageContext && buttonRef.current) {
      sageContext.sageButtonRef.current = buttonRef.current
    }
  }, [sageContext])

  // Handle nap - close chat first if open
  const handleStartNap = () => {
    if (!sageContext) return
    if (isOpen) {
      setIsOpen(false)
    }
    sageContext.startNap()
  }

  // Prepare greeting on homepage load (but don't auto-open)
  useEffect(() => {
    if (isHomepage && !hasGreeted) {
      // Delay greeting by 2 seconds for better UX
      const timer = setTimeout(() => {
        const greeting: Message = {
          role: 'assistant',
          content: "🌍 Welcome to Project Exodus! I'm Sage, your sustainability guide. I can help you discover eco-friendly products, calculate your carbon footprint, explore breakthrough innovations like carbon capture and green hydrogen, and learn about renewable energy, regenerative agriculture, zero waste living, green building, and more. What would you like to explore today?",
          timestamp: new Date()
        }
        setMessages([greeting])
        // Note: Removed setIsOpen(true) - user must click to open
        setHasGreeted(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isHomepage, hasGreeted])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async () => {
    const text = inputValue.trim()
    if (!text || isStreaming) return

    const userMessage: Message = { role: 'user', content: text, timestamp: new Date() }
    const history = [...messages, userMessage]
    setMessages([...history, { role: 'assistant', content: '', timestamp: new Date() }])
    setInputValue('')
    setIsStreaming(true)
    setStatus(null)

    // Append streamed text to the placeholder assistant message
    const appendToReply = (delta: string) =>
      setMessages(prev => {
        const next = [...prev]
        const last = next[next.length - 1]
        next[next.length - 1] = { ...last, content: last.content + delta }
        return next
      })

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history
            .filter(m => m.content.trim())
            .map(m => ({ role: m.role, content: m.content })),
        }),
      })

      if (response.status === 429) {
        appendToReply("I'm getting a lot of questions right now. Give me a moment and try again.")
        return
      }
      if (!response.ok || !response.body) throw new Error(`Chat request failed (${response.status})`)

      // Newline-delimited JSON events
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''
        for (const line of lines) {
          if (!line.trim()) continue
          const event = JSON.parse(line) as
            | { type: 'text'; text: string }
            | { type: 'tool'; name: string }
            | { type: 'done' }
            | { type: 'error'; message: string }
          if (event.type === 'text') {
            setStatus(null)
            appendToReply(event.text)
          } else if (event.type === 'tool') {
            setStatus(TOOL_STATUS[event.name] ?? 'Looking that up…')
          } else if (event.type === 'error') {
            appendToReply(`\n\n${event.message}`)
          }
        }
      }
    } catch (error) {
      console.error('Sage error:', error)
      appendToReply("Sorry, I couldn't reach my knowledge base just now. Please try again, or browse the [Learn hub](/learn) and [product directory](/products).")
    } finally {
      setIsStreaming(false)
      setStatus(null)
    }
  }

  // Don't render anything if Sage is napping or animating to nap
  const isNapping = sageContext?.isNapping ?? false
  const isAnimating = sageContext?.isAnimating ?? false
  const animationPhase = sageContext?.animationPhase ?? 'idle'

  // Hide button when napping or during going-to-nap animation
  // Show button during waking-up animation (so it appears to return to position)
  const shouldShowButton = !isNapping && animationPhase !== 'going-to-nap'

  return (
    <>
      {/* Sleep button visibility: hover on desktop, always visible on touch/coarse pointer */}
      <style jsx global>{`
        .sage-sleep-btn {
          opacity: 0;
          transition: opacity 0.2s;
        }
        .group:hover .sage-sleep-btn {
          opacity: 1;
        }
        @media (pointer: coarse) {
          .sage-sleep-btn {
            opacity: 0.85;
          }
        }
      `}</style>

      {/* Nap Animation Overlay */}
      <SageNapAnimation />

      {/* Chat Widget Button - Hidden when napping or animating to nap */}
      {!isOpen && shouldShowButton && (
        <button
          ref={buttonRef}
          onClick={() => !isAnimating && setIsOpen(true)}
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 group ${animationPhase === 'waking-up' ? 'opacity-0' : ''}`}
          aria-label="Open Sage"
        >
          {/* Pulsing ring animation - pointer-events-none so it doesn't expand hover area */}
          <div className="absolute -inset-2 bg-gradient-to-r from-moss-500 to-ocean-500 rounded-full opacity-50 blur group-hover:opacity-75 transition animate-pulse pointer-events-none" />

          {/* Main button */}
          <div className="relative w-full h-full bg-gradient-to-br from-moss-600 to-ocean-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
            <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-white" />

            {/* Notification badge if greeting is ready */}
            {messages.length > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-xs font-bold">1</span>
              </div>
            )}

            {/* Sleep button - visible on hover (desktop) or always visible (touch devices via @media) */}
            {sageContext && (
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  triggerHaptic()
                  handleStartNap()
                }}
                className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg sage-sleep-btn transition-opacity cursor-pointer hover:scale-110"
                title="Let Sage nap"
              >
                <Moon className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          {/* Tooltip - only show on actual hover, not close proximity */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-[var(--card)] border-2 border-theme-primary rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            <p className="text-sm font-bold text-[var(--foreground)]">Sage</p>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-[var(--card)] border-r-2 border-b-2 border-theme-primary" />
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-md h-[calc(100vh-2rem)] sm:h-[600px] max-h-[90vh] bg-[var(--card)] rounded-2xl shadow-2xl border-4 border-theme-primary flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-moss-600 to-ocean-600 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-black text-base sm:text-lg truncate">Sage</h3>
                <p className="text-white/80 text-xs font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                  <span className="truncate">Online</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
              {/* Sleep button inside chat header */}
              {sageContext && (
                <button
                  onClick={() => {
                    triggerHaptic()
                    handleStartNap()
                  }}
                  className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-indigo-500/50 flex items-center justify-center transition-colors"
                  aria-label="Put Sage to sleep"
                  title="Nap mode"
                >
                  <Moon className="w-5 h-5 sm:w-4 sm:h-4 text-white" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 bg-[var(--muted)]">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-moss-600 to-ocean-600 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <p className="text-theme-muted font-semibold">
                  Ask me anything about sustainability!
                </p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-moss-600 to-ocean-600 text-white'
                      : 'bg-[var(--card)] border-2 border-theme-primary text-[var(--foreground)]'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-4 h-4 text-theme-primary" />
                      <span className="text-xs font-bold text-theme-primary">SAGE</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.content ? (
                      <SageText text={message.content} />
                    ) : (
                      <span className="inline-flex items-center gap-2 text-theme-muted">
                        <span className="inline-flex gap-1" aria-hidden>
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:150ms]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:300ms]" />
                        </span>
                        {status ?? 'Thinking…'}
                      </span>
                    )}
                  </p>
                  <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-white/60' : 'text-theme-muted'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 bg-[var(--card)] border-t-2 border-[var(--border)] flex-shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.nativeEvent.isComposing && handleSendMessage()}
                placeholder="Ask about sustainability..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl bg-[var(--muted)] border-2 border-[var(--border)] focus:border-theme-primary focus:outline-none text-[var(--foreground)] placeholder:text-theme-muted font-medium"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isStreaming}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-moss-600 to-ocean-600 flex items-center justify-center hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity shadow-lg flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
