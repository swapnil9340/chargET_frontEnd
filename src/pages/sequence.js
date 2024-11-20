import React from 'react'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import { MdEdit } from "react-icons/md";
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from '@/styles/customStyles';
import Mediacard from '@/component/Mediacard/Mediacard';
import styled from '@/styles/style.module.scss'
import { BsBadgeHdFill } from "react-icons/bs";
import { MdImage } from "react-icons/md";
import { TbRefreshDot } from "react-icons/tb";
import Header from '@/component/Header/Searchbar';
import Medialeftbar from '@/component/Leftbar/Medialeftbar';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import axios from 'axios';
import Cookies from 'js-cookie';
import Avatar from '@mui/material/Avatar';
import { MdDeleteForever } from "react-icons/md";
import iamge from '../../public/DeviewImgss.png'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const Sequence = () => {
    const [value, setValue] = React.useState('1');
    const [events, setEvents] =React. useState([]);
    const [getscheduleData, SetscheduleData] = React.useState([])
    const [campaignIds] = React.useState(["1", "2", "3"]);
    const Styles = useStyles()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [media, Setmedia] = React.useState([])
    const url = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=campaign&action=get';
    const url1 = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=schedulev2&action=get';
    const cookieValue = Cookies.get('ChargeET_UserToken');
    const headers = {
        'Authorization': cookieValue,
        'Content-Type': 'application/json'
    };

    const data = {};
const data1 =  {page: 1, page_size: 10}
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
                console.log(...l)
                setEvents((prevEvents) => [...prevEvents, ...l]);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, [])

    const handleselectcam = (media) => {
        console.log(media)
    }
    const localizer = momentLocalizer(moment);

    // Example events
    const handleSelectSlot = (slotInfo) => {
        // Prompt for the event title
        const title = prompt("Enter a title for your schedule:", "Sample publish");
        if (!title || title.trim() === "") {
            alert("Schedule name is required.");
            return;
        }
    
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
    
        // Get specific dates from the selected slot
        const normalizeDate = (date) => {
            const localDate = new Date(date);
            return new Date(localDate.getFullYear(), localDate.getMonth(), localDate.getDate());
        };
    
        // Normalize start and end dates
        const startDate = normalizeDate(slotInfo.start + "-1");
        const endDate = normalizeDate(slotInfo.end);
        const specificDates = generateDateRange(startDate, endDate);
    
        // Prompt for campaign IDs (comma-separated)
      
    
        // Build schedule items for each campaign
        const scheduleItems = campaignIds.map((campaignId) => ({
            campaign_id: `campaignID${campaignId}`, // Construct campaign ID dynamically
            overlap_with: "",
            time_slots: {
                start_time: `${startTimeInput}:00`, // Add seconds
                end_time: `${endTimeInput}:00`, // Add seconds
            },
        }));
    
        // Build the final data object
        const scheduleData = {
            screen_ids: ["1", "2", "3"], // Placeholder, modify as needed
            specific_dates: specificDates,
            schedule_name: title.trim(),
            schedule_items: scheduleItems,
            status: "published", // Fixed status
        };
    
        // Save the data (example: update state or send to API)
        SetscheduleData((prevEvents) => [...prevEvents, scheduleData]); // Add to state
        console.log("Schedule Data Saved:", scheduleData);
        alert("Schedule added successfully!");
    };
    
  
      // Utility function to validate time input (HH:MM format)
      const isValidTime = (time) => {
        if (!time) return false; // Empty or null input
        const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // HH:MM in 24-hour format
        return timeRegex.test(time);
      };
      
      const generateDateRange = (start, end) => {
        console.log(start, end)
        const dateArray = [];
        let currentDate = new Date(start + '-1');
    
        while (currentDate <= end) {
            dateArray.push(currentDate.toISOString().split("T")[0]);
            currentDate.setDate(currentDate.getDate() + 1); // Increment by 1 day
        }
    
        return dateArray;
    };
      // Handle event selection for editing
      const handleSelectEvent = (event) => {
        // Prompt for new title
        const newTitle = prompt('Edit the event title:', event.title);
        if (!newTitle || newTitle.trim() === '') {
          alert('Event title cannot be empty.');
          return;
        }
      
        // Prompt for new start date and time
        const newStartDateInput = prompt(
          'Edit the start date and time (YYYY-MM-DD HH:MM):',
          `${formatDate(event.start)} ${formatTime(event.start)}`
        );
        if (!isValidDateTime(newStartDateInput)) {
          alert('Invalid start date/time format.');
          return;
        }
      
        // Prompt for new end date and time
        const newEndDateInput = prompt(
          'Edit the end date and time (YYYY-MM-DD HH:MM):',
          `${formatDate(event.end)} ${formatTime(event.end)}`
        );
        if (!isValidDateTime(newEndDateInput)) {
          alert('Invalid end date/time format.');
          return;
        }
      
        // Parse the new start and end dates
        const newStartDate = parseDateTime(newStartDateInput);
        const newEndDate = parseDateTime(newEndDateInput);
      
        // Validate that start date/time is before end date/time
        if (newStartDate >= newEndDate) {
          alert('Start date/time must be before end date/time.');
          return;
        }
      
        // Update the event in the state
        setEvents(
          events.map((evt) =>
            evt.id === event.id
              ? { ...evt, title: newTitle.trim(), start: newStartDate, end: newEndDate }
              : evt
          )
        );
      
        alert('Event updated successfully!');
      };
      
      
      // Format a date object into 'YYYY-MM-DD' format
      const formatDate = (date) => {
        return date.toISOString().split('T')[0];
      };
      
      // Format a date object into 'HH:MM' format
      const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      };
      
      // Validate 'YYYY-MM-DD HH:MM' format
      const isValidDateTime = (dateTime) => {
        const dateTimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
        if (!dateTimeRegex.test(dateTime)) return false;
      
        const [datePart, timePart] = dateTime.split(' ');
        const [year, month, day] = datePart.split('-').map(Number);
        const [hours, minutes] = timePart.split(':').map(Number);
      
        const isValidDate = !isNaN(new Date(`${year}-${month}-${day}`).getTime());
        const isValidTime = hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
      
        return isValidDate && isValidTime;
      };
      
      // Parse 'YYYY-MM-DD HH:MM' into a Date object
      const parseDateTime = (dateTime) => {
        const [datePart, timePart] = dateTime.split(' ');
        return new Date(`${datePart}T${timePart}:00`);
      };
      

      const calendarEvents = events.map(event => ({
        title: event.schedule_name || "Untitled Event",
        start: new Date(`${event.date.split('T')[0]}T${event.start_time}`),
        end: new Date(`${event.date.split('T')[0]}T${event.end_time}`),
    }));

    const formattedGetscheduleData = getscheduleData.flatMap((schedule) => {
        // Extract the common time from the first schedule_item
        const firstItem = schedule.schedule_items[0];
        if (!firstItem || !firstItem.time_slots?.start_time || !firstItem.time_slots?.end_time) {
            return []; // Skip if no valid schedule_item exists
        }
    
        const { start_time, end_time } = firstItem.time_slots;
    
        // Map each specific_date to a single event
        return schedule.specific_dates.map((date) => ({
            title: schedule.schedule_name || "Untitled Event",
            start: new Date(`${date}T${start_time}`),
            end: new Date(`${date}T${end_time}`),
        }));
    });
    
    
    
    
    const combinedEvents = [...calendarEvents, ...formattedGetscheduleData];
    console.log(events , calendarEvents , getscheduleData , combinedEvents , formattedGetscheduleData)
    return (
        <div className={styled.dashboard}>
            <div className={styled.mainDashboardsection}>
                <Header />
                <p style={{ fontSize: "24px", fontWeight: "600" }}> <DesignServicesIcon ></DesignServicesIcon>{`Sequence Name`}</p>
                <Box className={Styles.historyList}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label={`ALL`} value="1" />
                                <Tab label={`FAVOURITE`} value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">

                            <div className={styled.mediacardwrapper}>{
                                media.slice(0, 8).map((item, index) => {
                                    return <Mediacard key={index} hnadlechnage={handleselectcam} item={item} />
                                })
                            }
                            </div>

                        </TabPanel>
                        <TabPanel value="2">

                            <div className={styled.mediacardwrapper}>{
                                // [1,2,3,4,5,6,7].map((item , index)=>{
                                //   return <Mediacard key={index}/>
                                // })
                            }
                            </div>
                        </TabPanel>
                        <TabPanel value="3">

                            <div className={styled.mediacardwrapper}>{
                                // [1,2,3,4,5,6,7].map((item , index)=>{
                                //   return <Mediacard key={index}/>
                                // })
                            }
                            </div>
                        </TabPanel>
                        <TabPanel value="4">
                            <div className={styled.mediacardwrapper}>{
                                // [1,2,3,4,5,6,7].map((item , index)=>{
                                //   return <Mediacard key={index}/>
                                // })
                            }
                            </div>
                        </TabPanel>
                    </TabContext>
                </Box>

            </div>
            <div className={styled.DashboardLeftSection}>
                {/* <div className={styled.commonbox}>
                    <h3 className={styled.commonboxTitle}>{`Select Time`}</h3>
                    <div className={styled.TimeList}>
                        <div className={styled.timelistwrapper}>
                            <div className={styled.timelistitem}>
                                <div className='row'>
                                    <div className='col-3'>
                                        <span className={styled.timeSquenceListItem}>{`6 : 00 AM`}</span>
                                    </div>
                                    <div className='col-9'>
                                        <div className={styled.timelistcard}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={iamge.src}
                                                sx={{ width: 40, height: 40 }}
                                            />
                                            <h3>{`Chocho`}</h3>
                                            <button>{`8 AM - 9 AM`}</button>
                                            <div className='d-flex align-items-center'>
                                                <span><MdEdit /></span>
                                                <span><MdDeleteForever /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styled.timelistitem}>
                                <div className='row'>
                                    <div className='col-3'>
                                        <span className={styled.timeSquenceListItem}>{`7 : 00 AM`}</span>
                                    </div>
                                    <div className='col-9'>

                                    </div>
                                </div>
                            </div>

                            <div className={styled.timelistitem}>
                                <div className='row'>
                                    <div className='col-3'>
                                        <span className={styled.timeSquenceListItem}>{`8 : 00 AM`}</span>
                                    </div>
                                    <div className='col-9'>

                                    </div>
                                </div>
                            </div>
                            <div className={styled.timelistitem}>
                                <div className='row'>
                                    <div className='col-3'>
                                        <span className={styled.timeSquenceListItem}>{`9 : 00 AM`}</span>
                                    </div>
                                    <div className='col-9'>
                                        <div className={styled.timelistcard}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={iamge.src}
                                                sx={{ width: 40, height: 40 }}
                                            />
                                            <h3>{`Chocho`}</h3>
                                            <button>{`8 AM - 9 AM`}</button>
                                            <div className='d-flex align-items-center'>
                                                <span><MdEdit /></span>
                                                <span><MdDeleteForever /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styled.timelistitem}>
                                <div className='row'>
                                    <div className='col-3'>
                                        <span className={styled.timeSquenceListItem}>{`10 : 00 AM`}</span>
                                    </div>
                                    <div className='col-9'>

                                    </div>
                                </div>
                            </div>
                            <div className={styled.timelistitem}>
                                <div className='row'>
                                    <div className='col-3'>
                                        <span className={styled.timeSquenceListItem}>{`11 : 00 AM`}</span>
                                    </div>
                                    <div className='col-9'>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div> */}
 <Calendar
      localizer={localizer}
      events={combinedEvents}
      startAccessor="start"
      endAccessor="end"
      selectable
      onSelectSlot={handleSelectSlot} // Add new events
      onSelectEvent={handleSelectEvent} // Edit events
      style={{ height: '100%' }}
      />    
            </div>


            <div className={`${styled.commonbox} ${styled.DeviceInfo} container w-100`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className={styled.commonboxTitle}>{'Sequence Summary'}</h3>
                    <div className='d-flex align-items-center gap-2'>
                        <button>{'See  more'}</button>
                        <button>{'Save & Next'}</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                            <div><BsBadgeHdFill size={22} color='#9399a2' /></div>
                            <div>
                                <span>{`Total media`}</span>
                                <h4>{`5`}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                            <div><TbRefreshDot size={22} color='#9399a2' />
                            </div>
                            <div>
                                <span>{`Number of Slots`}</span>
                                <h4>{`2`}</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
Sequence.layout = "layout1"
export default Sequence