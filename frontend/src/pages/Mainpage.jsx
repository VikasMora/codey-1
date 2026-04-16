import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './Mainpage.css'

function Mainpage() {
  const navigate = useNavigate()
  return (
    <div className="mainpage">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Master Coding.
                <br />
                <span className="hero-title-highlight">Transform Your Future.</span>
              </h1>
              <p className="hero-description">
                Learn programming languages, solve real-world challenges, earn certifications, and
                <br />
                access powerful cloud terminals. All in one comprehensive platform.
              </p>
              <div className="hero-actions">
                <button className="btn-primary">
                  <span className="btn-icon">🚀</span>
                  Start Learning Free
                </button>
                <button className="btn-secondary">
                  Watch Demo
                  <span className="btn-icon">▶️</span>
                </button>
              </div>
            </div>
            <div className="hero-editor">
              <button className="code-editor-btn" onClick={() => navigate('/codeeditor')}>
                <span className="editor-icon">⚡</span>
                Code Editor
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3 className="stat-number">100K+</h3>
            <p className="stat-label">Active Students</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Programming Languages</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">1000+</h3>
            <p className="stat-label">Coding Challenges</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">95%</h3>
            <p className="stat-label">Success Rate</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Everything You Need to Code</h2>
          <p className="section-description">
            From interactive coding environments to industry certifications, we provide
            <br />
            all the tools for your coding journey.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon blue">
                &lt;/&gt;
              </div>
              <h3 className="feature-title">Interactive Coding</h3>
              <p className="feature-description">
                Write, test, and debug code in
                <br />
                real-time with our advanced IDE
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon green">
                $
              </div>
              <h3 className="feature-title">Cloud Terminals</h3>
              <p className="feature-description">
                Access powerful cloud-based
                <br />
                terminals from anywhere
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon purple">
                🎓
              </div>
              <h3 className="feature-title">Certifications</h3>
              <p className="feature-description">
                Earn industry-recognized
                <br />
                certificates to boost your career
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon orange">
                📚
              </div>
              <h3 className="feature-title">Structured Learning</h3>
              <p className="feature-description">
                Follow guided paths from
                <br />
                beginner to advanced levels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Languages Section */}
      <section className="languages-section">
        <div className="container">
          <h2 className="section-title">Popular Programming Languages</h2>
          <p className="section-description">
            Learn the most in-demand programming languages with hands-on projects
            <br />
            and real-world applications.
          </p>

          <div className="languages-grid">
            <div className="language-card">
              <div className="language-tag javascript">JavaScript</div>
              <div className="language-stats">59K+ Students</div>
              <div className="language-rating">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="language-card">
              <div className="language-tag python">Python</div>
              <div className="language-stats">45K+ Students</div>
              <div className="language-rating">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="language-card">
              <div className="language-tag java">Java</div>
              <div className="language-stats">40K+ Students</div>
              <div className="language-rating">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="language-card">
              <div className="language-tag react">React</div>
              <div className="language-stats">35K+ Students</div>
              <div className="language-rating">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="language-card">
              <div className="language-tag nodejs">NodeJS</div>
              <div className="language-stats">30K+ Students</div>
              <div className="language-rating">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="language-card">
              <div className="language-tag cpp">C++</div>
              <div className="language-stats">28K+ Students</div>
              <div className="language-rating">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="language-card">
              <div className="language-tag typescript">TypeScript</div>
              <div className="language-stats">25K+ Students</div>
              <div className="language-rating">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="language-card">
              <div className="language-tag go">Go</div>
              <div className="language-stats">20K+ Students</div>
              <div className="language-rating">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase-section">
        <div className="container">
          <div className="showcase-grid">
            <div className="showcase-card">
              <div className="showcase-image ide-image">
                <div className="code-preview">
                  <div className="code-line">function fibonacci(n) {`{`}</div>
                  <div className="code-line">  if (n &lt;= 1) return n;</div>
                  <div className="code-line">  return fibonacci(n-1) + fibonacci(n-2);</div>
                  <div className="code-line">{`}`}</div>
                </div>
              </div>
              <div className="showcase-content">
                <h3 className="showcase-title">Interactive IDE</h3>
                <p className="showcase-description">Code, test, and debug in real-time</p>
              </div>
            </div>

            <div className="showcase-card">
              <div className="showcase-image data-science-image">
                <div className="chart-preview">
                  <div className="chart-bars">
                    <div className="bar" style={{ height: '60%' }}></div>
                    <div className="bar" style={{ height: '80%' }}></div>
                    <div className="bar" style={{ height: '40%' }}></div>
                    <div className="bar" style={{ height: '90%' }}></div>
                  </div>
                </div>
              </div>
              <div className="showcase-content">
                <h3 className="showcase-title">Data Science</h3>
                <p className="showcase-description">Analyze data with Python & R</p>
              </div>
            </div>

            <div className="showcase-card">
              <div className="showcase-image certifications-image">
                <div className="certificate-preview">
                  <div className="certificate-seal">🏆</div>
                  <div className="certificate-text">Certificate of Completion</div>
                </div>
              </div>
              <div className="showcase-content">
                <h3 className="showcase-title">Certifications</h3>
                <p className="showcase-description">Earn industry-recognized certificates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Start Your Coding Journey?</h2>
          <p className="cta-description">
            Join thousands of students who have transformed their careers through coding. Start learning
            <br />
            today with our free tier.
          </p>
          <div className="cta-actions">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary-white">Learn More</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  &lt;/&gt;
                </div>
                <span className="logo-text">Codey</span>
              </div>
              <p className="footer-description">
                Empowering the next generation of
                <br />
                developers with comprehensive coding
                <br />
                education and practical experience.
              </p>
              <div className="footer-social">
                <a href="#">📘</a>
                <a href="#">🐦</a>
                <a href="#">💼</a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Learn</h4>
                <a href="#">Programming Languages</a>
                <a href="#">Data Science</a>
                <a href="#">Web Development</a>
                <a href="#">Mobile Development</a>
              </div>

              <div className="footer-column">
                <h4>Practice</h4>
                <a href="#">Coding Challenges</a>
                <a href="#">Projects</a>
                <a href="#">Hackathons</a>
                <a href="#">Competitions</a>
              </div>

              <div className="footer-column">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Community</a>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 Codey. All rights reserved. Built with passion for coding education.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Mainpage