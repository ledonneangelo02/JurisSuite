import { Link } from 'react-router-dom'
import './About.css'
import CorkBoard from './CorkBoard'

export default function Mission() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero pb-16">
        <div className="about-hero-content">
          <span className="about-tape about-tape-left" aria-hidden="true" />
          <span className="about-tape about-tape-right" aria-hidden="true" />
          
          <div className="about-eyebrow-container">
            <p className="about-eyebrow">Our Mission</p>
          </div>
          
          <h1 className="about-title">Law school shouldn't feel like drowning.</h1>
          
          <p className="about-subtitle">
            We built JurisSuite because we remember what it was like to stay up late, 
            fighting with case briefs and study materials. We wanted to create tools that 
            actually made legal education faster, clearer, and dare we say, enjoyable.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="about-section about-problem pb-20">
        <div className="about-section-content">
          <div className="about-section-text">
            <h2>The Problem We Solve</h2>
            <p>
              Law school demands excellence across multiple dimensions: reading comprehension, 
              legal analysis, memorization, and time management. Yet most students tackle these 
              challenges with tools designed for general note-taking—tools that were never built 
              with legal education in mind.
            </p>
            <p>
              Case briefs become endless typing. Case materials become overwhelming. Study prep 
              becomes a bottleneck rather than a learning opportunity. Hours disappear before 
              you've made real progress.
            </p>
            <p>
              <strong>We decided this needed to change.</strong>
            </p>
          </div>
          
          <div className="about-highlight-box">
            <p className="about-highlight-text">
              "The average law student spends 3-5 hours per week on case briefing alone. 
              That's time that could be spent on deeper analysis, discussion, and synthesis."
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="about-section about-mission pb-20">
        <div className="about-section-content">
          <div className="about-mission-box">
            <h2>Our Mission</h2>
            <p>
              To give every law student access to tools that accelerate their learning, deepen 
              their understanding of legal concepts, and free up time for what matters most: 
              becoming an excellent lawyer.
            </p>
            <p>
              JurisSuite isn't about shortcuts. It's about working smarter, so you can work 
              with intention and care.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-section about-values pb-20">
        <div className="about-section-content">
          <h2 className="about-section-title">Our Core Values</h2>
          
          <div className="about-values-grid">
            <div className="about-value-card">
              <h3>Clarity Over Complexity</h3>
              <p>
                Legal concepts are already complex. Our tools simplify the process without 
                oversimplifying the content. Every feature exists to make understanding clearer.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Student-Centered Design</h3>
              <p>
                We listen to law students. Every feature, every workflow, every design decision 
                is informed by real feedback from people in the trenches of legal education.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Respect for Rigor</h3>
              <p>
                We're not shortcuts—we're accelerators. JurisSuite respects the rigor of legal 
                education and helps you meet those standards more efficiently.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Accessibility</h3>
              <p>
                Quality legal education tools shouldn't require a premium price tag. We're 
                committed to making JurisSuite available to every student who needs it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section about-why pb-20">
        <div className="about-section-content">
          <h2 className="about-section-title">Why Law Students Choose JurisSuite</h2>
          
          <div className="about-why-list">
            <div className="about-why-item">
              <div className="about-why-icon">⚡</div>
              <div>
                <h3>Save Hours Every Week</h3>
                <p>Cut case briefing time from hours to minutes without sacrificing quality or comprehension.</p>
              </div>
            </div>

            <div className="about-why-item">
              <div className="about-why-icon">🎯</div>
              <div>
                <h3>Stay Focused on What Matters</h3>
                <p>Our tools handle the administrative overhead so you can focus on actual legal analysis and learning.</p>
              </div>
            </div>

            <div className="about-why-item">
              <div className="about-why-icon">💼</div>
              <div>
                <h3>Built by People Who Get It</h3>
                <p>Our team includes law graduates and legal educators. We know what law school is really like.</p>
              </div>
            </div>
          </div>

          <CorkBoard>
            <article className="cork-note">
              <div className="note-pin" />
              <div className="note-paper">
                <p className="about-highlight-text">
                  "The average law student spends 3-5 hours per week on case briefing alone.
                  That's time that could be spent on deeper analysis, discussion, and synthesis."
                </p>
              </div>
            </article>
          </CorkBoard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta pb-32">
        <div className="about-cta-content">
          <h2>Ready to Reclaim Your Time?</h2>
          <p>Join hundreds of law students who are already studying smarter with JurisSuite.</p>
          <div className="about-cta-buttons">
            <Link to="/tools" className="about-btn about-btn-primary">
              Try JurisSuite Free
            </Link>
            <Link to="/pricing" className="about-btn about-btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
