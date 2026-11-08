import http from 'http'
import { NextRequest } from 'next/server'
import { rateLimit } from './lib/rate-limit'
const db = new Map<string, { n: number; exp: number }>()
const srv = http.createServer((req, res) => {
  let b = ''; req.on('data', (c) => (b += c)); req.on('end', () => {
    if (req.headers.authorization !== 'Bearer t') { res.statusCode = 401; return res.end() }
    const out = (JSON.parse(b) as string[][]).map(([cmd, k, v, nx]) => {
      const e = db.get(k)
      if (cmd === 'INCR') { const n = (e?.n ?? 0) + 1; db.set(k, { n, exp: e?.exp ?? 0 }); return { result: n } }
      if (cmd === 'PEXPIRE') { const x = db.get(k)!; if (!(nx && x.exp)) x.exp = Date.now() + Number(v); return { result: 1 } }
      return { result: db.get(k)!.exp - Date.now() }
    })
    res.end(JSON.stringify(out))
  })
}).listen(8799, async () => {
  process.env.UPSTASH_REDIS_REST_URL = 'http://127.0.0.1:8799'; process.env.UPSTASH_REDIS_REST_TOKEN = 't'
  const req = new NextRequest('http://x/api', { headers: { 'x-forwarded-for': '1.2.3.4, 9.9.9.9' } })
  const r = [] as boolean[]
  for (let i = 0; i < 4; i++) r.push((await rateLimit(req, { id: 't', limit: 3, windowSeconds: 60 })).success)
  console.log('redis path:', r.join(','), 'keys:', [...db.keys()])
  process.env.UPSTASH_REDIS_REST_TOKEN = 'wrong'
  const f = await rateLimit(req, { id: 'u', limit: 1, windowSeconds: 60 })
  console.log('fallback on auth error ->', f.success, '(memory store)')
  srv.close()
})
