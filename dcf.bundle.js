function round(number, precision) {
    return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
}
function DCF1(cashFlowArr, discount, precision = 3) {
    const parts = [];
    let acc = 0;
    const base = 1 + discount;
    let exp = 0;
    cashFlowArr.forEach((cf)=>{
        exp += 1;
        const part = round(cf / Math.pow(base, exp), precision);
        acc += part;
        parts.push(part);
    });
    acc = round(acc, precision);
    return {
        parts: parts,
        sum: acc
    };
}
function collect(arr, startVal, rate, length) {
    arr.push(startVal);
    for(let i = 1; i < length; i += 1){
        const part = startVal * Math.pow(rate, i);
        arr.push(round(part, 9));
    }
}
function growthArr1(startVal, growthRatePct, length) {
    const arr = [];
    const growthRate = 1 + growthRatePct;
    collect(arr, startVal, growthRate, length);
    return arr;
}
function declineArr1(startVal, declineRatePct, length) {
    const arr = [];
    const declineRate = 1 - declineRatePct;
    collect(arr, startVal, declineRate, length);
    return arr;
}
function perpetuityGrowth1(baseValue, growthRatePct, discountRatePct) {
    if (growthRatePct > discountRatePct) {
        throw new Error('growth rate should be smaller than discount rate');
    }
    const n = baseValue * (1 + growthRatePct);
    const d = discountRatePct - growthRatePct;
    const value = round(n / d, 9);
    return value;
}
export { DCF1 as DCF, growthArr1 as growthArr, declineArr1 as declineArr, perpetuityGrowth1 as perpetuityGrowth };
