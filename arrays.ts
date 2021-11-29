import round from "./round.ts";
// growth arr  = (val) + (val * (1 + g%)^1) + (val * (1 + g%)^2) ... +(val * (1 + g%)^n)
// decline arr = (val) + (val * (1 - g%)^1) + (val * (1 - g%)^2) ... +(val * (1 - g%)^n)

function collect(
  arr: number[],
  startVal: number,
  rate: number,
  length: number,
): void {
  arr.push(startVal);
  for (let i = 1; i < length; i += 1) {
    const part: number = startVal * Math.pow(rate, i);
    arr.push(round(part, 9));
  }
}

function growthArr(
  startVal: number,
  growthRatePct: number,
  length: number,
): number[] {
  const arr: number[] = [];
  const growthRate = 1 + growthRatePct;
  collect(arr, startVal, growthRate, length);
  return arr;
}

function declineArr(
  startVal: number,
  declineRatePct: number,
  length: number,
): number[] {
  const arr: number[] = [];
  const declineRate = 1 - declineRatePct;
  collect(arr, startVal, declineRate, length);
  return arr;
}

export { declineArr, growthArr };
