import React, { useState } from 'react';
import './Packages.css';
import imgPackage1 from "../assets/imgPackage1.png";
import imgPackage2 from "../assets/imgPackage2.png";
import imgPackage3 from "../assets/imgPackage3.png";
import imgPackage4 from "../assets/imgPackage4.png";
import imgPackage5 from "../assets/imgPackage5.png";
import imgPackage6 from "../assets/imgPackage6.png";

const Packages = () => {
  const [viewMode, setViewMode] = useState('grid'); // Default view is 'grid'
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null); // To store selected package for booking

  const packages = [
    {
      title: 'Beach Vacation Package',
      description: 'A relaxing beach vacation package with a 5-star resort stay, all-inclusive meals, and exciting water activities.',
      price: '$500',
      imageUrl: imgPackage1,
    },
    {
      title: 'Mountain Adventure Package',
      description: 'An adventurous mountain trekking package with professional guides, accommodation, and meals.',
      price: '$400',
      imageUrl: imgPackage2,
    },
    {
      title: 'City Tour Package',
      description: 'Explore the city with this sightseeing tour package, including guided tours to the best landmarks.',
      price: '$300',
      imageUrl: imgPackage3,
    },
    {
      title: 'Safari Adventure Package',
      description: 'Experience the wilderness with this exciting safari package featuring guided tours and luxury camping.',
      price: '$450',
      imageUrl: imgPackage4,
    },
    {
      title: 'Cultural Heritage Package',
      description: 'Discover the rich cultural heritage with this all-inclusive historical site tour package.',
      price: '$350',
      imageUrl: imgPackage5,
    },
    {
      title: 'Cruise Getaway Package',
      description: 'Enjoy a luxury cruise with this exclusive package featuring fine dining and onboard entertainment.',
      price: '$600',
      imageUrl: imgPackage6,
    },
  ];

  const toggleView = (view) => {
    setViewMode(view);
  };

  const handleBookNowClick = (pkg) => {
    setSelectedPackage(pkg); // Store selected package details
    setShowBookingForm(true); // Show booking form
  };

  const handleBackToPackages = () => {
    setShowBookingForm(false); // Hide booking form and go back to packages
    setSelectedPackage(null);
  };

  return (
    <div className="packages-container">
      <header>
        <h1>Available Packages</h1>
      </header>

      <div className="view-toggle">
        <button onClick={() => toggleView('grid')}>Grid View</button>
        <button onClick={() => toggleView('list')}>List View</button>
      </div>

      {showBookingForm ? (
        // Render Booking Form
        <div className="booking-form">
          <h2>Booking Form for {selectedPackage.title}</h2>
          <form>
            <div>
              <label>Full Name:</label>
              <input type="text" required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div>
              <label>Phone:</label>
              <input type="tel" required />
            </div>
            <div>
              <label>Package Price:</label>
              <input type="text" value={selectedPackage.price} readOnly />
            </div>
            {/* Add other booking form fields if needed */}
            <button className='button' type="submit">Submit</button>
          </form>
          <button className='button2' onClick={handleBackToPackages}>Back to Packages</button>
        </div>
      ) : (
        // Render Package List
        <div className={`packages ${viewMode}`}>
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <img src={pkg.imageUrl} alt={pkg.title} className="package-image" />
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <span>{pkg.price}</span>
              <button className="book-now" onClick={() => handleBookNowClick(pkg)}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Packages;
