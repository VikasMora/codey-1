import React, { useState } from 'react'
import './Certifications.css'

function Certifications() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="certifications-page">
      {/* Header Section */}
      <section className="header-section">
        <div className="container">
          <h1 className="page-title">
            <span className="title-icon">🎓</span>
            Certifi
            <span className="title-highlight">cations</span>
          </h1>
          <p className="page-description">
            Advance your career with industry-recognized certifications from top tech companies.
            <br />
            Build expertise, validate your skills, and stand out in the competitive job market.
          </p>
          
          {/* Statistics Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon earned">
                🏆
              </div>
              <div className="stat-content">
                <h3 className="stat-number">5</h3>
                <p className="stat-label">Earned</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon available">
                📚
              </div>
              <div className="stat-content">
                <h3 className="stat-number">12</h3>
                <p className="stat-label">Available</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon skills">
                ⚡
              </div>
              <div className="stat-content">
                <h3 className="stat-number">38</h3>
                <p className="stat-label">Skills</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon completion">
                📈
              </div>
              <div className="stat-content">
                <h3 className="stat-number">64.5%</h3>
                <p className="stat-label">Completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earned Certifications */}
      <section className="earned-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Your Earned Certifications</h2>
            <button className="download-all-btn">📥 Download All</button>
          </div>
          
          <div className="earned-grid">
            <div className="earned-card">
              <div className="card-header">
                <div className="cert-icon aws">🟠</div>
                <div className="cert-badge earned">✅ Earned</div>
              </div>
              <h3 className="cert-title">AWS Certified Solutions Architect</h3>
              <p className="cert-provider">Amazon Web Services</p>
              <div className="cert-details">
                <span className="cert-date">Earned: Nov 15, 2023</span>
                <span className="cert-expires">Expires: Nov 15, 2026</span>
              </div>
              <div className="cert-actions">
                <button className="download-btn">📥 Download</button>
                <button className="verify-btn">🔗 Verify</button>
              </div>
            </div>

            <div className="earned-card">
              <div className="card-header">
                <div className="cert-icon azure">🔵</div>
                <div className="cert-badge earned">✅ Earned</div>
              </div>
              <h3 className="cert-title">Azure AI-900 Fundamentals</h3>
              <p className="cert-provider">Microsoft Azure</p>
              <div className="cert-details">
                <span className="cert-date">Earned: Oct 22, 2023</span>
                <span className="cert-expires">Expires: Oct 22, 2025</span>
              </div>
              <div className="cert-actions">
                <button className="download-btn">📥 Download</button>
                <button className="verify-btn">🔗 Verify</button>
              </div>
            </div>

            <div className="earned-card">
              <div className="card-header">
                <div className="cert-icon google">🟢</div>
                <div className="cert-badge earned">✅ Earned</div>
              </div>
              <h3 className="cert-title">Google Analytics Individual Qualification</h3>
              <p className="cert-provider">Google</p>
              <div className="cert-details">
                <span className="cert-date">Earned: Sep 10, 2023</span>
                <span className="cert-expires">Expires: Sep 10, 2024</span>
              </div>
              <div className="cert-actions">
                <button className="download-btn">📥 Download</button>
                <button className="verify-btn">🔗 Verify</button>
              </div>
            </div>

            <div className="earned-card">
              <div className="card-header">
                <div className="cert-icon azure">🔵</div>
                <div className="cert-badge earned">✅ Earned</div>
              </div>
              <h3 className="cert-title">Azure Fundamentals AZ-900</h3>
              <p className="cert-provider">Microsoft</p>
              <div className="cert-details">
                <span className="cert-date">Earned: Aug 18, 2023</span>
                <span className="cert-expires">Expires: Aug 18, 2025</span>
              </div>
              <div className="cert-actions">
                <button className="download-btn">📥 Download</button>
                <button className="verify-btn">🔗 Verify</button>
              </div>
            </div>

            <div className="earned-card">
              <div className="card-header">
                <div className="cert-icon hubspot">🟡</div>
                <div className="cert-badge earned">✅ Earned</div>
              </div>
              <h3 className="cert-title">HubSpot Social Media Marketing Professional Certificate</h3>
              <p className="cert-provider">HubSpot</p>
              <div className="cert-details">
                <span className="cert-date">Earned: Jul 25, 2023</span>
                <span className="cert-expires">Valid for lifetime</span>
              </div>
              <div className="cert-actions">
                <button className="download-btn">📥 Download</button>
                <button className="verify-btn">🔗 Verify</button>
              </div>
            </div>

            <div className="earned-card">
              <div className="card-header">
                <div className="cert-icon google">🟢</div>
                <div className="cert-badge earned">✅ Earned</div>
              </div>
              <h3 className="cert-title">Google Developer Essentials Path</h3>
              <p className="cert-provider">Google Cloud</p>
              <div className="cert-details">
                <span className="cert-date">Earned: Jun 12, 2023</span>
                <span className="cert-expires">Valid for lifetime</span>
              </div>
              <div className="cert-actions">
                <button className="download-btn">📥 Download</button>
                <button className="verify-btn">🔗 Verify</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Certifications */}
      <section className="available-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Available Certifications</h2>
            <div className="filter-tabs">
              <button 
                className={`tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Categories
              </button>
              <button 
                className={`tab ${activeTab === 'popular' ? 'active' : ''}`}
                onClick={() => setActiveTab('popular')}
              >
                Popular
              </button>
              <button 
                className={`tab ${activeTab === 'free' ? 'active' : ''}`}
                onClick={() => setActiveTab('free')}
              >
                Free
              </button>
              <button 
                className={`tab ${activeTab === 'languages' ? 'active' : ''}`}
                onClick={() => setActiveTab('languages')}
              >
                Languages
              </button>
              <button 
                className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
                onClick={() => setActiveTab('recommended')}
              >
                Recommended
              </button>
            </div>
          </div>
          
          <div className="available-grid">
            {/* Row 1 */}
            <div className="cert-card">
              <div className="card-header">
                <div className="cert-icon aws">🟠</div>
                <div className="cert-badge popular">✨ Popular</div>
              </div>
              <h3 className="cert-title">AWS Certified Solutions Architect Associate</h3>
              <p className="cert-provider">Amazon Web Services</p>
              <p className="cert-description">Design and deploy scalable systems on AWS</p>
              
              <div className="cert-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '0%'}}></div>
                </div>
                <span className="progress-text">Not started</span>
              </div>
              
              <div className="cert-info">
                <div className="info-item">
                  <span className="info-label">Duration:</span>
                  <span className="info-value">40-60 hours</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Level:</span>
                  <span className="info-value">Intermediate</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Price:</span>
                  <span className="info-value price">$150</span>
                </div>
              </div>
              
              <button className="enroll-btn">🚀 Start Learning</button>
            </div>

            <div className="cert-card">
              <div className="card-header">
                <div className="cert-icon oracle">🔴</div>
                <div className="cert-badge hot">🔥 Hot</div>
              </div>
              <h3 className="cert-title">Oracle Java Developer Associate</h3>
              <p className="cert-provider">Oracle Java Platform</p>
              <p className="cert-description">Build applications using thorough knowledge of Java SE</p>
              
              <div className="cert-progress">
                <div className="progress-bar">
                  <div className="progress-fill oracle-progress" style={{width: '0%'}}></div>
                </div>
                <span className="progress-text">Not started</span>
              </div>
              
              <div className="cert-info">
                <div className="info-item">
                  <span className="info-label">Duration:</span>
                  <span className="info-value">30-45 hours</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Level:</span>
                  <span className="info-value">Advanced</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Price:</span>
                  <span className="info-value price">$245</span>
                </div>
              </div>
              
              <button className="enroll-btn oracle">🚀 Start Learning</button>
            </div>

            <div className="cert-card">
              <div className="card-header">
                <div className="cert-icon azure">🔵</div>
                <div className="cert-badge popular">✨ Popular</div>
              </div>
              <h3 className="cert-title">Azure AI Fundamentals</h3>
              <p className="cert-provider">Microsoft Azure</p>
              <p className="cert-description">Demonstrate knowledge of common ML and AI workloads</p>
              
              <div className="cert-progress">
                <div className="progress-bar">
                  <div className="progress-fill azure-progress" style={{width: '0%'}}></div>
                </div>
                <span className="progress-text">Not started</span>
              </div>
              
              <div className="cert-info">
                <div className="info-item">
                  <span className="info-label">Duration:</span>
                  <span className="info-value">15-20 hours</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Level:</span>
                  <span className="info-value">Beginner</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Price:</span>
                  <span className="info-value price">$99</span>
                </div>
              </div>
              
              <button className="enroll-btn azure">🚀 Start Learning</button>
            </div>

            {/* Row 2 */}
            <div className="cert-card">
              <div className="card-header">
                <div className="cert-icon google-cloud">🔵</div>
                <div className="cert-badge trending">📈 Trending</div>
              </div>
              <h3 className="cert-title">Google Cloud Professional Cloud Architect</h3>
              <p className="cert-provider">Google Cloud</p>
              <p className="cert-description">Design and plan cloud solution architecture</p>
              
              <div className="cert-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '25%'}}></div>
                </div>
                <span className="progress-text">25% Complete</span>
              </div>
              
              <div className="cert-info">
                <div className="info-item">
                  <span className="info-label">Duration:</span>
                  <span className="info-value">50-70 hours</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Level:</span>
                  <span className="info-value">Professional</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Price:</span>
                  <span className="info-value price">$200</span>
                </div>
              </div>
              
              <button className="enroll-btn google-cloud">📚 Continue</button>
            </div>

            <div className="cert-card">
              <div className="card-header">
                <div className="cert-icon google-analytics">🟢</div>
                <div className="cert-badge popular">✨ Popular</div>
              </div>
              <h3 className="cert-title">Google Analytics Individual Qualification</h3>
              <p className="cert-provider">Google</p>
              <p className="cert-description">Demonstrate proficiency in Google Analytics</p>
              
              <div className="cert-progress">
                <div className="progress-bar">
                  <div className="progress-fill google-progress" style={{width: '0%'}}></div>
                </div>
                <span className="progress-text">Not started</span>
              </div>
              
              <div className="cert-info">
                <div className="info-item">
                  <span className="info-label">Duration:</span>
                  <span className="info-value">10-15 hours</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Level:</span>
                  <span className="info-value">Beginner</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Price:</span>
                  <span className="info-value price free">Free</span>
                </div>
              </div>
              
              <button className="enroll-btn google">🚀 Start Learning</button>
            </div>

            <div className="cert-card">
              <div className="card-header">
                <div className="cert-icon azure">🔵</div>
                <div className="cert-badge popular">✨ Popular</div>
              </div>
              <h3 className="cert-title">Azure Fundamentals AZ-900</h3>
              <p className="cert-provider">Microsoft</p>
              <p className="cert-description">Foundational level knowledge of cloud services</p>
              
              <div className="cert-progress">
                <div className="progress-bar">
                  <div className="progress-fill azure-progress" style={{width: '0%'}}></div>
                </div>
                <span className="progress-text">Not started</span>
              </div>
              
              <div className="cert-info">
                <div className="info-item">
                  <span className="info-label">Duration:</span>
                  <span className="info-value">20-25 hours</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Level:</span>
                  <span className="info-value">Beginner</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Price:</span>
                  <span className="info-value price">$99</span>
                </div>
              </div>
              
              <button className="enroll-btn azure">🚀 Start Learning</button>
            </div>

            {/* Continue with more certification cards... */}
            <div className="cert-card">
              <div className="card-header">
                <div className="cert-icon meta">🟣</div>
                <div className="cert-badge hot">🔥 Hot</div>
              </div>
              <h3 className="cert-title">Meta Social Media Marketing Professional Certificate</h3>
              <p className="cert-provider">Meta</p>
              <p className="cert-description">Learn social media marketing strategies and tools</p>
              
              <div className="cert-progress">
                <div className="progress-bar">
                  <div className="progress-fill meta-progress" style={{width: '0%'}}></div>
                </div>
                <span className="progress-text">Not started</span>
              </div>
              
              <div className="cert-info">
                <div className="info-item">
                  <span className="info-label">Duration:</span>
                  <span className="info-value">4-6 months</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Level:</span>
                  <span className="info-value">Beginner</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Price:</span>
                  <span className="info-value price">$49/month</span>
                </div>
              </div>
              
              <button className="enroll-btn meta">🚀 Start Learning</button>
            </div>

            {/* Add more certification cards following the same pattern */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">🎓</div>
            <h2 className="cta-title">Ready to Get Certified?</h2>
            <p className="cta-description">
              Join thousands of professionals who have advanced their careers with industry-recognized
              <br />
              certifications. Start your learning journey today and unlock new opportunities.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">🚀 Start Learning</button>
              <button className="btn-secondary">Browse Catalog</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certifications