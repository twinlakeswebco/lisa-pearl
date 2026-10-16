import test from "node:test";
import assert from "node:assert/strict";
import { VOTE_TARGET, getCountdown } from "../app/lib/election-clock.ts";

test("target is exactly 8 AM Central after daylight saving time ends", () => {
  assert.equal(new Date(VOTE_TARGET).toISOString(), "2026-11-03T14:00:00.000Z");
  assert.match(new Intl.DateTimeFormat("en-US", {timeZone:"America/Chicago",hour:"numeric",minute:"2-digit",hour12:true}).format(VOTE_TARGET), /8:00 AM/);
});
test("countdown handles days, carries, and the final second", () => {
  assert.deepEqual(getCountdown(VOTE_TARGET - ((18*86400+2*3600+3*60+4)*1000)), {days:18,hours:2,minutes:3,seconds:4});
  assert.deepEqual(getCountdown(VOTE_TARGET-1), {days:0,hours:0,minutes:0,seconds:1});
});
test("countdown stops at zero", () => {
  for (const now of [VOTE_TARGET,VOTE_TARGET+86400000]) assert.deepEqual(getCountdown(now), {days:0,hours:0,minutes:0,seconds:0});
});
