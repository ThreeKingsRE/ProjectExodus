'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import {
  getArcsForYear,
  getPointsForYear,
  getArcsForPeriod,
  getBuildingPointsForPeriod,
  getRegionBoundsForPeriod,
  REGION_CENTROIDS,
  type BuildingPoint,
  type GlobeArc,
  type RegionBounds,
} from '@/data/architecture/globeConnections'
import type { PeriodDefinition } from '@/data/architecture/periods'
import { useThemeGlobeMaterial } from './useThemeGlobeMaterial'

const GlobeGL = dynamic(() => import('react-globe.gl'), { ssr: false })

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ArchitectureGlobeProps {
  currentYear: number
  isDayTheme: boolean
  onReady?: () => void
  selectedPeriod?: PeriodDefinition | null
  onPointClick?: (point: { region: string; name: string; lat: number; lng: number }) => void
  showArcs?: boolean
  /** Phones: only the sphere itself rotates; everything around it scrolls the page */
  sphereOnly?: boolean
}

interface GeoJSONFeature {
  type: string
  properties: Record<string, unknown>
  geometry: {
    type: string
    coordinates: unknown
  }
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

// Levant — first architectural influence (Natufian, ~12000 BCE)
const SEED_LAT = 31.8
const SEED_LNG = 35.2

// Camera altitude — standard viewing distance
const IDLE_ALTITUDE = 2.4
/** Closer camera on phones so the sphere fills its round touch area */
const PHONE_IDLE_ALTITUDE = 1.72

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ArchitectureGlobe({
  currentYear,
  isDayTheme,
  onReady,
  selectedPeriod,
  onPointClick,
  showArcs = true,
  sphereOnly = false,
}: ArchitectureGlobeProps) {
  const globeRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  // Phones: the round touch area is a square as big as the space allows
  const side = Math.floor(Math.min(dimensions.width, dimensions.height))
  const [countries, setCountries] = useState<GeoJSONFeature[]>([])

  const globeInitializedRef = useRef(false)
  const onReadyRef = useRef(onReady)
  onReadyRef.current = onReady

  // Store the camera position before period selection to restore later
  const prePeriodPovRef = useRef<{ lat: number; lng: number; altitude: number } | null>(null)

  // -------------------------------------------------------------------------
  // Material — always use theme material (day/night texture)
  // -------------------------------------------------------------------------

  const globeMaterial = useThemeGlobeMaterial(isDayTheme)

  // -------------------------------------------------------------------------
  // Container resize
  // -------------------------------------------------------------------------

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        setDimensions({ width, height })
      }
    })

    observer.observe(container)

    const rect = container.getBoundingClientRect()
    setDimensions({ width: rect.width, height: rect.height })

    return () => observer.disconnect()
  }, [])

  // -------------------------------------------------------------------------
  // Load country borders GeoJSON
  // -------------------------------------------------------------------------

  useEffect(() => {
    let cancelled = false

    fetch('/globe/countries.geojson')
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data && data.features) {
          setCountries(data.features)
        }
      })
      .catch(() => {})

    return () => { cancelled = true }
  }, [])

  // -------------------------------------------------------------------------
  // Globe init — set camera + enable user rotation (no auto-spin)
  // -------------------------------------------------------------------------

  useEffect(() => {
    let raf: number

    const tryInit = () => {
      const globe = globeRef.current
      if (!globe || globeInitializedRef.current) return

      // Phones have very dense screens; cap the resolution so the globe stays smooth
      try { globe.renderer?.()?.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)) } catch { /* keep default */ }
      globe.pointOfView({ lat: SEED_LAT, lng: SEED_LNG, altitude: sphereOnly ? PHONE_IDLE_ALTITUDE : IDLE_ALTITUDE })

      const controls = globe.controls()
      if (controls) {
        controls.enableDamping = true
        controls.dampingFactor = 0.1
        controls.autoRotate = false
        controls.enableRotate = true
        // Phones: no zoom, so a stray gesture can never zoom the globe while someone is scrolling
        controls.enableZoom = !sphereOnly

        // Touch gestures on iPad/mobile:
        //   1 finger vertical drag  -> page scroll (handled by touch-action: pan-y)
        //   1 finger horizontal drag -> globe rotate (longitude)
        //   2 finger drag           -> full 360 rotation including up/down tilt
        //   2 finger pinch          -> zoom
        // Default OrbitControls TWO is DOLLY_PAN; switching to DOLLY_ROTATE (3)
        // gives users full latitude rotation back on touch.
        if (controls.touches) {
          controls.touches.TWO = 3 // THREE.TOUCH.DOLLY_ROTATE
        }

        // OrbitControls sets the canvas's touch-action to 'none' internally,
        // which blocks vertical page scroll on iPad/mobile. Override so the
        // page can scroll vertically while horizontal drag still rotates the
        // globe and 2-finger drag rotates fully.
        // (On phones the round touch area keeps 'none' so a drag on the sphere only ever rotates it,
        // and everything outside the circle scrolls the page.)
        if (controls.domElement && !sphereOnly) {
          controls.domElement.style.touchAction = 'pan-y'
        }
      }

      globeInitializedRef.current = true
      onReadyRef.current?.()
    }

    const poll = () => {
      if (!globeInitializedRef.current) {
        tryInit()
        raf = requestAnimationFrame(poll)
      }
    }

    raf = requestAnimationFrame(poll)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Phones: stop drawing the globe once page content covers it, so scrolling stays smooth
  useEffect(() => {
    if (!sphereOnly) return
    let paused = false
    const onScroll = () => {
      const globe = globeRef.current
      if (!globe) return
      const covered = window.scrollY > window.innerHeight * 0.85
      if (covered && !paused) { globe.pauseAnimation?.(); paused = true }
      else if (!covered && paused) { globe.resumeAnimation?.(); paused = false }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); globeRef.current?.resumeAnimation?.() }
  }, [sphereOnly])

  // -------------------------------------------------------------------------
  // Camera animation when selectedPeriod changes
  // -------------------------------------------------------------------------

  useEffect(() => {
    const globe = globeRef.current
    if (!globe || !globeInitializedRef.current) return

    if (selectedPeriod) {
      // Save current POV before zooming
      const currentPov = globe.pointOfView()
      if (!prePeriodPovRef.current) {
        prePeriodPovRef.current = {
          lat: currentPov.lat,
          lng: currentPov.lng,
          altitude: currentPov.altitude,
        }
      }

      const bounds = getRegionBoundsForPeriod(selectedPeriod.id)
      if (bounds) {
        globe.pointOfView(
          { lat: bounds.center.lat, lng: bounds.center.lng, altitude: bounds.altitude },
          1500
        )
      }
    } else if (prePeriodPovRef.current) {
      // Restore previous camera position
      globe.pointOfView(prePeriodPovRef.current, 1200)
      prePeriodPovRef.current = null
    }
  }, [selectedPeriod])

  // -------------------------------------------------------------------------
  // Derived data — arcs, points, and buildings
  // -------------------------------------------------------------------------

  const arcsData = useMemo(() => {
    if (!showArcs) return []
    if (selectedPeriod) return getArcsForPeriod(selectedPeriod.id)
    return getArcsForYear(currentYear)
  }, [currentYear, selectedPeriod, showArcs])

  const pointsData = useMemo(() => {
    // When arcs are hidden, show all regions that have any connection up to the current year
    if (!showArcs) {
      const allArcs = getArcsForYear(currentYear)
      const regionCounts = new Map<string, number>()
      for (const arc of allArcs) {
        regionCounts.set(arc.sourceRegion, (regionCounts.get(arc.sourceRegion) || 0) + 1)
        regionCounts.set(arc.targetRegion, (regionCounts.get(arc.targetRegion) || 0) + 1)
      }
      const points: any[] = []
      for (const [region, count] of regionCounts) {
        const centroid = REGION_CENTROIDS[region]
        if (centroid) {
          points.push({ lat: centroid.lat, lng: centroid.lng, region, name: centroid.name, connectionCount: count })
        }
      }
      return points
    }
    if (selectedPeriod) {
      // Build points from arcs for selected period
      const regionCounts = new Map<string, number>()
      for (const arc of arcsData) {
        regionCounts.set(arc.sourceRegion, (regionCounts.get(arc.sourceRegion) || 0) + 1)
        regionCounts.set(arc.targetRegion, (regionCounts.get(arc.targetRegion) || 0) + 1)
      }
      const points: any[] = []
      for (const [region, count] of regionCounts) {
        const centroid = REGION_CENTROIDS[region]
        if (centroid) {
          points.push({ lat: centroid.lat, lng: centroid.lng, region, name: centroid.name, connectionCount: count })
        }
      }
      return points
    }
    return getPointsForYear(currentYear)
  }, [currentYear, selectedPeriod, arcsData, showArcs])

  const buildingPointsData = useMemo(() => {
    if (!selectedPeriod) return []
    return getBuildingPointsForPeriod(selectedPeriod.id)
  }, [selectedPeriod])

  // Merge region points + building points into a single points array
  const allPoints = useMemo(() => {
    if (!selectedPeriod) return pointsData
    // Region points (larger, gold) + building points (smaller, white)
    return [
      ...pointsData,
      ...buildingPointsData.map(b => ({
        lat: b.lat,
        lng: b.lng,
        region: 'building',
        name: `${b.name}\n${b.location} · ${b.year}`,
        connectionCount: 0.3, // Small marker
        isBuilding: true,
      })),
    ]
  }, [pointsData, buildingPointsData, selectedPeriod])

  // Golden polygon borders — subtle, cinematic
  const polygonBorderColor = 'rgba(212, 165, 74, 0.3)'

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center" style={{ touchAction: 'pan-y' }}>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <div
          // Phones: a round touch area the size of the sphere. Touches outside the circle fall through to page scroll.
          style={sphereOnly
            ? { width: side, height: side, borderRadius: '50%', overflow: 'hidden', touchAction: 'none', flex: 'none' }
            : { width: '100%', height: '100%' }}
        >
        <GlobeGL
          ref={globeRef}
          width={sphereOnly ? side : dimensions.width}
          height={sphereOnly ? side : dimensions.height}
          {...(globeMaterial
            ? { globeMaterial, globeImageUrl: '' }
            : { globeImageUrl: isDayTheme
                ? '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                : '//unpkg.com/three-globe/example/img/earth-night.jpg'
            }
          )}
          backgroundImageUrl={null as any}
          showAtmosphere={true}
          atmosphereColor="rgba(212, 165, 74, 0.8)"
          atmosphereAltitude={0.18}
          // Arcs
          arcsData={arcsData}
          arcStartLat={(d: any) => d.fromLat}
          arcStartLng={(d: any) => d.fromLng}
          arcEndLat={(d: any) => d.toLat}
          arcEndLng={(d: any) => d.toLng}
          arcColor={(d: any) => d.eraColor}
          arcAltitude={(d: any) => d.eraAltitude}
          arcStroke={0.4}
          arcDashLength={1}
          arcDashGap={0}
          arcDashAnimateTime={0}
          arcsTransitionDuration={500}
          // Points (region centroids + building locations when period selected)
          pointsData={allPoints}
          pointLat={(d: any) => d.lat}
          pointLng={(d: any) => d.lng}
          pointColor={(d: any) => d.isBuilding ? '#FFFFFF' : '#D4A54A'}
          pointAltitude={(d: any) => d.isBuilding ? 0.015 : 0.01}
          pointRadius={(d: any) => d.isBuilding
            ? 0.25
            : !showArcs
              ? Math.max(0.5, Math.min(1.2, d.connectionCount * 0.1))
              : Math.max(0.3, Math.min(1.0, d.connectionCount * 0.08))
          }
          pointLabel={(d: any) => d.name}
          onPointClick={onPointClick ? (point: any) => {
            if (point && point.region && point.region !== 'building') {
              onPointClick({ region: point.region, name: point.name, lat: point.lat, lng: point.lng })
            }
          } : undefined}
          // Country borders
          polygonsData={countries}
          polygonCapColor={() => 'rgba(0,0,0,0)'}
          polygonSideColor={() => 'rgba(0,0,0,0)'}
          polygonStrokeColor={() => polygonBorderColor}
          polygonAltitude={0.001}
        />
        </div>
      )}
    </div>
  )
}
