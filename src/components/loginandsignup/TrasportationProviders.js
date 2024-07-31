import React, { useState } from "react";
import axios from "axios";
import "./TransportationProviders.css";
import { useNavigate } from "react-router-dom";

const ProviderRegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  // Regex pattern for password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validatePassword = (password) => {
    if (passwordRegex.test(password)) {
      setPasswordError("");
      return true;
    } else {
      setPasswordError("Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      return; // Prevent form submission if password is invalid
    }

    const providerData = { name, email, password, company };

    try {
      const response = await axios.post(
        "http://localhost:5001/providers",
        providerData
      );
      console.log("Provider registered successfully:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("There was an error registering the provider:", error);
    }
  };

  return (
    <div className="transportation-background">
      <div className="registration-container">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2>Transportation Provider Registration</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              placeholder="Enter your password"
              required
            />
            {passwordError && <p className="error-text">{passwordError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter your company name"
              required
            />
          </div>
          <button type="submit" className="registrationT-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProviderRegistrationForm;
