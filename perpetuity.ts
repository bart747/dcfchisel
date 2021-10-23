import round from './round.ts'
// (FCF * (1 + g%)) / (d% - g%)

function perpetuityGrowth (
  baseValue: number,
  growthRatePct: number,
  discountRatePct: number
) {
  if (growthRatePct > discountRatePct) {
    throw new Error('growth rate should be smaller than discount rate')
  }

  const n = baseValue * (1 + growthRatePct)
  const d = discountRatePct - growthRatePct
  const value = round((n / d), 9)

  return value
}

export default perpetuityGrowth
