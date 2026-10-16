"use client";

import { useEffect, useState } from "react";
import Arrow from "./arrow";
import { ELECTION_DAY_END, VOTE_TARGET, getCountdown } from "../lib/election-clock";

export default function VoteCountdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const finished = now !== null && now >= VOTE_TARGET;
  const electionOver = now !== null && now >= ELECTION_DAY_END;
  const remaining = now === null ? null : getCountdown(now);

  return (
    <section className="vote-countdown" aria-labelledby="vote-heading">
      <div className="container vote-countdown-inner">
        <div className="vote-message">
          <h2 id="vote-heading">{electionOver ? "Thank you, Clarkson." : "Vote for Lisa Pearl."}</h2>
          <p>{electionOver ? "The countdown to November 3 has ended." : <>Make your voice count. <time dateTime="2026-11-03">November 3, 2026.</time></>}</p>
        </div>
        <div className="vote-clock-group">
          {finished ? <p className="vote-arrived">{electionOver ? "Countdown complete" : "It’s time to vote."}</p> : (
            <div className="vote-clock" role="timer" aria-live="off" aria-label="Countdown to November 3, 2026 at 8 AM Central time">
              {(["days", "hours", "minutes", "seconds"] as const).map(unit => (
                <div className="vote-unit" key={unit}>
                  <strong>{remaining ? String(remaining[unit]).padStart(2, "0") : "––"}</strong>
                  <span>{unit}</span>
                </div>
              ))}
            </div>
          )}
          {!finished && <p className="vote-target">Counting down to <time dateTime="2026-11-03T08:00:00-06:00">Nov. 3 · 8:00 AM Central</time></p>}
        </div>
        <a className="button button-light vote-cta" href="https://vrsws.sos.ky.gov/vic/" target="_blank" rel="noreferrer">
          {electionOver ? "Voter information" : "Make a plan to vote"} <Arrow />
        </a>
      </div>
    </section>
  );
}
