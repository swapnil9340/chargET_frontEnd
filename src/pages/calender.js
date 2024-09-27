// pages/scheduler.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const Scheduler = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents((prevEvents) => [...prevEvents, { start, end, title }]);
    }
  };

  return (
    <div style={{ height: 500 }}>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        defaultView="week"
        views={['month', 'week', 'day']}
        step={30}
        defaultDate={new Date()}
        onSelectSlot={handleSelect}
        style={{ height: '100vh' }}
      />
    </div>
  );
};

export default Scheduler;
