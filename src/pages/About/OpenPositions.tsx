import { Link } from 'react-router-dom'
import './About.css'
import CorkBoard from './CorkBoard'
import PencilDivider from './PencilDivider'

const openPositions = [
  {
    title: 'Senior Product Manager',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead the product roadmap for JurisSuite. You\'ll work closely with students, professors, and our engineering team to shape the future of legal education technology.',
    requirements: ['5+ years in product management', 'Passion for education technology', 'Experience building tools for students'],
  },
  {
    title: 'Full-Stack Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build scalable, user-friendly features for JurisSuite. You\'ll work on both frontend and backend systems that serve thousands of law students.',
    requirements: ['3+ years of software development', 'Experience with React and modern web technologies', 'Interest in educational technology'],
  },
  {
    title: 'Legal Curriculum Designer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Shape how JurisSuite teaches case analysis. Work with law professors and students to ensure our tools align with how legal thinking actually develops.',
    requirements: ['JD or legal background', 'Teaching experience or curriculum development', 'Deep understanding of legal education'],
  },
  {
    title: 'Customer Success Manager',
    location: 'Remote',
    type: 'Full-time',
    description: 'Be the voice of students and professors. Help schools and individuals get the most from JurisSuite and share feedback that shapes our product.',
    requirements: ['2+ years in customer-facing roles', 'Excellent communication skills', 'Genuine interest in student success'],
  },
]

export default function OpenPositions() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero pb-16">
        <div className="about-hero-content">
          <span className="about-tape about-tape-left" aria-hidden="true" />
          <span className="about-tape about-tape-right" aria-hidden="true" />
          
          <div className="about-eyebrow-container">
            <p className="about-eyebrow">Join Our Team</p>
          </div>
          
          <h1 className="about-title">Help us change legal education.</h1>
          
          <p className="about-subtitle">
            We're building a team of talented people who care about making law school better. 
            If you're passionate about education technology and want to make a real impact, 
            we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <PencilDivider />
      <section className="about-section pb-20">
        <div className="about-section-content">
          <CorkBoard>
            <article className="cork-note">
              <div className="note-pin" />
              <div className="note-paper">
                <h4 style={{ marginTop: 0 }}>Why Join JurisSuite</h4>
                <p style={{ marginBottom: 0 }}>
                  You'll work with a team that genuinely cares about students and legal education.
                  We're funded, growing, and have real traction with law schools and individual students.
                  You'll have autonomy, impact, and the support you need to do your best work.
                </p>
              </div>
            </article>
          </CorkBoard>
        </div>
      </section>

      {/* Open Positions */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <h2 className="about-section-title">Open Positions</h2>
          
          <div className="about-positions-list">
            {openPositions.map((position, index) => (
              <div key={index} className="about-position-card">
                <div className="about-position-header">
                  <div>
                    <h3 className="about-position-title">{position.title}</h3>
                    <p className="about-position-meta">
                      <span className="about-position-location">📍 {position.location}</span>
                      <span className="about-position-type">{position.type}</span>
                    </p>
                  </div>
                </div>
                
                <p className="about-position-description">{position.description}</p>
                
                <div className="about-position-requirements">
                  <p className="about-position-requirements-label">We're Looking For:</p>
                  <ul className="about-position-requirements-list">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <a href="mailto:careers@jurissuite.com" className="about-position-button">
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <h2 className="about-section-title">What We Offer</h2>
          
          <div className="about-values-grid">
            <div className="about-value-card">
              <h3>Competitive Compensation</h3>
              <p>
                We pay market rates for roles in tech and education. You should be focused on 
                impact, not worrying about your paycheck.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Remote Work</h3>
              <p>
                Build your ideal work environment. We're distributed across the country and 
                have the tools and practices to make remote collaboration seamless.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Learning Budget</h3>
              <p>
                Invest in yourself. Conference attendance, courses, books—we support your 
                professional growth because we care about your development.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Health & Wellness</h3>
              <p>
                Comprehensive health insurance, mental health support, and flexibility around 
                work schedules because sustainable work is better work.
              </p>
            </div>

            <div className="about-value-card">
              <h3>Equity & Impact</h3>
              <p>
                You're not just an employee. You're a builder. You'll have ownership in the 
                company and real influence over where we're headed.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Supportive Community</h3>
              <p>
                We're building a team that supports each other. Regular syncs, async communication 
                practices, and a genuine commitment to work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta pb-32">
        <div className="about-cta-content">
          <h2>Don't See Your Role Listed?</h2>
          <p>
            We're always looking for talented people. If you're passionate about legal education 
            and think you'd be a great fit, reach out.
          </p>
          <a href="mailto:careers@jurissuite.com" className="about-btn about-btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
