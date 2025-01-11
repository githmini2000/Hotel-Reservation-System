import React, { useState } from 'react';
import './SignUp.css'; // Importing the custom styles

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save the registration data in localStorage (in a real app, save it to a database)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // Set registration success to true after form submission
    setRegistrationSuccess(true);
  };

  return (
    <div className="auth-container">
      <h2>Create an Account</h2>

      {registrationSuccess ? (
        <div className="success-message">
          <h3>Registration Successful!</h3>
          <p>Thank you for registering, {name}. You can now log in to your account.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="auth-input">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
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
          <button type="submit">Sign Up</button>
        </form>
      )}

      <p>
        Already have an account? <a href="/login">Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;
