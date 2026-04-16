import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useActiveRoute, usePageTitle } from '../hooks/useNavigation'
import { navItems } from '../config/routes'
import { clearAuthCookies, isAuthenticated, getAuthenticatedUser, getIsTeacher, getUserRole } from '../utils/auth'
import './Navbar.css'

function Navbar({ onLogout }) {
  const { isActive } = useActiveRoute()
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [userRole, setUserRole] = useState('')
  const [isTeacher, setIsTeacher] = useState(false)
  
  usePageTitle()

  // Check authentication status on component mount and when cookies change
  useEffect(() => {
    const checkAuthStatus = () => {
      const authenticated = isAuthenticated()
      const username = getAuthenticatedUser()
      const teacherStatus = getIsTeacher()
      const role = getUserRole()

      setIsLoggedIn(authenticated)
      setCurrentUser(username || '')
      setIsTeacher(teacherStatus)
      setUserRole(role)
    }

    checkAuthStatus()

    // Check auth status every 5 seconds to detect cookie changes
    const interval = setInterval(checkAuthStatus, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem('authToken')
    sessionStorage.clear()

    // Clear authentication cookies using utility function
    clearAuthCookies()

    // Update local state immediately
    setIsLoggedIn(false)
    setCurrentUser('')
    setIsTeacher(false)
    setUserRole('')

    // Call the logout handler from parent
    if (onLogout) {
      onLogout()
    }

    // Navigate to login page
    navigate('/login')
  }

  const handleLogin = () => {
    // Navigate to login page
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side - Logo and Navigation */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">
              &lt;/&gt;
            </div>
            <span className="logo-text">Codey</span>
          </Link>

          <div className="navbar-menu">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
              </Link>
            ))}
            <div className="nav-item others-dropdown">
              <span className="nav-icon">⋯</span>
              <span className="nav-text">Others</span>
            </div>
          </div>
        </div>

        {/* Right side - Profile and Actions */}
        <div className="navbar-right">
          {isLoggedIn ? (
            <>
              {/* User Profile Info */}
              <div className="nav-item user-info">
                <span className="nav-icon">
                  {isTeacher ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 14q-1.25 0-2.125-.875T9 11V9q0-1.25.875-2.125T12 6q1.25 0 2.125.875T15 9v2q0 1.25-.875 2.125T12 14zm-8 4v-1.4q0-.65.325-1.175T5.05 14.8q1.4-.7 2.888-1.05T12 13.5q1.613 0 3.1.35t2.9 1.05q.4.2.725.725T19 16.6V18z"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/>
                    </svg>
                  )}
                </span>
                <span className="nav-text">{currentUser} ({userRole})</span>
              </div>
              {/* Logout Button */}
              <div className="nav-item login-item" onClick={handleLogout}>
                <span className="nav-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                  </svg>
                </span>
                <span className="nav-text">Logout</span>
              </div>
            </>
          ) : (
            /* Login Button */
            <div className="nav-item login-item" onClick={handleLogin}>
              <span className="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                  <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
              </span>
              <span className="nav-text">Login</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar