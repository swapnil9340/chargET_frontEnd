import React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from '@/styles/customStyles';
import Mediacard from '@/component/Mediacard/Mediacard';
import styled from '@/styles/style.module.scss';
import Header from '@/component/Header/Header';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Singlezone from '@/component/SelectZone/single';
import DuelZone from '@/component/SelectZone/Dual';
import Threezone from '@/component/SelectZone/Threezone';
import Bottomsinglezone from '@/component/SelectZone/Bottomsinglezone';
import Bottomdualzone from '@/component/SelectZone/Bottomdualzone';
import Bottenthreezone from '@/component/SelectZone/Bottomthreezone';

const Add = () => {
    const [value, setValue] = React.useState('1');
    const router = useRouter();
    const Styles = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const addcampaign = () => {
        router.push('/campaign/selectlayout');
    };

    return (
        <div className={styled.dashboard}>
            <div className={styled.mainDashboardsection} style={{ width: "100%" }}>
                <Header />
                <Box className={Styles.historyList}>
                    <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                        <Grid item>
                            <Typography variant="h6">Choose Layout</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={addcampaign}>Add Composition</Button>
                        </Grid>
                    </Grid>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', height: "100%" }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="ALL" value="1" />
                                <Tab label="Landscape" value="2" />
                                <Tab label="Portrait" value="3" />
                                <Tab label="Custom" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Grid container spacing={3} className={styled.Zonesection}>
                                <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                    <div style={{ width: '300px' }}>

                                        <Singlezone />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                    <div style={{ width: '300px' }}>

                                        <DuelZone />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                    <div style={{ width: '300px' }}>

                                        <Threezone />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                    <div style={{ width: '300px' }}>

                                        <Bottomsinglezone />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                    <div style={{ width: '300px' }}>

                                        <Bottomdualzone />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4} className={styled.zonebox}>
                                    <div style={{ width: '300px' }}>

                                        <Bottenthreezone />
                                    </div>
                                </Grid>
                            </Grid>

                        </TabPanel>
                        <TabPanel value="2">
                            <div className={styled.mediacardwrapper}>
                                {/* Map over media cards if needed */}
                            </div>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
};

Add.layout = "layout1";
export default Add;
