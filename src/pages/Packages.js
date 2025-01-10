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

  return (
    <div className="packages-container">
      <header>
        <h1>AVAILABLE  PACKAGES</h1>
      </header>

      <div className="view-toggle">
        <button onClick={() => toggleView('grid')}>Grid View</button>
        <button onClick={() => toggleView('list')}>List View</button>
      </div>

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
