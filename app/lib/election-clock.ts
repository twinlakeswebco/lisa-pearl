// Central Standard Time is UTC−06:00 on November 3, after the DST change.
export const VOTE_TARGET = Date.parse("2026-11-03T08:00:00-06:00");
export const ELECTION_DAY_END = Date.parse("2026-11-04T00:00:00-06:00");
export function getCountdown(now: number) {
  const total = Math.max(0, Math.ceil((VOTE_TARGET - now) / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}
