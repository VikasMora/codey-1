import React, { useState, useEffect } from 'react'
import './Classroom.css'
import TeacherClassroom from './Teacherclassroom'
import { getIsTeacher, getAuthenticatedUser } from '../../utils/auth'

function Classroom() {
  const [isTeacher, setIsTeacher] = useState(false)
  const [joinCode, setJoinCode] = useState('')
  const [studentClassrooms, setStudentClassrooms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is a teacher
    const teacherStatus = getIsTeacher()
    setIsTeacher(teacherStatus)
    
    // If student, load their classrooms
    if (!teacherStatus) {
      loadStudentClassrooms()
    }
  }, [])

  const loadStudentClassrooms = async () => {
    try {
      const username = getAuthenticatedUser()
      if (!username) {
        setLoading(false)
        return
      }

      const response = await fetch(`http://localhost:5000/api/classroom/student/${username}`, {
        credentials: 'include'
      })

      if (response.ok) {
        const data = await response.json()
        setStudentClassrooms(data)
      } else {
        console.log('Failed to load student classrooms')
      }
    } catch (error) {
      console.log('Error loading student classrooms:', error)
    } finally {
      setLoading(false)
    }
  }

  // If user is a teacher, show TeacherClassroom component
  if (isTeacher) {
    return <TeacherClassroom />
  }

  const handleJoinClass = async (code) => {
    console.log('handleJoinClass called with code:', code)
    
    if (!code || code.length !== 10) {
      console.log('Invalid code length:', code?.length)
      alert('Please enter a valid 10-digit class code')
      return
    }

    console.log('Code validation passed, proceeding with join request')

    try {
      // Make API call to join the classroom
      console.log('Attempting to join classroom with code:', code)
      
      const response = await fetch('http://localhost:5000/api/classroom/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          classCode: code, 
          username: getAuthenticatedUser() 
        }),
        credentials: 'include'
      })

      console.log('Response status:', response.status)

      if (response.ok) {
        const data = await response.json()
        alert(`Successfully joined ${data.classroom.classroomName}!`)
        setJoinCode('')
        // Reload student classrooms after joining
        loadStudentClassrooms()
      } else {
        const errorData = await response.json()
        alert(`Failed to join classroom: ${errorData.error}`)
        setJoinCode('')
      }
    } catch (error) {
      console.error('Error joining classroom:', error)
      alert('Error joining classroom. Please check your connection and try again.')
      setJoinCode('')
    }
  }

  return (
    <div className="classroom-page">
      {/* Header Section */}
      <section className="classroom-header">
        <div className="container">
          <div className="header-content">
            <div className="header-info">
              <div className="classroom-icon">
                <span className="icon-bg">📚</span>
              </div>
              <div className="header-text">
                <h1 className="page-title">Class Room</h1>
                <p className="page-subtitle">Interactive learning sessions with expert instructors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Join Classroom Section */}
        <section className="join-classroom-section">
          <div className="join-classroom-card">
            <h2 className="section-title">Join a Class</h2>
            <p className="join-description">Enter the 10-digit code provided by your teacher to join a classroom</p>
            <div className="join-form">
              <input 
                type="text" 
                placeholder="Enter class code (e.g., ABC123DEF4)"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && joinCode.length === 10) {
                    console.log('Enter key pressed, joining class')
                    handleJoinClass(joinCode)
                  }
                }}
                maxLength={10}
                className="join-code-input"
              />
              <button 
                className="btn-primary join-code-btn"
                onClick={() => {
                  console.log('Join button clicked with code:', joinCode)
                  handleJoinClass(joinCode)
                }}
                disabled={joinCode.length !== 10}
              >
                Join Class
              </button>
            </div>
          </div>
        </section>

        {/* My Classes Section */}
        <section className="my-classes-section">
          <h2 className="section-title">My Classes</h2>
          
          {loading ? (
            <div className="loading-state">
              <div className="loading-icon">⏳</div>
              <h3>Loading your classrooms...</h3>
            </div>
          ) : studentClassrooms.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📚</div>
              <h3>No classrooms joined yet</h3>
              <p>Enter a class code above to join your first classroom!</p>
            </div>
          ) : (
            <div className="classes-grid">
              {studentClassrooms.map((classroom) => (
                <div key={classroom.id} className="class-card my-class">
                  <div className="class-header">
                    <div className="class-info">
                      <div className="class-level beginner">Student</div>
                      <div className="class-status upcoming">⏳ Active</div>
                    </div>
                    <h3 className="class-title">{classroom.classroomName}</h3>
                    <p className="class-subtitle">{classroom.subject || 'General'}</p>
                  </div>
                  
                  <div className="instructor-info">
                    <div className="instructor-avatar">
                      <span>{classroom.teacherName?.charAt(0)?.toUpperCase() || 'T'}</span>
                    </div>
                    <div className="instructor-details">
                      <p className="instructor-name">{classroom.teacherName || 'Teacher'}</p>
                      <div className="class-code">
                        <span className="code-label">Code:</span>
                        <span className="code-value">{classroom.classCode}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="class-schedule">
                    <div className="schedule-item">
                      <span className="schedule-icon">📅</span>
                      <span className="schedule-text">Joined: {new Date(classroom.joinedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="schedule-item">
                      <span className="schedule-icon">�</span>
                      <span className="schedule-text">Max Students: {classroom.classroomSize}</span>
                    </div>
                    {classroom.description && (
                      <div className="schedule-item">
                        <span className="schedule-icon">📝</span>
                        <span className="schedule-text">{classroom.description}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="class-actions">
                    <button className="btn-primary join-btn">📹 Enter Class</button>
                    <button className="btn-secondary chat-btn">💬 Chat</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>


      </div>
    </div>
  )
}

export default Classroom