import './About.css'

//const testimonials = []

export default function Testimonials() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero pb-16">
        <div className="about-hero-content">
          <span className="about-tape about-tape-left" aria-hidden="true" />
          <span className="about-tape about-tape-right" aria-hidden="true" />
          
          <div className="about-eyebrow-container">
            <p className="about-eyebrow">Testimonials</p>
          </div>
          
          <h1 className="about-title">What students and professors are saying.</h1>
          
          <p className="about-subtitle">
            Don't just take our word for it. Hear from the law students, professors, and institutions 
            who are using JurisSuite to transform how they study and teach legal concepts.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <div className="about-testimonials-grid">
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <h2 className="about-section-title">By the Numbers</h2>
          
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-number">2.5k+</div>
              <p className="about-stat-label">Active Students</p>
              <p className="about-stat-description">Law students across the country using JurisSuite daily</p>
            </div>
            
            <div className="about-stat-card">
              <div className="about-stat-number">48 hrs</div>
              <p className="about-stat-label">Saved Per Semester</p>
              <p className="about-stat-description">Average time saved per student per semester</p>
            </div>
            
            <div className="about-stat-card">
              <div className="about-stat-number">15+</div>
              <p className="about-stat-label">Law Schools</p>
              <p className="about-stat-description">Partner institutions offering JurisSuite to students</p>
            </div>
            
            <div className="about-stat-card">
              <div className="about-stat-number">4.8/5</div>
              <p className="about-stat-label">User Rating</p>
              <p className="about-stat-description">Average rating from students using our tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="about-section pb-20">
        <div className="about-section-content">
          <div className="about-mission-box">
            <h2>Making a Real Impact</h2>
            <p>
              What excites us most isn't the numbers—it's the feedback we get from students and 
              professors. Teachers tell us they're seeing better prepared students. Students tell 
              us they're less stressed and learning more effectively. That's the real measure of success.
            </p>
            <p>
              We're committed to continuing to build tools that respect the rigor and traditions of 
              legal education while making it more accessible and less overwhelming. This is just 
              the beginning of what JurisSuite can become.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta pb-32">
        <div className="about-cta-content">
          <h2>Join Thousands of Law Students</h2>
          <p>Experience the difference that smarter tools can make in your legal education.</p>
          <div className="about-cta-buttons">
            <a href="#" className="about-btn about-btn-primary">Start Free Trial</a>
            <a href="#" className="about-btn about-btn-secondary">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  )
}
