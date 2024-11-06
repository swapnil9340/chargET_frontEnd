import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    useMediaQuery,
    useTheme
} from '@mui/material';
import Image from 'next/image';
import Header from '@/component/Header/Searchbar';
import classes from "@/styles/style.module.scss"
function PublishOptions() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const options = [
        {
            title: 'Schedule',
            description: 'Scheduled content gets displayed only for time you choose',
            buttonText: 'Schedule',
            imageSrc: '/publush1.png',
        },
        {
            title: 'Quick Play',
            description: 'Quickplay lets you display content instantly. Can be used for Flash Sale / Emergency cases',
            buttonText: 'Quick Play',
            imageSrc: '/publishplay.png',
        },
        {
            title: 'Setup Default',
            description: 'Default content keeps on playing irrespective of the time when there is no active Quickplay or Schedule',
            buttonText: 'Setup Default',
            imageSrc: '/publishSetting.png',
        },
    ];

    return (
        <Box>
            <Header></Header>
                <Typography variant="h5" fontWeight="600"   sx={{
                    fontSize: {
                      xs: 24, // mobile
                      sm: 28, // tablets
                      md: 32, // small laptops
                      lg: 40, // desktops
                    },
                  }}  gutterBottom>
                   {` Publish on the Go!`}
                </Typography>
                {/* <h1 className={classes.pageHeading}>{` Publish on the Go!`}</h1> */}
            <Box p={4}  bgcolor="#f0f4fa"  borderRadius={6}>
                <Typography variant="subtitle1" 
                sx={{
                    fontSize: {
                      xs: 20, // mobile
                      sm: 24, // tablets
                      md: 28, // small laptops
                      lg: 34, // desktops
                    },
                  }}
                fontWeight="600" color="textSecondary" mb={4}>
                   {` How Would you like to publish?`}
                </Typography>

                <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
                    {options.map((option, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                                <Image width={100} height={100} src={option.imageSrc} alt={`${option.title} icon`} style={{ width: '200px', height: '150px' }} />
                                <CardContent>
                                    <Typography variant="body1" color="textSecondary" align="center">
                                        {option.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" color="primary" fullWidth>
                                        {option.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default PublishOptions;
