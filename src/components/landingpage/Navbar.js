import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">LASSO</div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
