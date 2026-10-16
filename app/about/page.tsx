/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "../components/arrow";
import { FACEBOOK_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "About Lisa",
  description: "Meet Lisa Pearl: a lifelong connection to Clarkson, 35 years of federal service, and a commitment to responsible, accessible leadership.",
};

export default function About() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="container about-layout about-introduction">
        <div className="about-photo">
          <img src="/lisa-yard-sign.jpg" width="1536" height="1536" alt="Lisa Pearl with her Clarkson Mayor campaign sign" fetchPriority="high" />
        </div>
        <div className="about-copy">
          <h1>Home.<br />History.<br /><span>Heart.</span></h1>
          <p className="lead">I’m Lisa Pearl. Clarkson raised me, and I’m ready to give back to the town I call home.</p>
          <p>I grew up on small-town handshakes, Friday night lights, and knowing my neighbors by name. From growing up around one of Main Street’s familiar family businesses to years behind the counter keeping our town connected one mailbox at a time, my life has been woven into Clarkson.</p>
          <p>To me, our town’s strength is in its families, safe streets, local pride, and people who still wave from the driver’s seat. Those are the things I want to protect as we grow with purpose.</p>
          <a className="text-link" href="#service">Read my story <Arrow /></a>
        </div>
      </section>

      <section className="about-story" id="service">
        <div className="container about-story-row">
          <h2>A lifetime of service.<br />More to give.</h2>
          <div className="about-prose">
            <p className="lead">After 35 years serving the federal government, I retired. But I knew I still had something to give.</p>
            <p>For 20 of those years, I served in management, overseeing budgets ranging from small amounts to multiple millions of dollars and managing several facilities at once. I learned to lead people, manage resources, solve problems, make difficult decisions, and be accountable for the results.</p>
            <p>That experience also taught me that leadership isn’t about having every answer. It’s about listening, bringing people together, making informed decisions, and taking responsibility.</p>
            <p>Managing a city is different from managing a federal organization. Clarkson has its own needs, priorities, and opportunities. But responsible leadership starts with the same fundamentals: listen, plan, communicate honestly, and never forget who you work for.</p>
          </div>
        </div>
      </section>

      <section className="container about-story-row about-family">
        <h2>Rooted here.<br />For generations.</h2>
        <div className="about-prose">
          <p>My children have grown up in Clarkson their whole lives. These streets, these people, and these memories are part of who they are, just as they’ve always been part of me.</p>
          <p>Seeing my kids step up to help with this campaign makes me incredibly proud as a mama. It reminds me that the future we’re working toward is personal. It belongs to our families and to the neighbors who make this town what it is.</p>
          <p>I’m grateful for every kind word, every bit of encouragement, and every conversation. I look forward to hearing your concerns, your ideas, and what matters most to your family.</p>
        </div>
      </section>

      <section className="about-principles">
        <div className="container about-story-row">
          <h2>Public office.<br /><span>Public service.</span></h2>
          <div className="about-prose">
            <p className="lead">I’m running because I believe I can make a meaningful contribution to our city. If elected, here’s how I want to serve.</p>
            <dl className="service-commitments">
              <div><dt>Be accessible. Listen first.</dt><dd>Make time for residents, hear your concerns, and communicate honestly.</dd></div>
              <div><dt>Manage responsibly.</dt><dd>Make thoughtful decisions with taxpayer dollars and stay accountable for the results.</dd></div>
              <div><dt>Find practical solutions.</dt><dd>Recognize problems, bring people together, and work toward leaving Clarkson better than we found it.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="container about-closing">
        <blockquote>“I want to be a good person, serve my community, and leave my city better than I found it.”</blockquote>
        <p>I can’t do it alone. With good people, honest communication, and a shared commitment to Clarkson, I believe we can accomplish a lot. I would be grateful for your vote on November 3.</p>
        <Link className="button" href="/contact">Let’s talk about Clarkson <Arrow /></Link>
      </section>

      <section className="red-callout"><div className="container">
        <h2>Follow along.<br />Stay connected.</h2>
        <div><p>Find campaign photos, family moments, and updates from Lisa.</p><a className="button button-light" href={FACEBOOK_URL} target="_blank" rel="noreferrer">Visit Lisa’s Facebook <Arrow /></a></div>
      </div></section>
    </main>
  );
}
