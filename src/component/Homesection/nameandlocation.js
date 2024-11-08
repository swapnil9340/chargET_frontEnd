import React from "react";
import { Grid, Paper, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image'
const NameAndLocation = () => {
    return (
        <div style={{ padding: 16, height: "180px" }} >
            <Grid container spacing={2}>
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