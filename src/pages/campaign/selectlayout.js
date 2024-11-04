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
import Header from '@/component/Header/Header';
import Medialeftbar from '@/component/Leftbar/Medialeftbar';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Singlezone from '@/component/SelectZone/single';
import classes from '@/styles/style.module.scss'
import DuelZone from '@/component/SelectZone/Dual';
import Threezone from '@/component/SelectZone/Threezone';
const add = () => {
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
    return (
        <div className={styled.dashboard} >
            <div className={styled.mainDashboardsection} style={{ width: "100%" }}>
                <Header />
                <Box className={Styles.historyList}>
                    <div className='d-sm-block d-md-flex'  >
                        <div className='col'>
                            <p>{'Choose Layout'}</p>
                        </div>
                        <div className='col'>

                            <Button onClick={addcampaign}>{`Add Composition`}</Button>
                        </div>
                    </div>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', height: "100%" }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label={`ALL`} value="1" />
                                <Tab label={`Landscape`} value="2" />
                                <Tab label={`Portrait`} value="3" />
                                <Tab label={`Custom`} value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">

                            <div className={styled.Zonesection}>
                                <div className={`row ${styled.zonetoper}`}>
                                    <div className={`col-12 col-md-6 col-lg-4 d-flex justify-content-center ${styled.zonebox}`}>
                                        <Singlezone />
                                    </div>
                                    <div className={`col-12 col-md-6 col-lg-4 d-flex justify-content-center ${styled.zonebox}`}>
                                        <DuelZone />
                                    </div>
                                    <div className={`col-12 col-md-6 col-lg-4 d-flex justify-content-center ${styled.zonebox}`}>
                                        <Threezone />
                                    </div>
                                    <div className={`col-12 col-md-6 col-lg-4 d-flex justify-content-center ${styled.zonebox}`}>
                                        <Singlezone />
                                    </div>
                                    <div className={`col-12 col-md-6 col-lg-4 d-flex justify-content-center ${styled.zonebox}`}>
                                        <Singlezone />
                                    </div>
                                    <div className={`col-12 col-md-6 col-lg-4 d-flex justify-content-center ${styled.zonebox}`}>
                                        <Singlezone />
                                    </div>
                                </div>
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
add.layout = "layout1"
export default add