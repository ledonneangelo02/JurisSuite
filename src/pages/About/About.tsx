import './About.css'

export default function About() {

  return (
    <div className="about-container">
      <div className="about-hero pb-16">
        <div className="about-hero-content">
          <span className="about-tape about-tape-left" aria-hidden="true" />
          <span className="about-tape about-tape-right" aria-hidden="true" />

          <div className="about-eyebrow-container">
            <p className="about-eyebrow">Our Mission</p>
          </div>
          <h1 className="about-title">Making legal education more effective and accessible.</h1>
          <p className="about-subtitle">
            We believe law school should prepare students for the realities of legal practice, 
            not just test-taking. Our mission is to create tools that help students learn more 
            efficiently, retain information better, and ultimately become better lawyers.
          </p>
        </div>
      </div>
    </div>
  )
}