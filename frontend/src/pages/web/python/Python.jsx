import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbarweb from './Navbarweb';
import './Navbarweb.css';

// Import topic components
import IntroductionToPython from './topics/Introduction_to_Python';
import VariablesAndDataTypes from './topics/Variables_and_Data_Types';
import OperatorsAndExpressions from './topics/Operators_and_Expressions';
import CommentsAndCodeStructure from './topics/Comments_and_Code_Structure';
import FunctionsAndParameters from './topics/Functions_and_Parameters';
import ScopeAndNamespaces from './topics/Scope_and_Namespaces';
import ConditionalStatements from './topics/Conditional_Statements';
import LoopsAndIteration from './topics/Loops_and_Iteration';
import DataStructuresOverview from './topics/Data_Structures_Overview';
import ListsAndArrays from './topics/Lists_and_Arrays';
import Tuples from './topics/Tuples';
import Dictionaries from './topics/Dictionaries';
import Sets from './topics/Sets';
import StringManipulation from './topics/String_Manipulation';
import ClassesAndObjects from './topics/Classes_and_Objects';
import Inheritance from './topics/Inheritance';
import Polymorphism from './topics/Polymorphism';
import Encapsulation from './topics/Encapsulation';
import ModulesAndImports from './topics/Modules_and_Imports';
import PackagesAndLibraries from './topics/Packages_and_Libraries';
import ErrorHandling from './topics/Error_Handling';
import FileIOOperations from './topics/File_IO_Operations';
import Decorators from './topics/Decorators';
import GeneratorsAndIterators from './topics/Generators_and_Iterators';
import LambdaFunctions from './topics/Lambda_Functions';
import ListComprehensions from './topics/List_Comprehensions';
import RegularExpressions from './topics/Regular_Expressions';
import TestingPythonCode from './topics/Testing_Python_Code';
import PopularLibraries from './topics/Popular_Libraries';
import WebDevelopment from './topics/Web_Development';
import DataScienceBasics from './topics/Data_Science_Basics';
import BestPractices from './topics/Best_Practices';

// Default Python Overview Component
function PythonOverview() {
  return (
    <>
      <div className="py-content-header">
        <h1>🐍 Python Programming Language</h1>
        <p className="py-content-subtitle">
          Master Python from fundamentals to advanced concepts with our comprehensive guide
        </p>
      </div>
      
      <div className="py-content-sections">
        <section className="py-content-section">
          <h2>🚀 Welcome to Python</h2>
          <p>
            Python is a versatile, high-level programming language that emphasizes code readability 
            and simplicity. From web development to data science, machine learning to automation, 
            Python is the language that can handle it all.
          </p>
          <div className="py-highlight-box">
            <h3>What you'll learn:</h3>
            <ul>
              <li>Core Python concepts and syntax</li>
              <li>Object-oriented programming principles</li>
              <li>Data structures and algorithms</li>
              <li>File handling and error management</li>
              <li>Popular libraries and frameworks</li>
              <li>Real-world application development</li>
            </ul>
          </div>
        </section>

        <section className="py-content-section">
          <h2>🎯 Getting Started</h2>
          <p>Choose a topic from the sidebar to dive deeper into Python concepts.</p>
          <div className="py-feature-grid">
            <div className="py-feature-card">
              <h3>🔤 Fundamentals</h3>
              <p>Start with variables, data types, and basic syntax</p>
            </div>
            <div className="py-feature-card">
              <h3>⚙️ Functions</h3>
              <p>Learn to create reusable code blocks</p>
            </div>
            <div className="py-feature-card">
              <h3>📋 Data Structures</h3>
              <p>Master lists, dictionaries, and more</p>
            </div>
            <div className="py-feature-card">
              <h3>🏗️ OOP</h3>
              <p>Object-oriented programming concepts</p>
            </div>
            <div className="py-feature-card">
              <h3>📊 Data Science</h3>
              <p>Introduction to data analysis with Python</p>
            </div>
            <div className="py-feature-card">
              <h3>🌐 Web Development</h3>
              <p>Build web applications with Python</p>
            </div>
          </div>
        </section>

        <section className="py-content-section">
          <h2>💡 Why Choose Python?</h2>
          <div className="py-highlight-box">
            <ul>
              <li><strong>Easy to Learn:</strong> Simple, readable syntax</li>
              <li><strong>Versatile:</strong> Used in web dev, data science, AI, automation</li>
              <li><strong>Large Community:</strong> Extensive documentation and support</li>
              <li><strong>Rich Ecosystem:</strong> Thousands of libraries and frameworks</li>
              <li><strong>High Demand:</strong> One of the most popular programming languages</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

function Python() {
  return (
    <div className="py-navbar-container">
      <Navbarweb />
      <div className="py-main-content">
        <Routes>
          <Route path="/" element={<PythonOverview />} />
          <Route path="/intro" element={<IntroductionToPython />} />
          <Route path="/variables" element={<VariablesAndDataTypes />} />
          <Route path="/operators" element={<OperatorsAndExpressions />} />
          <Route path="/comments" element={<CommentsAndCodeStructure />} />
          <Route path="/functions" element={<FunctionsAndParameters />} />
          <Route path="/scope" element={<ScopeAndNamespaces />} />
          <Route path="/conditionals" element={<ConditionalStatements />} />
          <Route path="/loops" element={<LoopsAndIteration />} />
          <Route path="/data-structures" element={<DataStructuresOverview />} />
          <Route path="/lists" element={<ListsAndArrays />} />
          <Route path="/tuples" element={<Tuples />} />
          <Route path="/dictionaries" element={<Dictionaries />} />
          <Route path="/sets" element={<Sets />} />
          <Route path="/strings" element={<StringManipulation />} />
          <Route path="/classes" element={<ClassesAndObjects />} />
          <Route path="/inheritance" element={<Inheritance />} />
          <Route path="/polymorphism" element={<Polymorphism />} />
          <Route path="/encapsulation" element={<Encapsulation />} />
          <Route path="/modules" element={<ModulesAndImports />} />
          <Route path="/packages" element={<PackagesAndLibraries />} />
          <Route path="/error-handling" element={<ErrorHandling />} />
          <Route path="/file-handling" element={<FileIOOperations />} />
          <Route path="/decorators" element={<Decorators />} />
          <Route path="/generators" element={<GeneratorsAndIterators />} />
          <Route path="/lambda" element={<LambdaFunctions />} />
          <Route path="/comprehensions" element={<ListComprehensions />} />
          <Route path="/regular-expressions" element={<RegularExpressions />} />
          <Route path="/testing" element={<TestingPythonCode />} />
          <Route path="/libraries" element={<PopularLibraries />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/data-science" element={<DataScienceBasics />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="*" element={<Navigate to="/web/python/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default Python;