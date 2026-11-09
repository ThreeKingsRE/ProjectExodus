/**
 * Render the home-page skyline to static SVG files.
 *
 *   npm run skyline            # write public/decorative/skyline-{day,dusk,night}.svg
 *   npm run skyline -- --check # CI: fail if the files are stale
 *
 * The artwork has ~15,000 shapes. As a React component it was sent to every
 * visitor twice over (as HTML and as JavaScript, ~3 MB). As a static file it
 * is downloaded once, compressed, cached, and reused for both copies of the loop.
 */
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { gzipSync } from 'zlib'
import { SkylineArt, SKYLINE_CSS } from '../../components/decorative/skyline/SkylineArt'

const VARIANTS = {
  day: { isNightTime: false, foreground: '#473d35' },
  dusk: { isNightTime: true, foreground: '#473d35' },
  night: { isNightTime: true, foreground: '#f0f0ff' },
} as const

const css = SKYLINE_CSS.replace(/\s+/g, ' ').replace(/\s*([{}:;,])\s*/g, '$1').trim()
const stale: string[] = []
for (const [name, props] of Object.entries(VARIANTS)) {
  let svg = renderToStaticMarkup(<SkylineArt {...props} />)
  // compact numbers and inject the animation CSS (it runs inside the image too)
  svg = svg.replace(/(\d+\.\d{2})\d+/g, '$1').replace(/^<svg([^>]*)>/, `<svg$1><style>${css}</style>`)
  const out = `public/decorative/skyline-${name}.svg`
  if (process.argv.includes('--check')) {
    if (!existsSync(out) || readFileSync(out, 'utf8') !== svg) stale.push(out)
  } else {
    writeFileSync(out, svg)
    console.log(`${out}: ${Math.round(svg.length / 1024)} KB raw, ${Math.round(gzipSync(svg).length / 1024)} KB gzipped`)
  }
}
if (stale.length) {
  console.error(`Skyline files are out of date (run npm run skyline):\n  ${stale.join('\n  ')}`)
  process.exit(1)
}
