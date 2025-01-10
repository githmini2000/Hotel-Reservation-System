import React, { useState } from 'react';
import './Hotels.css';
import imgHotel1 from "../assets/imgHotel1.png";
import imgHotel2 from "../assets/imgHotel2.png";
import imgHotel3 from "../assets/imgHotel3.png";

const Hotels = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    mealAvailability: { breakfast: false, lunch: false },
    facilities: { balcony: false, swimmingPool: false },
    reviews: { good: false, veryGood: false },
  });

  const [search, setSearch] = useState({
    checkinDate: '',
    checkoutDate: '',
    location: '',
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        if (name.includes('mealAvailability') || name.includes('facilities') || name.includes('reviews')) {
          updatedFilters[name][value] = checked;
        }
        return updatedFilters;
      });
    } else if (type === 'range') {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearch((prevSearch) => ({
      ...prevSearch,
      [name]: value,
    }));
  };

  return (
    <div className="hotels-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="date"
          name="checkinDate"
          value={search.checkinDate}
          onChange={handleSearchChange}
          placeholder="Check-in Date"
        />
        <input
          type="date"
          name="checkoutDate"
          value={search.checkoutDate}
          onChange={handleSearchChange}
          placeholder="Check-out Date"
        />
        <input
          type="text"
          name="location"
          value={search.location}
          onChange={handleSearchChange}
          placeholder="Enter Location"
        />
        <button>Search</button>
      </div>

      {/* Filter Section */}
      <div className="filter-container">
        <div className="filters">
          <h3>Filters</h3>
          <div className="filter-group">
            <label>Price Range</label>
            <input
              type="range"
              name="priceRange"
              min="0"
              max="1000"
              value={filters.priceRange}
              onChange={handleFilterChange}
            />
            <span>{`$${filters.priceRange}`}</span>
          </div>
          <div className="filter-group">
            <label>Meal Availability</label>
            <label>
              <input
                type="checkbox"
                name="mealAvailability"
                value="breakfast"
                checked={filters.mealAvailability.breakfast}
                onChange={handleFilterChange}
              />
              Breakfast
            </label>
            <label>
              <input
                type="checkbox"
                name="mealAvailability"
                value="lunch"
                checked={filters.mealAvailability.lunch}
                onChange={handleFilterChange}
              />
              Lunch
            </label>
          </div>

          <div className="filter-group">
            <label>Facilities</label>
            <label>
              <input
                type="checkbox"
                name="facilities"
                value="balcony"
                checked={filters.facilities.balcony}
                onChange={handleFilterChange}
              />
              Balcony
            </label>
            <label>
              <input
                type="checkbox"
                name="facilities"
                value="swimmingPool"
                checked={filters.facilities.swimmingPool}
                onChange={handleFilterChange}
              />
              Swimming Pool
            </label>
          </div>

          <div className="filter-group">
            <label>Reviews</label>
            <label>
              <input
                type="checkbox"
                name="reviews"
                value="good"
                checked={filters.reviews.good}
                onChange={handleFilterChange}
              />
              Good
            </label>
            <label>
              <input
                type="checkbox"
                name="reviews"
                value="veryGood"
                checked={filters.reviews.veryGood}
                onChange={handleFilterChange}
              />
              Very Good
            </label>
          </div>
        </div>

        {/* Hotel Details Section */}
        <div className="hotel-cards">
          {/* Hotel Box 1 */}
          <div className="hotel-card">
            <div className="hotel-card-content">
              <div className="hotel-image">
                <img src={imgHotel1} alt="Hotel 1" />
              </div>
              <div className="hotel-details">
                <div className="tabs">
                  <button>Overview</button>
                  <button>Facilities</button>
                  <button>Reviews</button>
                  <button>Rules</button>
                </div>
                <div className="description">
                  <p><strong>Overview:</strong> A luxurious hotel offering spacious rooms and top-notch services. Located in the heart of the city, perfect for both business and leisure stays.</p>
                  <p><strong>Facilities:</strong> Balcony, Swimming Pool, Free Wi-Fi, Fitness Center.</p>
                  <p><strong>Reviews:</strong> Very Good - Rated 4.5/5 by 200 guests.</p>
                  <p><strong>Rules:</strong> No pets, No smoking in rooms.</p>
                </div>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>

          {/* Hotel Box 2 */}
          <div className="hotel-card">
            <div className="hotel-card-content">
              <div className="hotel-image">
                <img src={imgHotel2} alt="Hotel 2" />
              </div>
              <div className="hotel-details">
                <div className="tabs">
                  <button>Overview</button>
                  <button>Facilities</button>
                  <button>Reviews</button>
                  <button>Rules</button>
                </div>
                <div className="description">
                  <p><strong>Overview:</strong> A cozy hotel with a homely atmosphere and excellent customer service. Conveniently located near shopping centers.</p>
                  <p><strong>Facilities:</strong> Balcony, Free Wi-Fi, Bar.</p>
                  <p><strong>Reviews:</strong> Good - Rated 4.2/5 by 150 guests.</p>
                  <p><strong>Rules:</strong> No pets allowed.</p>
                </div>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>

          {/* Hotel Box 3 */}
          <div className="hotel-card">
            <div className="hotel-card-content">
              <div className="hotel-image">
                <img src={imgHotel3} alt="Hotel 3" />
              </div>
              <div className="hotel-details">
                <div className="tabs">
                  <button>Overview</button>
                  <button>Facilities</button>
                  <button>Reviews</button>
                  <button>Rules</button>
                </div>
                <div className="description">
                  <p><strong>Overview:</strong> A modern hotel with excellent amenities for business travelers and tourists.</p>
                  <p><strong>Facilities:</strong> Swimming Pool, Fitness Center, Bar.</p>
                  <p><strong>Reviews:</strong> Excellent - Rated 5/5 by 300 guests.</p>
                  <p><strong>Rules:</strong> No smoking inside rooms.</p>
                </div>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
