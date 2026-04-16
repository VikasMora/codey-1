import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Practice.css'

function Practice() {
  const navigate = useNavigate()
  const [selectedLanguage, setSelectedLanguage] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [problems, setProblems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [stats, setStats] = useState({ total: 0, easy: 0, medium: 0, hard: 0 })
  const [availableLanguages, setAvailableLanguages] = useState(['All'])
  const [availableDifficulties, setAvailableDifficulties] = useState(['All'])
  const [languageCards, setLanguageCards] = useState([])
  
  const statuses = ['All', 'Completed', 'Not Started', 'In Progress'] // Keep this as it's UI-specific

  // Fetch problems from database
  useEffect(() => {
    fetchProblems()
    fetchFilterOptions()
    fetchUserProgress()
  }, [selectedLanguage, selectedDifficulty])

  const fetchUserProgress = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/user/progress')
      if (response.ok) {
        const progressData = await response.json()
        // Update language cards with actual user progress
        setLanguageCards(prevCards => 
          prevCards.map(card => ({
            ...card,
            progress: progressData[card.id]?.completed || card.progress,
            total: progressData[card.id]?.total || card.total
          }))
        )
      }
    } catch (err) {
      console.error('Error fetching user progress:', err)
      // Keep default progress values
    }
  }

  const fetchFilterOptions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/problems/filters')
      if (response.ok) {
        const data = await response.json()
        setAvailableLanguages(['All', ...data.languages])
        setAvailableDifficulties(['All', ...data.difficulties])
        setLanguageCards(data.languageCards || getDefaultLanguageCards())
      }
    } catch (err) {
      console.error('Error fetching filter options:', err)
      // Fallback to default values
      setAvailableLanguages(['All', 'JavaScript', 'Python', 'Java', 'C++', 'C', 'C#'])
      setAvailableDifficulties(['All', 'Easy', 'Medium', 'Hard'])
      setLanguageCards(getDefaultLanguageCards())
    }
  }

  const getDefaultLanguageCards = () => [
    {
      id: 'javascript',
      name: 'JavaScript',
      tag: 'JavaScript',
      description: 'Solve dynamic programming and\nadvanced concepts',
      progress: 45,
      total: 100,
      badges: ['👑 Popular', '📈 Trending'],
      className: 'javascript'
    },
    {
      id: 'python',
      name: 'Python',
      tag: 'Python',
      description: 'Algorithm challenges, loops\nand data structures',
      progress: 65,
      total: 100,
      badges: ['👑 Popular', '📈 Trending'],
      className: 'python'
    },
    {
      id: 'java',
      name: 'Java',
      tag: 'Java',
      description: 'Object-oriented programming and\nenterprise patterns',
      progress: 30,
      total: 100,
      badges: ['👑 Popular'],
      className: 'java'
    },
    {
      id: 'react',
      name: 'React',
      tag: 'React',
      description: 'Component lifecycle, hooks and state\nmanagement',
      progress: 20,
      total: 100,
      badges: ['👑 Popular', '📈 Trending'],
      className: 'react'
    },
    {
      id: 'nodejs',
      name: 'NodeJS',
      tag: 'NodeJS',
      description: 'Server-side JavaScript and APIs\ndevelopment',
      progress: 25,
      total: 100,
      badges: ['📈 Trending'],
      className: 'nodejs'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      tag: 'TypeScript',
      description: 'Type safety and advanced TypeScript\npatterns',
      progress: 15,
      total: 100,
      badges: ['📈 Trending'],
      className: 'typescript'
    },
    {
      id: 'cpp',
      name: 'C++',
      tag: 'C++',
      description: 'Systems programming and\nperformance optimization',
      progress: 10,
      total: 100,
      badges: ['👑 Popular'],
      className: 'cpp'
    },
    {
      id: 'sql',
      name: 'SQL',
      tag: 'SQL',
      description: 'Database queries, joins and\noptimization',
      progress: 35,
      total: 100,
      badges: ['👑 Popular'],
      className: 'sql'
    }
  ]

  const fetchProblems = async () => {
    try {
      setLoading(true)
      let url = 'http://localhost:5000/api/problems'
      const params = new URLSearchParams()
      
      if (selectedLanguage !== 'All') {
        params.append('language', selectedLanguage)
      }
      if (selectedDifficulty !== 'All') {
        params.append('difficulty', selectedDifficulty)
      }
      
      if (params.toString()) {
        url += `?${params.toString()}`
      }

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch problems')
      }
      
      const data = await response.json()
      setProblems(data)
      
      // Calculate stats
      const stats = {
        total: data.length,
        easy: data.filter(p => p.difficulty === 'Easy').length,
        medium: data.filter(p => p.difficulty === 'Medium').length,
        hard: data.filter(p => p.difficulty === 'Hard').length
      }
      setStats(stats)
      
    } catch (err) {
      setError(err.message)
      console.error('Error fetching problems:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSolveProblem = (problem) => {
    // Navigate to problem solver with problem data
    navigate('/problem-solver', { 
      state: { 
        problem: problem
      }
    })
  }

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'easy'
      case 'Medium': return 'medium' 
      case 'Hard': return 'hard'
      default: return 'easy'
    }
  }

  const getLanguageIcon = (language) => {
    switch(language.toLowerCase()) {
      case 'javascript': return '🟨'
      case 'python': return '🐍'
      case 'java': return '☕'
      case 'c++': return '⚡'
      case 'c': return '🔧'
      case 'c#': return '🔷'
      default: return '📄'
    }
  }

  return (
    <div className="practice-page">
      {/* Header Section */}
      <section className="header-section">
        <div className="container">
          <h1 className="page-title">
            Practice & Master
            <br />
            <span className="title-highlight">Programming Skills</span>
          </h1>
          <p className="page-description">
            Solve coding challenges from beginner to advanced levels. Practice with real interview
            <br />
            questions and improve your problem-solving skills across multiple programming
            <br />
            languages.
          </p>
          
          {/* Statistics Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon blue">
                📝
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.total}+</h3>
                <p className="stat-label">Questions</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon green">
                �
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.easy}</h3>
                <p className="stat-label">Easy</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon purple">
                🟡
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.medium}</h3>
                <p className="stat-label">Medium</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon orange">
                �
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.hard}</h3>
                <p className="stat-label">Hard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Language Section */}
      <section className="language-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Language</h2>
            <p className="section-subtitle">Start practicing with your preferred programming language</p>
            <a href="#" className="view-all-link">View All Programs →</a>
          </div>
          
          <div className="language-grid">
            {languageCards.map((card) => (
              <div key={card.id} className={`language-card ${card.className}`}>
                <div className="language-header">
                  <div className="language-tag">{card.tag}</div>
                  <div className="language-badges">
                    {card.badges.map((badge, index) => (
                      <span 
                        key={index} 
                        className={`badge ${badge.includes('Popular') ? 'popular' : 'trending'}`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="language-title">{card.name}</h3>
                <p className="language-description">
                  {card.description.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < card.description.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <div className="progress-section">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: `${(card.progress / card.total) * 100}%`}}></div>
                  </div>
                  <span className="progress-text">{card.progress}/{card.total}</span>
                </div>
                <div className="difficulty-tags">
                  <span className="difficulty easy">Easy</span>
                  <span className="difficulty medium">Medium</span>
                  <span className="difficulty hard">Hard</span>
                </div>
                <button 
                  className="start-practicing-btn"
                  onClick={() => setSelectedLanguage(card.name === 'NodeJS' ? 'JavaScript' : card.name)}
                >
                  ▶️ Start Practicing
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Questions Section */}
      <section className="questions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Practice Questions</h2>
            <p className="section-subtitle">
              {loading ? 'Loading...' : `${problems.length} questions found`}
            </p>
          </div>
          
          {/* Filters */}
          <div className="filters-section">
            <div className="filter-group">
              <label>🏷️ Language:</label>
              <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                {availableLanguages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>📊 Difficulty:</label>
              <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
                {availableDifficulties.map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>✅ Status:</label>
              <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <button onClick={fetchProblems} className="refresh-btn" disabled={loading}>
                🔄 Refresh
              </button>
            </div>
          </div>
          
          {/* Questions List */}
          <div className="questions-list">
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner">⏳</div>
                <p>Loading practice problems...</p>
              </div>
            ) : error ? (
              <div className="error-container">
                <div className="error-message">
                  <span className="error-icon">❌</span>
                  <p>Error: {error}</p>
                  <button onClick={fetchProblems} className="retry-btn">Try Again</button>
                </div>
              </div>
            ) : problems.length === 0 ? (
              <div className="no-problems-container">
                <div className="no-problems-message">
                  <span className="no-problems-icon">📝</span>
                  <p>No practice problems found</p>
                  <p className="no-problems-subtitle">Try adjusting your filters or check back later</p>
                </div>
              </div>
            ) : (
              problems.map((problem) => (
                <div key={problem._id} className="question-card">
                  <div className="question-status">
                    {getLanguageIcon(problem.language)}
                  </div>
                  <div className="question-content">
                    <h3 className="question-title">{problem.title}</h3>
                    <div className="question-meta">
                      <span className={`difficulty-badge ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                      <span className="language-badge">
                        {problem.language}
                      </span>
                      <span className="category-badge">
                        {problem.category}
                      </span>
                    </div>
                    <p className="question-description">
                      {problem.question.split('\n')[0].substring(0, 150)}
                      {problem.question.length > 150 ? '...' : ''}
                    </p>
                    <div className="question-tags">
                      {problem.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                      {problem.tags.length > 3 && (
                        <span className="tag more">+{problem.tags.length - 3}</span>
                      )}
                    </div>
                  </div>
                  <div className="question-stats">
                    <div className="stat-item">
                      <span className="stat-icon">�</span>
                      <span>{problem.submissionCount || 0}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">✅</span>
                      <span>{problem.successCount || 0}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">⏱️</span>
                      <span>{problem.timeLimit}s</span>
                    </div>
                  </div>
                  <button 
                    className="solve-btn"
                    onClick={() => handleSolveProblem(problem)}
                  >
                    Solve Problem
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">🏆</div>
            <h2 className="cta-title">Ready to Level Up Your Skills?</h2>
            <p className="cta-description">
              Join our community of problem solvers and prepare for technical interviews with our
              <br />
              comprehensive practice platform.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">🚀 Start Daily Challenge</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Practice