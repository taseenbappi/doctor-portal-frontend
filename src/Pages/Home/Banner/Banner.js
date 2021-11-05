import React from 'react';
import Grid from '@mui/material/Grid';
import bannerImg from '../../../images/chair.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Banner = () => {

    return (
        <Container>
            <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: "left",

                }} item xs={12} md={5}>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }} variant={"h4"} >
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography sx={{ fontWeight: '400' }} variant={"h6"} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, vitae veritatis debitis deleniti facilis repellat!
                        </Typography>
                        <Button variant="contained">Get Appoinment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img src={bannerImg} alt="" style={{ width: "100%" }} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;