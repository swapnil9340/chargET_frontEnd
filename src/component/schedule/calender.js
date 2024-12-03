import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Cookies from 'js-cookie';
import axios from 'axios';
export default function Calender({ events, setEvents, getscheduleData, SetscheduleData, campaignIds, Setmedia  , Setspecific_dates , name, specific_dates ,select}) {
    const [currentView, setCurrentView] = React.useState(select)
    const cookieValue = Cookies.get('ChargeET_UserToken');
    console.log(campaignIds)
    const campaignId = campaignIds;
    const headers = {
        'Authorization': cookieValue,
        'Content-Type': 'application/json'
    };
    const url = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=campaign&action=get';
    const url1 = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=schedulev2&action=get';

    const data = {};
    const data1 = { page: 1, page_size: 40 };
    React.useEffect(() => {
        axios.post(url, data, { headers })
            .then(response => {
                // console.log(Boolean(response.data.media_information))
                const l = response.data.campaign_detail
                Setmedia(l);
            })
            .catch(error => {
                console.log('Error:', error);
            });
        axios.post(url1, data1, { headers })
            .then(response => {
                // console.log(Boolean(response.data.media_information))
                const l = response.data.schedules
                // console.log(l)
                // setEvents((prevEvents) => [...prevEvents, ...l]);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, [])
    const localizer = momentLocalizer(moment);

    // Example events
    const handleSelectSlot = (slotInfo) => {
    
  if(name === "") {
    
    alert("fill campaign name ");
  }
  else {
    if (currentView === "month") {
    
        // Extract specific dates directly from the `slots` array
        const specificDates = slotInfo.slots.map((date) => {
            const day = String(date.getDate()).padStart(2, '0'); // Two digits for day
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Two digits for month (0-indexed)
            const year = date.getFullYear(); // Four-digit year
            return `${year}-${month}-${day}`; // Combine in DD/MM/YYYY format
        });

        Setspecific_dates((prevEvents) => {
            const newEvents = [...prevEvents, ...specificDates];
            return newEvents; 
        });
        alert("Schedule added successfully!");
    }
    else if (currentView === "day") {
        const date = new Date(slotInfo.start);
        const day = String(date.getDate()).padStart(2, '0'); // Two-digit day
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Two-digit month
        const year = date.getFullYear();
        const formattedDate = `${year}-${month}-${day}`; // Format: DD/MM/YYYY
        const formatTime = (date) => {
            const hours = String(date.getHours()).padStart(2, '0'); // HH
            const minutes = String(date.getMinutes()).padStart(2, '0'); // MM
            return `${hours}:${minutes}`;
        };

        const formattedStartTime = formatTime(slotInfo.start);
        const formattedEndTime = formatTime(slotInfo.end);

        const scheduleItems = {
            campaign_id: campaignId[0], // Construct campaign ID dynamically
            overlap_with: "",
            time_slots: {
                start_time: `${formattedStartTime}:00`, // Add seconds
                end_time: `${formattedEndTime}:00`, // Add seconds
            }
        }
        // }));
        // Build the final data object
        // const scheduleData = {
        //     screen_ids: ["1", "2", "3"], // Placeholder, modify as needed
        //     specific_dates: [formattedDate],
        //     schedule_name: title.trim(),
        //     schedule_items: scheduleItems,
        //     status: "published", // Fixed status
        // };

        // Save the data (example: update state or send to API)
        const validateAndCorrectTimeSlot = (timeSlot) => {
            const start = new Date(`1970-01-01T${timeSlot.start_time}Z`);
            const end = new Date(`1970-01-01T${timeSlot.end_time}Z`);

            if (start > end) {
                // If start_time is after end_time, swap them
                return {
                    start_time: timeSlot.end_time,
                    end_time: timeSlot.start_time,
                };
            }
            return timeSlot;
        };

        const checkAndUpdateSchedule = (scheduleItems) => {
            SetscheduleData((prevEvents) => {
                let updatedEvents = [...prevEvents];
                let overlapFound = false;
        
                // Validate and correct the time slots of the new item
                scheduleItems.time_slots = validateAndCorrectTimeSlot(scheduleItems.time_slots);
        
                updatedEvents = updatedEvents.filter((item) => {
                    const existingStart = new Date(`1970-01-01T${item.time_slots.start_time}Z`);
                    const existingEnd = new Date(`1970-01-01T${item.time_slots.end_time}Z`);
                    const newStart = new Date(`1970-01-01T${scheduleItems.time_slots.start_time}Z`);
                    const newEnd = new Date(`1970-01-01T${scheduleItems.time_slots.end_time}Z`);
        
                    if (item.campaign_id === scheduleItems.campaign_id) {
                        // If the same campaign, adjust the existing item's end time if there's an overlap
                        if (newStart < existingEnd && newStart >= existingStart) {
                            item.time_slots.end_time = newStart.toISOString().split('T')[1].slice(0, 8);
                        }
                        return true;
                    } else if (newStart < existingEnd && newEnd > existingStart) {
                        // If overlap is found with a different campaign, prompt the user
                        overlapFound = true;
                        return false; // Remove the old item if user decides to replace
                    }
                    return true;
                });
        
                if (overlapFound) {
                    const userConfirmed = window.confirm("Time slot overlaps with an existing schedule. Do you want to replace the old schedule?");
                    if (!userConfirmed) {
                        // User did not confirm, do not add the new schedule item
                        return prevEvents;
                    }
                }
        
                // Add the new schedule item
                updatedEvents.push(scheduleItems);
        
                return updatedEvents; // Update the state
            });
        };
        
        // Call the function to check and update schedule
        checkAndUpdateSchedule(scheduleItems);
        alert("Schedule added successfully!");
    }
  }


    };

    // Utility function to validate time
    const isValidTime = (time) => {
        if (!time) return false; // Empty or null input
        const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // HH:MM in 24-hour format
        return timeRegex.test(time);
    };


    const mapScheduleToEvents = (schedule, date) => {
        return {
            title: name,
            start: new Date(`${date}T${schedule.time_slots.start_time}`),
            end: new Date(`${date}T${schedule.time_slots.end_time}`),
        };
    };

    const generateCalendarEvents = (getscheduleData, specificDates = []) => {
        // If specificDates is empty, use today's date
        const dates = specificDates.length > 0 
            ? specificDates 
            : [new Date().toISOString().split('T')[0]];
    
        const rawEvents = dates.flatMap(date =>
            getscheduleData.flatMap(schedule =>
                schedule.campaign_id === campaignId[0] 
                    ? mapScheduleToEvents(schedule, date) 
                    : []
            )
        );
    
        return rawEvents;
    };
    
    console.log(specific_dates , generateCalendarEvents(getscheduleData , specific_dates))



    
    const handleViewChange = (view) => {
        setCurrentView(select);
    };

    return (
        <Calendar
    localizer={localizer}
    events={generateCalendarEvents(getscheduleData, specific_dates)}
    selectable
    onSelectSlot={handleSelectSlot} // Add new events
    style={{ height: '100%', width: '100%' }}
    defaultView={select} // Ensure 'select' is set to 'day'
    views={[select]} // Restrict to only 'day' view
    toolbar={false} // Removes navigation and view options
    onView={handleViewChange}
        />
    )
}





// const generateCalendarEvents = (getscheduleData, campaignIds) => {
//     console.log(getscheduleData);

//     const today = new Date().toISOString().split('T')[0];

//     const rawEvents = getscheduleData
//         .filter((schedule) => schedule.campaign_id === campaignIds[0])
//         .flatMap((schedule) => mapScheduleToEvents(schedule, today));

//     return {
//         events: rawEvents, // Objectized output
//         count: rawEvents.length, // Optional: Number of events generated
//     };
// };



// const validateAndCorrectTimeSlot = (timeSlot) => {
//     const start = new Date(`1970-01-01T${timeSlot.start_time}Z`);
//     const end = new Date(`1970-01-01T${timeSlot.end_time}Z`);

//     if (start > end) {
//         // If start_time is after end_time, swap them
//         return {
//             start_time: timeSlot.end_time,
//             end_time: timeSlot.start_time,
//         };
//     }
//     return timeSlot;
// };

// const checkAndUpdateSchedule = (scheduleItems) => {
//     SetscheduleData((prevEvents) => {
//         let updatedEvents = [...prevEvents];

//         // Validate and correct the time slots of the new item
//         scheduleItems.time_slots = validateAndCorrectTimeSlot(scheduleItems.time_slots);

//         updatedEvents = updatedEvents.map((item) => {
//             if (item.campaign_id === scheduleItems.campaign_id) {
//                 const existingStart = new Date(`1970-01-01T${item.time_slots.start_time}Z`);
//                 const existingEnd = new Date(`1970-01-01T${item.time_slots.end_time}Z`);
//                 const newStart = new Date(`1970-01-01T${scheduleItems.time_slots.start_time}Z`);
//                 const newEnd = new Date(`1970-01-01T${scheduleItems.time_slots.end_time}Z`);

//                 if (newStart < existingEnd && newStart >= existingStart) {
//                     // Adjust existing item's end time to the new start time if there is an overlap
//                     item.time_slots.end_time = newStart.toISOString().split('T')[1].slice(0, 8);
//                 }
//             }
//             return item;
//         });

//         // Add the new schedule item
//         updatedEvents.push(scheduleItems);

//         return updatedEvents; // Update the state
//     });
// }