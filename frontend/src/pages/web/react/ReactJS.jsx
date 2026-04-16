import React from 'react';
import { useNavigate } from 'react-router-dom';

function ReactJS() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <button 
        onClick={() => navigate('/web')}
        style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          background: 'rgba(255, 255, 255, 0.9)',
          color: '#64748b',
          border: '1px solid #e2e8f0',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        ← Back to All Languages
      </button>
      
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '700', 
          color: '#1e293b', 
          marginBottom: '24px' 
        }}>
          React Development
        </h1>
        <p style={{ 
          fontSize: '18px', 
          color: '#64748b', 
          marginBottom: '32px',
          lineHeight: '1.6'
        }}>
          This React course is coming soon! We're building an in-depth curriculum 
          to help you master modern React development.
        </p>
        <div style={{
          background: '#fff',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          marginBottom: '24px'
        }}>
          <h3 style={{ color: '#1e293b', marginBottom: '16px' }}>What you'll learn:</h3>
          <ul style={{ textAlign: 'left', color: '#64748b', lineHeight: '1.8' }}>
            <li>React fundamentals and JSX</li>
            <li>Components and state management</li>
            <li>Hooks and modern React patterns</li>
            <li>React Router and navigation</li>
            <li>API integration and data fetching</li>
            <li>Performance optimization</li>
          </ul>
        </div>
        <p style={{ color: '#64748b', fontSize: '14px' }}>
          🚧 Course content is under development. Check back soon!
        </p>
      </div>
    </div>
  );
}

export default ReactJS;