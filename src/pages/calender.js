// pages/scheduler.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const Scheduler = (props) => {
  console.log(props.data)
  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents((prevEvents) => [...prevEvents, { start, end, title }]);
    }
  };

   console.log(events)
  return (
    <div style={{ height: 500 }}>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        defaultView="month"
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

export async function getServerSideProps(context) {
  const { req } = context;
  const tokenString = req.cookies.ChargeET_UserToken; // Extract token from cookies
  let data = [];
  
  const now = new Date();

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero
    return `${year}-${month}-${day}`;
  };
  const start_date = formatDate(new Date(now.getFullYear(), now.getMonth(), 1));
  const end_date = formatDate(new Date(now.getFullYear(), now.getMonth() + 1, 0));
  const url = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=schedule&action=get';
  const headers = {
    'Authorization': tokenString,  // Authorization token from cookies
    'Content-Type': 'application/json',
  };

  const body = JSON.stringify({
    start_date:start_date,
    end_date: end_date,
    fetch_type: "month",
  });

  try {
    // Fetch the data from the API
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    data = result.schedule_details || []; // Fallback to empty array if no data available

  } catch (error) {
    console.error('Error fetching schedule details:', error);
    // Optionally, handle the error in a user-friendly way, e.g., pass error state to props
  }

  // Return the fetched data as props
  return {
    props: {
      data,
    },
  };
}
