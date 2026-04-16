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
    if (path.includes('/methods')) return 'methods';
    if (path.includes('/scope-access')) return 'scope-access';
    if (path.includes('/conditionals')) return 'conditionals';
    if (path.includes('/loops')) return 'loops';
    if (path.includes('/arrays')) return 'arrays';
    if (path.includes('/strings')) return 'strings';
    if (path.includes('/oop')) return 'oop';
    if (path.includes('/classes-objects')) return 'classes-objects';
    if (path.includes('/inheritance')) return 'inheritance';
    if (path.includes('/polymorphism')) return 'polymorphism';
    if (path.includes('/encapsulation')) return 'encapsulation';
    if (path.includes('/abstract-interfaces')) return 'abstract-interfaces';
    if (path.includes('/exception-handling')) return 'exception-handling';
    if (path.includes('/collections')) return 'collections';
    if (path.includes('/file-handling')) return 'file-handling';
    if (path.includes('/multithreading')) return 'multithreading';
    if (path.includes('/streams-lambdas')) return 'streams-lambdas';
    if (path.includes('/advanced-features')) return 'advanced-features';
    if (path.includes('/database')) return 'database';
    if (path.includes('/web-development')) return 'web-development';
    if (path.includes('/best-practices')) return 'best-practices';
    if (path.includes('/testing')) return 'testing';
    return 'intro'; // default
  };
  
  const [activeSection, setActiveSection] = useState(getCurrentSection());

  const navigationSections = [
    {
      title: "Java Fundamentals",
      items: [
        { id: 'intro', label: 'Introduction to Java', icon: '☕' },
        { id: 'variables', label: 'Variables and Data Types', icon: '🔤' },
        { id: 'operators', label: 'Operators and Expressions', icon: '➕' },
        { id: 'comments', label: 'Comments and Code Structure', icon: '💬' }
      ]
    },
    {
      title: "Methods",
      items: [
        { id: 'methods', label: 'Methods and Functions', icon: '⚙️' },
        { id: 'scope-access', label: 'Scope and Access Modifiers', icon: '🏗️' }
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
      title: "Data Structures",
      items: [
        { id: 'arrays', label: 'Arrays', icon: '📋' },
        { id: 'strings', label: 'String Manipulation', icon: '📝' }
      ]
    },
    {
      title: "Object-Oriented Programming",
      items: [
        { id: 'oop', label: 'OOP Principles', icon: '🏛️' },
        { id: 'classes-objects', label: 'Classes and Objects', icon: '🏷️' },
        { id: 'inheritance', label: 'Inheritance', icon: '🧬' },
        { id: 'polymorphism', label: 'Polymorphism', icon: '🎭' },
        { id: 'encapsulation', label: 'Encapsulation', icon: '📦' },
        { id: 'abstract-interfaces', label: 'Abstract Classes & Interfaces', icon: '🔲' }
      ]
    },
    {
      title: "Exception Handling",
      items: [
        { id: 'exception-handling', label: 'Try-Catch and Exception Types', icon: '⚠️' }
      ]
    },
    {
      title: "Collections Framework",
      items: [
        { id: 'collections', label: 'Lists, Sets, Maps & More', icon: '📚' }
      ]
    },
    {
      title: "File Operations",
      items: [
        { id: 'file-handling', label: 'File I/O Operations', icon: '📁' }
      ]
    },
    {
      title: "Concurrency",
      items: [
        { id: 'multithreading', label: 'Multithreading & Synchronization', icon: '🔀' }
      ]
    },
    {
      title: "Modern Java Features",
      items: [
        { id: 'streams-lambdas', label: 'Streams API & Lambda Expressions', icon: '🌊' },
        { id: 'advanced-features', label: 'Java 8+ Advanced Features', icon: '✨' }
      ]
    },
    {
      title: "Database & Web",
      items: [
        { id: 'database', label: 'JDBC & Database Connectivity', icon: '🗄️' },
        { id: 'web-development', label: 'Java Web Development', icon: '🌐' }
      ]
    },
    {
      title: "Best Practices",
      items: [
        { id: 'best-practices', label: 'Coding Standards & Patterns', icon: '✅' },
        { id: 'testing', label: 'Unit Testing with JUnit', icon: '🧪' }
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
          <span className="js-title-icon">☕</span>
          Java Guide
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
                    to={`/web/java/${item.id}`}
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