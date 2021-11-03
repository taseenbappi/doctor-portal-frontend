import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import doctorbg from '../../../images/appointment-bg.png';
const appoinmentbg = {
    background: `url(${doctorbg})`
}

const AppoinmentBanner = () => {

    return (
        <Box style={appoinmentbg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{
                            height: "400px"
                        }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5">
                        Appointment
                    </Typography>

                </Grid>

            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;