import React, { useState } from 'react';
import Login from './components/Login';
import EventList from './components/EventList';
import BookingForm from './components/BookingForm';
import ThankYou from './components/ThankYou';
import eventsData from './data/events.json';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isBookingComplete, setIsBookingComplete] = useState(false);

 
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  
  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

    const handleBooking = () => {
    setIsBookingComplete(true);
  };


  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }


  if (isBookingComplete) {
    return <ThankYou />;
  }

  if (selectedEvent) {
    return <BookingForm event={selectedEvent} onConfirmBooking={handleBooking} />;
  }
  return <EventList events={eventsData} onEventSelect={handleEventSelect} />;
}

export default App;
 