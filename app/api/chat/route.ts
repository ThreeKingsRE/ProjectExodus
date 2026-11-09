import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { z } from 'zod'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { SAGE_SYSTEM_PROMPT } from '@/lib/sage/prompt'
import { SAGE_TOOLS, runSageTool } from '@/lib/sage/tools'
import { generateFallbackResponse } from '@/lib/sage/fallback'
import { callGroqChat, isGroqConfigured } from '@/lib/projects/ai/groqStructured'

/**
 * POST /api/chat — Sage, the site assistant.
 *
 * Streams newline-delimited JSON events to the browser:
 *   {"type":"text","text":"..."}     text delta
 *   {"type":"tool","name":"..."}     Sage is searching (for a status hint)
 *   {"type":"done"}                  turn finished
 *   {"type":"error","message":"..."} failed; any text so far is partial
 *
 * Without ANTHROPIC_API_KEY it falls back to keyword replies (same stream
 * format) so the widget works in every environment.
 */

export const runtime = 'nodejs'
export const maxDuration = 60

const MODEL = process.env.SAGE_MODEL || 'claude-opus-5-5'
// Chat in a small widget: short replies. A cap keeps a runaway turn cheap.
const MAX_TOKENS = 4096
// Tool round-trips per user message before we stop and answer with what we have
const MAX_TOOL_ROUNDS = 4
// Only the most recent turns are sent; older context adds cost, not much value
const MAX_HISTORY = 20

const ChatRequest = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string().trim().min(1).max(4000),
      })
    )
    .min(1)
    .max(100),
})

let client: Anthropic | null = null
function getClient() {
  client ??= new Anthropic()
  return client
}

type SageEvent =
  | { type: 'text'; text: string }
  | { type: 'tool'; name: string }
  | { type: 'done' }
  | { type: 'error'; message: string }

