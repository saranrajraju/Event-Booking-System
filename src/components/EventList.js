import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events, onEventSelect }) => {
  return (
    <div className="event-list">
      
      {events.map((event) => (
        <EventCard key={event.id} event={event} onSelect={() => onEventSelect(event)} />
      ))}
    </div>
  );
};

export default EventList;
