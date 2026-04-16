import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { isAuthenticated, clearAuthCookies } from './utils/auth'
import Login from './pages/Login'
import Mainpage from './pages/Mainpage'
import Web from './pages/web/mainpages/Web'
import JavaScript from './pages/web/javascript/JavaScript'
import Python from './pages/web/python/Python'
import ReactJS from './pages/web/react/ReactJS'
import Java from './pages/web/java/Java'
import Navbar from './pages/Navbar'
import Practice from './pages/practice/Practice'
import Myfiles from './pages/my files/Myfiles'
import Leaderboard from './pages/leaderboard/leaderboard'
import Certifications from './pages/certifications/Certifications'
import Classroom from './pages/classroom/Classroom'
import Profile from './pages/Profile'
import Codeeditor from './pages/Codeeditor'
import ProblemSolver from './pages/ProblemSolver'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Default to false, will be set by useEffect
  const [isLoading, setIsLoading] = useState(true) // Add loading state for initial auth check

  // Check authentication status on app load/reload
  useEffect(() => {
    const checkAuthStatus = () => {
      const authenticated = isAuthenticated()
      setIsLoggedIn(authenticated)
      setIsLoading(false) // Authentication check complete
    }

    checkAuthStatus()
  }, [])

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    clearAuthCookies() // Clear cookies on logout
    setIsLoggedIn(false)
  }

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    )
  }

  return (
    <Router>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
      <div className="app">
        <Navbar onLogout={handleLogout} />
        <main className="main-content page-transition">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/web" element={<Web />} />
            <Route path="/web/javascript/*" element={<JavaScript />} />
            <Route path="/web/python/*" element={<Python />} />
            <Route path="/web/react" element={<ReactJS />} />
            <Route path="/web/java/*" element={<Java />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/myfiles" element={<Myfiles />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/codeeditor" element={<Codeeditor />} />
            <Route path="/problem-solver" element={<ProblemSolver />} />
            <Route path="*" element={<Navigate to="/" replace />} /> {/* Fallback route */}
          </Routes>
        </main>
      </div>
      )}
    </Router>
  )
}

export default App
