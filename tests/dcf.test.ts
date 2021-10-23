import { assertEquals } from "https://deno.land/std@0.112.0/testing/asserts.ts";
import DCF from "../dcf.ts";

const inArr = [100, 150, 200];
const objA = { // for discount = 0.1, precision 2
  parts: [
    90.91,
    123.97,
    150.26,
  ],
  sum: 365.14,
};

const objB = { // for discount = 0.05, precision 1
  parts: [
    95.2,
    136.1,
    172.8,
  ],
  sum: 404.1,
};

Deno.test("get discounted cash flow sum according to args", () => {
  assertEquals(DCF(inArr, 0.1, 2), objA);
  assertEquals(DCF(inArr, 0.05, 1), objB);
});
