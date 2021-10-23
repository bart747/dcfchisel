
function round(number: number, precision: number): number {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision)
}

export default round  