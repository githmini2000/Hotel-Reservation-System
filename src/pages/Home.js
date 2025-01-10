import React, { useState } from "react";
import "./Home.css";

// Import images
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img11 from "../assets/img11.png";

import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";

// Import the background image
import homeBack from "../assets/homeBack.png";

const Home = () => {
  // Data for destinations
  const destinations = [
    { src: img1, name: "Colombo" },
    { src: img2, name: "Kandy" },
    { src: img3, name: "Galle" },
    { src: img4, name: "Nuwara Eliya" },
    { src: img5, name: "Sigiriya" },
    { src: img11, name: "Hikkaduwa" },
  ];

  // Data for hotels
  const hotels = [
    { src: img6, name: "Cinnamon Grand Colombo" },
    { src: img7, name: "Galle Face Hotel" },
    { src: img8, name: "Amaya Lake Kandy" },
    { src: img9, name: "Heritance Kandalama" },
    { src: img10, name: "Jetwing Lagoon" },
  ];

  const [currentIndexDest, setCurrentIndexDest] = useState(0); // Current index for destinations
  const [currentIndexHotels, setCurrentIndexHotels] = useState(0); // Current index for hotels

  const itemsPerPage = 4; // Number of items to display in carousel

  // Navigate to the next set of items
  const handleNext = (type) => {
    if (type === "destinations") {
      setCurrentIndexDest(
        (prevIndex) => (prevIndex + 1) % destinations.length
      );
    } else {
      setCurrentIndexHotels(
        (prevIndex) => (prevIndex + 1) % hotels.length
      );
    }
  };

  // Navigate to the previous set of items
  const handlePrev = (type) => {
    if (type === "destinations") {
      setCurrentIndexDest(
        (prevIndex) =>
          (prevIndex - 1 + destinations.length) % destinations.length
      );
    } else {
      setCurrentIndexHotels(
        (prevIndex) =>
          (prevIndex - 1 + hotels.length) % hotels.length
      );
    }
  };

  // Render the carousel for either destinations or hotels
  const renderCarousel = (items, currentIndex) => {
    const visibleItems = items.slice(
      currentIndex,
      currentIndex + itemsPerPage
    );

    // If not enough items at the end, wrap around
    if (visibleItems.length < itemsPerPage) {
      visibleItems.push(...items.slice(0, itemsPerPage - visibleItems.length));
    }

    return (
      <div className="images-row">
        {visibleItems.map((item, index) => (
          <div key={index} className="image-card">
            <img src={item.src} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="home-page">
      {/* Section 1: Welcome Section */}
      <div
        className="welcome-section"
        style={{ backgroundImage: `url(${homeBack})` }}
      >
        <div className="overlay">
          <h2>Welcome To</h2>
          <h1>HOTEL RESERVATION</h1>
          <p>Make Your Holidays Comfortable With Us.......</p>
        </div>
      </div>

      {/* Section 2: Destinations and Hotels */}
      <div className="content-section">
        {/* Top Destinations Section */}
        <div className="section">
          <h3>Top Destinations for Sri Lanka City Trips</h3>
          <div className="carousel">
            <button
              className="carousel-btn"
              onClick={() => handlePrev("destinations")}
            >
              {"<"}
            </button>
            {renderCarousel(destinations, currentIndexDest)}
            <button
              className="carousel-btn"
              onClick={() => handleNext("destinations")}
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Hotels in Popular Regions Section */}
        <div className="section">
          <h3>Hotels in the Most Popular Regions</h3>
          <div className="carousel">
            <button
              className="carousel-btn"
              onClick={() => handlePrev("hotels")}
            >
              {"<"}
            </button>
            {renderCarousel(hotels, currentIndexHotels)}
            <button
              className="carousel-btn"
              onClick={() => handleNext("hotels")}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
