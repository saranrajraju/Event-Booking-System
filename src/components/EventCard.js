import React from 'react';

const EventCard = ({ event, onSelect }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>Seats: {event.seats > 0 ? event.seats : 'Sold Out'}</p>
      <button disabled={event.seats === 0} onClick={onSelect}>
        {event.seats > 0 ? 'Book Now' : 'Sold Out'}
      </button>
    </div>
  );
};

export default EventCard;

