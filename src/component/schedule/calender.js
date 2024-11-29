import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Cookies from 'js-cookie';
import axios from 'axios';
export default function calender({ events, setEvents, getscheduleData, SetscheduleData, campaignIds, Setmedia }) {
    const [currentView, setCurrentView] = React.useState('day')
    const cookieValue = Cookies.get('ChargeET_UserToken');
    const campaignId = campaignIds.map((id) => id.trim());
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
                setEvents((prevEvents) => [...prevEvents, ...l]);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, [])
    const localizer = momentLocalizer(moment);

    // Example events
    const handleSelectSlot = (slotInfo) => {
       
      if(Boolean(campaignId.length) ){
        const title = prompt("Enter a title for your schedule:", "Sample publish");
        if (!title || title.trim() === "") {
            alert("Schedule name is required.");
            return;
        }

        if (currentView === "month") {
            // Prompt for start and end times
            let startTimeInput = prompt("Enter the start time (HH:MM, e.g., 08:00):", "08:00");
            while (!isValidTime(startTimeInput)) {
                startTimeInput = prompt("Invalid start time! Please enter a valid time (HH:MM, e.g., 08:00):", "08:00");
                if (!startTimeInput) return;
            }

            let endTimeInput = prompt("Enter the end time (HH:MM, e.g., 09:00):", "09:00");
            while (!isValidTime(endTimeInput)) {
                endTimeInput = prompt("Invalid end time! Please enter a valid time (HH:MM, e.g., 09:00):", "09:00");
                if (!endTimeInput) return;
            }

            // Extract specific dates directly from the `slots` array

            const specificDates = slotInfo.slots.map((date) => {
                const day = String(date.getDate()).padStart(2, '0'); // Two digits for day
                const month = String(date.getMonth() + 1).padStart(2, '0'); // Two digits for month (0-indexed)
                const year = date.getFullYear(); // Four-digit year
                return `${year}-${month}-${day}`; // Combine in DD/MM/YYYY format
            });
            // Prompt for campaign IDs (comma-separated)

        

            // Build schedule items for each campaign
            const scheduleItems = campaignId.map((campaignId) => ({
                campaign_id: `campaignID${campaignId}`, // Construct campaign ID dynamically
                overlap_with: "",
                time_slots: {
                    start_time: `${startTimeInput}:00`, // Add seconds
                    end_time: `${endTimeInput}:00`, // Add seconds
                },
            }));


            const scheduleData = {
                screen_ids: ["1", "2", "3"], // Placeholder, modify as needed
                specific_dates: specificDates,
                schedule_name: title.trim(),
                schedule_items: scheduleItems,
                status: "published", // Fixed status
            };


            // Save the data (example: update state or send to API)
            SetscheduleData((prevEvents) => [...prevEvents, scheduleData]); // Add to state
            alert("Schedule added successfully!");
        }
        else if (currentView === "day") {
            console.log(slotInfo)
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
            const scheduleItems = campaignId.map((campaignId) => ({
                campaign_id: `campaignID${campaignId}`, // Construct campaign ID dynamically
                overlap_with: "",
                time_slots: {
                    start_time: `${formattedStartTime}:00`, // Add seconds
                    end_time: `${formattedEndTime}:00`, // Add seconds
                },
            }));
            // Build the final data object
            const scheduleData = {
                screen_ids: ["1", "2", "3"], // Placeholder, modify as needed
                specific_dates: [formattedDate],
                schedule_name: title.trim(),
                schedule_items: scheduleItems,
                status: "published", // Fixed status
            };


            // Save the data (example: update state or send to API)
            SetscheduleData((prevEvents) => [...prevEvents, scheduleData]); // Add to state
            alert("Schedule added successfully!");
        }


      }
      else {
        alert("Select camp");
      }
    };

    // Utility function to validate time
    const isValidTime = (time) => {
        if (!time) return false; // Empty or null input
        const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // HH:MM in 24-hour format
        return timeRegex.test(time);
    };


    const mapScheduleToEvents = (schedule) => {
        const firstItem = schedule.schedule_items[0];
        if (!firstItem || !firstItem.time_slots?.start_time || !firstItem.time_slots?.end_time) {
            return [];
        }
        const { start_time, end_time } = firstItem.time_slots;

        return schedule.specific_dates.map((date) => ({
            title: schedule.schedule_name || "Untitled Event",
            start: new Date(`${date}T${start_time}`),
            end: new Date(`${date}T${end_time}`),
        }));
    };

    const deduplicateEvents = (events) => {
        const seen = new Set();
        return events.filter(event => {
            const uniqueKey = `${event.start.getTime()}_${event.end.getTime()}`;
            if (seen.has(uniqueKey)) {
                return false;
            }
            seen.add(uniqueKey);
            return true;
        });
    };

    const generateCalendarEvents = (events, getscheduleData) => {
        const rawEvents = [
            ...events.flatMap((schedule) => mapScheduleToEvents(schedule)),
            ...getscheduleData.flatMap((schedule) => mapScheduleToEvents(schedule)),
        ];

        // Deduplicate events
        return deduplicateEvents(rawEvents);
    };
    const handleViewChange = (view) => {
        setCurrentView(view);
    };

    const calendarEvents = generateCalendarEvents(events, getscheduleData);

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelectSlot} // Add new events
            // onSelectEvent={handleSelectEvent} // Edit events
            style={{ height: '100%' }}
            defaultView="day"
            onView={handleViewChange}
        />
    )
}
