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
const Addcampaign = () => {
    const [value, setValue] = React.useState('1');
    const router = useRouter();
    const [add, setadd] = React.useState(false);
    const Styles=useStyles() 
    const handleChange = (event, newValue) =>{
      setValue(newValue);
    };
  
    function addcampaign (){
        router.push('/campaign/selectlayout');
    }
  return (
    <div className={styled.dashboard} >
       <div className={styled.mainDashboardsection} style={{width:"100%"}}>
        <Header/>
            <div   className='d-flex w-100 justify-content-between align-items-center'  >
                <h1 className={styled.pageHeading}>{`Campaign`}</h1>
                <Button onClick={addcampaign} className={Styles.addcampaignBtn}>{`Add Composition`}</Button>   
            </div>
        <Box className={Styles.historyList}>
         
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label={`ALL`} value="1" />
                    <Tab label={`FAVOURITE`} value="2" />
                </TabList>
                </Box>
                <TabPanel value="1">
                
                    <div className={styled.mediacardwrapper}>{
                        [1,2,3,1,1,1,1,1,1,1,1,1,1,1,].map((item , index)=>{
                        return <Mediacard key={index}/>
                        })
                    }
                    </div>
                        
                </TabPanel>
                <TabPanel value="2">
            
                <div className={styled.mediacardwrapper}>{
                        [1,2,3,4,5,6,7].map((item , index)=>{
                        return <Mediacard key={index}/>
                        })
                    }
                    </div>
                </TabPanel>
            </TabContext>
        </Box>
        <div className={`${styled.commonbox} ${styled.DeviceInfo}  `}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h3 className={styled.commonboxTitle}>{'BURGER'}</h3>
                      <button>{'Edit'}</button>
                    </div>  
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3 mb-3">
                            <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                                <div><BsBadgeHdFill size={22} color="#9399a2" /></div>
                                <div>
                                    <span>Duration</span>
                                    <h4>20 Sec</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 mb-3">
                            <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                                <div><BsBadgeHdFill size={22} color="#9399a2" /></div>
                                <div>
                                    <span>Number of Media</span>
                                    <h4>4</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 mb-3">
                            <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                                <div><TbRefreshDot size={22} color="#9399a2" /></div>
                                <div>
                                    <span>Zone</span>
                                    <h4>Single</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 mb-3">
                            <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                                <div><MdImage size={22} color="#9399a2" /></div>
                                <div>
                                    <span>Orientation</span>
                                    <h4>Landscape</h4>
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