function ndjson(events: AsyncIterable<SageEvent>): Response {
  const encoder = new TextEncoder()
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of events) {
          controller.enqueue(encoder.encode(JSON.stringify(event) + '\n'))
        }
      } catch (error) {
        console.error('[Sage] stream failed:', error)
        controller.enqueue(
          encoder.encode(JSON.stringify({ type: 'error', message: 'Sage hit a snag. Please try again.' }) + '\n')
        )
      } finally {
        controller.close()
      }
    },
  })
  return new Response(body, {
    headers: {
      'Content-Type': 'application/x-ndjson; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}

/**
 * Without Claude: Groq if configured (free tier, no site-search tools), and
 * the keyword replies as the last resort.
 */
async function* fallbackEvents(lastUserMessage: string, conversation?: Anthropic.Beta.BetaMessageParam[]): AsyncGenerator<SageEvent> {
  if (conversation && isGroqConfigured()) {
    try {
      const text = await callGroqChat({
        systemPrompt: SAGE_SYSTEM_PROMPT,
        messages: conversation.map((m) => ({ role: m.role === 'assistant' ? ('assistant' as const) : ('user' as const), content: typeof m.content === 'string' ? m.content : '' })),
        temperature: 0.6,
        maxOutputTokens: 700,
      })
      if (text.trim()) {
        yield { type: 'text', text }
        yield { type: 'done' }
        return
      }
    } catch (err) {
      console.warn('[Sage] Groq fallback failed:', err)
    }
  }
  yield { type: 'text', text: generateFallbackResponse(lastUserMessage) }
  yield { type: 'done' }
}

/**
 * Normalise client-supplied history into a valid conversation: start at the
 * first user message (the widget's greeting is an assistant message), merge
 * consecutive same-role turns, keep the most recent turns, end on a user turn.
 */
function toConversation(
  raw: z.infer<typeof ChatRequest>['messages']
): Anthropic.Beta.BetaMessageParam[] | null {
  const firstUser = raw.findIndex((m) => m.role === 'user')
  if (firstUser === -1) return null

  const merged: { role: 'user' | 'assistant'; content: string }[] = []
  for (const m of raw.slice(firstUser)) {
    const prev = merged[merged.length - 1]
    if (prev && prev.role === m.role) prev.content += `\n\n${m.content}`
    else merged.push({ ...m })
  }

  let recent = merged.slice(-MAX_HISTORY)
  while (recent.length && recent[0].role !== 'user') recent = recent.slice(1)
  if (!recent.length || recent[recent.length - 1].role !== 'user') return null
  return recent
}

async function* sageEvents(
  messages: Anthropic.Beta.BetaMessageParam[],
  signal: AbortSignal
): AsyncGenerator<SageEvent> {
  const anthropic = getClient()
  let jsonRetries = 0

  for (let round = 0; round <= MAX_TOOL_ROUNDS; round++) {
    // Last round: answer from what we have rather than searching again
    const allowTools = round < MAX_TOOL_ROUNDS

    const stream = anthropic.beta.messages.stream(
      {
        model: MODEL,
        max_tokens: MAX_TOKENS,
        betas: ['server-side-fallback-2026-07-01'],
        // On a safety-classifier decline, re-run on Anthropic's recommended
        // fallback model inside the same call instead of returning a refusal.
        fallbacks: 'default',
        // Chat replies don't need deep reasoning; low effort keeps latency
        // and cost down. Thinking stays adaptive (it can't be disabled here).
        output_config: { effort: 'low' },
        system: [{ type: 'text', text: SAGE_SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
        tools: SAGE_TOOLS,
        tool_choice: allowTools ? { type: 'auto' } : { type: 'none' },
        messages,
      },
      { signal }
    )

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        yield { type: 'text', text: event.delta.text }
      } else if (event.type === 'content_block_start' && event.content_block.type === 'tool_use') {
        yield { type: 'tool', name: event.content_block.name }
      }
    }

    let message: Anthropic.Beta.BetaMessage
    try {
      message = await stream.finalMessage()
      jsonRetries = 0
    } catch (error) {
      // With eager input streaming, finalMessage() rejects if a tool input
      // could not be parsed at all. Retry that turn; rethrow API errors.
      if (error instanceof Anthropic.APIError || jsonRetries++ >= 2) throw error
      round--
      continue
    }

    if (message.stop_reason === 'refusal') {
      yield { type: 'text', text: "\n\nI can't help with that one, but I'm happy to help with anything sustainability-related." }
      break
    }

    // Only run tools on a clean tool_use stop. In particular a tool input cut
    // off at max_tokens can still parse as a valid partial object.
    const toolUses = message.content.filter((b): b is Anthropic.Beta.BetaToolUseBlock => b.type === 'tool_use')
    if (message.stop_reason !== 'tool_use' || toolUses.length === 0) break

    messages.push({ role: 'assistant', content: message.content })

    // Run tool calls in parallel and return every result in one user message
    const results = await Promise.all(
      toolUses.map(async (t): Promise<Anthropic.Beta.BetaToolResultBlockParam> => {
        const { content, isError } = await runSageTool(t.name, t.input)
        return { type: 'tool_result', tool_use_id: t.id, content, is_error: isError }
      })
    )
    messages.push({ role: 'user', content: results })
  }

  yield { type: 'done' }
}

export async function POST(request: NextRequest) {
  const rateLimitResult = await rateLimit(request, {
    id: 'chat-messages',
    limit: 30,
    windowSeconds: 60,
  })
  if (!rateLimitResult.success) {
    return rateLimitResponse(rateLimitResult.reset)
  }

  let parsed: z.infer<typeof ChatRequest>
  try {
    parsed = ChatRequest.parse(await request.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request format' }, { status: 400 })
  }

  const conversation = toConversation(parsed.messages)
  if (!conversation) {
    return NextResponse.json({ error: 'Conversation must end with a user message' }, { status: 400 })
  }
  const lastUser = parsed.messages.filter((m) => m.role === 'user').at(-1)!.content

  if (!process.env.ANTHROPIC_API_KEY) {
    return ndjson(fallbackEvents(lastUser, conversation))
  }

  return ndjson(
    (async function* () {
      let sentText = false
      try {
        for await (const event of sageEvents(conversation, request.signal)) {
          if (event.type === 'text') sentText = true
          yield event
        }
      } catch (error) {
        if (request.signal.aborted) return
        if (error instanceof Anthropic.RateLimitError) {
          console.warn('[Sage] rate limited by Anthropic API')
        } else if (error instanceof Anthropic.AuthenticationError) {
          console.error('[Sage] invalid ANTHROPIC_API_KEY')
        } else if (error instanceof Anthropic.APIError) {
          console.error(`[Sage] API error ${error.status}:`, error.message)
        } else {
          console.error('[Sage] error:', error)
        }
        // Nothing shown yet: degrade gracefully to the keyword reply
        if (!sentText) {
          yield* fallbackEvents(lastUser, conversation)
        } else {
          yield { type: 'error', message: 'Sage lost the connection mid-reply. Please try again.' }
        }
      }
    })()
  )
}
