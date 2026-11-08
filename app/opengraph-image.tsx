import { ImageResponse } from 'next/og'

// Default share image for every page that doesn't set its own
export const alt = 'Project Exodus: sustainability hub'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #1f2a24 0%, #2f4a3a 55%, #c8743f 140%)',
          color: '#f4efe4',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 8, opacity: 0.8 }}>PROJECT EXODUS</div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, marginTop: 24, maxWidth: 900 }}>
          Sustainable living, made practical.
        </div>
        <div style={{ fontSize: 30, marginTop: 32, opacity: 0.85 }}>
          Products · Learning · Architecture · Community
        </div>
      </div>
    ),
    size
  )
}
