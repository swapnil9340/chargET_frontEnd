import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useStyles from '@/styles/customStyles';
import Mediacard from '@/component/Mediacard/Mediacard';
import classes from '@/styles/style.module.scss'
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
   
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
const Mediaupload = () => {
    const [value, setValue] = React.useState(0);
    const classee=useStyles() 
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className={classee.mediatabs}>
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="Videos" {...a11yProps(1)} />
        <Tab label="GIF" {...a11yProps(2)} />
        <Tab label="Images" {...a11yProps(3)} />
        <Tab label="Favourite" {...a11yProps(4)} />
      </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
     <div className={classes.mediacardwrapper}>{
      [1,2,3,4,5,6,7].map((item , index)=>{
        return <Mediacard key={index}/>
      })
     }</div>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
      Item Two 2
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
      Item Three 3
    </CustomTabPanel>
    <CustomTabPanel value={value} index={3}>
      Item Three 4
    </CustomTabPanel>
    <CustomTabPanel value={value} index={4}>
      Item Three 5
    </CustomTabPanel>
  </Box>
  )
}

export default Mediaupload