import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbarweb from './Navbarweb';
import './Navbarweb.css';

// Import topic components
import IntroductionToJavaScript from './topics/Introduction_to_JavaScript';
import VariablesAndDataTypes from './topics/Variables_and_Data_Types';
import OperatorsAndExpressions from './topics/Operators_and_Expressions';
import CommentsAndCodeStructure from './topics/Comments_and_Code_Structure';
import DefiningFunctions from './topics/Defining_Functions';
import FunctionScopeAndHoisting from './topics/Function_Scope_and_Hoisting';
import ArrowFunctions from './topics/Arrow_Functions';
import ConditionalStatements from './topics/Conditional_Statements';
import Loops from './topics/Loops';
import Objects from './topics/Objects';
import Arrays from './topics/Arrays';
import ObjectOrientedProgramming from './topics/Object_Oriented_Programming';
import EventsAndEventHandling from './topics/Events_and_Event_Handling';
import DOMManipulation from './topics/DOM_Manipulation';
import FormHandlingAndValidation from './topics/Form_Handling_and_Validation';
import Closures from './topics/Closures';
import CallbacksAndHigherOrderFunctions from './topics/Callbacks_and_Higher_Order_Functions';
import AsynchronousJavaScript from './topics/Asynchronous_JavaScript';
import ErrorHandling from './topics/Error_Handling';
import BrowserAPIs from './topics/Browser_APIs';
import ES6Features from './topics/ES6_Features';
import FrameworksOverview from './topics/Frameworks_Overview';
import ChoosingFramework from './topics/Choosing_Framework';
import DebuggingJavaScript from './topics/Debugging_JavaScript';
import LintingCodeStyle from './topics/Linting_Code_Style';
import TestingJavaScript from './topics/Testing_JavaScript';

// Default JavaScript Overview Component
function JavaScriptOverview() {
  return (
    <>
      <div className="js-content-header">
        <h1>JavaScript Programming Language</h1>
        <p className="js-content-subtitle">
          Master JavaScript from fundamentals to advanced concepts with our comprehensive guide
        </p>
      </div>
      
      <div className="js-content-sections">
        <section className="js-content-section">
          <h2>🚀 Welcome to JavaScript</h2>
          <p>
            JavaScript is a versatile, high-level programming language that powers the modern web. 
            From simple interactions to complex applications, JavaScript is essential for web development.
          </p>
          <div className="js-highlight-box">
            <h3>What you'll learn:</h3>
            <ul>
              <li>Core JavaScript concepts and syntax</li>
              <li>Modern ES6+ features and best practices</li>
              <li>DOM manipulation and event handling</li>
              <li>Asynchronous programming with Promises and async/await</li>
              <li>Working with APIs and data</li>
              <li>Popular frameworks and libraries</li>
            </ul>
          </div>
        </section>

        <section className="js-content-section">
          <h2>🎯 Getting Started</h2>
          <p>Choose a topic from the sidebar to dive deeper into JavaScript concepts.</p>
          <div className="js-feature-grid">
            <div className="js-feature-card">
              <h3>🔤 Fundamentals</h3>
              <p>Start with variables, data types, and basic syntax</p>
            </div>
            <div className="js-feature-card">
              <h3>⚙️ Functions</h3>
              <p>Learn to create reusable code blocks</p>
            </div>
            <div className="js-feature-card">
              <h3>🌐 DOM Manipulation</h3>
              <p>Interact with web page elements</p>
            </div>
            <div className="js-feature-card">
              <h3>⏳ Async Programming</h3>
              <p>Handle asynchronous operations effectively</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function JavaScript() {
  return (
    <div className="js-navbar-container">
      <Navbarweb />
      <div className="js-main-content">
        <Routes>
          <Route path="/" element={<JavaScriptOverview />} />
          <Route path="/intro" element={<IntroductionToJavaScript />} />
          <Route path="/variables" element={<VariablesAndDataTypes />} />
          <Route path="/operators" element={<OperatorsAndExpressions />} />
          <Route path="/comments" element={<CommentsAndCodeStructure />} />
          <Route path="/defining-functions" element={<DefiningFunctions />} />
          <Route path="/scope-hoisting" element={<FunctionScopeAndHoisting />} />
          <Route path="/arrow-functions" element={<ArrowFunctions />} />
          <Route path="/conditionals" element={<ConditionalStatements />} />
          <Route path="/loops" element={<Loops />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/arrays" element={<Arrays />} />
          <Route path="/oop" element={<ObjectOrientedProgramming />} />
          <Route path="/events" element={<EventsAndEventHandling />} />
          <Route path="/dom" element={<DOMManipulation />} />
          <Route path="/forms" element={<FormHandlingAndValidation />} />
          <Route path="/closures" element={<Closures />} />
          <Route path="/callbacks" element={<CallbacksAndHigherOrderFunctions />} />
          <Route path="/async" element={<AsynchronousJavaScript />} />
          <Route path="/error-handling" element={<ErrorHandling />} />
          <Route path="/browser-apis" element={<BrowserAPIs />} />
          <Route path="/es6-features" element={<ES6Features />} />
          <Route path="/frameworks-overview" element={<FrameworksOverview />} />
          <Route path="/choosing-framework" element={<ChoosingFramework />} />
          <Route path="/debugging" element={<DebuggingJavaScript />} />
          <Route path="/linting" element={<LintingCodeStyle />} />
          <Route path="/testing" element={<TestingJavaScript />} />
          <Route path="*" element={<Navigate to="/web/javascript/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default JavaScript;