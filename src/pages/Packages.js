import React, { useState } from 'react';
import './Packages.css';
import imgPackage1 from "../assets/imgPackage1.png";
import imgPackage2 from "../assets/imgPackage2.png";
import imgPackage3 from "../assets/imgPackage3.png";

const Packages = () => {
  const [viewMode, setViewMode] = useState('grid'); // Default view is 'grid'
  const packages = [
    {
      title: 'Beach Vacation Package',
      description: 'A relaxing beach vacation package with a 5-star resort stay, all-inclusive meals, and exciting water activities.',
      price: '$500',
      imageUrl: imgPackage1, // Add your image path here
    },
    {
      title: 'Mountain Adventure Package',
      description: 'An adventurous mountain trekking package with professional guides, accommodation, and meals.',
      price: '$400',
      imageUrl: imgPackage2, // Add your image path here
    },
    {
      title: 'City Tour Package',
      description: 'Explore the city with this sightseeing tour package, including guided tours to the best landmarks.',
      price: '$300',
      imageUrl:imgPackage3, // Add your image path here
    },
  ];

  // Toggle between grid and list view
  const toggleView = (view) => {
    setViewMode(view);
  };

  return (
    <div className="packages-container">
      <header>
        <h1>Available Packages</h1>
      </header>

      {/* View Toggle Options */}
      <div className="view-toggle">
        <button onClick={() => toggleView('grid')}>Grid View</button>
        <button onClick={() => toggleView('list')}>List View</button>
      </div>

      {/* Packages Section */}
      <div className={`packages ${viewMode}`}>
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <img src={pkg.imageUrl} alt={pkg.title} className="package-image" />
            <h3>{pkg.title}</h3>
            <p>{pkg.description}</p>
            <span>{pkg.price}</span>
            <button className="book-now">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
