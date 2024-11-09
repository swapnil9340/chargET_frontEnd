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
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Rightbarcreationscreen from '@/component/SelectZone/Rightbarcreationscreen';
import axios from 'axios';

const Createscreen = (props) => {
  const [selectzone, setSelectZone] = React.useState(
    [
      {
        zone1: {
          selectzone1: true,
        },
        zone2: {
          selectzone1:true,
          selectzone2:false,
        },
        zone3: {
          selectzone1:true,
          selectzone2:false,
          selectzone3:false,
        },
        Bottomzone1: {
          selectzone1: true,
        },
        Bottomzone2: {
          selectzone1:true,
          selectzone2:false,
        },
        Bottomzone3: {
          selectzone1:true,
          selectzone2:false,
          selectzone3:false,
        }
      }
    ]
  );

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
      const newMediaItem = { media_id: select.media_id, duration: 10, order: 1 }; // Initial order set to 1 for new item
  
      // Convert `props.zone` to a number and use it to determine how many campaign objects to create
      const numberOfZones = Number(props.zone.slice(-1));
  
      if (!isNaN(numberOfZones) && numberOfZones > 0) {
        // Create an array to hold all the campaign objects that need to be updated or added
        const campaignObjects = [];
  
        for (let i = 1; i <= numberOfZones; i++) {
          // Check if a campaign object for this part already exists
          let existingCampaign = prev.find(campaign => campaign.zone_id === numberOfZones && campaign.name === `Header Zone Part ${i}`);
  
          if (!existingCampaign) {
            // Initialize a new campaign object if it doesn't exist
            existingCampaign = {
              zone_id: numberOfZones,
              name: `Header Zone Part ${i}`,
              media_sequence: [],
              custom_properties: {
                width_percentage: 100 / numberOfZones,
                height_percentage: 20,
                position: { x_percentage: (i - 1) * (100 / numberOfZones), y_percentage: 0 }
              }
            };
          }
  
          // Access selectzone state to check for each part dynamically
          const zoneConfig = selectzone[0][`zone${numberOfZones}`];
  
          // Update media_sequence in the existing campaign object if its corresponding selectzone is true
          if (zoneConfig && zoneConfig[`selectzone${i}`]) {
            existingCampaign.media_sequence = [...existingCampaign.media_sequence, newMediaItem]
              .map((media, index) => ({
                ...media,
                order: index + 1 // Update order based on index position
              }));
          }
  
          // Add the updated or new campaign object to the campaignObjects array
          campaignObjects.push(existingCampaign);
        }
  
        // Return the updated selectcampaign state, removing any existing objects for this zone_id and adding the new ones
        return [
          ...prev.filter(campaign => campaign.zone_id !== numberOfZones), // Remove old objects for this zone_id
          ...campaignObjects // Add the updated/new campaign objects
        ];
      }
  
      // If `props.zone` is not a valid number, return the previous state
      return prev;
    });
  }
  

  function find_id(id) {

    return selectcampaign.find((data) => data.media_id === id);
  }
  const  ApiCall =  async () => {
    const options = {
      method: 'POST',
      url: 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/',
      params: {type: 'campaign', action: 'create'},
      headers: {'content-type': 'application/json', Authorization: ''},
      data: {
        campaign_name: 'My Custom Campaign',
        orientation: 'Landscape',
        layout_type: 'custom',
        zones: [
          {
            zone_id: 1,
            name: 'Header Zone',
            media_sequence: [
              {media_id: 'media_1', duration: 10, order: 1},
              {media_id: 'media_1', duration: 10, order: 2}
            ],
            custom_properties: {
              width_percentage: 100,
              height_percentage: 20,
              position: {x_percentage: 0, y_percentage: 0}
            }
          },
          {
            zone_id: 2,
            name: 'Main Zone',
            media_sequence: [{media_id: 'media_2', duration: 15, order: 1}],
            custom_properties: {
              width_percentage: 100,
              height_percentage: 60,
              position: {x_percentage: 0, y_percentage: 20}
            }
          },
          {
            zone_id: 3,
            name: 'Footer Zone',
            media_sequence: [{media_id: 'media_3', duration: 20, order: 1}],
            custom_properties: {
              width_percentage: 100,
              height_percentage: 20,
              position: {x_percentage: 0, y_percentage: 80}
            }
          }
        ],
        created_at: '2024-11-02T12:00:00Z',
        updated_at: '2024-11-02T12:00:00Z'
      }
    };
    
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }



const getTrueKeysForZone = (zoneIndex) => {
  const zoneKey = `zone${zoneIndex}`;
  const selectedZone = selectzone[0][zoneKey];

  if (!selectedZone) return [];

  return Object.keys(selectedZone).filter(key => selectedZone[key] === true);
};

// Usage
const trueKeysForSecondZone = getTrueKeysForZone(props.zone.slice(-1))[0].slice(-1); // Retrieves keys from zone2 that have `true` values

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
            <h3 className={styled.commonboxTitle}>{'Composition Summary'}</h3>
            <div style={{}}>
            <button>{'Preview'}</button>
            <button onClick={ApiCall()}>{'Save'}</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                <div><BsBadgeHdFill size={22} color='#9399a2' /></div>
                <div>
                  <span>{`Total media`}</span>
                  <h4>{`1080x2040`}</h4>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                <div><TbRefreshDot size={22} color='#9399a2' />
                </div>
                <div>
                  <span>{`Duration`}</span>
                  <h4>{`Image`}</h4>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                <div><MdImage
                  size={22} color='#9399a2' /></div>
                <div>
                  <span>{`Number of Zone`}</span>
                  <h4>{`Portrait`}</h4>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                <div><MdImage
                  size={22} color='#9399a2' /></div>
                <div>
                  <span>{`Orientation`}</span>
                  <h4>{`Landscape`}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styled.DashboardLeftSection}>
        <Rightbarcreationscreen selectzone={selectzone} setSelectZone={setSelectZone} zone={props.zone} selectcampaign={selectcampaign} setselectcampaign={setselectcampaign}
        selctingcam={trueKeysForSecondZone}
        />
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
  console.log(tokenString)
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
