import React from "react";
import './Signup.css'

export default function SignUp() {
  return (
    <main className="signup-page">
      <div className="signup-shell">
        <span className="thumb-tack thumb-tack-top-left" aria-hidden="true" />
        <span className="thumb-tack thumb-tack-top-right" aria-hidden="true" />
        <span className="thumb-tack thumb-tack-bottom-left" aria-hidden="true" />
        <span className="thumb-tack thumb-tack-bottom-right" aria-hidden="true" />

        <div className="signup-grid">
          <section className="signup-hero">
            <p className="signup-eyebrow">Join the waitlist</p>
            <h1>Be the first to turn your law notes into case-ready clarity.</h1>
            <p className="signup-copy">
              Sign up for early access and launch updates. We’re building a thoughtful workflow for legal research, briefs, and study sessions that feels as organized as your desk.
            </p>

            <div className="signup-badges" aria-label="Highlights">
              <span className="signup-badge">Early access</span>
              <span className="signup-badge">Case-ready workflow</span>
              <span className="signup-badge">Desk-friendly design</span>
            </div>

            <div className="signup-inline-notes" aria-hidden="true">
              <article className="signup-note signup-note-yellow">
                <p className="signup-note-kicker">Remind me</p>
                <h2>Case log</h2>
                <p>Track the facts, issues, and follow-up questions in one place.</p>
              </article>
              <article className="signup-note signup-note-green">
                <p className="signup-note-kicker">Office essentials</p>
                <h2>Paper trail</h2>
                <p>One clean dashboard for briefs, summaries, and research notes.</p>
              </article>
            </div>
          </section>

          <section className="signup-panel">
            <div className="signup-panel-card">
              <div className="signup-panel-header">
                <span className="signup-stamp">📌</span>
                <div>
                  <p className="signup-panel-label">Secure your spot</p>
                  <p className="signup-panel-copy">A short form, a paper trail, and your invite to the next launch.</p>
                </div>
              </div>

              <form className="signup-form">
                <label className="signup-label" htmlFor="first-name">
                  First name
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    placeholder="Jordan"
                    className="signup-input"
                    required
                  />
                </label>

                <label className="signup-label" htmlFor="last-name">
                  Last name
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    placeholder="Mills"
                    className="signup-input"
                    required
                  />
                </label>

                <label className="signup-label" htmlFor="email">
                  Email address
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="signup-input"
                    required
                  />
                </label>

                <label className="signup-label" htmlFor="password">
                  Create a password
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="At least 8 characters"
                    className="signup-input"
                    required
                  />
                </label>

                <button type="submit" className="signup-button">
                  Join waitlist
                </button>
              </form>

              <p className="signup-form-footnote">
                No spam, just launch notes and product updates for legal research and case prep.
              </p>
            </div>
          </section>
        </div>

        <div className="signup-bottom-strip" aria-hidden="true">
          <article className="signup-bottom-note signup-bottom-note-peach">
            <p className="signup-note-kicker">Desk note</p>
            <strong>Outline ideas</strong>
            <span>Turn scattered thoughts into organized briefs.</span>
          </article>
          <article className="signup-bottom-note signup-bottom-note-blue">
            <p className="signup-note-kicker">Reference</p>
            <strong>Research snapshot</strong>
            <span>Keep citations, questions, and action items close by.</span>
          </article>
          <article className="signup-bottom-note signup-bottom-note-cream">
            <p className="signup-note-kicker">Launch update</p>
            <strong>Coming soon</strong>
            <span>Be the first to explore the workflow as it lands.</span>
          </article>
        </div>
      </div>
    </main>
  );
}