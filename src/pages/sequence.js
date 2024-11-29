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
import Calendar from "../component/schedule/calender";
import Router from 'next/router'

const Sequence = () => {
    const [value, setValue] = React.useState('1');
    const [events, setEvents] = React.useState([]);
    const [getscheduleData, SetscheduleData] = React.useState([])
    const [campaignIds ,setcampaignIds] = React.useState([]);
    const Styles = useStyles()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [media, Setmedia] = React.useState([])
    // const url = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=campaign&action=get';
    // const url1 = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=schedulev2&action=get';
    const cookieValue = Cookies.get('ChargeET_UserToken');
    const headers = {
        'Authorization': cookieValue,
        'Content-Type': 'application/json'
    };

    // const data = {};
    // const data1 = { page: 1, page_size: 10 };

    // React.useEffect(() => {
    //     axios.post(url, data, { headers })
    //         .then(response => {
    //             // console.log(Boolean(response.data.media_information))
    //             const l = response.data.campaign_detail
    //             Setmedia(l);
    //         })
    //         .catch(error => {
    //             console.log('Error:', error);
    //         });
    //     axios.post(url1, data1, { headers })
    //         .then(response => {
    //             // console.log(Boolean(response.data.media_information))
    //             const l = response.data.schedules
    //             console.log(l)
    //             setEvents((prevEvents) => [...prevEvents, ...l]);
    //         })
    //         .catch(error => {
    //             console.log('Error:', error);
    //         });
    // }, [])


    const handleselectcam = (media) => {
        const id = media._id;
        setcampaignIds((prevCampaignIds) => {
            if (prevCampaignIds.includes(id)) {
                // Remove the campaign ID if it already exists
                return prevCampaignIds.filter((campaignId) => campaignId !== id);
            } else {
                // Add the campaign ID if it does not exist
                return [...prevCampaignIds, id];
            }
        });
    };

    // const localizer = momentLocalizer(moment);

    // Example events
    // const handleSelectSlot = (slotInfo) => {
    //     // Prompt for the event title
    //     const title = prompt("Enter a title for your schedule:", "Sample publish");
    //     if (!title || title.trim() === "") {
    //         alert("Schedule name is required.");
    //         return;
    //     }

    //     // Prompt for start and end times
    //     let startTimeInput = prompt("Enter the start time (HH:MM, e.g., 08:00):", "08:00");
    //     while (!isValidTime(startTimeInput)) {
    //         startTimeInput = prompt("Invalid start time! Please enter a valid time (HH:MM, e.g., 08:00):", "08:00");
    //         if (!startTimeInput) return;
    //     }
    
    //     let endTimeInput = prompt("Enter the end time (HH:MM, e.g., 09:00):", "09:00");
    //     while (!isValidTime(endTimeInput)) {
    //         endTimeInput = prompt("Invalid end time! Please enter a valid time (HH:MM, e.g., 09:00):", "09:00");
    //         if (!endTimeInput) return;
    //     }
    
    //     // Normalize the selected start and end dates
    //     const normalizeDate = (date) => {
    //         const localDate = new Date(date);
    //         return new Date(localDate.getFullYear(), localDate.getMonth(), localDate.getDate());
    //     };
    
    //     const startDate = normalizeDate(slotInfo.start);
    //     const endDate = normalizeDate(slotInfo.end);
    //     const specificDates = generateDateRange(startDate, endDate);
    
    //     console.log(specificDates, endTimeInput, startTimeInput);
    
    //     // Create schedule items with overlap check
    //     const scheduleItems = campaignIds.map((campaignId) => {
    //         let overlapWith = "";
    
    //         // specificDates.forEach((date) => {
    //         //     const formattedDate = date;
    //         //     events.forEach((event) => {
    //         //         if (
    //         //             event.specific_dates.includes(formattedDate) && // Check date overlap
    //         //             event.schedule_items.some(
    //         //                 (item) =>
    //         //                     item.time_slots.start_time === `${startTimeInput}:00` &&
    //         //                     item.time_slots.end_time === `${endTimeInput}:00`
    //         //             )
    //         //         ) {
    //         //             overlapWith = overlapWith
    //         //                 ? `${overlapWith},${event.schedule_items[0].campaign_id}`
    //         //                 : event.schedule_items[0].campaign_id; // Collect overlapping campaign IDs
    //         //         }
    //         //     });
    //         // });
    
    //         console.log(`Campaign ID: ${campaignId}, Overlap With: ${overlapWith}`); // Log overlap details
    
    //         return {
    //             campaign_id: campaignId,
    //             overlap_with: overlapWith,
    //             time_slots: {
    //                 start_time: `${startTimeInput}:00`, // Ensure seconds are added
    //                 end_time: `${endTimeInput}:00`,
    //             },
    //         };
    //     });
    
    //     console.log("Schedule Items:", scheduleItems); // Debugging: check the populated schedule items
    
    //     // Build the final schedule object
    //     const scheduleData = {
    //         screen_ids: ["1", "2", "3"], // Replace with dynamic values if needed
    //         specific_dates: specificDates,
    //         schedule_name: title.trim(),
    //         schedule_items: scheduleItems,
    //         status: "published", // Fixed status for this implementation
    //     };
    
    //     // Update the state or API call
    //     SetscheduleData((prevSchedules) => [...prevSchedules, scheduleData]);
    //     alert("Schedule added successfully!");
    // };
    


    // Utility function to validate time input (HH:MM format)
    // const isValidTime = (time) => {
    //     if (!time) return false; // Empty or null input
    //     const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // HH:MM in 24-hour format
    //     return timeRegex.test(time);
    // };

    // const generateDateRange = (start, end) => {

    //     const dateArray = [];
    //     let currentDate = new Date(start + '-1');

    //     while (currentDate <= end) {
    //         dateArray.push(currentDate.toISOString().split("T")[0]);
    //         currentDate.setDate(currentDate.getDate() + 1); // Increment by 1 day
    //     }

    //     return dateArray;
    // };
    // Handle event selection for editing
    // const handleSelectEvent = (event) => {
    //     // Prompt for new title
    //     const newTitle = prompt('Edit the event title:', event.title);
    //     if (!newTitle || newTitle.trim() === '') {
    //         alert('Event title cannot be empty.');
    //         return;
    //     }

    //     // Prompt for new start date and time
    //     const newStartDateInput = prompt(
    //         'Edit the start date and time (YYYY-MM-DD HH:MM):',
    //         `${formatDate(event.start)} ${formatTime(event.start)}`
    //     );
    //     if (!isValidDateTime(newStartDateInput)) {
    //         alert('Invalid start date/time format.');
    //         return;
    //     }

    //     // Prompt for new end date and time
    //     const newEndDateInput = prompt(
    //         'Edit the end date and time (YYYY-MM-DD HH:MM):',
    //         `${formatDate(event.end)} ${formatTime(event.end)}`
    //     );
    //     if (!isValidDateTime(newEndDateInput)) {
    //         alert('Invalid end date/time format.');
    //         return;
    //     }

    //     // Parse the new start and end dates
    //     const newStartDate = parseDateTime(newStartDateInput);
    //     const newEndDate = parseDateTime(newEndDateInput);

    //     // Validate that start date/time is before end date/time
    //     if (newStartDate >= newEndDate) {
    //         alert('Start date/time must be before end date/time.');
    //         return;
    //     }

    //     // Update the event in the state
    //     setEvents(
    //         events.map((evt) =>
    //             evt.id === event.id
    //                 ? { ...evt, title: newTitle.trim(), start: newStartDate, end: newEndDate }
    //                 : evt
    //         )
    //     );

    //     alert('Event updated successfully!');
    // };


    // Format a date object into 'YYYY-MM-DD' format
    // const formatDate = (date) => {
    //     return date.toISOString().split('T')[0];
    // };

    // // Format a date object into 'HH:MM' format
    // const formatTime = (date) => {
    //     const hours = date.getHours().toString().padStart(2, '0');
    //     const minutes = date.getMinutes().toString().padStart(2, '0');
    //     return `${hours}:${minutes}`;
    // };

    // // Validate 'YYYY-MM-DD HH:MM' format
    // const isValidDateTime = (dateTime) => {
    //     const dateTimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
    //     if (!dateTimeRegex.test(dateTime)) return false;

    //     const [datePart, timePart] = dateTime.split(' ');
    //     const [year, month, day] = datePart.split('-').map(Number);
    //     const [hours, minutes] = timePart.split(':').map(Number);

    //     const isValidDate = !isNaN(new Date(`${year}-${month}-${day}`).getTime());
    //     const isValidTime = hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;

    //     return isValidDate && isValidTime;
    // };

    // // Parse 'YYYY-MM-DD HH:MM' into a Date object
    // const parseDateTime = (dateTime) => {
    //     const [datePart, timePart] = dateTime.split(' ');
    //     return new Date(`${datePart}T${timePart}:00`);
    // };

    // const mapScheduleToEvents = (schedule) => {
    //     const firstItem = schedule.schedule_items[0];
    //     if (!firstItem || !firstItem.time_slots?.start_time || !firstItem.time_slots?.end_time) {
    //         return [];
    //     }
    //     const { start_time, end_time } = firstItem.time_slots;
    //     return schedule.specific_dates.map((date) => ({
    //         title: schedule.schedule_name || "Untitled Event",
    //         start: new Date(`${date}T${start_time}`),
    //         end: new Date(`${date}T${end_time}`),
    //     }));
    // };
    // const calendarEvents = events.flatMap((schedule) => mapScheduleToEvents(schedule));
    // const formattedGetscheduleData = getscheduleData.flatMap((schedule) => mapScheduleToEvents(schedule));
     const handlesavefunction = async (status) =>{
        const options = {
          method: 'POST',
          url: 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/',
          params: {type: 'schedulev2', action: 'create'},
          headers: headers,
          data:
           {
            screen_ids: getscheduleData[0].screen_ids,
            specific_dates: getscheduleData[0].specific_dates,
            schedule_name: getscheduleData[0].schedule_name,
            schedule_items:   getscheduleData[0].schedule_items,
            status: status
          }
        };
        
        try {
          const { data } = await axios.request(options);
        //   console.log();
        if(data.status= 'success') {
            Router.push('/choosescreen')
        }
        } catch (error) {
          console.error(error);
        }
     }
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
                            </TabList>
                        </Box>
                        <TabPanel value="1">

                            <div className={styled.mediacardwrapper}>{
                                media.slice(0, 8).map((item, index) => {    
                                    return <Mediacard key={index} hnadlechnage={handleselectcam} item={item}    select={Boolean(campaignIds.find((element) => element === item._id )) ? styled.sectioncard : ""} />
                                })
                            }
                            </div>

                        </TabPanel>
              
                    </TabContext>
                </Box>

            </div>
            <div className={styled.DashboardLeftSection}>

                <Calendar campaignIds ={campaignIds} setcampaignIds={setcampaignIds} events={events} setEvents={setEvents}  Setmedia={Setmedia} getscheduleData={getscheduleData}  SetscheduleData={SetscheduleData}
                />
            </div>


            <div className={`${styled.commonbox} ${styled.DeviceInfo} container w-100`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className={styled.commonboxTitle}>{'Sequence Summary'}</h3>
                    <div className='d-flex align-items-center gap-2'>
                        <button >{'See  more'}</button>
                        <button onClick={()=>handlesavefunction('published')}>{'Save & Next'}</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                            <div><BsBadgeHdFill size={22} color='#9399a2' /></div>
                            <div>
                                <span>{`Total media`}</span>
                                <h4>{campaignIds.length}</h4>
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


