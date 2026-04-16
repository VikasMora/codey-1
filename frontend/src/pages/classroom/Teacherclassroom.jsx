import React, { useState, useEffect } from 'react'
import './Teacherclassroom.css'
import { getAuthenticatedUser } from '../../utils/auth'

function Teacherclassroom() {
  const [classrooms, setClassrooms] = useState([])
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [newClassroom, setNewClassroom] = useState({
    classroomName: '',
    classroomSize: 25,
    subject: '',
    description: ''
  })

  // Load teacher's classrooms on component mount
  useEffect(() => {
    loadClassrooms()
  }, [])

  const loadClassrooms = async () => {
    try {
      const username = getAuthenticatedUser()
      if (!username) {
        console.error('No authenticated user found')
        setLoading(false)
        return
      }

      const response = await fetch(`http://localhost:5000/api/classroom/teacher/${username}`, {
        credentials: 'include'
      })

      if (response.ok) {
        const data = await response.json()
        setClassrooms(data)
      } else {
        console.log('Failed to load classrooms from server')
      }
    } catch (error) {
      console.log('Error loading classrooms:', error)
    } finally {
      setLoading(false)
    }
  }

  // Generate 10-digit alphanumeric code
  const generateClassCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  const handleCreateClassroom = async () => {
    if (!newClassroom.classroomName.trim()) {
      alert('Please enter a classroom name')
      return
    }

    const classCode = generateClassCode()
    const classroom = {
      ...newClassroom,
      classCode,
      createdBy: getAuthenticatedUser()
    }

    try {
      // Make API call to create the classroom
      const response = await fetch('http://localhost:5000/api/classroom/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(classroom),
        credentials: 'include'
      })

      if (response.ok) {
        const newClassroomData = await response.json()
        setClassrooms([...classrooms, newClassroomData])
        
        // Reset form and close modal
        setShowCreateModal(false)
        setNewClassroom({
          classroomName: '',
          classroomSize: 25,
          subject: '',
          description: ''
        })
        alert(`Classroom created successfully! Class Code: ${classCode}`)
      } else {
        const errorData = await response.json()
        if (errorData.error.includes('already exists')) {
          // Generate a new code if there's a collision
          handleCreateClassroom()
        } else {
          alert(`Failed to create classroom: ${errorData.error}`)
        }
      }
    } catch (error) {
      console.error('Error creating classroom:', error)
      alert('Error creating classroom. Please check your connection and try again.')
    }
  }

  const handleDeleteClassroom = async (classroomId) => {
    if (window.confirm('Are you sure you want to delete this classroom?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/classroom/${classroomId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: getAuthenticatedUser() }),
          credentials: 'include'
        })

        if (response.ok) {
          setClassrooms(classrooms.filter(classroom => classroom.id !== classroomId))
          alert('Classroom deleted successfully')
        } else {
          const errorData = await response.json()
          alert(`Failed to delete classroom: ${errorData.error}`)
        }
      } catch (error) {
        console.error('Error deleting classroom:', error)
        alert('Error deleting classroom. Please try again.')
      }
    }
  }

  const copyClassCode = (code) => {
    navigator.clipboard.writeText(code)
    alert('Class code copied to clipboard!')
  }

  return (
    <div className="teacher-classroom-page">
      {/* Header Section */}
      <section className="teacher-header">
        <div className="container">
          <div className="header-content">
            <div className="header-info">
              <div className="classroom-icon">
                <span className="icon-bg">👨‍🏫</span>
              </div>
              <div className="header-text">
                <h1 className="page-title">Teacher Dashboard</h1>
                <p className="page-subtitle">Manage your classrooms and students</p>
              </div>
            </div>
            <button 
              className="btn-primary create-class-btn"
              onClick={() => setShowCreateModal(true)}
            >
              + Create New Class
            </button>
          </div>
        </div>
      </section>

      <div className="container">
        {/* My Classrooms Section */}
        <section className="my-classrooms-section">
          <h2 className="section-title">My Classrooms</h2>
          
          {loading ? (
            <div className="loading-state">
              <div className="loading-icon">⏳</div>
              <h3>Loading your classrooms...</h3>
            </div>
          ) : classrooms.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📚</div>
              <h3>No classrooms yet</h3>
              <p>Create your first classroom to start teaching!</p>
              <button 
                className="btn-primary"
                onClick={() => setShowCreateModal(true)}
              >
                Create Classroom
              </button>
            </div>
          ) : (
            <div className="classrooms-grid">
              {classrooms.map((classroom) => (
                <div key={classroom.id} className="classroom-card">
                  <div className="classroom-header">
                    <div className="classroom-info">
                      <h3 className="classroom-title">{classroom.classroomName}</h3>
                      <p className="classroom-subject">{classroom.subject}</p>
                    </div>
                    <div className="classroom-actions">
                      <button 
                        className="action-btn copy-btn"
                        onClick={() => copyClassCode(classroom.classCode)}
                        title="Copy class code"
                      >
                        📋
                      </button>
                      <button 
                        className="action-btn delete-btn"
                        onClick={() => handleDeleteClassroom(classroom.id)}
                        title="Delete classroom"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  
                  <div className="class-code-section">
                    <div className="class-code">
                      <span className="code-label">Class Code:</span>
                      <span className="code-value">{classroom.classCode}</span>
                    </div>
                  </div>
                  
                  <div className="classroom-stats">
                    <div className="stat-item">
                      <span className="stat-icon">👥</span>
                      <span className="stat-text">{classroom.students?.length || 0}/{classroom.classroomSize}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">📅</span>
                      <span className="stat-text">Created: {new Date(classroom.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {classroom.students && classroom.students.length > 0 && (
                    <div className="students-section">
                      <h4 className="students-title">Students ({classroom.students.length})</h4>
                      <div className="students-list">
                        {classroom.students.map((student, index) => (
                          <div key={index} className="student-item">
                            <div className="student-avatar">
                              <span>{student.username?.charAt(0)?.toUpperCase()}</span>
                            </div>
                            <div className="student-info">
                              <p className="student-name">{student.username}</p>
                              <p className="join-date">Joined: {new Date(student.joinedAt).toLocaleDateString()}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="classroom-footer">
                    <button className="btn-secondary manage-btn">Manage Class</button>
                    <button className="btn-primary start-btn">Start Session</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Create Classroom Modal */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Create New Classroom</h2>
              <button 
                className="close-btn"
                onClick={() => setShowCreateModal(false)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="form-group">
                <label>Classroom Name *</label>
                <input
                  type="text"
                  value={newClassroom.classroomName}
                  onChange={(e) => setNewClassroom({...newClassroom, classroomName: e.target.value})}
                  placeholder="e.g., JavaScript Fundamentals"
                />
              </div>
              
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  value={newClassroom.subject}
                  onChange={(e) => setNewClassroom({...newClassroom, subject: e.target.value})}
                  placeholder="e.g., Programming, Mathematics"
                />
              </div>
              
              <div className="form-group">
                <label>Maximum Students</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={newClassroom.classroomSize}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 1;
                    setNewClassroom({...newClassroom, classroomSize: value});
                  }}
                />
              </div>
              
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newClassroom.description}
                  onChange={(e) => setNewClassroom({...newClassroom, description: e.target.value})}
                  placeholder="Brief description of the classroom"
                  rows="3"
                />
              </div>
            </div>
            
            <div className="modal-footer">
              <button 
                className="btn-secondary"
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn-primary"
                onClick={handleCreateClassroom}
              >
                Create Classroom
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Teacherclassroom