import React, { useState } from 'react'
import './Leaderboard.css'

function Leaderboard() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPeriod, setSelectedPeriod] = useState('Overall')
  const [selectedFilter, setSelectedFilter] = useState('Rankings')

  const periods = ['Weekly', 'Overall']
  const filters = ['Rankings', 'Stats', 'Achievements', 'Contests']

  return (
    <div className="leaderboard-page">
      {/* Header Section */}
      <section className="header-section">
        <div className="container">
          <div className="header-content">
            <div className="header-icon">
              🏆
            </div>
            <h1 className="page-title">
              Leader
              <br />
              <span className="title-highlight">Board</span>
            </h1>
          </div>
          <p className="page-description">
            Compete with fellow coders and climb the ranks. Track your progress, maintain your
            <br />
            streak, and become the ultimate coding champion.
          </p>
          
          {/* Statistics Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon blue">
                👥
              </div>
              <div className="stat-content">
                <h3 className="stat-number">1008</h3>
                <p className="stat-label">Active Coders</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon green">
                ✅
              </div>
              <div className="stat-content">
                <h3 className="stat-number">12.5K</h3>
                <p className="stat-label">Problems Solved</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon purple">
                🔥
              </div>
              <div className="stat-content">
                <h3 className="stat-number">847</h3>
                <p className="stat-label">Day Max Streak</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon orange">
                🏅
              </div>
              <div className="stat-content">
                <h3 className="stat-number">156</h3>
                <p className="stat-label">Contests held</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Profile Card */}
      <section className="user-profile-section">
        <div className="container">
          <div className="user-profile-card">
            <div className="user-info">
              <div className="user-avatar">
                <img src="/api/placeholder/48/48" alt="Your profile" />
              </div>
              <div className="user-details">
                <h3 className="user-name">You</h3>
                <p className="user-handle">@yourUsername</p>
                <div className="user-badges">
                  <span className="badge rank-badge">🏆 Rank #70</span>
                  <span className="badge level-badge">🎯 Mid Level</span>
                </div>
              </div>
            </div>
            <div className="user-stats">
              <div className="stat-item">
                <h4 className="stat-value">6,420</h4>
                <p className="stat-name">Points</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-value">89</h4>
                <p className="stat-name">Problems</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-value">15</h4>
                <p className="stat-name">Day Streak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="controls-section">
        <div className="container">
          <div className="controls-wrapper">
            <div className="search-controls">
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <div className="period-toggle">
                {periods.map(period => (
                  <button
                    key={period}
                    className={`period-btn ${selectedPeriod === period ? 'active' : ''}`}
                    onClick={() => setSelectedPeriod(period)}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="filter-controls">
              {filters.map(filter => (
                <button
                  key={filter}
                  className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter === 'Rankings' && '🏆'}
                  {filter === 'Stats' && '📊'}
                  {filter === 'Achievements' && '🏅'}
                  {filter === 'Contests' && '🎯'}
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="podium-section">
        <div className="container">
          <div className="podium-wrapper">
            <div className="podium-card second-place">
              <div className="rank-badge">2</div>
              <div className="user-avatar">
                <img src="/api/placeholder/64/64" alt="Sarah Johnson" />
              </div>
              <h4 className="user-name">Sarah Johnson</h4>
              <p className="user-handle">@SJ_coder</p>
              <div className="user-level advanced">Advanced</div>
              <div className="user-points">
                <span className="points-icon">⭐</span>
                <span className="points-value">575</span>
              </div>
              <div className="accuracy">🎯 94% Acc</div>
            </div>
            
            <div className="podium-card first-place">
              <div className="crown">👑</div>
              <div className="rank-badge winner">1</div>
              <div className="user-avatar">
                <img src="/api/placeholder/80/80" alt="Alex Chen" />
              </div>
              <h4 className="user-name">Alex Chen</h4>
              <p className="user-handle">@CodeMaster324</p>
              <div className="user-level expert">Expert</div>
              <div className="user-points">
                <span className="points-icon">⭐</span>
                <span className="points-value">1,041</span>
              </div>
              <div className="accuracy">🎯 97% Acc</div>
            </div>
            
            <div className="podium-card third-place">
              <div className="rank-badge">3</div>
              <div className="user-avatar">
                <img src="/api/placeholder/64/64" alt="Raj Patel" />
              </div>
              <h4 className="user-name">Raj Patel</h4>
              <p className="user-handle">@DevRaj</p>
              <div className="user-level pro">Pro</div>
              <div className="user-points">
                <span className="points-icon">⭐</span>
                <span className="points-value">345</span>
              </div>
              <div className="accuracy">🎯 90% Acc</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="leaderboard-section">
        <div className="container">
          <div className="leaderboard-table">
            <div className="table-row header-row">
              <div className="rank-col">#</div>
              <div className="user-col">User</div>
              <div className="points-col">Points</div>
              <div className="problems-col">Problems</div>
              <div className="streak-col">Day Streak</div>
              <div className="accuracy-col">Accuracy</div>
            </div>
            
            <div className="table-row">
              <div className="rank-col">
                <span className="rank-number">4</span>
                <span className="rank-change up">▲1</span>
              </div>
              <div className="user-col">
                <div className="user-info-row">
                  <img src="/api/placeholder/40/40" alt="Emily Rodriguez" className="user-avatar-small" />
                  <div className="user-details-small">
                    <h5 className="user-name-small">Emily Rodriguez</h5>
                    <p className="user-handle-small">@CodeLuna</p>
                  </div>
                  <div className="user-badges-small">
                    <span className="badge-small advanced">Advanced</span>
                    <span className="badge-small location">🇺🇸 Florida</span>
                  </div>
                </div>
              </div>
              <div className="points-col">
                <span className="points-value">12,980</span>
                <span className="points-label">Points</span>
              </div>
              <div className="problems-col">
                <span className="problems-value">230</span>
                <span className="problems-label">Problems</span>
              </div>
              <div className="streak-col">
                <span className="streak-value">🔥 29</span>
                <span className="streak-label">Day Streak</span>
              </div>
              <div className="accuracy-col">
                <span className="accuracy-value">89.1%</span>
                <span className="accuracy-label">Accuracy</span>
              </div>
            </div>
            
            <div className="table-row">
              <div className="rank-col">
                <span className="rank-number">5</span>
                <span className="rank-change down">▼1</span>
              </div>
              <div className="user-col">
                <div className="user-info-row">
                  <img src="/api/placeholder/40/40" alt="Marcus Kim" className="user-avatar-small" />
                  <div className="user-details-small">
                    <h5 className="user-name-small">Marcus Kim</h5>
                    <p className="user-handle-small">@mkDev</p>
                  </div>
                  <div className="user-badges-small">
                    <span className="badge-small intermediate">Intermediate</span>
                    <span className="badge-small location">🇰🇷 Seoul Korea</span>
                  </div>
                </div>
              </div>
              <div className="points-col">
                <span className="points-value">11,250</span>
                <span className="points-label">Points</span>
              </div>
              <div className="problems-col">
                <span className="problems-value">198</span>
                <span className="problems-label">Problems</span>
              </div>
              <div className="streak-col">
                <span className="streak-value">🔥 33</span>
                <span className="streak-label">Day Streak</span>
              </div>
              <div className="accuracy-col">
                <span className="accuracy-value">92.8%</span>
                <span className="accuracy-label">Accuracy</span>
              </div>
            </div>
            
            <div className="table-row">
              <div className="rank-col">
                <span className="rank-number">6</span>
                <span className="rank-change up">▲1</span>
              </div>
              <div className="user-col">
                <div className="user-info-row">
                  <img src="/api/placeholder/40/40" alt="David Wilson" className="user-avatar-small" />
                  <div className="user-details-small">
                    <h5 className="user-name-small">David Wilson</h5>
                    <p className="user-handle-small">@DWilsonCoder</p>
                  </div>
                  <div className="user-badges-small">
                    <span className="badge-small intermediate">Intermediate</span>
                    <span className="badge-small location">🇬🇧 United Kingdom</span>
                  </div>
                </div>
              </div>
              <div className="points-col">
                <span className="points-value">10,890</span>
                <span className="points-label">Points</span>
              </div>
              <div className="problems-col">
                <span className="problems-value">185</span>
                <span className="problems-label">Problems</span>
              </div>
              <div className="streak-col">
                <span className="streak-value">🔥 19</span>
                <span className="streak-label">Day Streak</span>
              </div>
              <div className="accuracy-col">
                <span className="accuracy-value">85.4%</span>
                <span className="accuracy-label">Accuracy</span>
              </div>
            </div>
            
            <div className="table-row">
              <div className="rank-col">
                <span className="rank-number">7</span>
                <span className="rank-change down">▼1</span>
              </div>
              <div className="user-col">
                <div className="user-info-row">
                  <img src="/api/placeholder/40/40" alt="Lisa Chang" className="user-avatar-small" />
                  <div className="user-details-small">
                    <h5 className="user-name-small">Lisa Chang</h5>
                    <p className="user-handle-small">@LisaCodes</p>
                  </div>
                  <div className="user-badges-small">
                    <span className="badge-small beginner">Beginner</span>
                    <span className="badge-small location">🇸🇬 Senior</span>
                  </div>
                </div>
              </div>
              <div className="points-col">
                <span className="points-value">9,870</span>
                <span className="points-label">Points</span>
              </div>
              <div className="problems-col">
                <span className="problems-value">167</span>
                <span className="problems-label">Problems</span>
              </div>
              <div className="streak-col">
                <span className="streak-value">🔥 41</span>
                <span className="streak-label">Day Streak</span>
              </div>
              <div className="accuracy-col">
                <span className="accuracy-value">88.6%</span>
                <span className="accuracy-label">Accuracy</span>
              </div>
            </div>
            
            <div className="table-row">
              <div className="rank-col">
                <span className="rank-number">8</span>
                <span className="rank-change up">▲1</span>
              </div>
              <div className="user-col">
                <div className="user-info-row">
                  <img src="/api/placeholder/40/40" alt="Ahmed Hassan" className="user-avatar-small" />
                  <div className="user-details-small">
                    <h5 className="user-name-small">Ahmed Hassan</h5>
                    <p className="user-handle-small">@AHassan_tech</p>
                  </div>
                  <div className="user-badges-small">
                    <span className="badge-small beginner">Beginner</span>
                    <span className="badge-small location">🇪🇬 Egypt</span>
                  </div>
                </div>
              </div>
              <div className="points-col">
                <span className="points-value">8,750</span>
                <span className="points-label">Points</span>
              </div>
              <div className="problems-col">
                <span className="problems-value">143</span>
                <span className="problems-label">Problems</span>
              </div>
              <div className="streak-col">
                <span className="streak-value">🔥 25</span>
                <span className="streak-label">Day Streak</span>
              </div>
              <div className="accuracy-col">
                <span className="accuracy-value">86.9%</span>
                <span className="accuracy-label">Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">⭐</div>
            <h2 className="cta-title">Ready to Climb Higher?</h2>
            <p className="cta-description">
              Join thousands of coders competing daily. Solve problems, maintain your streak, and see how
              <br />
              you rank against the best programmers worldwide.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">🚀 Start Practicing</button>
              <button className="btn-secondary">View Contests</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Leaderboard