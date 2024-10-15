// pages/scheduler.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const Scheduler = (props) => {
  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
     console.log( start, end, title)
    if (title) {
      // Use end directly without decrementing it
      setEvents((prevEvents) => [
        ...prevEvents,
        { start, end, title },
      ]);
    }
  };
  const date = '2024-10-15T00:00:00';
  const start_time = '10:00:00';
  const end_time = '12:00:00';
  
  // Create a Date object for the start date
  const startDate = new Date(date);
  const [startHours, startMinutes] = start_time.split(':');
  startDate.setHours(parseInt(startHours), parseInt(startMinutes));
  
  // Create a Date object for the end date
  const endDate = new Date(date);
  const [endHours, endMinutes] = end_time.split(':');
  endDate.setHours(parseInt(endHours), parseInt(endMinutes));
  console.log('Start Date:', startDate);
  console.log('End Date:', endDate);  
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
  let error = null;

  if (!tokenString) {
    return {
      props: {
        data: [],
        error: 'Authentication token is missing or expired. Please login again.',
      },
    };
  }

  // Helper function to format date
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero
    return `${year}-${month}-${day}`;
  };

  // Get the first and last day of the current month
  const now = new Date();
  const start_date = formatDate(new Date(now.getFullYear(), now.getMonth(), 1));
  const end_date = formatDate(new Date(now.getFullYear(), now.getMonth() + 1, 0));

  const url = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=schedule&action=get';
  const headers = {
    'Authorization': tokenString,  // Authorization token from cookies
    'Content-Type': 'application/json',
  };

  const body = JSON.stringify({
    start_date: start_date,
    // end_date: end_date, // Uncomment if needed
    fetch_type: "month",
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      const errorMessage = `Error fetching data: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    const result = await response.json();
    data = result.schedule_details || [];
    console.log(data)
  } catch (error) {
    console.error('Error fetching schedule details:', error.message);
    // Assign error message to return to the frontend
    error = error.message || 'An error occurred while fetching the data.';
  }

  // Return the fetched data and any error message as props
  return {
    props: {
      data,
      error, // Will be null if no error occurred
    },
  };
}
