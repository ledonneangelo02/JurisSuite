import './About.css'

export default function LearningApproach() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero pb-16">
        <div className="about-hero-content">
          <span className="about-tape about-tape-left" aria-hidden="true" />
          <span className="about-tape about-tape-right" aria-hidden="true" />
          
          <div className="about-eyebrow-container">
            <p className="about-eyebrow">Our Approach</p>
          </div>
          
          <h1 className="about-title">Teaching case analysis the right way.</h1>
          
          <p className="about-subtitle">
            JurisSuite isn't built on guesses. It's built on educational research, 
            feedback from law professors, and a deep understanding of how legal 
            thinking actually develops.
          </p>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <div className="about-section-text">
            <h2>How We Think About Legal Learning</h2>
            <p>
              Traditional case briefing formats force students into a passive mode: read the case, 
              extract facts, identify the holding, move on. But legal thinking isn't passive. 
              It requires active engagement with the material—testing arguments, comparing 
              outcomes, understanding why courts decided the way they did.
            </p>
            <p>
              JurisSuite is built around structured thinking. Instead of endless typed notes, 
              our tools guide students through a framework that mirrors how experienced lawyers 
              actually analyze cases. This helps students develop the habits and patterns of 
              legal reasoning from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <h2 className="about-section-title">Our Educational Principles</h2>
          
          <div className="about-why-list">
            <div className="about-why-item">
              <div className="about-why-icon">📚</div>
              <div>
                <h3>Structure, Not Shortcuts</h3>
                <p>
                  We believe good thinking requires good structure. Our tools provide frameworks 
                  that guide analysis without prescribing answers. Students develop judgment by 
                  working within meaningful constraints.
                </p>
              </div>
            </div>
            
            <div className="about-why-item">
              <div className="about-why-icon">🔍</div>
              <div>
                <h3>Depth Over Speed</h3>
                <p>
                  Yes, JurisSuite saves time. But the real goal is deeper learning. By automating 
                  busy work, we free students to think more carefully about what actually matters 
                  in each case.
                </p>
              </div>
            </div>
            
            <div className="about-why-item">
              <div className="about-why-icon">🎓</div>
              <div>
                <h3>Adaptive to Law School</h3>
                <p>
                  Legal education varies by subject and professor. Our tools adapt to different 
                  case types, doctrinal areas, and teaching styles. One-size-fits-all doesn't 
                  work in law school.
                </p>
              </div>
            </div>
            
            <div className="about-why-item">
              <div className="about-why-icon">🤝</div>
              <div>
                <h3>Collaborative Learning</h3>
                <p>
                  Law school teaches through discussion. JurisSuite briefs are designed to be 
                  shared, compared, and debated. The tool supports classroom dynamics, not 
                  undermines them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <div className="about-highlight-box">
            <h3 style={{ marginTop: 0 }}>Built on Research</h3>
            <p style={{ marginBottom: 0 }}>
              JurisSuite's features are informed by educational psychology, cognitive science research 
              on learning retention, and direct feedback from law students and professors. We don't 
              add features because they sound cool—we add them because evidence shows they help 
              students learn better.
            </p>
          </div>
        </div>
      </section>

      {/* The Tools */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <h2 className="about-section-title">Our Tools Work Together</h2>
          
          <div className="about-values-grid">
            <div className="about-value-card">
              <h3>Case Brief Generator</h3>
              <p>
                Guides students through structured case analysis. Instead of blank pages, 
                students answer targeted questions that help them extract and organize the 
                essential elements of a decision.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Case Analyzer</h3>
              <p>
                Helps students compare cases across doctrinal themes. This comparative analysis 
                builds the pattern recognition and synthesis skills that separate good lawyers 
                from great ones.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Study Organization</h3>
              <p>
                Keeps all materials organized by subject, professor, and reading assignment. 
                No more hunting through notebooks trying to find a case from three weeks ago.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Outline Builder</h3>
              <p>
                Transforms case briefs into course outlines automatically. Students focus on 
                thinking through the law; we handle the organizational busy work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="about-section about-mission pb-20">
        <div className="about-section-content">
          <div className="about-mission-box">
            <h2>Our Commitment to Learning</h2>
            <p>
              Legal education has remained largely unchanged for decades. We think that's because 
              the fundamentals—careful reading, rigorous analysis, structured thinking—are timeless. 
              What's changed is that students now have tools that can handle the busywork, 
              freeing them to focus on what actually matters: learning to think like lawyers.
            </p>
            <p>
              JurisSuite respects the rigor of legal education while acknowledging the reality 
              of modern law school. We're not disrupting legal education. We're enhancing it.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
