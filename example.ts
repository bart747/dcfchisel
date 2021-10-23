import { DCF, declineArr, growthArr, perpetuityGrowth } from "./index.ts";

const discount = 0.08;
const cfsA = growthArr(100, 0.01, 3);
const cfsB = declineArr(cfsA[cfsA.length - 2], 0.01, 2);
const cfsAll = cfsA.concat(cfsB);
console.log(cfsAll);
const termVal = perpetuityGrowth(cfsAll[cfsAll.length - 1], 0.03, discount);
console.log(termVal);
cfsAll[cfsAll.length - 1] = cfsAll[cfsAll.length - 1] + termVal;
console.log(cfsAll);
console.log(DCF(cfsAll, discount, 3));
