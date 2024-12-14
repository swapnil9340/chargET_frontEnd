import React, { useState } from 'react'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from '@/styles/customStyles';
import Mediacard from '@/component/Mediacard/Mediacard';
import styled from '@/styles/style.module.scss';
import Header from '@/component/Header/Searchbar';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Screencard from '@/component/Screen/Screencard';
import axios from 'axios';
import Cookies from 'js-cookie';
const Choosescreen = () => {
    const [value, setValue] = React.useState('1');
    const [selecteditem , setselecteditem]= useState([])
    const Styles = useStyles()
    const router = useRouter();
     const [device, setdevice] = React.useState([]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const selected = (id) => {
        setselecteditem((prevSelectedItems) => {
          if (prevSelectedItems.includes(id)) {
            return prevSelectedItems.filter((item) => item !== id);
          } else {
            return [...prevSelectedItems, id];
          }
        });
      };
     
    const handleRedirect = () => {
      router.push(`/sequence?screen_id=${selecteditem}`);
      };

      React.useEffect(() => {
        const fetchData = async () => {
          const cookieValue = Cookies.get('ChargeET_UserToken');
    
          if (!cookieValue) {
            console.warn("User token cookie not found.");
            return;
          }
    
          const options = {
            method: 'POST',
            url: 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/',
            params: { type: 'register_device', action: 'get' },
            headers: {
              'Content-Type': 'application/json',
              Authorization: cookieValue,
            },
            data: {},
          };
    
          try {
            const { data } = await axios.request(options);
            if (data.status = 'success') {
    
              setdevice(data.devices);
            }
            else {
              setdevice([]);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
    
        fetchData();
      }, [])



      console.log(device ,  selecteditem)
  return (
    <div className={styled.dashboard}>
    <div className={styled.mainDashboardsection} style={{ width: "100%" }}>
        <div>
        <Header />
       
        </div>
        <div   className='d-flex w-100 justify-content-between align-items-center'  >
            <h1 className={styled.pageHeading}>{`Choose Layout`}</h1>
          {Boolean(selecteditem.length) &&  <button onClick={handleRedirect}>{`Next`}</button>}
        </div>
        <Box className={Styles.historyList}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', height: "100%" }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="ALL" value="1" />
                        <Tab label="Landscape" value="2" />
                        <Tab label="Portrait" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <div className={styled.commonbox}>
                        <h3 className={styled.commonboxTitle}>{`${selecteditem.length} screen selected`}</h3>
                        <Grid container spacing={3} className={styled.Zonesection}>
                            {device.map((data)=>{
                               return( <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                <Screencard selected={selected} selecteditem={selecteditem} id={1} data={data} />
                             </Grid>)
                            })}
                        </Grid>
                    </div>
                </TabPanel>
                <TabPanel value="2">
                  
                </TabPanel>
                <TabPanel value="2">
                    
                </TabPanel>
            </TabContext>
        </Box>
    </div>
</div>
  )
}
Choosescreen.layout = "layout1"
export default Choosescreen