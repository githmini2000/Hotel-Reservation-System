import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // 1. Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // 2. Handle booking submission and confirmation dialog
  const handleBookingSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Ask the user for confirmation using a confirmation dialog
    const isConfirmed = window.confirm(`Are you sure you want to confirm the booking for ${selectedHotel.name}?`);

    if (isConfirmed) {
      // If confirmed, show a success message
      alert(`Booking confirmed for ${selectedHotel.name}!`);

      // Optionally, save the booking (e.g., in localStorage or a backend)
      saveBooking(selectedHotel, formData);

      // Hide the booking form and navigate (optional)
      setShowBookingForm(false);
      navigate("/thank-you"); // This is just an example; you can customize the page
    } else {
      // If canceled, show a cancellation message
      alert(`Booking for ${selectedHotel.name} has been canceled.`);
      setShowBookingForm(false); // Hide the form
    }
  };

  // Function to save the booking (in localStorage for simplicity)
  const saveBooking = (hotel, formData) => {
    const bookingDetails = {
      hotel,
      ...formData,
      bookingDate: new Date().toLocaleString(),
    };
    localStorage.setItem("booking", JSON.stringify(bookingDetails));
    console.log("Booking saved:", bookingDetails);
  };

  // 3. Handle the Book Now button click to show the booking form
  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    setShowBookingForm(true);
  };

  // 4. Hotels data and filtering (existing code)
  const hotels = [
    {
      id: 1,
      name: "Hotel Paradise",
      description: "A beautiful beachfront hotel.",
      price: 250,
      image: imgHotel1,
    },
    {
      id: 2,
      name: "Mountain Retreat",
      description: "A tranquil escape in the mountains.",
      price: 350,
      image: imgHotel2,
    },
    {
      id: 3,
      name: "City Heights",
      description: "Modern hotel in the heart of the city.",
      price: 200,
      image: imgHotel3,
    },
  ];

  const filteredHotels = hotels.filter((hotel) => {
    return hotel.price >= filters.priceRange[0] && hotel.price <= filters.priceRange[1];
  });

  return (
    <div className="hotels-container">
      <h1>Find Your Perfect Hotel</h1>

      {/* Search Form */}
      <div className="search-form">
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          value={search.location}
          onChange={(e) => setSearch({ ...search, location: e.target.value })}
        />
        <input
          type="date"
          name="checkinDate"
          value={search.checkinDate}
          onChange={(e) => setSearch({ ...search, checkinDate: e.target.value })}
        />
        <input
          type="date"
          name="checkoutDate"
          value={search.checkoutDate}
          onChange={(e) => setSearch({ ...search, checkoutDate: e.target.value })}
        />
      </div>

      {/* Display Hotels */}
      <div className="hotels-list">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
            <p>Price: ${hotel.price}</p>
            <button onClick={() => handleBookNow(hotel)}>Book Now</button>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      {showBookingForm && selectedHotel && (
        <div className="booking-form">
          <h2>Book your stay at {selectedHotel.name}</h2>
          <form onSubmit={handleBookingSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Confirm Booking</button>
            <button type="button" onClick={() => setShowBookingForm(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Hotels;
