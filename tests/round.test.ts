import { assertEquals, assertNotEquals } from 'https://deno.land/std@0.112.0/testing/asserts.ts'
import round from '../round.ts'
Deno.test("round numbers according to args", () => {
  assertEquals(round(12.123456, 5), 12.12346);
  assertNotEquals(round(10.99, 1), 10.9);
});