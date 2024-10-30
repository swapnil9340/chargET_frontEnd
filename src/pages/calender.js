// pages/scheduler.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';

const localizer = momentLocalizer(moment);



const createSchedule = async (start, end, title , tokenString) => {
  const url = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=schedule&action=create';
  const headers = {
    'Authorization': tokenString, // Add your authorization token here
    'Content-Type': 'application/json',
  };
  const data = {
    "media_id": "media456",
    "start_date": start,
    "start_time": "10:00:00",
    "end_time": "12:00:00",
    "screen_id": "screen789",
    "recurrence_type": "daily",
    "recurrence_end_date": end
  };
console.log(data)
  try {
    const response = await axios.post(url, data, { headers });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error creating schedule:', error.response ? error.response.data : error.message);
  }
};


const Scheduler = (props) => {
  const [events, setEvents] = useState([]);
  
  const handleSelect = (slotinfo) => {
    const { start, end , slots} =  slotinfo
        console.log( start, end  , slots)
    const startDateTime = new Date(start);
    const endDateTime = new Date(end);
    
    // Extract the start and end dates in the required format (YYYY-MM-DD)
    const startDate = startDateTime.toISOString().split('T')[0];  // "2024-10-14"
    const endDate = endDateTime.toISOString().split('T')[0];      // "2024-10-24"
    
    // Define start and end times
    const startTime = '10:00:00';
    const endTime = '12:00:00';
    
    // Combine dates with respective times
    const startDateTimeCombined = `${startDate} ${startTime}`; // "2024-10-14 10:00:00"
    const endDateTimeCombined = `${endDate} ${endTime}`;       // "2024-10-24 12:00:00"
    
console.log(startDateTimeCombined  , endDateTimeCombined)

    const title = window.prompt('New Event name');
    console.log(start, end, title)
    if (title) {
createSchedule(startDate, endDate, title , props.tokenString) ;
      setEvents((prevEvents) => [
        ...prevEvents,
        { start, end, title },
      ]);
    }
  };

// const handleSelect =(slotInfo) =>{
// console.log(slotInfo)
// }
  React.useEffect(() => {
    const scheduleData = props.data;
  
    const newEvents = scheduleData.map((item) => {
      const startDate = new Date(item.date);
      const [startHours, startMinutes] = item.start_time.split(":");
      startDate.setHours(parseInt(startHours), parseInt(startMinutes));
  
      const endDate = new Date(item.date);
      const [endHours, endMinutes] = item.end_time.split(":");
      endDate.setHours(parseInt(endHours), parseInt(endMinutes));
  
      return {
        start: startDate,
        end: endDate,
        title: item.schedule_id,  // Using schedule_id as title
      };
    });
  
    setEvents(newEvents);  // Replace previous events, not append
  }, [props.data]);
  
  
  return (
    <div style={{ height: 500 }}>
      <Calendar
        selectable
       
        localizer={localizer}
        events={events}
        defaultView="month"
        views={["day", "agenda", "work_week", "month"]}
        // step={30}
        defaultDate={new Date()}
        onSelectSlot={handleSelect}
        onSelectEvent={(event) => alert(event.title)}
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
    end_date: end_date, // Uncomment if needed
    fetch_type: "range",
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
  } catch (error) {
    console.error('Error fetching schedule details:', error.message);
    // Assign error message to return to the frontend
    error = error.message || 'An error occurred while fetching the data.';
  }

  // Return the fetched data and any error message as props
  return {
    props: {
      data,
      tokenString,
      error, // Will be null if no error occurred
    },
  };
}
