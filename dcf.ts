import round from './round.ts'

// DCF = (CF1 / (1 + r)^1) + (CF2 / (1 + r)^2) ... + ((CFn + TerminalValue) / (1 + r)^n)

interface dcfResult {
  parts: number[];
  sum: number;
}

function DCF (
  cashFlowArr: number[],
  discount: number,
  precision = 3
): dcfResult {
  const parts: number[] = []
  let acc = 0
  const base = 1 + discount
  let exp = 0

  cashFlowArr.forEach(cf => {
    exp += 1
    const part = round((cf / Math.pow(base, exp)), precision)
    acc += part
    parts.push(part)
  })
  acc = round(acc, precision)

  return { parts: parts, sum: acc }
}

export default DCF
