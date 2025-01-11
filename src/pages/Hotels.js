import React, { useState } from "react";
import "./Hotels.css";
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
    checkinDate: "",
    checkoutDate: "",
    location: "",
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: {
          ...prevFilters[name],
          [value]: checked,
        },
      }));
    } else if (type === "range") {
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

  const hotels = [
    {
      id: 1,
      name: "Luxurious Downtown Hotel",
      description:
        "Located in the heart of New York City, the Luxurious Downtown Hotel offers modern, elegantly designed rooms with stunning views of the skyline.The hotel is ideally situated near shopping, dining, and popular tourist attractions.",
      facilities: "Free WiFi, Balcony, Pool Access",
      rules: "No pets allowed, No smoking",
      price: "$200 per night",
      stars: 4.5,
      offers: "20% off for bookings this week!",
      img: imgHotel1,
    },
    {
      id: 2,
      name: "Cozy Shopping Hub Hotel",
      description:
        "Nestled in the lively city of San Francisco, the Cozy Shopping Hub Hotel is the perfect destination for those who love shopping. The hotel offers comfortable, spacious rooms with easy access to local boutiques, restaurants, and entertainment venues. located near top shopping destinations and attractions.",
      facilities: "Free Breakfast, Gym Access",
      rules: "No loud music after 10 PM",
      price: "$150 per night",
      stars: 4.2,
      offers: "Limited rooms available!",
      img: imgHotel2,
    },
    {
      id: 3,
      name: "Modern Tourist Stay",
      description: "The Modern Tourist Stay in Miami Beach offers contemporary accommodations with breathtaking ocean views. Guests can unwind by the outdoor pool, enjoy fitness facilities, or explore the vibrant nightlife of Miami. The hotel provides spacious rooms equipped with all the necessary amenities for a relaxing vacation. for tourists, offering modern rooms with ocean views.",
      facilities: "Free Parking, Swimming Pool",
      rules: "Check-in after 2 PM, Check-out by 11 AM",
      price: "$180 per night",
      stars: 5.0,
      offers: "Early bird discounts available!",
      img: imgHotel3,
    },
  ];

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
          <h3>Filters:</h3>
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
          {hotels.map((hotel) => (
            <div className="hotel-card" key={hotel.id}>
              <div className="hotel-card-content">
                <div className="hotel-image">
                  <img src={hotel.img} alt={hotel.name} />
                </div>
                <div className="hotel-details">
                  <h3>{hotel.name}</h3>
                  <p className="description">{hotel.description}</p>
                  <p className="facilities">Facilities: {hotel.facilities}</p>
                  <p>Rules: {hotel.rules}</p>
                  <p className="offers">{hotel.offers}</p>
                  <p className="price">Price: {hotel.price}</p>
                  <span className="rating">{hotel.stars} ★</span>
                  <button className="book-now">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
