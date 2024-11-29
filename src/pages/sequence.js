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

import { TbRefreshDot } from "react-icons/tb";
import Header from '@/component/Header/Searchbar';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import axios from 'axios';
import Cookies from 'js-cookie';
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

    const cookieValue = Cookies.get('ChargeET_UserToken');
    const headers = {
        'Authorization': cookieValue,
        'Content-Type': 'application/json'
    };


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


