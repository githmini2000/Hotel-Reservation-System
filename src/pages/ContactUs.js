import React from 'react';
import './ContactUs.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or messages, feel free to reach out to us.</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter your message" rows="4" required></textarea>
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
