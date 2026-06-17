import './About.css'

const partnerTypes = [
  {
    icon: '🏫',
    title: 'Law School Partners',
    description: 'We work with law schools to integrate JurisSuite into their curriculum and provide discounted access to students.',
  },
  {
    icon: '🤝',
    title: 'Bar Prep Providers',
    description: 'Strategic partnerships with bar exam preparation platforms to complement their offerings.',
  },
  {
    icon: '📚',
    title: 'Education Publishers',
    description: 'Collaborations with legal publishing houses to enhance their digital offerings.',
  },
  {
    icon: '💼',
    title: 'Legal Employers',
    description: 'Partnerships with law firms and organizations to support their summer associates and new hires.',
  },
]

const currentPartners = [
  { name: 'Yale Law School', type: 'Institution' },
  { name: 'Harvard Law School', type: 'Institution' },
  { name: 'Columbia Law School', type: 'Institution' },
  { name: 'Bar Association of America', type: 'Association' },
  { name: 'LegalMind', type: 'Technology Partner' },
  { name: 'StudyGuide Pro', type: 'Educational Partner' },
]

export default function Partners() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero pb-16">
        <div className="about-hero-content">
          <span className="about-tape about-tape-left" aria-hidden="true" />
          <span className="about-tape about-tape-right" aria-hidden="true" />
          
          <div className="about-eyebrow-container">
            <p className="about-eyebrow">Our Partners</p>
          </div>
          
          <h1 className="about-title">Building legal education together.</h1>
          
          <p className="about-subtitle">
            We believe in collaboration. JurisSuite is stronger when we work with law schools, 
            educators, and organizations committed to improving legal education.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <h2 className="about-section-title">Ways We Partner</h2>
          
          <div className="about-values-grid">
            {partnerTypes.map((type, index) => (
              <div key={index} className="about-value-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
                  {type.icon}
                </div>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <h2 className="about-section-title">Our Partners</h2>
          
          <div className="about-partners-grid">
            {currentPartners.map((partner, index) => (
              <div key={index} className="about-partner-card">
                <h4 className="about-partner-name">{partner.name}</h4>
                <p className="about-partner-type">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <div className="about-highlight-box">
            <h3 style={{ marginTop: 0 }}>Why Partner with JurisSuite</h3>
            <p style={{ marginBottom: 0 }}>
              We're growing fast with real adoption from students and schools. By partnering early, 
              you position yourself with the leading case analysis tool for legal education. Our 
              partners receive dedicated support, custom integration assistance, and a seat at the 
              table as we shape the future of legal education technology.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <h2 className="about-section-title">Partnership Benefits</h2>
          
          <div className="about-why-list">
            <div className="about-why-item">
              <div className="about-why-icon">🚀</div>
              <div>
                <h3>Dedicated Support</h3>
                <p>
                  You get a dedicated partnership manager who understands your organization's 
                  unique needs and works with you to ensure success.
                </p>
              </div>
            </div>
            
            <div className="about-why-item">
              <div className="about-why-icon">🎯</div>
              <div>
                <h3>Custom Integration</h3>
                <p>
                  Our engineering team works with your systems to ensure seamless integration 
                  with your existing tools and workflows.
                </p>
              </div>
            </div>
            
            <div className="about-why-item">
              <div className="about-why-icon">📊</div>
              <div>
                <h3>Analytics & Insights</h3>
                <p>
                  Access data on student engagement and outcomes to measure the impact of 
                  JurisSuite in your community.
                </p>
              </div>
            </div>
            
            <div className="about-why-item">
              <div className="about-why-icon">💬</div>
              <div>
                <h3>Product Input</h3>
                <p>
                  Partners have direct input on product priorities. Your feedback shapes 
                  what we build next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta pb-32">
        <div className="about-cta-content">
          <h2>Ready to Partner?</h2>
          <p>
            We're always looking for organizations committed to improving legal education. 
            Let's talk about how we can work together.
          </p>
          <a href="mailto:partnerships@jurissuite.com" className="about-btn about-btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
