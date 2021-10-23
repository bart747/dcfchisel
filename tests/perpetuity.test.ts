import { assertEquals } from 'https://deno.land/std@0.112.0/testing/asserts.ts'
import perpetuityGrowth from '../perpetuity.ts'
Deno.test("get perpetuity growth value according to args", () => {
  assertEquals(perpetuityGrowth(100, 0.03, 0.08), 2060)
  assertEquals(perpetuityGrowth(100, 0.02, 0.08), 1700)
});