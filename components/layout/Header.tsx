'use client'

import Link from 'next/link'
import { TradeIconStrip } from '@/components/career/TradeIcons'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, type ComponentType, type ReactNode } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Menu, X, Leaf, User, LogOut, Settings, Users, ChevronRight, MessageCircle, Bell, ChevronDown, Lock, Crown, GraduationCap, Fish, Search, Compass, Home, ShoppingBag, Newspaper, Sprout, Landmark, Ruler, CalendarDays, MessagesSquare, Rocket, Hammer } from 'lucide-react'
import NotificationBell from '@/components/notifications/NotificationBell'
import { useDigitalScrollContext } from '@/components/learning/DigitalScroll/DigitalScrollContext'
import { useSageContextSafe } from '@/components/ai/SageContext'

interface LeaderboardUser {
  userId: string
  name: string | null
  image: string | null
  points: number
  rank: number
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [communityMenuOpen, setCommunityMenuOpen] = useState(false)
  const [learnMenuOpen, setLearnMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [topUsers, setTopUsers] = useState<LeaderboardUser[]>([])
  const lastScrollY = useRef(0)
  const communityHoverTimeout = useRef<NodeJS.Timeout | null>(null)
  const learnHoverTimeout = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const { data: session } = useSession()
  const { isScrollOpen } = useDigitalScrollContext()
  const sageContext = useSageContextSafe()

  // Fetch top users for dropdown
  useEffect(() => {
    const controller = new AbortController()
    async function fetchTopUsers() {
      try {
        const res = await fetch('/api/gamification/leaderboard?type=all-time&limit=10', { signal: controller.signal })
        const data = await res.json()
        if (data.success && data.data?.leaderboard) {
          setTopUsers(data.data.leaderboard)
        }
      } catch {
        // Silently handle abort or network errors
      }
    }
    fetchTopUsers()
    return () => controller.abort()
  }, [])

  // Community dropdown hover handlers
  const handleCommunityMouseEnter = () => {
    if (communityHoverTimeout.current) {
      clearTimeout(communityHoverTimeout.current)
      communityHoverTimeout.current = null
    }
    setCommunityMenuOpen(true)
  }

  const handleCommunityMouseLeave = () => {
    communityHoverTimeout.current = setTimeout(() => {
      setCommunityMenuOpen(false)
    }, 150) // Small delay to prevent accidental closing
  }

  // Learn dropdown hover handlers
  const handleLearnMouseEnter = () => {
    if (learnHoverTimeout.current) {
      clearTimeout(learnHoverTimeout.current)
      learnHoverTimeout.current = null
    }
    setLearnMenuOpen(true)
  }

  const handleLearnMouseLeave = () => {
    learnHoverTimeout.current = setTimeout(() => {
      setLearnMenuOpen(false)
    }, 150)
  }

  // Cleanup hover timeout on unmount
  useEffect(() => {
    return () => {
      if (communityHoverTimeout.current) {
        clearTimeout(communityHoverTimeout.current)
      }
      if (learnHoverTimeout.current) {
        clearTimeout(learnHoverTimeout.current)
      }
    }
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setCommunityMenuOpen(false)
    setLearnMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.dataset.menuOpen = 'true'
    } else {
      document.body.style.overflow = ''
      delete document.body.dataset.menuOpen
    }
    return () => {
      document.body.style.overflow = ''
      delete document.body.dataset.menuOpen
    }
  }, [mobileMenuOpen])

  // Auto-hide header when Digital Scroll is open, show on scroll up
  useEffect(() => {
    if (!isScrollOpen) {
      // Scroll is closed - show header immediately
      setIsHeaderVisible(true)
      return
    }

    // Scroll is open - hide header immediately
    setIsHeaderVisible(false)

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show header when scrolling up
      if (currentScrollY < lastScrollY.current && currentScrollY > 50) {
        setIsHeaderVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        // Hide when scrolling down
        setIsHeaderVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrollOpen])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Learn', href: '/learn' },
    { name: 'Articles', href: '/articles' },
    { name: 'Community', href: '/community' },
    { name: 'Meetings', href: '/meetings' },
  ]

