import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Web.css'

function Web() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Frontend', 'Backend', 'Mobile']
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  return (
    <div className="web-page">
      {/* Header Section */}
      <section className="header-section">
        <div className="container">
          <h1 className="page-title">
            Learn Any
            <br />
            <span className="title-highlight">Programming Language</span>
          </h1>
          <p className="page-description">
            Master the most in-demand programming languages with hands-on projects, expert
            <br />
            guidance, and industry-recognized certifications.
          </p>
          
          {/* Search and Filters */}
          <div className="search-section">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search programming languages, frameworks, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-button">🔍</button>
            </div>
            
            <div className="filters">
              <div className="filter-group">
                <label>📁 Category</label>
                <div className="filter-options">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="filter-group">
                <label>📊 Level</label>
                <div className="filter-options">
                  {levels.map(level => (
                    <button
                      key={level}
                      className={`filter-btn ${selectedLevel === level ? 'active' : ''}`}
                      onClick={() => setSelectedLevel(level)}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most Popular Section */}
      <section className="most-popular-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Most Popular</h2>
            <p className="section-subtitle">Start with the languages everyone's learning</p>
            <a href="#" className="view-all-link">View All →</a>
          </div>
          
          <div className="popular-courses-grid">
            <div className="course-card featured">
              <div className="course-header">
                <div className="course-tag javascript">JavaScript</div>
                <div className="course-rating">⭐ 4.8</div>
              </div>
              <h3 className="course-title">JavaScript</h3>
              <p className="course-subtitle">Frontend</p>
              <p className="course-description">
                The language of the web. Build interactive websites and powerful web applications.
              </p>
              <div className="course-stats">
                <span className="stat-item">📚 12 weeks</span>
                <span className="stat-item">👥 5 projects</span>
              </div>
              <div className="course-topics">
                <span className="topic">Variables & Functions</span>
                <span className="topic">DOM Manipulation</span>
                <span className="topic">+5 more</span>
              </div>
              <Link to="/web/javascript" className="start-learning-btn">
                ▶️ Start Learning
              </Link>
            </div>
            
            <div className="course-card">
              <div className="course-header">
                <div className="course-tag python">Python</div>
                <div className="course-rating">⭐ 4.9</div>
              </div>
              <h3 className="course-title">Python</h3>
              <p className="course-subtitle">Backend</p>
              <p className="course-description">
                Versatile and beginner-friendly. Perfect for web development, data science, and AI.
              </p>
              <div className="course-stats">
                <span className="stat-item">📚 10 weeks</span>
                <span className="stat-item">👥 6 projects</span>
              </div>
              <div className="course-topics">
                <span className="topic">Python Basics</span>
                <span className="topic">Object Oriented Programming</span>
                <span className="topic">+4 more</span>
              </div>
              <Link to="/web/python" className="start-learning-btn">▶️ Start Learning</Link>
            </div>
            
            <div className="course-card">
              <div className="course-header">
                <div className="course-tag java">Java</div>
                <div className="course-rating">⭐ 4.8</div>
              </div>
              <h3 className="course-title">Java</h3>
              <p className="course-subtitle">Backend</p>
              <p className="course-description">
                Enterprise-grade programming language. Build scalable applications and master OOP concepts.
              </p>
              <div className="course-stats">
                <span className="stat-item">📚 14 weeks</span>
                <span className="stat-item">👥 7 projects</span>
              </div>
              <div className="course-topics">
                <span className="topic">OOP Principles</span>
                <span className="topic">Collections Framework</span>
                <span className="topic">+6 more</span>
              </div>
              <Link to="/web/java" className="start-learning-btn">▶️ Start Learning</Link>
            </div>
          </div>
        </div>
      </section>



      {/* All Programming Languages Section */}
      <section className="all-languages-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">All Programming Languages</h2>
            <p className="section-subtitle">8 languages available</p>
          </div>
          
          <div className="all-courses-grid">
            {/* Row 1 */}
            <div className="course-card">
              <div className="course-header">
                <div className="course-tag javascript">JavaScript</div>
                <div className="course-rating">⭐ 4.8</div>
              </div>
              <h3 className="course-title">JavaScript</h3>
              <p className="course-subtitle">Frontend</p>
              <p className="course-description">
                The language of the web. Build interactive websites and powerful web applications.
              </p>
              <div className="course-stats">
                <span className="stat-item">📚 12 weeks</span>
                <span className="stat-item">👥 5 projects</span>
              </div>
              <div className="course-topics">
                <span className="topic">Variables & Functions</span>
                <span className="topic">DOM Manipulation</span>
                <span className="topic">Async Programming</span>
              </div>
              <Link to="/web/javascript" className="start-learning-btn">▶️ Start Learning</Link>
            </div>
            
            <div className="course-card">
              <div className="course-header">
                <div className="course-tag python">Python</div>
                <div className="course-rating">⭐ 4.9</div>
              </div>
              <h3 className="course-title">Python</h3>
              <p className="course-subtitle">Backend</p>
              <p className="course-description">
                Versatile and beginner-friendly. Perfect for web development, data science, and AI.
              </p>
              <div className="course-stats">
                <span className="stat-item">📚 10 weeks</span>
                <span className="stat-item">👥 6 projects</span>
              </div>
              <div className="course-topics">
                <span className="topic">Python Basics</span>
                <span className="topic">Object Oriented Programming</span>
                <span className="topic">Data Structures</span>
              </div>
              <Link to="/web/python" className="start-learning-btn">▶️ Start Learning</Link>
            </div>
            
            <div className="course-card">
              <div className="course-header">
                <div className="course-tag react">React</div>
                <div className="course-rating">⭐ 4.7</div>
              </div>
              <h3 className="course-title">React</h3>
              <p className="course-subtitle">Frontend</p>
              <p className="course-description">
                Build modern user interfaces with the most popular JavaScript library.
              </p>
              <div className="course-stats">
                <span className="stat-item">📚 8 weeks</span>
                <span className="stat-item">👥 4 projects</span>
              </div>
              <div className="course-topics">
                <span className="topic">Components & JSX</span>
                <span className="topic">State Management</span>
                <span className="topic">Hooks</span>
              </div>
              <Link to="/web/react" className="start-learning-btn">▶️ Start Learning</Link>
            </div>

            {/* Row 2 */}
            <div className="course-card">
              <div className="course-header">
                <div className="course-tag java">Java</div>
                <div className="course-rating">⭐ 4.6</div>
              </div>
              <h3 className="course-title">Java</h3>
              <p className="course-subtitle">Backend</p>
              <p className="course-description">
                Enterprise-grade programming. Build scalable web services and Android applications.
              </p>
              <div className="course-stats">
                <span className="stat-item">📚 14 weeks</span>
                <span className="stat-item">👥 7 projects</span>
              </div>
              <div className="course-topics">
                <span className="topic">OOP Principles</span>
                <span className="topic">Collections Framework</span>
                <span className="topic">Multithreading</span>
              </div>
              <Link to="/web/java" className="start-learning-btn">▶️ Start Learning</Link>
            </div>

            <div className="course-card">
              <div className="course-header">
                <div className="course-tag nodejs">NodeJS</div>
                <div className="course-rating">⭐ 4.5</div>
              </div>
              <h3 className="course-title">NodeJS</h3>
              <p className="course-subtitle">Backend</p>
              <p className="course-description">
                Server-side development. Build fast and scalable backend web applications.
              </p>
              <div className="course-stats">
                <span className="stat-item">📚 8 weeks</span>
                <span className="stat-item">👥 5 projects</span>
              </div>
              <div className="course-topics">
                <span className="topic">Runtime & Modules</span>
                <span className="topic">Database Integration</span>
                <span className="topic">Authentication</span>
              </div>
              <Link to="/web/node.js" className="start-learning-btn">▶️ Start Learning</Link>
            </div>

            <div className="course-card">
              <div className="course-header">
                <div className="course-tag typescript">TypeScript</div>
                <div className="course-rating">⭐ 4.8</div>
              </div>
              <h3 className="course-title">TypeScript</h3>
              <p className="course-subtitle">Frontend</p>
              <p className="course-description">
                JavaScript with superpowers. Add type safety to your web applications.
              </p>
              <div className="course-stats">
                <span className="stat-item">📚 6 weeks</span>
                <span className="stat-item">👥 3 projects</span>
              </div>
              <div className="course-topics">
                <span className="topic">Type System</span>
                <span className="topic">Interfaces</span>
                <span className="topic">Generics</span>
              </div>
              <button className="start-learning-btn">▶️ Coming Soon</button>
            </div>

            {/* Additional courses - Row 3 and 4 */}
            <div className="course-card">
              <div className="course-header">
                <div className="course-tag react-native">React Native</div>
                <div className="course-rating">⭐ 4.4</div>
              </div>
              <h3 className="course-title">React Native</h3>
              <p className="course-subtitle">Mobile</p>
              <p className="course-description">
                Cross-platform mobile app development with React-like components for iOS and Android.
              </p>
              <div className="course-stats">
                <span className="stat-item">📚 10 weeks</span>
                <span className="stat-item">👥 4 projects</span>
              </div>
              <div className="course-topics">
                <span className="topic">Navigation</span>
                <span className="topic">Native Components</span>
                <span className="topic">State Management</span>
              </div>
              <button className="start-learning-btn">▶️ Coming Soon</button>
            </div>

            <div className="course-card">
              <div className="course-header">
                <div className="course-tag sql">SQL</div>
                <div className="course-rating">⭐ 4.6</div>
              </div>
              <h3 className="course-title">SQL</h3>
              <p className="course-subtitle">Database</p>
              <p className="course-description">
                Master database queries and data manipulation for any backend system.
              </p>
              <div className="course-stats">
                <span className="stat-item">📚 6 weeks</span>
                <span className="stat-item">👥 4 projects</span>
              </div>
              <div className="course-topics">
                <span className="topic">Basic Queries</span>
                <span className="topic">Joins</span>
                <span className="topic">Stored Procedures</span>
              </div>
              <Link to="/web/sql" className="start-learning-btn">▶️ Start Learning</Link>
            </div>


          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">🔒</div>
            <h2 className="cta-title">Ready to Master Your First Language?</h2>
            <p className="cta-description">
              Join our structured learning paths and earn industry-recognized certifications as you progress
              <br />
              through each language.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">Browse Learning Paths</button>
              <button className="btn-secondary">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Web