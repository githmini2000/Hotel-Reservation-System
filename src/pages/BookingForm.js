import React, { useState } from 'react';
import './BookingForm.css'; // Import BookingForm styles

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    paymentMethod: 'cash',
    cardNumber: '',
    expireDate: '',
    securityPin: ''
  });

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking details submitted:', formData);
    // Add your form submission logic here (e.g., send to API or process the data)
  };

  return (
    <div className="booking-container">
      <h2>Hotel Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="arrivalDate">Arrival Date and Time</label>
          <input
            type="datetime-local"
            id="arrivalDate"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="departureDate">Departure Date and Time</label>
          <input
            type="datetime-local"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Payment Method</label>
          <div>
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              checked={formData.paymentMethod === 'cash'}
              onChange={handleChange}
            />
            <label htmlFor="cash">Cash</label>

            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={handleChange}
            />
            <label htmlFor="card">Card</label>
          </div>
        </div>

        {formData.paymentMethod === 'card' && (
          <>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="expireDate">Expire Date</label>
              <input
                type="month"
                id="expireDate"
                name="expireDate"
                value={formData.expireDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="securityPin">Security Pin</label>
              <input
                type="password"
                id="securityPin"
                name="securityPin"
                value={formData.securityPin}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="submit-btn">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
