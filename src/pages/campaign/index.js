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
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';
const Addcampaign = (props) => {
  const [value, setValue] = React.useState('1');
  const router = useRouter();
  const [add, setadd] = React.useState(false);
  const Styles = useStyles()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function addcampaign() {
    router.push('/campaign/selectlayout');
  }


  const [campaign, setcampaign] = React.useState([])
  const [selectcampaign, setselectcampaign] = React.useState({})
  React.useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'POST',
        url: 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/',
        params: { type: 'campaign', action: 'get' },
        headers: {
          'content-type': 'application/json',
          Authorization: props.token,
        },
        data: {},
      };

      try {
        const { data } = await axios.request(options);
        setcampaign(data.campaign_detail);
        setselectcampaign(data.campaign_detail[0])
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.token]);

  function campaignSelect(select) {
    setselectcampaign(select)
  }

  const overallTotalDuration = selectcampaign?.zones?.reduce((totalSum, zone) => {
    return totalSum + zone.media_sequence.reduce((sum, media) => sum + (media.duration || 0), 0);
  }, 0);

  console.log([selectcampaign])

  return (
    <div className={styled.dashboard} >
      <div className={styled.mainDashboardsection} style={{ width: "100%" }}>
        <Header />
        <div className='d-flex w-100 justify-content-between align-items-center'  >
          <h1 className={styled.pageHeading}>{`Campaign`}</h1>
          <Button onClick={addcampaign} className={Styles.addcampaignBtn}>{`Add Composition`}</Button>
        </div>
        <Box className={Styles.historyList} sx={{height:"39rem" , overflow:"overlay"}}>

          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label={`ALL`} value="1" />
                <Tab label={`FAVOURITE`} value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">

              <div className={styled.mediacardwrapper}>{
                campaign.map((item, index) => {
                  console.log(item._id  === selectcampaign._id)
                  return <Mediacard key={index} item={item} hnadlechnage={campaignSelect} select={ item?._id === selectcampaign?._id  ? styled.sectioncard : ""} />
                })
              }
              </div>

            </TabPanel>
            <TabPanel value="2">

              <div className={styled.mediacardwrapper}>{
                // [1,2,3,4,5,6,7].map((item , index)=>{
                // return <Mediacard key={index}/>
                // })
              }
              </div>
            </TabPanel>
          </TabContext>
        </Box>
        <div className={`${styled.commonbox} ${styled.DeviceInfo}   `} style={{margin:'0px' , padding:"20px"}}>
          <div className='d-flex justify-content-between align-items-center'>
            <h3 className={styled.commonboxTitle}>{'BURGER'}</h3>
            <button>{'Edit'}</button>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 ">
              <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                <div><BsBadgeHdFill size={22} color="#9399a2" /></div>
                <div>
                  <span>Duration</span>
                  <h4>{overallTotalDuration}</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                <div><BsBadgeHdFill size={22} color="#9399a2" /></div>
                <div>
                  <span>Number of Media</span>
                  <h4>{selectcampaign?.zones?.length}</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                <div><TbRefreshDot size={22} color="#9399a2" /></div>
                <div>
                  <span>Zone</span>
                  <h4>{selectcampaign?.layout_type}</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                <div><MdImage size={22} color="#9399a2" /></div>
                <div>
                  <span>Orientation</span>
                  <h4>{selectcampaign?.orientation}</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
// Addcampaign.layout = "layout1"
export default Addcampaign

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
      token: tokenString
    },
  };
}