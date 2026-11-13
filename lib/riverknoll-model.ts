import plan from '../data/riverknoll-renewal.json' with { type: 'json' }

export function calculateRiverknoll(targetBeds: number, retainedBeds: number | null) {
  if (!Number.isInteger(targetBeds) || targetBeds < 1 || targetBeds > 2000) throw new Error('Target must be 1–2,000 whole beds.')
  if (retainedBeds !== null && (!Number.isInteger(retainedBeds) || retainedBeds < 0 || retainedBeds > targetBeds)) throw new Error('Retained beds must be between zero and the target.')
  const f = plan.finance
  const newBeds = targetBeds - (retainedBeds ?? 0)
  const grossArea = newBeds * f.grossAreaPerNewBed
  const cases = f.cases.map(c => {
    const building = grossArea * c.perGsf
    const site = building * c.siteRatio
    const demolition = newBeds * c.demolitionPerBed
    const abatement = newBeds * c.abatementPerBed
    const temporaryWorks = newBeds > 0 ? c.temporaryWorks : 0
    const hard = building + site + demolition + abatement + temporaryWorks
    const soft = hard * c.softRatio
    const contingency = (hard + soft) * c.contingencyRatio
    const escalation = (hard + soft + contingency) * c.escalationRatio
    const financing = (hard + soft + contingency + escalation) * c.financeRatio
    const total = hard + soft + contingency + escalation + financing
    return { name: c.name, building, site, demolition, abatement, temporaryWorks, soft, contingency, escalation, financing, total, perNewBed: newBeds ? total / newBeds : 0 }
  })
  const grossRent = targetBeds * f.academicYearRent * f.occupancy
  const noi = grossRent * (1 - f.operatingExpenseRatio)
  const debtFactor = f.debtRate / (1 - Math.pow(1 + f.debtRate, -f.debtYears))
  const supportedDebt = noi / f.debtServiceCoverage / debtFactor
  const annualWallSavings = f.annualWallSavingsAt513NewBeds * newBeds / 513
  const savingsPv = Array.from({ length: f.years }, (_, i) => annualWallSavings * Math.pow(1 + f.energyEscalation, i) / Math.pow(1 + f.discountRate, i + 1)).reduce((a, b) => a + b, 0)
  return { targetBeds, retainedBeds, retainedUnverified: retainedBeds === null, newBeds, grossArea, cases, grossRent, noi, supportedDebt, capitalGap: Math.max(0, cases[1].total - supportedDebt), annualWallSavings, savingsPv, premiumPerBed: newBeds ? savingsPv / newBeds : 0 }
}
