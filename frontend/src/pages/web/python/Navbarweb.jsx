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
    if (path.includes('/functions')) return 'functions';
    if (path.includes('/scope')) return 'scope';
    if (path.includes('/conditionals')) return 'conditionals';
    if (path.includes('/loops')) return 'loops';
    if (path.includes('/data-structures')) return 'data-structures';
    if (path.includes('/lists')) return 'lists';
    if (path.includes('/tuples')) return 'tuples';
    if (path.includes('/dictionaries')) return 'dictionaries';
    if (path.includes('/sets')) return 'sets';
    if (path.includes('/strings')) return 'strings';
    if (path.includes('/classes')) return 'classes';
    if (path.includes('/inheritance')) return 'inheritance';
    if (path.includes('/polymorphism')) return 'polymorphism';
    if (path.includes('/encapsulation')) return 'encapsulation';
    if (path.includes('/modules')) return 'modules';
    if (path.includes('/packages')) return 'packages';
    if (path.includes('/error-handling')) return 'error-handling';
    if (path.includes('/file-handling')) return 'file-handling';
    if (path.includes('/decorators')) return 'decorators';
    if (path.includes('/generators')) return 'generators';
    if (path.includes('/lambda')) return 'lambda';
    if (path.includes('/comprehensions')) return 'comprehensions';
    if (path.includes('/regular-expressions')) return 'regular-expressions';
    if (path.includes('/testing')) return 'testing';
    if (path.includes('/libraries')) return 'libraries';
    if (path.includes('/web-development')) return 'web-development';
    if (path.includes('/data-science')) return 'data-science';
    if (path.includes('/best-practices')) return 'best-practices';
    return 'intro'; // default
  };
  
  const [activeSection, setActiveSection] = useState(getCurrentSection());

  const navigationSections = [
    {
      title: "Python Fundamentals",
      items: [
        { id: 'intro', label: 'Introduction to Python', icon: '📚' },
        { id: 'variables', label: 'Variables and Data Types', icon: '🔤' },
        { id: 'operators', label: 'Operators and Expressions', icon: '➕' },
        { id: 'comments', label: 'Comments and Code Structure', icon: '💬' }
      ]
    },
    {
      title: "Functions and Control Flow",
      items: [
        { id: 'functions', label: 'Functions and Parameters', icon: '⚙️' },
        { id: 'scope', label: 'Scope and Namespaces', icon: '🔍' },
        { id: 'conditionals', label: 'Conditional Statements', icon: '🔀' },
        { id: 'loops', label: 'Loops and Iteration', icon: '🔄' }
      ]
    },
    {
      title: "Data Structures",
      items: [
        { id: 'data-structures', label: 'Data Structures Overview', icon: '📊' },
        { id: 'lists', label: 'Lists and Arrays', icon: '📋' },
        { id: 'tuples', label: 'Tuples', icon: '📦' },
        { id: 'dictionaries', label: 'Dictionaries', icon: '📖' },
        { id: 'sets', label: 'Sets', icon: '🎯' },
        { id: 'strings', label: 'String Manipulation', icon: '📝' }
      ]
    },
    {
      title: "Object-Oriented Programming",
      items: [
        { id: 'classes', label: 'Classes and Objects', icon: '🏗️' },
        { id: 'inheritance', label: 'Inheritance', icon: '👨‍👩‍👧' },
        { id: 'polymorphism', label: 'Polymorphism', icon: '🎭' },
        { id: 'encapsulation', label: 'Encapsulation', icon: '📦' }
      ]
    },
    {
      title: "Modules and Packages",
      items: [
        { id: 'modules', label: 'Modules and Imports', icon: '📋' },
        { id: 'packages', label: 'Packages and Libraries', icon: '📚' },
        { id: 'error-handling', label: 'Error Handling', icon: '⚠️' },
        { id: 'file-handling', label: 'File I/O Operations', icon: '📁' }
      ]
    },
    {
      title: "Advanced Concepts",
      items: [
        { id: 'decorators', label: 'Decorators', icon: '✨' },
        { id: 'generators', label: 'Generators and Iterators', icon: '🔄' },
        { id: 'lambda', label: 'Lambda Functions', icon: 'λ' },
        { id: 'comprehensions', label: 'List Comprehensions', icon: '📝' },
        { id: 'regular-expressions', label: 'Regular Expressions', icon: '🔍' }
      ]
    },
    {
      title: "Testing and Best Practices",
      items: [
        { id: 'testing', label: 'Testing Python Code', icon: '🧪' },
        { id: 'libraries', label: 'Popular Libraries', icon: '📚' },
        { id: 'web-development', label: 'Web Development', icon: '🌐' },
        { id: 'data-science', label: 'Data Science Basics', icon: '📊' },
        { id: 'best-practices', label: 'Best Practices', icon: '⭐' }
      ]
    }
  ];

  const handleNavigation = (itemId) => {
    setActiveSection(itemId);
    navigate(`/web/python/${itemId}`);
  };

  return (
    <div className="py-sidebar">
      <div className="py-sidebar-header">
        <button 
          onClick={() => navigate('/web')}
          className="py-back-button"
        >
          ← Back to Languages
        </button>
        <h2>Python Course</h2>
        <p>Master Python programming from basics to advanced concepts</p>
      </div>
      
      <div className="py-sidebar-content">
        {navigationSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="py-nav-section">
            <h3 className="py-nav-section-title">{section.title}</h3>
            <ul className="py-nav-list">
              {section.items.map((item) => (
                <li key={item.id} className="py-nav-item">
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className={`py-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <span className="py-nav-icon">{item.icon}</span>
                    <span className="py-nav-text">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="py-nav-indicator"></div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbarweb;