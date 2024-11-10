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
const Sequence = () => {
    const [value, setValue] = React.useState('1');
    const [selectcampaign, setselectcampaign] = React.useState([])
    const Styles=useStyles() 
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const [media , Setmedia] = React.useState([])
    const url = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=campaign&action=get';
    const cookieValue = Cookies.get('ChargeET_UserToken');
    const headers = {
      'Authorization': cookieValue,
      'Content-Type': 'application/json'
    };
  
    const data = {};
  
  React.useEffect   (()=>{
    axios.post(url, data, { headers })
      .then(response  => {
        // console.log(Boolean(response.data.media_information))
        const l =   response.data.campaign_detail
        Setmedia( l);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  },[])
  
 const  handleselectcam=(media)=>{
console.log(media)
  }


  return (
    <div className={styled.dashboard}>
    <div className={styled.mainDashboardsection}>
     <Header/>
     <p style={{fontSize:"24px" , fontWeight:"600"}}> <DesignServicesIcon ></DesignServicesIcon>{`Sequence Name`}</p>
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
                      media.slice(0 ,8).map((item, index) => {
                       return <Mediacard key={index} hnadlechnage={handleselectcam}  item={item}  />
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
        <div className={styled.commonbox}>
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
                                    <span><MdEdit/></span>
                                    <span><MdDeleteForever/></span>
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
                                    <span><MdEdit/></span>
                                    <span><MdDeleteForever/></span>
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
        </div>
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
                            <div><BsBadgeHdFill size={22} color='#9399a2'/></div>
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