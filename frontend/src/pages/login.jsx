import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { setAuthCookies } from '../utils/auth'

function Login({ onLogin }) {
  const [activeTab, setActiveTab] = useState('signin')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: formData.username, password: formData.password })
      })
      
      const data = await res.json()
      
      if (res.ok) {
        setAuthCookies(data.username, data.isTeacher) // Store authentication cookies with user role
        if (onLogin) onLogin()
        navigate('/') // Redirect to main page
      } else {
        setMessage(data.error || 'Login failed')
      }
    } catch (err) {
      setMessage('Login failed')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo">
            <div className="logo-icon">
              &lt;/&gt;
            </div>
          </div>
          <h1 className="app-title">Codey</h1>
          <p className="app-subtitle">Master programming with AI-powered learning</p>
        </div>

        {/* Welcome Section */}
        <div className="welcome-section">
          <h2 className="welcome-title">Welcome Back</h2>
          <p className="welcome-subtitle">Sign in to continue your coding journey</p>
        </div>

        

        {/* Form Section */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label form-label-username">Username</label>
            <input
              type="text"
              id="username"
              className="form-input"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label form-label-password">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="form-input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="form-options">
            
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="signin-button">
            Sign In
          </button>
          
          {message && <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login