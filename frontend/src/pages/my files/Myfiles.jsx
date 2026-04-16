import React, { useState } from 'react'
import './Myfiles.css'

function Myfiles() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFileType, setSelectedFileType] = useState('All files')
  const [sortBy, setSortBy] = useState('Modified')
  const [viewMode, setViewMode] = useState('grid')

  const fileTypes = ['All files', 'Projects', 'HTML', 'CSS', 'JavaScript', 'Python', 'Java']
  const sortOptions = ['Modified', 'Name', 'Size', 'Date Created']

  return (
    <div className="myfiles-page">
      {/* Header Section */}
      <section className="header-section">
        <div className="container">
          <h1 className="page-title">
            My Code
            <br />
            <span className="title-highlight">Files & Projects</span>
          </h1>
          <p className="page-description">
            Organize, manage, and download all your coding projects and practice solutions. Keep
            <br />
            track of your programming journey with easy access to all your work.
          </p>
          
          {/* Statistics Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon blue">
                📁
              </div>
              <div className="stat-content">
                <h3 className="stat-number">8</h3>
                <p className="stat-label">Total Files</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon green">
                💾
              </div>
              <div className="stat-content">
                <h3 className="stat-number">77 KB</h3>
                <p className="stat-label">Storage Used</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon purple">
                💻
              </div>
              <div className="stat-content">
                <h3 className="stat-number">8</h3>
                <p className="stat-label">Languages</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon orange">
                ✅
              </div>
              <div className="stat-content">
                <h3 className="stat-number">6</h3>
                <p className="stat-label">Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="controls-section">
        <div className="container">
          <div className="controls-wrapper">
            <div className="search-controls">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search files, projects, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
              
              <div className="filter-controls">
                <select 
                  value={selectedFileType} 
                  onChange={(e) => setSelectedFileType(e.target.value)}
                  className="filter-select"
                >
                  {fileTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                
                <div className="sort-control">
                  <span className="sort-icon">📊</span>
                  <span>Sort by</span>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                  >
                    {sortOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="results-info">
                <span>6 files found</span>
              </div>
            </div>
            
            <div className="action-controls">
              <button className="upload-btn">
                📤 Upload
              </button>
              <button className="new-file-btn">
                ➕ New File
              </button>
              <div className="view-toggle">
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  ⊞
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  ≡
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {/* Row 1 */}
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <span className="file-icon">⚡</span>
                </div>
                <div className="project-meta">
                  <h3 className="project-title">Merge Sort Algorithm</h3>
                  <div className="project-tags">
                    <span className="tag cpp">C++</span>
                    <span className="tag-star">⭐</span>
                  </div>
                  <p className="project-description">
                    Efficient divide-and-conquer sorting algorithm with
                    <br />
                    complexity analysis.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <div className="detail-row">
                  <span className="detail-label">algorithm</span>
                  <span className="detail-label">sorting</span>
                  <span className="detail-label">cpp</span>
                  <span className="detail-more">+1</span>
                </div>
                <div className="project-stats">
                  <span className="stat">📄 3.2 KB</span>
                  <span className="stat">📅 6 days ago</span>
                </div>
              </div>
              <button className="download-btn">⬇️ Download</button>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <span className="file-icon">🔐</span>
                </div>
                <div className="project-meta">
                  <h3 className="project-title">JWT Authentication System</h3>
                  <div className="project-tags">
                    <span className="tag nodejs">NodeJS</span>
                  </div>
                  <p className="project-description">
                    Complete JWT-based authentication with
                    <br />
                    TypeScript.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <div className="detail-row">
                  <span className="detail-label">typescript</span>
                  <span className="detail-label">jwt</span>
                  <span className="detail-label">authentication</span>
                </div>
                <div className="project-stats">
                  <span className="stat">📄 8.1 KB</span>
                  <span className="stat">📅 3 days ago</span>
                </div>
              </div>
              <button className="download-btn">⬇️ Download</button>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <span className="file-icon">🌐</span>
                </div>
                <div className="project-meta">
                  <h3 className="project-title">Personal Portfolio Site</h3>
                  <div className="project-tags">
                    <span className="tag html">HTML/CSS</span>
                    <span className="tag-star">⭐</span>
                  </div>
                  <p className="project-description">
                    Responsive personal website with
                    <br />
                    modern design.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <div className="detail-row">
                  <span className="detail-label">html</span>
                  <span className="detail-label">css</span>
                  <span className="detail-label">portfolio</span>
                  <span className="detail-more">+1</span>
                </div>
                <div className="project-stats">
                  <span className="stat">📄 12.7 KB</span>
                  <span className="stat">📅 1 day ago</span>
                </div>
              </div>
              <button className="download-btn">⬇️ Download</button>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <span className="file-icon">📊</span>
                </div>
                <div className="project-meta">
                  <h3 className="project-title">Fibonacci DP Solution</h3>
                  <div className="project-tags">
                    <span className="tag java">Java</span>
                  </div>
                  <p className="project-description">
                    Dynamic programming approach to
                    <br />
                    Fibonacci sequence.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <div className="detail-row">
                  <span className="detail-label">dynamic programming</span>
                  <span className="detail-label">java</span>
                  <span className="detail-label">optimization</span>
                </div>
                <div className="project-stats">
                  <span className="stat">📄 1.9 KB</span>
                  <span className="stat">📅 5 days ago</span>
                </div>
              </div>
              <button className="download-btn">⬇️ Download</button>
            </div>

            {/* Row 2 */}
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <span className="file-icon">🔗</span>
                </div>
                <div className="project-meta">
                  <h3 className="project-title">Linked List Data Structure</h3>
                  <div className="project-tags">
                    <span className="tag python">Python</span>
                    <span className="tag-star">⭐</span>
                  </div>
                  <p className="project-description">
                    Complete linked list implementation with all
                    <br />
                    operations.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <div className="detail-row">
                  <span className="detail-label">data structure</span>
                  <span className="detail-label">python</span>
                  <span className="detail-label">linked list</span>
                </div>
                <div className="project-stats">
                  <span className="stat">📄 4.3 KB</span>
                  <span className="stat">📅 2 weeks ago</span>
                </div>
              </div>
              <button className="download-btn">⬇️ Download</button>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <span className="file-icon">🔍</span>
                </div>
                <div className="project-meta">
                  <h3 className="project-title">SQL Joins and Subqueries</h3>
                  <div className="project-tags">
                    <span className="tag sql">SQL</span>
                  </div>
                  <p className="project-description">
                    Complex SQL queries for database relationship
                    <br />
                    manipulation.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <div className="detail-row">
                  <span className="detail-label">sql</span>
                  <span className="detail-label">database</span>
                  <span className="detail-label">joins</span>
                </div>
                <div className="project-stats">
                  <span className="stat">📄 2.8 KB</span>
                  <span className="stat">📅 1 week ago</span>
                </div>
              </div>
              <button className="download-btn">⬇️ Download</button>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <span className="file-icon">📱</span>
                </div>
                <div className="project-meta">
                  <h3 className="project-title">React Todo Application</h3>
                  <div className="project-tags">
                    <span className="tag react">React</span>
                  </div>
                  <p className="project-description">
                    Full-featured todo app with hooks and
                    <br />
                    local storage.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <div className="detail-row">
                  <span className="detail-label">react</span>
                  <span className="detail-label">hooks</span>
                  <span className="detail-label">frontend</span>
                </div>
                <div className="project-stats">
                  <span className="stat">📄 15.6 KB</span>
                  <span className="stat">📅 3 days ago</span>
                </div>
              </div>
              <button className="download-btn">⬇️ Download</button>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <span className="file-icon">🔍</span>
                </div>
                <div className="project-meta">
                  <h3 className="project-title">Binary Search Implementation</h3>
                  <div className="project-tags">
                    <span className="tag javascript">JavaScript</span>
                    <span className="tag-star">⭐</span>
                  </div>
                  <p className="project-description">
                    Efficient binary search algorithm with O(log n)
                    <br />
                    complexity.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <div className="detail-row">
                  <span className="detail-label">algorithm</span>
                  <span className="detail-label">search</span>
                  <span className="detail-label">javascript</span>
                </div>
                <div className="project-stats">
                  <span className="stat">📄 2.1 KB</span>
                  <span className="stat">📅 4 days ago</span>
                </div>
              </div>
              <button className="download-btn">⬇️ Download</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">⚡</div>
            <h2 className="cta-title">Keep Your Code Organized</h2>
            <p className="cta-description">
              Access your code from anywhere, sync across devices, and never lose your progress. Your
              <br />
              coding journey, always at your fingertips.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">📂 Manage Storage</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Myfiles