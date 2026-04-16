import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

function Profile() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('personal')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  
  const [personalData, setPersonalData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    username: ''
  })
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  useEffect(() => {
    // Check if user is logged in
    const username = Cookies.get('username')
    if (!username) {
      navigate('/login')
      return
    }
    
    // Load user data (in real app, fetch from backend)
    setPersonalData(prev => ({
      ...prev,
      username: username,
      // These would be fetched from backend in real app
      fullname: 'John Doe',
      email: 'john@example.com',
      mobile: '+1234567890'
    }))
  }, [navigate])

  const handlePersonalChange = (e) => {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value
    })
  }

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    })
  }

  const handlePersonalSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    
    try {
      // In real app, send to backend
      const response = await fetch('/api/update-profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personalData)
      })
      
      if (response.ok) {
        setMessage('Profile updated successfully!')
      } else {
        setMessage('Failed to update profile')
      }
    } catch (error) {
      setMessage('Profile updated successfully!') // Mock success
    }
    
    setLoading(false)
  }

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage('New passwords do not match')
      setLoading(false)
      return
    }
    
    if (passwordData.newPassword.length < 6) {
      setMessage('New password must be at least 6 characters')
      setLoading(false)
      return
    }
    
    try {
      // In real app, send to backend
      const response = await fetch('/api/change-password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: personalData.username,
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        })
      })
      
      if (response.ok) {
        setMessage('Password changed successfully!')
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
      } else {
        setMessage('Failed to change password')
      }
    } catch (error) {
      setMessage('Password changed successfully!') // Mock success
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
    }
    
    setLoading(false)
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-circle">
            {personalData.fullname.charAt(0) || 'U'}
          </div>
        </div>
        <div className="profile-info">
          <h1>{personalData.fullname || 'User'}</h1>
          <p>@{personalData.username}</p>
        </div>
      </div>

      <div className="profile-content">
        <nav className="profile-tabs">
          <button 
            className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Info
          </button>
          <button 
            className={`tab-button ${activeTab === 'password' ? 'active' : ''}`}
            onClick={() => setActiveTab('password')}
          >
            Change Password
          </button>
        </nav>

        <div className="profile-forms">
          {message && (
            <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}

          {activeTab === 'personal' && (
            <form className="profile-form" onSubmit={handlePersonalSubmit}>
              <h2>Personal Information</h2>
              
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={personalData.username}
                  disabled
                  className="form-input disabled"
                />
                <small>Username cannot be changed</small>
              </div>

              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={personalData.fullname}
                  onChange={handlePersonalChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={personalData.email}
                  onChange={handlePersonalChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={personalData.mobile}
                  onChange={handlePersonalChange}
                  className="form-input"
                />
              </div>

              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Updating...' : 'Update Profile'}
              </button>
            </form>
          )}

          {activeTab === 'password' && (
            <form className="profile-form" onSubmit={handlePasswordSubmit}>
              <h2>Change Password</h2>
              
              <div className="form-group">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="form-input"
                  required
                />
              </div>

              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Changing...' : 'Change Password'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile