import React, { useState } from 'react';

const BookingForm = ({ event, onConfirmBooking }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      onConfirmBooking();
    } else {
      alert('Please fill in all details.');
    }
  };

  return (
    <div className="booking-form">
      <h2>Book Ticket for {event.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
