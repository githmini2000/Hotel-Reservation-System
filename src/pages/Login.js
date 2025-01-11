import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Login.css'; // Importing the custom styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // To navigate the user to homepage

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the user details from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // Check if entered email and password match with saved details
    if (email === storedEmail && password === storedPassword) {
      navigate("/"); // Redirect to homepage if login is successful
    } else {
      setErrorMessage("Invalid email or password! Please try again."); // Show error if credentials don't match
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>

      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Error message display */}

      <form onSubmit={handleSubmit}>
        <div className="auth-input">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="auth-input">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Sign In</button>
      </form>

      <p>
        Don't have an account? <a href="/signup">Create an account</a>
      </p>
    </div>
  );
};

export default Login;
