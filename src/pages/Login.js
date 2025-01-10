import React, { useState } from 'react';
import './Login.css'; // For custom styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login details", { email, password });
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
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
        Forgot your password? <a href="/reset-password">Reset Password</a>
      </p>
      <p>
        Don't have an account? <a href="/signup">Create an account</a>
      </p>
    </div>
  );
};

export default Login;
