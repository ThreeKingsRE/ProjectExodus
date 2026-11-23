'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent } from '@/components/ui/Card'
import { BookCover } from '@/components/learning/ScrollHardcover'
import { FloatingBook } from '@/components/learning/FloatingBook'
import { useReadingRibbon } from '@/components/learning/ribbon/useReadingRibbon'
import { Button } from '@/components/ui/Button'
import dynamic from 'next/dynamic'

// Lazy-load heavy decorative components
const CompactLiveImpactStats = dynamic(() => import('@/components/learn/CompactLiveImpactStats').then(mod => ({ default: mod.CompactLiveImpactStats })))
const TreeBranches = dynamic(() => import('@/components/decorative/TreeBranches').then(mod => ({ default: mod.TreeBranches })), { ssr: false })
const FlyingBirds = dynamic(() => import('@/components/decorative/FlyingBirds').then(mod => ({ default: mod.FlyingBirds })), { ssr: false })
import { LearningLevel, LEARNING_LEVELS, LEARNING_LEVEL_ORDER } from '@/types/learning'
import {
  BookOpen, Calculator, Download, Zap, Leaf,
  GraduationCap, Clock, ChevronRight,
  Lightbulb, Play, FileText, Droplet,
  Recycle, Home, Sprout, Globe, Lock, Compass, ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import type { TopicProgress } from '@/app/api/learn/topic-progress/route'
import type { CoreTopic } from '@/types/modules'

export default function LearnPage() {
  const { data: session, status } = useSession()
  const isAuthenticated = status === 'authenticated' && !!session?.user
  const [selectedLevel, setSelectedLevel] = useState<LearningLevel>('HIGH_SCHOOL')
  const [topicProgress, setTopicProgress] = useState<Map<CoreTopic, TopicProgress>>(new Map())
  // The reader's ribbon hangs out of every book on the shelf (classic red for guests)
  const { style: ribbonStyle } = useReadingRibbon()
  // Shelf columns (2 on phones and tablets, 3 on desktop), so each book can turn toward the middle
  const [shelfColumns, setShelfColumns] = useState(2)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const sync = () => setShelfColumns(mq.matches ? 3 : 2)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  const inwardTurn = (i: number) => (shelfColumns === 3 ? [18, 0, -18][i % 3] : i % 2 === 0 ? 18 : -18)

  // Fetch topic progress on mount
  useEffect(() => {
    async function fetchProgress() {
      try {
        const response = await fetch('/api/learn/topic-progress')
        const data = await response.json()
        if (data.success && Array.isArray(data.data)) {
          const progressMap = new Map<CoreTopic, TopicProgress>()
          data.data.forEach((p: TopicProgress) => {
            progressMap.set(p.topicId, p)
          })
          setTopicProgress(progressMap)
        }
      } catch (error) {
        console.error('Failed to fetch topic progress:', error)
      }
    }
    fetchProgress()
  }, [])
  // Auto-scroll handlers
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const learningPaths = [
    {
      id: 'beginner',
      title: 'SUSTAINABILITY 101',
      subtitle: 'Start Your Journey',
      description: 'Perfect for newcomers. Learn the fundamentals of sustainable living, understand key concepts, and take your first steps toward a greener lifestyle.',
      level: 'Beginner',
      duration: '4 weeks',
      modules: 8,
      color: 'moss',
      icon: Sprout,
      topics: ['Basic Concepts', 'Carbon Footprint', 'Daily Habits', 'Waste Reduction']
    },
    {
      id: 'intermediate',
      title: 'HOME & LIFESTYLE',
      subtitle: 'Transform Your Space',
      description: 'Ready to level up? Dive into sustainable home practices, energy efficiency, water conservation, and creating an eco-friendly living environment.',
      level: 'Intermediate',
      duration: '6 weeks',
      modules: 12,
      color: 'ocean',
      icon: Home,
      topics: ['Energy Efficiency', 'Water Systems', 'Green Cleaning', 'Sustainable Design']
    },
    {
      id: 'advanced',
      title: 'SYSTEMS THINKING',
      subtitle: 'Lead The Change',
      description: 'For committed changemakers. Explore regenerative systems, community organizing, policy advocacy, and building sustainable infrastructure.',
      level: 'Advanced',
      duration: '8 weeks',
      modules: 16,
      color: 'terra',
      icon: Globe,
      topics: ['Regenerative Design', 'Community Building', 'Policy & Advocacy', 'Systems Change']
    }
  ]

  const quickFacts = [
    { fact: 'The average person generates 4.4 lbs of trash per day', source: 'EPA' },
    { fact: 'Solar energy costs have dropped 89% since 2010', source: 'IRENA' },
    { fact: 'Composting can divert 30% of household waste from landfills', source: 'USDA' },
    { fact: 'A single tree absorbs 48 lbs of CO2 per year', source: 'Arbor Day Foundation' },
    { fact: 'Regenerative agriculture can sequester 3-6 tons of carbon per acre annually', source: 'Rodale Institute' },
    { fact: 'LED bulbs use 75% less energy than incandescent lighting', source: 'DOE' }
  ]

  const topics = [
    { title: 'RENEWABLE ENERGY', desc: 'Solar, wind, and clean energy systems for homes and communities', icon: Zap, slug: 'renewable-energy', color: 'moss', modules: 33 },
    { title: 'WATER SYSTEMS', desc: 'Conservation, harvesting, and sustainable water management', icon: Droplet, slug: 'water-systems', color: 'ocean', modules: 33 },
    { title: 'REGENERATIVE AGRICULTURE', desc: 'Farming practices that restore ecosystems and sequester carbon', icon: Sprout, slug: 'regenerative-agriculture', color: 'terra', modules: 33 },
    { title: 'ZERO WASTE LIVING', desc: 'Practical strategies to minimize waste and live lighter', icon: Recycle, slug: 'zero-waste', color: 'moss', modules: 33 },
    { title: 'GREEN BUILDING', desc: 'Sustainable architecture, materials, and energy-efficient design', icon: Home, slug: 'green-building', color: 'ocean', modules: 33 },
    { title: 'FOOD SOVEREIGNTY', desc: 'Local food systems, gardening, and community nutrition', icon: Leaf, slug: 'food-sovereignty', color: 'terra', modules: 33 },
  ]

  const resourceTypes = [
    { type: 'Video Tutorials', count: 150, icon: Play, color: 'moss' },
    { type: 'Written Guides', count: 200, icon: FileText, color: 'ocean' },
    { type: 'Worksheets & Templates', count: 75, icon: Download, color: 'terra' },
    { type: 'Interactive Calculators', count: 12, icon: Calculator, color: 'moss' }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Decorative Elements - lazy loaded */}
      <Suspense fallback={null}>
        <TreeBranches />
      </Suspense>
      <Suspense fallback={null}>
        <FlyingBirds />
      </Suspense>

      {/* Hero Section - Full Viewport, buttons below fold */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[color-mix(in_srgb,var(--accent)_15%,var(--background))] via-[color-mix(in_srgb,var(--primary)_15%,var(--background))] to-[var(--muted)] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-[var(--foreground)]" style={{
              fontSize: 'clamp(2rem, 9vw, 7rem)',
              fontWeight: 900,
              lineHeight: 1
            }}>
              LEARN SUSTAINABILITY
            </h1>
            <p className="text-2xl font-bold text-theme-muted">
              Knowledge that <span style={{
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900
              }}>empowers</span> real change
            </p>

            {/* Welcome Statement */}
            <div className="max-w-3xl mx-auto">
              <p className="text-xl font-semibold text-theme-muted">
                Welcome to the most comprehensive sustainability education platform.
                Interactive lessons, hands-on activities, and expert knowledge—your journey to
                becoming an environmental changemaker starts here.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm font-bold text-theme-muted">Scroll to explore</span>
          <ChevronRight className="w-6 h-6 text-theme-primary rotate-90" />
        </div>
      </section>

      {/* Action Buttons Section - First thing below the fold */}
      <section className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-xl font-black shadow-xl"
              onClick={() => scrollToSection('core-topics')}
            >
              <Play className="w-5 h-5 mr-2" />
              START LEARNING
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-xl font-bold border-2"
              onClick={() => scrollToSection('learning-paths')}
            >
              VIEW LEARNING PATHS
            </Button>
          </div>
        </div>
      </section>

      {/* Our Philosophy - Learning is a Relationship */}
      <section className="py-20 bg-gradient-to-b from-[var(--background)] to-[var(--muted)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Sacred divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
              <span className="text-2xl text-[var(--primary)]">☥</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[var(--primary)] to-transparent" />
            </div>

            {/* Mission Title */}
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-8 text-[var(--foreground)]">
              OUR PHILOSOPHY
            </h2>

            {/* The Sacred Covenant */}
            <div className="relative">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--primary)]/30" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--primary)]/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--primary)]/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--primary)]/30" />

              <div className="px-8 py-12 text-center space-y-6">
                {/* The Core Message */}
                <p className="text-xl sm:text-2xl font-serif italic text-[var(--foreground)] leading-relaxed">
                  "Learning is a relationship. A teacher provides information and a student brings the will to learn."
                </p>

                {/* Expanded Philosophy */}
                <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
                  We at Project Exodus believe that <span className="font-bold text-[var(--foreground)]">knowledge belongs to everyone</span>.
                  No certificates. No paywalls. No gatekeepers standing between you and understanding.
                </p>

                <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
                  The traditional systems demand credentials before they trust you to learn.
                  We believe the opposite: <span className="font-bold text-[var(--foreground)]">your will to learn is the only credential you need</span>.
                </p>

                {/* The Covenant */}
                <div className="pt-6 space-y-4">
                  <h3 className="text-lg font-black text-[var(--primary)] uppercase tracking-wider">
                    Our Covenant
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                    <div className="p-4 bg-[var(--card)] rounded-xl border border-[var(--border)]">
                      <p className="font-bold text-[var(--foreground)] mb-1">We Provide:</p>
                      <ul className="text-sm text-[var(--muted-foreground)] space-y-1">
                        <li>• The knowledge, sourced and cited</li>
                        <li>• The structure, thoughtfully designed</li>
                        <li>• The tools, freely accessible</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[var(--card)] rounded-xl border border-[var(--border)]">
                      <p className="font-bold text-[var(--foreground)] mb-1">You Bring:</p>
                      <ul className="text-sm text-[var(--muted-foreground)] space-y-1">
                        <li>• The will to learn</li>
                        <li>• The curiosity to question</li>
                        <li>• The courage to act</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final Statement */}
                <p className="text-base text-[var(--muted-foreground)] italic pt-4">
                  This is not a platform. It is a partnership.
                </p>

                {/* Attribution */}
                <p className="text-xs text-[var(--muted-foreground)]/60 tracking-widest uppercase pt-4">
                  — The Project Exodus Vision
                </p>
              </div>
            </div>

            {/* Sacred divider */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
              <span className="text-2xl text-[var(--primary)]">✦</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[var(--primary)] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* The Planet in Numbers - Compact Stats */}
      <section className="min-h-screen flex items-center justify-center bg-[var(--background)] py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/20 rounded-full border-2 border-orange-500 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-black text-orange-500 uppercase tracking-wider flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  CALCULATED FROM ANNUAL DATA
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-4" style={{
                background: 'linear-gradient(135deg, #ef4444, #f97316, #eab308)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                THE PLANET IN NUMBERS
              </h2>
              <p className="text-sm sm:text-base font-semibold text-theme-muted max-w-3xl mx-auto px-2">
                Statistics calculated from latest annual reports. Click any card to verify the source data.
              </p>
            </div>

            <Suspense fallback={<div className="h-48 animate-pulse bg-[var(--muted)] rounded-xl" />}>
              <CompactLiveImpactStats />
            </Suspense>
          </div>
        </div>
      </section>

      {/* View-only overlay for non-authenticated users - PROMINENT */}
      {!isAuthenticated && (
        <div className="sticky top-0 z-50 bg-gradient-to-b from-[var(--primary)]/10 via-[var(--background)] to-transparent py-3 backdrop-blur-sm border-b-2 border-[var(--primary)]/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 p-5 rounded-2xl bg-gradient-to-r from-[var(--primary)]/15 via-[var(--card)] to-[var(--accent)]/15 border-2 border-[var(--primary)] shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
              {/* Animated background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />

              {/* Main content row */}
              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left: Lock icon and text */}
                <div className="flex items-center gap-4">
                  {/* Animated lock icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[var(--primary)]/30 rounded-full blur-xl animate-pulse" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center shadow-lg border-2 border-white/20">
                      <Lock className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-black text-[var(--foreground)] tracking-tight">PREVIEW MODE</p>
                    <p className="text-sm text-[var(--muted-foreground)]">Sign up to unlock your learning journey</p>
                  </div>
                </div>

                {/* Right: CTA Buttons */}
                <div className="flex items-center gap-3">
                  <Link href="/auth/signup">
                    <Button size="lg" className="font-black px-6 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:opacity-90 shadow-lg">
                      Join Free
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button size="lg" variant="outline" className="font-bold px-6 border-2 border-[var(--primary)]">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Features row */}
              <div className="relative flex items-center justify-center gap-4 sm:gap-8 pt-3 border-t border-[var(--border)]/30">
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-[var(--primary)]" />
                  </div>
                  <span className="text-xs font-bold">100% Free</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-[var(--primary)]" />
                  </div>
                  <span className="text-xs font-bold">All Ages</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-[var(--primary)]" />
                  </div>
                  <span className="text-xs font-bold">Track Progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content wrapper - view-only for non-authenticated users */}
      <div className={!isAuthenticated ? 'pointer-events-none select-none opacity-90' : ''}>

      {/* Learning Paths */}
      <section id="learning-paths" className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 bg-[var(--background)] scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 text-[var(--foreground)]">LEARNING PATHS</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-theme-muted px-2 sm:px-4">
              Structured courses designed to take you from curious to expert
            </p>
          </div>

          {/* Mobile: horizontal scroll | Tablet: 2 columns | Desktop: 3 columns */}
          <div className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory lg:snap-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {learningPaths.map((path) => (
              <Link key={path.id} href={`/learn/paths/${path.id}`} className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-center">
                <Card
                  className="h-full border-2 sm:border-4 border-theme-primary hover:border-theme-accent bg-gradient-to-br from-[color-mix(in_srgb,var(--primary)_15%,var(--background))] to-[var(--background)] transform hover:scale-[1.02] lg:hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="h-1 sm:h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 lg:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-[color-mix(in_srgb,var(--primary)_20%,var(--background))] flex items-center justify-center flex-shrink-0">
                        <path.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-theme-primary" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-black text-theme-primary">{path.level}</span>
                        <h3 className="text-base sm:text-lg lg:text-xl font-black leading-tight text-[var(--foreground)] break-words">{path.title}</h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm lg:text-base font-medium text-theme-muted mb-3 sm:mb-4 lg:mb-6 line-clamp-2 lg:line-clamp-none">
                      {path.description}
                    </p>

                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm font-bold text-theme-muted">
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        {path.duration}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                        {path.modules} modules
                      </span>
                    </div>

                    <div className="hidden sm:flex flex-wrap gap-1.5 sm:gap-2 mb-4 lg:mb-6">
                      {path.topics.slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-[color-mix(in_srgb,var(--primary)_20%,var(--background))] text-theme-primary"
                        >
                          {topic}
                        </span>
                      ))}
                      {path.topics.length > 3 && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-theme-muted">
                          +{path.topics.length - 3} more
                        </span>
                      )}
                    </div>

                    <Button className="w-full font-bold text-xs sm:text-sm py-2 sm:py-2.5">
                      START PATH <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <div className="flex lg:hidden justify-center gap-2 mt-4">
            {learningPaths.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[var(--primary)] opacity-40" />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts Marquee */}
      <section className="py-12 bg-[var(--primary)] overflow-hidden">
        <div className="flex gap-12 animate-scroll">
          {[...quickFacts, ...quickFacts].map((item, i) => (
            <div key={i} className="flex items-center gap-4 whitespace-nowrap">
              <Lightbulb className="w-6 h-6 text-[var(--primary-foreground)] opacity-70" />
              <span className="text-lg font-bold text-[var(--primary-foreground)]">{item.fact}</span>
              <span className="text-sm font-medium text-[var(--primary-foreground)] opacity-70">— {item.source}</span>
              <span className="text-[var(--primary-foreground)] opacity-50 mx-4">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Topics - Main Learning Hub with Level Selector */}
      <section id="core-topics" className="min-h-screen flex items-center justify-center py-10 sm:py-14 lg:py-20 bg-[var(--background)] scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 text-[var(--foreground)]">CORE TOPICS</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl font-semibold text-theme-muted px-2 sm:px-4 mb-4 sm:mb-6 lg:mb-8">
              Six textbooks, each written for every level from elementary to PhD. Pick one up.
            </p>

          </div>

          {/* Mobile: 2 columns compact | Tablet: 2 columns | Desktop: 3 columns */}
          {/* The shelf stays touchable for everyone: guests can tilt the books, members open them */}
          <div className="pointer-events-auto grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8 max-w-7xl mx-auto">
            {topics.map((topic, idx) => {
              const ShelfItem = isAuthenticated ? Link : 'div'

              const progress = topicProgress.get(topic.slug as CoreTopic)
              const progressPercent = progress?.progressPercent || 0
              const isGraduated = progress?.isGraduated || false

              return (
                <ShelfItem
                  key={topic.title}
                  href={`/learn/topics/${topic.slug}`}
                  className="group block focus:outline-none"
                  aria-label={isAuthenticated ? `${topic.title}: ${isGraduated ? 'review' : progressPercent > 0 ? 'continue' : 'explore'} the textbook` : `${topic.title} textbook. Sign in to open it.`}
                >
                  {/* The topic's textbook, floating on the shelf; turns toward the pointer */}
                  <div className="mx-auto px-[6%] pt-3">
                    <FloatingBook delay={idx * 0.9} lift={7} restY={inwardTurn(idx)} tiltRange={14} className="w-full">
                      <BookCover
                        ribbonPlacement="top"
                        topicId={topic.slug as CoreTopic}
                        title={topic.title}
                        subtitle={topic.desc}
                        chapterTitles={[]}
                        currentChapter={null}
                        levelLabel={LEARNING_LEVELS[selectedLevel].shortLabel}
                        hours={0}
                        progressPercent={progressPercent}
                        animate={false}
                          depth={10}
                          ribbon={ribbonStyle}
                        windowText={{ kicker: 'Chapters', big: String(topic.modules), small: `${Math.ceil(topic.modules / 7)} volumes` }}
                        imprint="Elementary to PhD editions"
                      />
                    </FloatingBook>
                  </div>
                  <div className="mt-7 flex items-center justify-between gap-2 px-1 sm:mt-9">
                    <span className="text-[11px] font-bold text-theme-muted sm:text-xs lg:text-sm">
                      {isGraduated ? (
                        <span className="inline-flex items-center gap-1 text-green-600"><GraduationCap className="h-3.5 w-3.5" /> Complete</span>
                      ) : progressPercent > 0 ? (
                        <span className="text-theme-primary">{progressPercent}% read</span>
                      ) : (
                        <span className="inline-flex items-center gap-1 whitespace-nowrap"><BookOpen className="h-3.5 w-3.5" /> {topic.modules} chapters</span>
                      )}
                    </span>
                    {isAuthenticated ? (
                      <span className="flex items-center gap-0.5 text-[11px] font-black text-theme-primary transition-all group-hover:gap-1.5 sm:text-xs lg:text-sm">
                        {isGraduated ? 'REVIEW' : progressPercent > 0 ? 'CONTINUE' : 'OPEN'}
                        <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    ) : (
                      <span className="flex shrink-0 items-center gap-1 whitespace-nowrap text-[11px] font-bold text-theme-muted sm:text-xs lg:text-sm">
                        <Lock className="h-3 w-3" /> Sign in
                      </span>
                    )}
                  </div>
                </ShelfItem>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="min-h-screen flex items-center justify-center py-10 sm:py-14 lg:py-20 bg-[var(--muted)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 text-[var(--foreground)]">INTERACTIVE TOOLS</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl font-semibold text-theme-muted px-2 sm:px-4">
              Learn by doing with hands-on resources
            </p>
          </div>

          {/* Resource counts - horizontal scroll on mobile */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 max-w-6xl mx-auto mb-6 sm:mb-8 lg:mb-12 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none">
            {resourceTypes.map((resource, i) => (
              <Card key={i} className="border sm:border-2 border-[var(--border)] bg-[var(--card)] hover:shadow-xl transition-shadow cursor-pointer min-w-[140px] sm:min-w-0 snap-center">
                <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 lg:mb-4 rounded-xl sm:rounded-2xl bg-[color-mix(in_srgb,var(--primary)_20%,var(--background))] flex items-center justify-center">
                    <resource.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-theme-primary" />
                  </div>
                  <h3 className="text-xs sm:text-sm lg:text-lg font-black mb-1 sm:mb-2 text-[var(--foreground)] leading-tight">{resource.type}</h3>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-black text-theme-primary">
                    {resource.count}+
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tool cards - 2x2 grid on all sizes, compact on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto">
            {[
              { icon: Calculator, title: 'CARBON CALCULATOR', desc: 'Calculate your environmental footprint and get personalized reduction tips', cta: 'CALCULATE NOW', href: '/tools/carbon-calculator' },
              { icon: Droplet, title: 'WATER CALCULATOR', desc: 'Discover your total water footprint including hidden virtual water', cta: 'CALCULATE NOW', href: '/tools/water-calculator' },
              { icon: Play, title: 'VIDEO LIBRARY', desc: 'Curated educational videos from trusted sources on sustainability topics', cta: 'WATCH VIDEOS', href: '/videos' },
              { icon: Download, title: 'RESOURCE LIBRARY', desc: 'PDFs, worksheets, checklists, and templates for sustainable living', cta: 'BROWSE RESOURCES', href: '/resources' }
            ].map((tool, i) => (
              <Link key={i} href={tool.href}>
                <Card className="h-full border-2 sm:border-4 border-theme-primary bg-gradient-to-br from-[color-mix(in_srgb,var(--primary)_15%,var(--background))] to-[var(--background)] transform hover:scale-[1.02] lg:hover:scale-105 transition-all cursor-pointer">
                  <CardContent className="p-3 sm:p-5 lg:p-10 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-full bg-[color-mix(in_srgb,var(--primary)_20%,var(--background))] flex items-center justify-center">
                      <tool.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-theme-primary" />
                    </div>
                    <h3 className="text-xs sm:text-base lg:text-xl font-black mb-1 sm:mb-2 lg:mb-3 text-[var(--foreground)] leading-tight">{tool.title}</h3>
                    <p className="text-[10px] sm:text-xs lg:text-base font-medium mb-2 sm:mb-4 lg:mb-6 text-theme-muted line-clamp-2">{tool.desc}</p>
                    <Button variant="outline" className="font-bold border sm:border-2 text-[10px] sm:text-xs lg:text-sm px-2 sm:px-4 py-1 sm:py-2">
                      <span className="hidden sm:inline">{tool.cta}</span>
                      <span className="sm:hidden">GO</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exodology Cross-link */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-900/10 via-[var(--background)] to-purple-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-[var(--card)] to-purple-500/5 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-amber-500 via-teal-500 to-purple-500" />
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Compass className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Advanced Discipline</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] mt-1 mb-2">EXODOLOGY</h3>
                    <p className="text-[var(--muted-foreground)] mb-4">
                      When sustainability reaches its limits, Exodology provides frameworks for designing ethical exits from systems that no longer serve people or the planet.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 font-semibold">Food Systems</span>
                      <span className="text-xs px-3 py-1 rounded-full bg-teal-500/20 text-teal-600 font-semibold">Water Systems</span>
                      <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-600 font-semibold">Energy Systems</span>
                    </div>
                  </div>
                  <Link href="/exodology">
                    <Button className="font-bold bg-gradient-to-r from-amber-500 to-purple-500 hover:from-amber-600 hover:to-purple-600 flex-shrink-0">
                      Explore Exodology
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] text-[var(--primary-foreground)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">🎓</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[var(--primary-foreground)] px-2 sm:px-4 leading-tight">READY TO BECOME A SUSTAINABILITY EXPERT?</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-[var(--primary-foreground)] opacity-90 px-2 sm:px-4">
              Join thousands of learners transforming knowledge into action.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center pt-2 sm:pt-4">
              <Button size="lg" className="text-sm sm:text-base lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 bg-[var(--primary-foreground)] text-[var(--primary)] hover:opacity-90 font-black shadow-2xl rounded-xl sm:rounded-2xl">
                START YOUR JOURNEY
              </Button>
              <Link href="/community">
                <Button size="lg" variant="outline" className="text-sm sm:text-base lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 border-2 sm:border-4 border-[var(--primary-foreground)] text-[var(--primary-foreground)] hover:bg-[var(--primary-foreground)] hover:text-[var(--primary)] font-black rounded-xl sm:rounded-2xl w-full sm:w-auto">
                  JOIN THE COMMUNITY
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      </div>{/* End view-only wrapper */}
    </div>
  )
}
