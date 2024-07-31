import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to the Logistics Management System</h1>
        <p>
          Streamline and optimize the movement and storage of goods within your
          supply chain.
        </p>
        <div className="cta-buttons">
          <Link to="/login">
            <button className="btn login-btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn register-btn">Register</button>
          </Link>
          <br></br>
          
        </div>
        {/* <Link to="/chatbot">
            <button className="chatbot">Got Questions? Ask our ChatBot!</button>
          </Link> */}
      </div>
    </section>
  );
};

export default HeroSection;
