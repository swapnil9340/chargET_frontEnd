import React from 'react'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
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
import Calendar from "../component/schedule/calender";
import Router from 'next/router'
import { TextField } from '@mui/material';

const Sequence = (props) => {
    const [value, setValue] = React.useState('1');
    const [events, setEvents] = React.useState(true);
    const [allscheduleData , setallscheduleData]  = React.useState([])
    const [getscheduleData, SetscheduleData] = React.useState([])
    const [campaignIds, setcampaignIds] = React.useState([]);
    const [campaign, Setcampaign] = React.useState("")
    const [loading, setloading] = React.useState(false)
    const [specific_dates ,  Setspecific_dates] =  React.useState([])
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
         const name =  media.campaign_name
        const id = media._id;
        setcampaignIds({id : id ,name :name }); // Directly set the new campaign ID, removing all previous ones
    };



    const handlesavefunction = async (status) => {
        if (Boolean(getscheduleData.length)) {
            setloading(true)
            const options = {
                method: 'POST',
                url: 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/',
                params: { type: 'schedulev2', action: 'create' },
                headers: headers,
                data:
                {
                    screen_ids:props.screen_id,
                    specific_dates: specific_dates,
                    schedule_name: campaign,
                    schedule_items: getscheduleData,
                    status: status
                }
            };

            try {
                const { data } = await axios.request(options);
                setloading(false)
                if (data.status = 'success') {
                    Router.push('/allcampaign')
                }
            } catch (error) {
                console.error(error);
            }
        }
        else {
            alert("first select slot ")
        }


    }

    const calculateMediaSequenceLength = (data) => {
        return data.map((item) => {
            const totalMediaSequenceCount = item.zones.reduce((total, zone) => {
                return total + zone.media_sequence.length;
            }, 0);
            return {
                campaign_id: item._id,
                campaign_name: item.campaign_name,
                totalMediaSequenceCount,
            };
        });
    };


    const result = calculateMediaSequenceLength(media);
    const campaignData = result.find((campaign) => campaign.campaign_id === campaignIds[0]);



    return (
        <div className={styled.dashboard}>
            {
                events
                    ?

                    <>
                        <div className={styled.mainDashboardsection}>
                            <Header />
                             <DesignServicesIcon ></DesignServicesIcon>
                                <TextField  style={{ fontSize: "24px", fontWeight: "600" }} value={campaign} onChange={(e) => Setcampaign(e.target.value)} name='campaign' placeholder='Add Campaign'></TextField>
                            
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
                                                return <Mediacard key={index} hnadlechnage={handleselectcam} item={item} select={Boolean(campaignIds.id === item._id) ? styled.sectioncard : ""} />
                                            })
                                        }
                                        </div>

                                    </TabPanel>

                                </TabContext>
                            </Box>

                        </div>
                        <div className={styled.DashboardLeftSection}>

                            <Calendar
                            events={events}
                            allscheduleData ={allscheduleData}
                             setallscheduleData={setallscheduleData}
                                campaignIds={campaignIds}
                                setcampaignIds={setcampaignIds}
                                Setmedia={Setmedia}
                                select={'day'}
                                name={campaign}
                                Setspecific_dates={Setspecific_dates}
                                specific_dates={specific_dates}
                                getscheduleData={getscheduleData}
                                SetscheduleData={SetscheduleData}
                            />
                        </div>
                    </>

                    : 
                    <Calendar
                    campaignIds={campaignIds}
                    allscheduleData ={allscheduleData}
                    setallscheduleData={setallscheduleData}
                    setcampaignIds={setcampaignIds}
                    Setmedia={Setmedia}
                    select={'month'}
                    name={campaign}
                    events={events}
                    Setspecific_dates={Setspecific_dates}
                    specific_dates={specific_dates}
                    getscheduleData={getscheduleData}
                    SetscheduleData={SetscheduleData}
                />

            }



            <div className={`${styled.commonbox} ${styled.DeviceInfo} container w-100`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className={styled.commonboxTitle}>{'Sequence Summary'}</h3>
                    <div className='d-flex align-items-center gap-2'>
                        <button >{'See  more'}</button>

                        <button onClick={() => events ? setEvents(false)  :  handlesavefunction('published')}>{loading ? 'loading...' : 'Save & Next'}</button>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                            <div><BsBadgeHdFill size={22} color='#9399a2' /></div>
                            <div>
                                <span>{`Total media`}</span>
                                <h4>{campaignData?.totalMediaSequenceCount || 0}</h4>
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


export async function getServerSideProps(context) {
    const { screen_id } = context.query;
    const { req } = context;
    const tokenString = req?.cookies?.ChargeET_UserToken;
    console.log(context.query)
    // Check if the 'layout' query parameter exists
    // if (!screen_id) {
    //   // Redirect to a 404 page if 'layout' query is missing
    //   return {
    //     redirect: {
    //       destination: '/404',
    //       permanent: false,
    //     },
    //   };
    // }
  
    // If 'layout' query parameter is present, pass it as props
    return {
      props: {
        screen_id: screen_id.split(','),
        token: tokenString
      },
    };
  }