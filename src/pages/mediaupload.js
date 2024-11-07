import React, { useState } from 'react'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
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
import axios from 'axios';

const Mediaupload = (props) => {

  const [value, setValue] = React.useState('1');
  const Styles = useStyles()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const [media , Setmedia] = useState([])
  const url = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=media&action=get';

  const headers = {
    'Authorization': props.token,
    'Content-Type': 'application/json'
  };

  const data = {};

React.useEffect   (()=>{
  axios.post(url, data, { headers })
    .then(response  => {
      // console.log(Boolean(response.data.media_information))
      const l =   JSON.parse(response.data.media_information)
      Setmedia(value => l);
    })
    .catch(error => {
      console.log('Error:', error);
    });
},[props.token])


  return (
    <div className={styled.dashboard}>
      <div className={styled.mainDashboardsection}>
        <Header />
        <Box className={Styles.historyList}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label={`ALL`} value="1" />
                <Tab label={`IMAGES`} value="2" />
                <Tab label={`VIDEOS`} value="3" />
                <Tab label={`FAVOURITE`} value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">

              <div className={styled.mediacardwrapper}>{
                  media.map((item, index) => {
                    return <Mediacard key={index}  item={item} />
                  })
              }
              </div>

            </TabPanel>
            <TabPanel value="2">

              <div className={styled.mediacardwrapper}>{
                 media.map((item, index) => {
                  return <Mediacard key={index}  item={item} />
                })
              }
              </div>
            </TabPanel>
            <TabPanel value="3">

              <div className={styled.mediacardwrapper}>{
                media.map((item, index) => {
                  return <Mediacard key={index}  item={item} />
                })
              }
              </div>
            </TabPanel>
            <TabPanel value="4">
              <div className={styled.mediacardwrapper}>{
                media.map((item, index) => {
                  return <Mediacard key={index}  item={item} />
                })
              }
              </div>
            </TabPanel>
          </TabContext>
        </Box>
        <div className={`${styled.commonbox} ${styled.DeviceInfo} container `}>
          <div className='d-flex justify-content-between align-items-center'>
            <h3 className={styled.commonboxTitle}>{'BURGER'}</h3>
            <button>{'See  more'}</button>
          </div>
          <div className='row'>
            <div className='col-4'>
              <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                <div><BsBadgeHdFill size={22} color='#9399a2' />                    </div>
                <div>
                  <span>{`Resolution`}</span>
                  <h4>{`1080x2040`}</h4>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                <div><TbRefreshDot size={22} color='#9399a2' />
                </div>
                <div>
                  <span>{`Orientation`}</span>
                  <h4>{`Image`}</h4>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                <div><MdImage
                  size={22} color='#9399a2' /></div>
                <div>
                  <span>{`Location`}</span>
                  <h4>{`Portrait`}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styled.DashboardLeftSection}>
        <Medialeftbar />
      </div>
    </div>
  )
}

export default Mediaupload


export async function getServerSideProps(context) {
  const { req } = context;
  const tokenString = req?.cookies?.ChargeET_UserToken;
  // console.log(tokenString)
  // Use the token to fetch data
  // const response = await fetch('https://api.example.com/data', {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  const data = []

  return {
    props: {
      token:tokenString
    },
  };
}