import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.112.0/testing/asserts.ts";
import { declineArr, growthArr } from "../arrays.ts";

const arr = [100, 150, 225, 337.5, 506.25];
Deno.test("create growth array", () => {
  assertEquals(growthArr(100, 0.5, 5), arr);
  assertNotEquals(growthArr(100, 0.1, 5), arr);
});

const arr2 = [100, 50, 25, 12.5, 6.25];
Deno.test("create decline array", () => {
  assertEquals(declineArr(100, 0.5, 5), arr2);
  assertNotEquals(declineArr(100, 0.1, 5), arr2);
});
