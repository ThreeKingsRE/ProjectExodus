// Shown the instant a link is tapped, while the next page loads: a solid theme-colored
// screen (so the animated sky never flashes through) with a slim progress bar.

export function PageLoading() {
  return (
    <div className="relative min-h-[100dvh] bg-[var(--background)]" role="status" aria-label="Loading">
      <div className="absolute inset-x-0 top-0 h-0.5 overflow-hidden bg-[var(--primary)]/15">
        <div className="page-loading-bar h-full w-1/3 bg-[var(--primary)]" />
      </div>
      <style>{`
        .page-loading-bar { animation: page-loading 1.1s ease-in-out infinite }
        @keyframes page-loading { from { transform: translateX(-100%) } to { transform: translateX(300%) } }
        @media (prefers-reduced-motion: reduce) { .page-loading-bar { animation: none; width: 100% } }
      `}</style>
    </div>
  )
}
