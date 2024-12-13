import React, { useState } from "react";
import { Grid, Paper, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image'
import Cookies from 'js-cookie';
import axios from 'axios'
const NameAndLocation = () => {
    const [weather , setweather]=useState([])
    React.useEffect(() => {
        // const fetchData = async () => {
        //   const cookieValue = Cookies.get('ChargeET_UserToken');
    
        //   if (!cookieValue) {
        //     console.warn("User token cookie not found.");
        //     return;
        //   }
    
        //   const options = {
        //     method: 'GET',
        //     url: 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=b63fyoBOlWB8YbJujlhwzwJp9lhgoDB4',
         
        //     headers: {
        //       'Content-Type': 'application/json',
        //       "Authorization": `Bearer ${`b63fyoBOlWB8YbJujlhwzwJp9lhgoDB4`}`

        //     },
            
        //   };
    
        //   try {
        //     const { data } = await axios.request(options);
        //     if (data.status = 'success') {
    
        //       console.log(data.devices);
        //     }
        //     else {
        //       setdevice([]);
        //     }
        //   } catch (error) {
        //     console.error("Error fetching data:", error);
        //   }
        // };
    
    axios.get('https://api.tomorrow.io/v4/weather/realtime?location=bhopal&apikey=b63fyoBOlWB8YbJujlhwzwJp9lhgoDB4' , {
               'Content-Type': 'application/json',
               "Authorization": `Bearer ${`b63fyoBOlWB8YbJujlhwzwJp9lhgoDB4`}`
    }).then((res)=>{
        console.log(res.data.data.values.temperature)
        setweather(res.data.data.values)
    })
        // fetchData();
      }, [])
    return (
        <div s >
            <Grid container spacing={2} sx={{height:"135px"}}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">{`Hello Alex`}</Typography>
                    <Typography>{`4/5 Device Connected`}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image src={`/image.png`} alt={'whether'} height={100} width={100} ></Image>
                    <Typography style={{ position: "relative", bottom: "40px", fontSize: "20px" }}>{`Bhopal`}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
const styles = {
    paper: {
        padding: 16,
        textAlign: 'center',
        color: '#333',
    },
};

export default NameAndLocation