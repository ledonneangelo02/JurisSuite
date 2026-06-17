import { Link } from 'react-router-dom'
import './About.css'
import PencilDivider from './PencilDivider'

export default function Team() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero pb-16">
        <div className="about-hero-content">
          <span className="about-tape about-tape-left" aria-hidden="true" />
          <span className="about-tape about-tape-right" aria-hidden="true" />
          
          <div className="about-eyebrow-container">
            <p className="about-eyebrow">Meet the Team</p>
          </div>
          
          <h1 className="about-title">Built by lawyers. Designed for students.</h1>
          
          <p className="about-subtitle">
            JurisSuite was created by a team of legal education experts who remember 
            the struggles of law school. Every person here is committed to making legal 
            learning better.
          </p>
        </div>
      </section>

      <PencilDivider />

      {/* Team Section */}
      <section className="about-section about-team pb-20">
        <div className="about-section-content">
          <div className="about-team-grid">
            <div className="about-team-card">
              <div className="about-team-image-placeholder">JD</div>
              <h3>Jordan Davis</h3>
              <p className="about-team-role">Founder & Product Lead</p>
              <p className="about-team-bio">
                Law school graduate (Yale '22) who spent 1L frustrated with existing tools. 
                Now passionate about making legal education more accessible and enjoyable for 
                the next generation of lawyers.
              </p>
            </div>
            
            <div className="about-team-card">
              <div className="about-team-image-placeholder">SK</div>
              <h3>Sarah Kim</h3>
              <p className="about-team-role">Head of Design</p>
              <p className="about-team-bio">
                Former UX designer at legal tech firm with deep expertise in how lawyers and 
                students actually work. Obsessed with creating interfaces that feel natural and 
                intuitive, not intimidating.
              </p>
            </div>
            
            <div className="about-team-card">
              <div className="about-team-image-placeholder">MC</div>
              <h3>Marcus Chen</h3>
              <p className="about-team-role">Lead Developer</p>
              <p className="about-team-bio">
                Full-stack engineer with 8+ years building educational technology. Believes that 
                great tools should be invisible—they should just work so students can focus on 
                learning.
              </p>
            </div>

            <div className="about-team-card">
              <div className="about-team-image-placeholder">AL</div>
              <h3>Alex Lee</h3>
              <p className="about-team-role">Legal Strategy & Partnerships</p>
              <p className="about-team-bio">
                Law school instructor and curriculum advisor with experience at T14 schools. 
                Ensures JurisSuite stays aligned with how legal education actually works in 
                the classroom.
              </p>
            </div>
          </div>

          <div className="about-join-team">
            <h3>We're Growing</h3>
            <p>
              JurisSuite is expanding. If you're passionate about legal education and want to 
              help us build the future of law school tools, 
              <Link to="/about/careers" className="about-link"> check out our open positions</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <h2 className="about-section-title">What Drives Us</h2>
          
          <div className="about-values-grid">
            <div className="about-value-card">
              <h3>Genuine Understanding</h3>
              <p>
                We've been where law students are. We understand the pressure, the workload, 
                and the desire to excel. That empathy shapes every decision we make.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Relentless Quality</h3>
              <p>
                We don't ship features we wouldn't use ourselves. Every tool is built to the 
                highest standard because we respect both our craft and our users.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Collaborative Culture</h3>
              <p>
                We listen to feedback from students, professors, and each other. Growth comes 
                from diverse perspectives and a commitment to continuous improvement.
              </p>
            </div>
            
            <div className="about-value-card">
              <h3>Long-Term Vision</h3>
              <p>
                We're not here for a quick win. We're building the future of legal education, 
                one feature, one student, one classroom at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
