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
import { MdImage } from "react-icons/md";
import { TbRefreshDot } from "react-icons/tb";
import Header from '@/component/Header/Searchbar';
import Medialeftbar from '@/component/Leftbar/Medialeftbar';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Rightbarcreationscreen from '@/component/SelectZone/Rightbarcreationscreen';
import axios from 'axios';

const Createscreen = (props) => {

  const [value, setValue] = React.useState('1');
  const [selectcampaign, setselectcampaign] = React.useState([])
  const Styles = useStyles()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [media, Setmedia] = React.useState([])
  const url = 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=media&action=get';

  const headers = {
    'Authorization': props.token,
    'Content-Type': 'application/json'
  };

  const data = {};

  React.useEffect(() => {
    axios.post(url, data, { headers })
      .then(response => {
        // console.log(Boolean(response.data.media_information))
        const l = response.data.media_information
        Setmedia(l);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, [props.token])

  function campaignSelect(select) {
    setselectcampaign(prev => {
      const mediaExists = prev.some(media => media.media_id === select.media_id);
      if (mediaExists) {
        // Remove the existing media
        return prev.filter(media => media.media_id !== select.media_id);
      } else {
        // Add the new media
        return [...prev, select];
      }
    });

  }
  function find_id(id) {

    return selectcampaign.find((data) => data.media_id === id);
  }


  console.log(props.zone)

  console.log(selectcampaign)

  return (
    <div className={styled.dashboard}>
      <div className={styled.mainDashboardsection}>
        <Header />
        <p style={{ fontSize: "24px", fontWeight: "600" }}> <DesignServicesIcon ></DesignServicesIcon>{`Campaign Name`}</p>
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
            {[1, 2, 3].map((tabValue) => (
              <TabPanel key={tabValue}  className={Styles.customScrollbar}value={tabValue.toString()} >
                <div className={styled.mediacardwrapper}>
                  {media.map((item, index) => (
                    <Mediacard
                      key={index}
                      hnadlechnage={campaignSelect}
                      item={item}
                      select={find_id(item.media_id) ? styled.sectioncard : ""}
                    />
                  ))}
                </div>
              </TabPanel>
            ))}
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
                <div><BsBadgeHdFill size={22} color='#9399a2' /></div>
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
        <Rightbarcreationscreen zone={props.zone} selectcampaign={selectcampaign} setselectcampaign={setselectcampaign} />
      </div>
    </div>
  )
}
Createscreen.layout = "layout1"
export default Createscreen

export async function getServerSideProps(context) {
  const { layout } = context.query;
  const { req } = context;
  const tokenString = req?.cookies?.ChargeET_UserToken;
  // Check if the 'layout' query parameter exists
  if (!layout) {
    // Redirect to a 404 page if 'layout' query is missing
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  // If 'layout' query parameter is present, pass it as props
  return {
    props: {
      zone: layout,
      token: tokenString
    },
  };
}
