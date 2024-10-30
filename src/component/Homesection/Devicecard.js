import { Box, Typography, Grid, Button, Container } from '@mui/material';

export default function DeviceDashboard(props) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box display="flex" gap={"20%"} alignItems="center" sx={{height:"120px"}}>
        <Box>
          <Typography variant="h4" fontWeight="bold">Hello Alex</Typography>
          <Typography variant="subtitle1">4/5 Device Connected</Typography>
        </Box>
        <Typography variant="h5" fontWeight="bold">
          <Box component="span" sx={{ position: 'relative', top: '-10px', color: 'yellow', fontSize: "100%" }}>●</Box>
          BHOPAL
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h6">YOUR DEVICES</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2">View all</Typography>
        </Box>
        
        <Grid container spacing={2} mt={2}>
          {['Galaxy S1', 'OutDoor -1', 'LG Oled', 'Xiomi-A2'].map((device, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                p={2} 
                borderRadius={2} 
                bgcolor="background.paper" 
                boxShadow={3}
              >
                <Box
                  component="img"
                  src={`device-image-${index}.png`} // Replace with actual image sources
                  alt={device}
                  sx={{ width: '80px', height: '80px', mb: 1 }}
                />
                <Typography variant="body1" mb={1}>{device}</Typography>
                <Button variant="contained">Publish</Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
