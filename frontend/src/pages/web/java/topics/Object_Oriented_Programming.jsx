import React from 'react';
import '../Navbarweb.css';

function ObjectOrientedProgramming() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🏛️ Object-Oriented Programming Principles</h1>
        <p className="js-topic-subtitle">Master the four pillars of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction</p>
      </div>
      <div className="js-topic-content">
        <section className="js-topic-section">
          <h2>🏗️ What is Object-Oriented Programming?</h2>
          <p>
            OOP is a programming paradigm that organizes code around objects and classes, 
            making code more modular, reusable, and easier to maintain.
          </p>
          <div className="js-feature-grid">
            <div className="js-feature-card">
              <h4>📦 Encapsulation</h4>
              <p>Bundling data and methods together, hiding internal details</p>
            </div>
            <div className="js-feature-card">
              <h4>🧬 Inheritance</h4>
              <p>Creating new classes based on existing ones</p>
            </div>
            <div className="js-feature-card">
              <h4>🎭 Polymorphism</h4>
              <p>One interface, multiple implementations</p>
            </div>
            <div className="js-feature-card">
              <h4>🔲 Abstraction</h4>
              <p>Hiding complexity, showing only essential features</p>
            </div>
          </div>
        </section>
        <section className="js-topic-section">
          <h2>🏷️ Classes and Objects</h2>
          <div className="js-code-block">
            <pre><code>{`// Class definition
public class Car {
    // Fields (instance variables)
    private String brand;
    private String model;
    private int year;
    private boolean isRunning;
    
    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }
    
    // Methods
    public void start() {
        if (!isRunning) {
            isRunning = true;
            System.out.println(brand + " " + model + " started");
        }
    }
    
    public void stop() {
        if (isRunning) {
            isRunning = false;
            System.out.println(brand + " " + model + " stopped");
        }
    }
    
    // Getters and setters
    public String getBrand() {
        return brand;
    }
    
    public void setBrand(String brand) {
        this.brand = brand;
    }
}

// Creating and using objects
Car myCar = new Car("Toyota", "Camry", 2022);
myCar.start();
System.out.println("Brand: " + myCar.getBrand());`}</code></pre>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ObjectOrientedProgramming;