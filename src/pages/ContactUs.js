import React, { useState } from 'react';
import './ContactUs.css';

const Contact = () => {
  // State to track form submission status
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful form submission
    setMessageSent(true);

    // Optionally, clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Hide the success message after a few seconds
    setTimeout(() => setMessageSent(false), 5000);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or messages, feel free to reach out to us.</p>

      {messageSent && <p className="success-message">Your message has been sent successfully!</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-icon">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin-icon">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter-icon">Twitter</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube-icon">YouTube</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
