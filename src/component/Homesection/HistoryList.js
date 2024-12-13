import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from "@/styles/style.module.scss";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from '@/styles/customStyles';
import Image from 'next/image';
import iamg from '../../../public/login.png'
const SingleList=({imageurl , text1='Campaign-1' , text2='Galaxy-s1' , text3="24'Oct" })=>{

    return <div className={styled.historyListItem}>
         <div><Image src={iamg} width={100} height={100} alt='Image'/></div>
         <p>{text1}</p>
         <span>{text2}</span>
         <span>{text3}</span>
    </div>
}

const HistoryList = () => {
    const [value, setValue] = React.useState('1');
const Styles = useStyles()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
        <Box className={Styles.historyList} sx={{height:"37rem" , overflow:"scroll"}}>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" >
                    <Tab label={`ALL`} value="1" />
                    <Tab label={`ACTIVE`} value="2" />
                    <Tab label={`UPCOMING`} value="3" />
                    <Tab label={`INACTIVE`} value="4" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <div>
                       <h3 className={styled.commonboxTitle}>{'All'}</h3>
                       {[1].map((item , index)=>{
                        return <SingleList key={index}/>
                       })}
                    </div>
                    <div>
                       <h3 className={styled.commonboxTitle}>{'ACTIVE'}</h3>
                       {[1,3,].map((item , index)=>{
                        return <SingleList key={index}/>
                       })}
                    </div>
                    <div>
                       <h3 className={styled.commonboxTitle}>{'UPCOMING'}</h3>
                       {[13].map((item , index)=>{
                        return <SingleList key={index}/>
                       })}
                    </div>
                    <div>
                       <h3 className={styled.commonboxTitle}>{'INACTIVE'}</h3>
                       {[1,2].map((item , index)=>{
                        return <SingleList key={index}/>
                       })}
                    </div>
                </TabPanel>
                <TabPanel value="2">
                <div>
                       <h3 className={styled.commonboxTitle}>{'ACTIVE'}</h3>
                       {[1,3,].map((item , index)=>{
                        return <SingleList  key={index}/>
                       })}
                    </div>
                </TabPanel>
                <TabPanel value="3">
                <div>
                       <h3 className={styled.commonboxTitle}>{'UPCOMING'}</h3>
                       {[1,2,3,].map((item , index)=>{
                        return <SingleList key={index}/>
                       })}
                    </div>
                </TabPanel>
                <TabPanel value="4">
                    <div>
                       <h3 className={styled.commonboxTitle}>{'INACTIVE'}</h3>
                       {[1,2,3,].map((item ,index)=>{
                        return <SingleList key={index}/>
                       })}
                    </div>
                </TabPanel>
            </TabContext>
        </Box>
    </div>
  )
}

export default HistoryList