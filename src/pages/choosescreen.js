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
const choosescreen = () => {
    const [value, setValue] = React.useState('1');
    const [selecteditem , setselecteditem]= useState([])
    const Styles = useStyles()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const selected= (id)=>{
         if(selecteditem.includes(id)){
            setselecteditem(selecteditem.filter((item)=>{
                return item !== id
            }))
         }else{
            setselecteditem([...selecteditem , id])
         }
    }
  return (
    <div className={styled.dashboard}>
    <div className={styled.mainDashboardsection} style={{ width: "100%" }}>
        <Header />
        <div   className='d-flex w-100 justify-content-between align-items-center'  >
            <h1 className={styled.pageHeading}>{`Choose Layout`}</h1>
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
                            <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                               <Screencard selected={selected} selecteditem={selecteditem} id={1} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                <Screencard selected={selected} selecteditem={selecteditem} id={2}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                <Screencard selected={selected} selecteditem={selecteditem} id={3}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                <Screencard selected={selected} selecteditem={selecteditem} id={4}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                <Screencard selected={selected} selecteditem={selecteditem} id={5}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                <Screencard selected={selected} selecteditem={selecteditem} id={6}/>
                            </Grid>
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

export default choosescreen