  const learnMenuItems = [
    { label: 'Sustainability', href: '/learn', requiresAuth: false },
    { label: 'Exodology', href: '/exodology', requiresAuth: true },
    { label: 'Architecture', href: '/architecture', requiresAuth: true },
    { label: 'Structural Engineering', href: '/architecture/structural', requiresAuth: true },
  ]

  const communityMenuItems = [
    { label: 'Current Events', href: '/community', myLabel: 'Current Events' },
    { label: 'Discussions', href: '/community/discussions', myLabel: 'Discussions' },
    { label: 'Initiatives', href: '/community/projects', myLabel: 'Initiatives' },
    { label: 'Fish Tank', href: '/fishbowl', myLabel: 'Fish Tank' },
  ]

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  return (
    <header
      className="sticky top-0 z-[100] bg-[var(--card)] border-b-4 border-theme-primary shadow-sm transition-all duration-300 safe-area-top"
      style={{
        // When mobile menu is open OR Sage is napping/animating, disable transform to prevent breaking positioning
        transform: (mobileMenuOpen || sageContext?.isNapping || sageContext?.isAnimating) ? 'none' : (isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)'),
        opacity: (mobileMenuOpen || sageContext?.isNapping || sageContext?.isAnimating) ? 1 : (isHeaderVisible ? 1 : 0),
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Icon separated from text for Sage nap integration */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Sage's home - the leaf icon */}
            <div
              ref={sageContext?.headerLogoRef}
              onClick={sageContext?.isNapping && !sageContext?.isAnimating ? sageContext.wakeUp : undefined}
              className={`group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-moss-600 to-ocean-600 flex items-center justify-center shadow-lg transition-all overflow-visible ${
                sageContext?.isNapping && !sageContext?.isAnimating
                  ? 'cursor-pointer sage-sleeping sage-wake-indicator hover:scale-110'
                  : 'pulse-alive'
              }`}
              style={{
                // Ensure stable positioning for animation target
                willChange: sageContext?.isAnimating ? 'transform' : 'auto',
                isolation: 'isolate',
              }}
            >
              <Leaf className="w-5 h-5 sm:w-7 sm:h-7 text-white" />

              {/* Zzz animation when Sage is napping (not during animation) */}
              {sageContext?.isNapping && !sageContext?.isAnimating && (
                <>
                  {/* Stable container for zzz elements to prevent jitter */}
                  <div className="absolute inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
                    <span className="sage-zzz sage-zzz-1">z</span>
                    <span className="sage-zzz sage-zzz-2">z</span>
                    <span className="sage-zzz sage-zzz-3">z</span>
                  </div>

                  {/* Hover tooltip - "Click to wake" - positioned below with arrow pointing up */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 pointer-events-none z-[200] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {/* Arrow pointing up */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[var(--card)] border-l border-t border-[var(--primary)]" />
                    {/* Tooltip body */}
                    <div className="relative px-3 py-1.5 bg-[var(--card)] border border-[var(--primary)] rounded-lg shadow-lg min-w-max">
                      <span className="text-xs font-medium text-[var(--foreground)] whitespace-nowrap">Click to wake</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* PROJECT EXODUS text - links to home */}
            <Link href="/" className="group">
              <span className="text-base sm:text-2xl font-black text-[var(--foreground)] group-hover:text-theme-primary transition-colors tracking-tight">
                PROJECT EXODUS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navigation.map((item) => {
              const isActive = pathname === item.href ||
                (item.name === 'Community' && (pathname.startsWith('/community') || pathname === '/fishbowl')) ||
                (item.name === 'Learn' && (pathname.startsWith('/learn') || pathname.startsWith('/exodology')))

              // Learn gets a hover dropdown with Exodology for logged-in users
              if (item.name === 'Learn') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleLearnMouseEnter}
                    onMouseLeave={handleLearnMouseLeave}
                  >
                    <span
                      className={`font-bold text-sm xl:text-base transition-all uppercase tracking-wide flex items-center gap-1 cursor-default select-none ${
                        isActive || learnMenuOpen
                          ? 'text-theme-primary'
                          : 'text-[var(--foreground)] hover:text-theme-primary'
                      }`}
                      style={{
                        borderBottom: isActive ? '3px solid currentColor' : 'none',
                        paddingBottom: '4px'
                      }}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${learnMenuOpen ? 'rotate-180' : ''}`} />
                    </span>

                    {/* Learn Dropdown menu - centered, matching Community dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px] rounded-xl overflow-hidden z-[201] transition-all duration-200 origin-top ${
                        learnMenuOpen
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-[var(--card)]/95 backdrop-blur-xl border-2 border-theme-primary shadow-2xl rounded-xl overflow-hidden">
                        {/* Decorative top gradient bar */}
                        <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

                        {/* Navigation links */}
                        <div className="p-2">
                          {learnMenuItems.map((menuItem) => {
                            const isLocked = menuItem.requiresAuth && !session

                            return isLocked ? (
                              <div
                                key={menuItem.label}
                                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[var(--muted-foreground)] opacity-60 cursor-not-allowed whitespace-nowrap"
                                title="Sign in to access"
                              >
                                <Lock className="w-3.5 h-3.5 flex-shrink-0" />
                                <span className="font-medium whitespace-nowrap text-sm">{menuItem.label}</span>
                              </div>
                            ) : (
                              <Link
                                key={menuItem.label}
                                href={menuItem.href}
                                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-medium text-[var(--foreground)] hover:bg-[var(--muted)]/50 hover:text-emerald-600 transition-colors whitespace-nowrap text-sm"
                                onClick={() => setLearnMenuOpen(false)}
                              >
                                <span>{menuItem.label}</span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              // Community gets a hover dropdown - click navigates to page
              if (item.name === 'Community') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleCommunityMouseEnter}
                    onMouseLeave={handleCommunityMouseLeave}
                  >
                    <button
                      className={`font-bold text-sm xl:text-base transition-all uppercase tracking-wide flex items-center gap-1 ${
                        isActive || communityMenuOpen
                          ? 'text-theme-primary'
                          : 'text-[var(--foreground)] hover:text-theme-primary'
                      }`}
                      style={{
                        borderBottom: isActive ? '3px solid currentColor' : 'none',
                        paddingBottom: '4px'
                      }}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${communityMenuOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown menu - centered */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px] w-auto rounded-xl overflow-hidden z-[201] transition-all duration-200 origin-top ${
                        communityMenuOpen
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-[var(--card)]/95 backdrop-blur-xl border-2 border-theme-primary shadow-2xl rounded-xl overflow-hidden">
                        {/* Decorative top gradient bar */}
                        <div className="h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)]" />

                        {/* Navigation links - centered */}
                        <div className="p-2">
                          {communityMenuItems.map((menuItem) => {
                            const isLocked = !session

                            return isLocked ? (
                              <Link
                                key={menuItem.label}
                                href={menuItem.href}
                                onClick={() => setCommunityMenuOpen(false)}
                                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[var(--muted-foreground)] hover:bg-[var(--muted)]/50 hover:text-[var(--primary)] transition-colors whitespace-nowrap"
                              >
                                <Lock className="w-3.5 h-3.5 flex-shrink-0" />
                                <span className="text-sm font-medium">{menuItem.label}</span>
                              </Link>
                            ) : (
                              <Link
                                key={menuItem.label}
                                href={menuItem.href}
                                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)]/50 hover:text-[var(--primary)] transition-colors whitespace-nowrap"
                                onClick={() => setCommunityMenuOpen(false)}
                              >
                                <span>{menuItem.myLabel}</span>
                              </Link>
                            )
                          })}
                        </div>

                        {/* Top 10 Users Section */}
                        {topUsers.length > 0 && (
                          <>
                            <div className="border-t border-[var(--border)]/50" />
                            <div className="p-2">
                              <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wide">
                                <Crown className="w-3 h-3 text-amber-500" />
                                Top Members
                              </div>
                              <div className="space-y-0.5">
                                {topUsers.slice(0, 10).map((user) => (
                                  <Link
                                    key={user.userId}
                                    href={`/profile/${user.userId}`}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[var(--muted)]/50 transition-colors group"
                                    onClick={() => setCommunityMenuOpen(false)}
                                  >
                                    <span className={`w-5 text-xs font-bold ${user.rank <= 3 ? 'text-amber-500' : 'text-[var(--muted-foreground)]'}`}>
                                      #{user.rank}
                                    </span>
                                    <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center flex-shrink-0">
                                      {user.image ? (
                                        <Image src={user.image} alt="" fill unoptimized sizes="100%" className="rounded-full object-cover" />
                                      ) : (
                                        <span className="text-[10px] font-bold text-white">
                                          {user.name?.[0]?.toUpperCase() || '?'}
                                        </span>
                                      )}
                                    </div>
                                    <span className="flex-1 text-xs font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] truncate">
                                      {user.name?.split(' ')[0] || 'Anon'}
                                    </span>
                                    <span className="text-[10px] text-[var(--muted-foreground)]">
                                      {user.points.toLocaleString()}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-bold text-sm xl:text-base transition-all uppercase tracking-wide relative ${
                    isActive
                      ? 'text-theme-primary'
                      : 'text-[var(--foreground)] hover:text-theme-primary'
                  }`}
                  style={{
                    borderBottom: isActive ? '3px solid currentColor' : 'none',
                    paddingBottom: '4px'
                  }}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <ThemeToggle />
            {session && (
              <Link
                href="/messages"
                className="relative p-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
                title="Messages"
              >
                <MessageCircle className="w-5 h-5 text-[var(--foreground)]" />
              </Link>
            )}
            {session && <NotificationBell />}
            {/* Render directly from `session` — branching on status==='loading'
                here causes a hydration mismatch (React #418): the server has the
                resolved session via SessionProvider's `session` prop and renders
                the user menu, but the client's useSession briefly returns
                'loading' during hydration and would render the skeleton.
                NextAuth keeps `data` populated across background revalidations,
                so the skeleton path was never actually needed. */}
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 xl:gap-3 px-3 xl:px-4 py-2 rounded-lg bg-[var(--muted)] hover:bg-theme-primary hover:text-[var(--primary-foreground)] transition-colors border-2 border-theme-primary"
                >
                  <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-theme-primary flex items-center justify-center">
                    <User className="w-4 h-4 xl:w-5 xl:h-5 text-[var(--primary-foreground)]" />
                  </div>
                  <span className="font-bold text-sm xl:text-base max-w-[120px] truncate">
                    {session.user?.name || session.user?.email}
                  </span>
                </button>

                {userMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-[200]"
                      onClick={() => setUserMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-64 bg-[var(--card)] rounded-xl shadow-theme-lg border-2 border-theme-primary overflow-hidden z-[201]">
                      <div className="p-4 border-b-2 border-[var(--border)]">
                        <p className="font-bold text-[var(--foreground)]">
                          {session.user?.name}
                        </p>
                        <p className="text-sm text-theme-muted truncate">
                          {session.user?.email}
                        </p>
                      </div>
                      <div className="p-2">
                        <Link
                          href="/explore"
                          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                          title="Search & Explore"
                        >
                          <Search className="w-4 h-4 text-theme-muted" />
                          <span className="font-medium text-[var(--foreground)]">Search</span>
                        </Link>
                        <Link
                          href="/my/volition"
                          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                          title="My Volition"
                        >
                          <Compass className="w-4 h-4 text-theme-muted shrink-0" />
                          <span className="font-medium text-[var(--foreground)] whitespace-nowrap">My Volition</span>
                        </Link>
                        <Link
                          href="/my/career"
                          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <Hammer className="w-4 h-4 text-theme-muted shrink-0" />
                          <span className="font-medium text-[var(--foreground)] whitespace-nowrap">My Career</span>
                          <TradeIconStrip size={14} gap={9} className="min-w-0 flex-1 text-[var(--primary)] opacity-60" />
                        </Link>
                        <Link
                          href="/settings"
                          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <Settings className="w-4 h-4 text-theme-muted" />
                          <span className="font-medium text-[var(--foreground)]">Settings</span>
                        </Link>
                        <div className="my-1 border-t border-[var(--border)]" />
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[var(--muted)] transition-colors text-left"
                        >
                          <LogOut className="w-4 h-4 text-theme-secondary" />
                          <span className="font-medium text-theme-secondary">Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/explore"
                  className="relative p-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
                  title="Search & Explore"
                >
                  <Search className="w-5 h-5 text-[var(--foreground)]" />
                </Link>
                <Link
                  href="/auth/signin"
                  className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 px-3 py-1.5 text-sm border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--muted)] bg-transparent"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 px-3 py-1.5 text-sm bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-sm hover:shadow-md"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] hover:bg-[var(--muted)] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[var(--foreground)]" />
              ) : (
                <Menu className="w-5 h-5 text-[var(--foreground)]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation: grouped lists, like a native app's menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[101]"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="lg:hidden fixed top-16 sm:top-20 inset-x-0 bottom-0 z-[102] overflow-y-auto overscroll-contain bg-[var(--background)] mobile-menu-in">
            <nav aria-label="Main menu" className="mx-auto max-w-lg px-4 pt-5 pb-[calc(env(safe-area-inset-bottom)+2rem)] space-y-6">
              {session ? (
                <Link
                  href={session.user?.id ? `/profile/${session.user.id}` : '/settings'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3"
                >
                  {session.user?.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={session.user.image} alt="" className="h-11 w-11 rounded-full object-cover" />
                  ) : (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--primary)_14%,transparent)] text-base font-semibold text-[var(--primary)]">
                      {(session.user?.name || session.user?.email || '?').trim().charAt(0).toUpperCase()}
                    </span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[15px] font-semibold text-[var(--foreground)]">{session.user?.name || 'Your account'}</span>
                    <span className="block truncate text-xs text-[var(--muted-foreground)]">View profile</span>
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-[var(--muted-foreground)]" />
                </Link>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/auth/signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-sm font-semibold text-[var(--foreground)]"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: 'var(--primary-foreground)' }}
                    className="flex h-11 items-center justify-center rounded-xl bg-[var(--primary)] text-sm font-semibold"
                  >
                    Get started
                  </Link>
                </div>
              )}

              <MenuGroup>
                {[
                  { label: 'Home', href: '/', icon: Home, active: pathname === '/' },
                  { label: 'Products', href: '/products', icon: ShoppingBag, active: pathname.startsWith('/products') },
                  { label: 'Articles', href: '/articles', icon: Newspaper, active: pathname.startsWith('/articles') },
                ].map(item => <MenuRow key={item.href} {...item} onNavigate={() => setMobileMenuOpen(false)} />)}
              </MenuGroup>

              <MenuGroup>
                <MenuRow
                  label="My Career"
                  href={session ? '/my/career' : `/auth/signin?callbackUrl=${encodeURIComponent('/my/career')}`}
                  icon={Hammer}
                  active={pathname.startsWith('/my/career') || pathname.startsWith('/career')}
                  locked={!session}
                  onNavigate={() => setMobileMenuOpen(false)}
                  extra={<TradeIconStrip size={16} gap={12} className="text-[var(--primary)] opacity-70" />}
                />
              </MenuGroup>

              <MenuGroup>
                <MenuRow label="Meetings" href="/meetings" icon={CalendarDays} active={pathname.startsWith('/meetings')} onNavigate={() => setMobileMenuOpen(false)} />
              </MenuGroup>

              <MenuGroup title="Community">
                {[
                  { label: 'Current Events', href: '/community', icon: CalendarDays, active: pathname === '/community' },
                  { label: 'Discussions', href: '/community/discussions', icon: MessagesSquare, active: pathname.startsWith('/community/discussions') },
                  { label: 'Initiatives', href: '/community/projects', icon: Rocket, active: pathname.startsWith('/community/projects') },
                  { label: 'Fish Tank', href: '/fishbowl', icon: Fish, active: pathname.startsWith('/fishbowl') },
                ].map(item => <MenuRow key={item.href} {...item} onNavigate={() => setMobileMenuOpen(false)} />)}
              </MenuGroup>

              <MenuGroup title="Learn">
                {[
                  { label: 'Sustainability', href: '/learn', icon: Sprout, active: pathname.startsWith('/learn'), requiresAuth: false },
                  { label: 'Exodology', href: '/exodology', icon: GraduationCap, active: pathname.startsWith('/exodology'), requiresAuth: true },
                  { label: 'Architecture', href: '/architecture', icon: Landmark, active: pathname.startsWith('/architecture') && !pathname.startsWith('/architecture/structural'), requiresAuth: true },
                  { label: 'Structural Engineering', href: '/architecture/structural', icon: Ruler, active: pathname.startsWith('/architecture/structural'), requiresAuth: true },
                ].map(({ requiresAuth, ...item }) => (
                  <MenuRow
                    key={item.href}
                    {...item}
                    href={requiresAuth && !session ? `/auth/signin?callbackUrl=${encodeURIComponent(item.href)}` : item.href}
                    locked={requiresAuth && !session}
                    onNavigate={() => setMobileMenuOpen(false)}
                  />
                ))}
              </MenuGroup>

              {/* Render from `session` directly to avoid the SSR/CSR mismatch caused by
                  useSession briefly returning status='loading' on hydration. */}
              {session && (
                <>
                  <MenuGroup title="Account">
                    {[
                      { label: 'Messages', href: '/messages', icon: MessageCircle, active: pathname.startsWith('/messages') },
                      { label: 'Notifications', href: '/notifications', icon: Bell, active: pathname.startsWith('/notifications') },
                      { label: 'My Volition', href: '/my/volition', icon: Compass, active: pathname.startsWith('/my/volition') },
                      { label: 'Search & Explore', href: '/explore', icon: Search, active: pathname.startsWith('/explore') },
                      { label: 'Settings', href: '/settings', icon: Settings, active: pathname.startsWith('/settings') },
                    ].map(item => <MenuRow key={item.href} {...item} onNavigate={() => setMobileMenuOpen(false)} />)}
                  </MenuGroup>

                  <MenuGroup>
                    <button
                      type="button"
                      onClick={() => { setMobileMenuOpen(false); handleSignOut() }}
                      className="flex min-h-[52px] w-full items-center gap-3 px-4 text-left text-[15px] font-medium text-red-600 dark:text-red-400 active:bg-[var(--muted)]"
                    >
                      <LogOut className="h-[18px] w-[18px]" />
                      Sign out
                    </button>
                  </MenuGroup>
                </>
              )}

              <p className="px-1 text-center text-xs text-[var(--muted-foreground)]">Project Exodus · Food, Water, Energy</p>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

function MenuGroup({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section>
      {title && <h2 style={{ fontSize: '0.6875rem', lineHeight: '1rem' }} className="mb-2 px-1 font-semibold uppercase tracking-[0.08em] text-[var(--muted-foreground)]">{title}</h2>}
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] divide-y divide-[var(--border)]">
        {children}
      </div>
    </section>
  )
}

function MenuRow({ label, href, icon: Icon, active, locked, onNavigate, extra }: {
  label: string; href: string; icon: ComponentType<{ className?: string }>; active?: boolean; locked?: boolean; onNavigate: () => void
  /** Decoration shown between the label and the arrow */
  extra?: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
      className={`flex min-h-[52px] items-center gap-3 px-4 transition-colors active:bg-[var(--muted)] ${active ? 'bg-[color-mix(in_srgb,var(--primary)_8%,transparent)]' : ''}`}
    >
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${active ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] text-[var(--primary)]'}`}>
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className={`min-w-0 truncate text-[15px] ${extra ? 'shrink-0' : 'flex-1'} ${active ? 'font-semibold text-[var(--primary)]' : 'font-medium text-[var(--foreground)]'}`}>{label}</span>
      {extra && <span className="min-w-0 flex-1">{extra}</span>}
      {locked
        ? <span className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]"><Lock className="h-3.5 w-3.5" />Sign in</span>
        : <ChevronRight className="h-4 w-4 shrink-0 text-[var(--muted-foreground)] opacity-70" />}
    </Link>
  )
}
