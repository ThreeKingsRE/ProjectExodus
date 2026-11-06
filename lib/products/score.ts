/**
 * Exodus sustainability score (0-100).
 *
 * If an editor has set `sustainabilityScore` explicitly it wins. Otherwise we
 * derive one from whatever metrics exist, normalising by the weight of the
 * metrics actually present so a product isn't punished for missing data.
 * Products with no metrics at all get no score (null), not a low one.
 */

export interface ScoreInputs {
  sustainabilityScore?: number | null
  carbonSavings?: number | null
  recycledContent?: number | null
  recyclable?: boolean | null
  biodegradable?: boolean | null
  renewableEnergy?: boolean | null
  lifespanYears?: number | null
  repairability?: number | null
}

const clamp = (n: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n))

export function computeSustainabilityScore(
  metric: ScoreInputs | null | undefined,
  certificationCount = 0
): number | null {
  if (!metric) return null
  if (typeof metric.sustainabilityScore === 'number') {
    return Math.round(clamp(metric.sustainabilityScore, 0, 100))
  }

  // [weight, value in 0..1] for each metric that is present
  const parts: Array<[number, number]> = []

  if (metric.carbonSavings != null) {
    // 100 kg CO2e saved or more earns full marks
    parts.push([25, clamp(metric.carbonSavings / 100)])
  }
  if (metric.recycledContent != null) {
    parts.push([15, clamp(metric.recycledContent / 100)])
  }
  if (metric.lifespanYears != null) {
    // 15+ years earns full marks
    parts.push([15, clamp(metric.lifespanYears / 15)])
  }
  if (metric.repairability != null) {
    parts.push([15, clamp(metric.repairability / 10)])
  }

  // Booleans default to false in the schema, so they only add credit
  const boolCredit =
    (metric.recyclable ? 1 : 0) + (metric.biodegradable ? 1 : 0) + (metric.renewableEnergy ? 1 : 0)
  if (parts.length > 0 || boolCredit > 0) {
    parts.push([15, clamp(boolCredit / 2)])
  }

  if (certificationCount > 0 || parts.length > 0) {
    parts.push([15, clamp(certificationCount / 2)])
  }

  if (parts.length === 0) return null

  const totalWeight = parts.reduce((sum, [w]) => sum + w, 0)
  const weighted = parts.reduce((sum, [w, v]) => sum + w * v, 0)
  return Math.round((weighted / totalWeight) * 100)
}

export function getScoreTier(score: number): { label: string; color: string; bgColor: string } {
  if (score >= 90) return { label: 'EXCEPTIONAL', color: 'text-emerald-600', bgColor: 'bg-emerald-500' }
  if (score >= 80) return { label: 'EXCELLENT', color: 'text-green-600', bgColor: 'bg-green-500' }
  if (score >= 70) return { label: 'VERY GOOD', color: 'text-lime-600', bgColor: 'bg-lime-500' }
  if (score >= 60) return { label: 'GOOD', color: 'text-yellow-600', bgColor: 'bg-yellow-500' }
  return { label: 'FAIR', color: 'text-orange-600', bgColor: 'bg-orange-500' }
}

export function isAffiliateLink(purchaseLink?: string | null): boolean {
  return purchaseLink?.includes('ref=projectexodus') || purchaseLink?.includes('?ref=') || false
}
