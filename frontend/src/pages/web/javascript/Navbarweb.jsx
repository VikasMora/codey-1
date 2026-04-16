import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbarweb.css';

function Navbarweb() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getCurrentSection = () => {
    const path = location.pathname;
    if (path.includes('/intro')) return 'intro';
    if (path.includes('/variables')) return 'variables';
    if (path.includes('/operators')) return 'operators';
    if (path.includes('/comments')) return 'comments';
    if (path.includes('/defining-functions')) return 'defining-functions';
    if (path.includes('/scope-hoisting')) return 'scope-hoisting';
    if (path.includes('/arrow-functions')) return 'arrow-functions';
    if (path.includes('/conditionals')) return 'conditionals';
    if (path.includes('/loops')) return 'loops';
    if (path.includes('/objects')) return 'objects';
    if (path.includes('/arrays')) return 'arrays';
    if (path.includes('/oop')) return 'oop';
    if (path.includes('/events')) return 'events';
    if (path.includes('/dom')) return 'dom';
    if (path.includes('/forms')) return 'forms';
    if (path.includes('/closures')) return 'closures';
    if (path.includes('/callbacks')) return 'callbacks';
    if (path.includes('/async')) return 'async';
    if (path.includes('/error-handling')) return 'error-handling';
    if (path.includes('/browser-apis')) return 'browser-apis';
    if (path.includes('/es6-features')) return 'es6-features';
    if (path.includes('/frameworks-overview')) return 'frameworks-overview';
    if (path.includes('/choosing-framework')) return 'choosing-framework';
    if (path.includes('/debugging')) return 'debugging';
    if (path.includes('/linting')) return 'linting';
    if (path.includes('/testing')) return 'testing';
    return 'intro'; // default
  };
  
  const [activeSection, setActiveSection] = useState(getCurrentSection());

  const navigationSections = [
    {
      title: "JavaScript Fundamentals",
      items: [
        { id: 'intro', label: 'Introduction to JavaScript', icon: '📚' },
        { id: 'variables', label: 'Variables and Data Types', icon: '🔤' },
        { id: 'operators', label: 'Operators and Expressions', icon: '➕' },
        { id: 'comments', label: 'Comments and Code Structure', icon: '💬' }
      ]
    },
    {
      title: "Functions",
      items: [
        { id: 'defining-functions', label: 'Defining Functions', icon: '⚙️' },
        { id: 'scope-hoisting', label: 'Function Scope and Hoisting', icon: '🏗️' },
        { id: 'arrow-functions', label: 'Arrow Functions', icon: '➡️' }
      ]
    },
    {
      title: "Control Flow",
      items: [
        { id: 'conditionals', label: 'Conditional Statements', icon: '🔀' },
        { id: 'loops', label: 'Loops (for, while, do-while)', icon: '🔄' }
      ]
    },
    {
      title: "Objects and Arrays",
      items: [
        { id: 'objects', label: 'JavaScript Objects', icon: '🏷️' },
        { id: 'arrays', label: 'Array Operations', icon: '📋' },
        { id: 'oop', label: 'Object-Oriented JavaScript', icon: '🏛️' }
      ]
    },
    {
      title: "Events and DOM",
      items: [
        { id: 'events', label: 'Event Handling', icon: '🎯' },
        { id: 'dom', label: 'Interacting with the DOM', icon: '🌐' },
        { id: 'forms', label: 'Forms and Validation', icon: '📝' }
      ]
    },
    {
      title: "Advanced Concepts",
      items: [
        { id: 'closures', label: 'Closures', icon: '🔒' },
        { id: 'callbacks', label: 'Callbacks and Promises', icon: '🔗' },
        { id: 'async', label: 'Asynchronous JavaScript', icon: '⏳' },
        { id: 'error-handling', label: 'Error Handling', icon: '⚠️' }
      ]
    },
    {
      title: "Browser APIs",
      items: [
        { id: 'browser-apis', label: 'Browser APIs & Web Storage', icon: '🌐' }
      ]
    },
    {
      title: "ES6+ Features",
      items: [
        { id: 'es6-features', label: 'Modern JavaScript Features', icon: '✨' }
      ]
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { id: 'frameworks-overview', label: 'Popular Frameworks Overview', icon: '🚀' },
        { id: 'choosing-framework', label: 'Choosing the Right Framework', icon: '🎯' }
      ]
    },
    {
      title: "Best Practices",
      items: [
        { id: 'debugging', label: 'Debugging JavaScript', icon: '🐛' },
        { id: 'linting', label: 'Linting and Code Style', icon: '✅' },
        { id: 'testing', label: 'Testing JavaScript', icon: '🧪' }
      ]
    }
  ];

  const handleNavClick = (itemId) => {
    setActiveSection(itemId);
    // You can add scroll to section logic here
  };

  return (
    <div className="js-sidebar">
      <div className="js-sidebar-header">
        <button 
          className="js-back-button"
          onClick={() => navigate('/web')}
          title="Back to Web Development"
        >
          <span className="js-back-icon">←</span>
          Back to Web
        </button>
        <h2 className="js-sidebar-title">
          <span className="js-title-icon">JS</span>
          JavaScript Guide
        </h2>
      </div>
      
      <div className="js-sidebar-content">
        {navigationSections.map((section, sectionIndex) => (
          <nav key={sectionIndex} className="js-nav-section">
            <h3 className="js-section-title">{section.title}</h3>
            <ul className="js-nav-list">
              {section.items.map((item) => (
                <li key={item.id} className="js-nav-item">
                  <Link
                    to={`/web/javascript/${item.id}`}
                    className={`js-nav-link ${getCurrentSection() === item.id ? 'active' : ''}`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    <span className="js-nav-icon">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </div>
  );
}

export default Navbarweb;