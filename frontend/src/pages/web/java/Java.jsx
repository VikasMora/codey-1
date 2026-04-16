import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbarweb from './Navbarweb';
import './Navbarweb.css';

// Import topic components
import IntroductionToJava from './topics/Introduction_to_Java';
import VariablesAndDataTypes from './topics/Variables_and_Data_Types';
import OperatorsAndExpressions from './topics/Operators_and_Expressions';
import CommentsAndCodeStructure from './topics/Comments_and_Code_Structure';
import MethodsAndFunctions from './topics/Methods_and_Functions';
import ScopeAndAccessModifiers from './topics/Scope_and_Access_Modifiers';
import ConditionalStatements from './topics/Conditional_Statements';
import Loops from './topics/Loops';
import Arrays from './topics/Arrays';
import Strings from './topics/Strings';
import ObjectOrientedProgramming from './topics/Object_Oriented_Programming';
import ClassesAndObjects from './topics/Classes_and_Objects';
import Inheritance from './topics/Inheritance';
import Polymorphism from './topics/Polymorphism';
import Encapsulation from './topics/Encapsulation';
import AbstractClassesAndInterfaces from './topics/Abstract_Classes_and_Interfaces';
import ExceptionHandling from './topics/Exception_Handling';
import CollectionsFramework from './topics/Collections_Framework';
import FileHandling from './topics/File_Handling';
import Multithreading from './topics/Multithreading';
import StreamsAndLambdas from './topics/Streams_and_Lambdas';
import AdvancedFeatures from './topics/Advanced_Features';
import DatabaseConnectivity from './topics/Database_Connectivity';
import WebDevelopment from './topics/Web_Development';
import BestPractices from './topics/Best_Practices';
import TestingJava from './topics/Testing_Java';

// Default Java Overview Component
function JavaOverview() {
  return (
    <>
      <div className="js-content-header">
        <h1>Java Programming Language</h1>
        <p className="js-content-subtitle">
          Master Java from fundamentals to advanced enterprise concepts with our comprehensive guide
        </p>
      </div>
      
      <div className="js-content-sections">
        <section className="js-content-section">
          <h2>☕ Welcome to Java</h2>
          <p>
            Java is a versatile, object-oriented programming language that's platform-independent and widely used 
            for enterprise applications, web development, and mobile apps. "Write Once, Run Anywhere" - that's the power of Java.
          </p>
          <div className="js-highlight-box">
            <h3>What you'll learn:</h3>
            <ul>
              <li>Core Java concepts and object-oriented programming</li>
              <li>Data structures and collections framework</li>
              <li>Exception handling and best practices</li>
              <li>Multithreading and concurrency</li>
              <li>Stream API and lambda expressions</li>
              <li>Database connectivity with JDBC</li>
              <li>Web development with Java frameworks</li>
            </ul>
          </div>
        </section>

        <section className="js-content-section">
          <h2>🎯 Getting Started</h2>
          <p>Choose a topic from the sidebar to dive deeper into Java concepts.</p>
          <div className="js-feature-grid">
            <div className="js-feature-card">
              <h3>🏗️ Fundamentals</h3>
              <p>Start with variables, data types, and basic syntax</p>
            </div>
            <div className="js-feature-card">
              <h3>🏛️ OOP Concepts</h3>
              <p>Master classes, objects, and inheritance</p>
            </div>
            <div className="js-feature-card">
              <h3>📚 Collections</h3>
              <p>Work with Lists, Sets, Maps, and more</p>
            </div>
            <div className="js-feature-card">
              <h3>🔀 Concurrency</h3>
              <p>Handle multithreading and parallel processing</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Java() {
  return (
    <div className="js-navbar-container">
      <Navbarweb />
      <div className="js-main-content">
        <Routes>
          <Route path="/" element={<JavaOverview />} />
          <Route path="/intro" element={<IntroductionToJava />} />
          <Route path="/variables" element={<VariablesAndDataTypes />} />
          <Route path="/operators" element={<OperatorsAndExpressions />} />
          <Route path="/comments" element={<CommentsAndCodeStructure />} />
          <Route path="/methods" element={<MethodsAndFunctions />} />
          <Route path="/scope-access" element={<ScopeAndAccessModifiers />} />
          <Route path="/conditionals" element={<ConditionalStatements />} />
          <Route path="/loops" element={<Loops />} />
          <Route path="/arrays" element={<Arrays />} />
          <Route path="/strings" element={<Strings />} />
          <Route path="/oop" element={<ObjectOrientedProgramming />} />
          <Route path="/classes-objects" element={<ClassesAndObjects />} />
          <Route path="/inheritance" element={<Inheritance />} />
          <Route path="/polymorphism" element={<Polymorphism />} />
          <Route path="/encapsulation" element={<Encapsulation />} />
          <Route path="/abstract-interfaces" element={<AbstractClassesAndInterfaces />} />
          <Route path="/exception-handling" element={<ExceptionHandling />} />
          <Route path="/collections" element={<CollectionsFramework />} />
          <Route path="/file-handling" element={<FileHandling />} />
          <Route path="/multithreading" element={<Multithreading />} />
          <Route path="/streams-lambdas" element={<StreamsAndLambdas />} />
          <Route path="/advanced-features" element={<AdvancedFeatures />} />
          <Route path="/database" element={<DatabaseConnectivity />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="/testing" element={<TestingJava />} />
          <Route path="*" element={<Navigate to="/web/java/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default Java;