import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import notificationIcon from "../assets/notification.png";
import worldIcon from "../assets/world.png";

const Navbar = () => {
  const location = useLocation();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const selectLanguage = (language) => {
    alert(`You selected: ${language}`);
    setIsDropdownVisible(false);
  };

  return (
    <header className="navbar-header">
      {/* Top Section: Icons and Buttons */}
      <div className="navbar-top">
        <img src={notificationIcon} alt="Notifications" className="navbar-icon" />
        <div className="navbar-language">
          <img
            src={worldIcon}
            alt="Language"
            className="navbar-icon"
            onClick={toggleDropdown}
          />
          {isDropdownVisible && (
            <div className="language-dropdown">
              <ul>
                <li onClick={() => selectLanguage("English")}>English</li>
                <li onClick={() => selectLanguage("සිංහල")}>සිංහල</li>
                <li onClick={() => selectLanguage("தமிழ்")}>தமிழ்</li>
                <li onClick={() => selectLanguage("Español")}>Español</li>
                <li onClick={() => selectLanguage("Français")}>Français</li>
              </ul>
            </div>
          )}
        </div>
        <div className="navbar-buttons">
          <Link to="/login" className="navbar-button login">
            Login
          </Link>
          <Link to="/signup" className="navbar-button register">
            Register
          </Link>
        </div>
      </div>

      {/* Bottom Section: Logo and Navigation Links */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/hotels"
              className={location.pathname === "/hotels" ? "active" : ""}
            >
              Hotels
            </Link>
          </li>
          <li>
            <Link
              to="/packages"
              className={location.pathname === "/packages" ? "active" : ""}
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact Us
            </Link>
          </li>
          <li>
            {/* Booking link */}
            <Link
              to="/booking"
              className={
                location.pathname === "/booking" ? "active" : "booking-button"
              }
            >
              Booking
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
