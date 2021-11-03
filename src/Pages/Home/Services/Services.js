import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Service from '../Service/Service';
import floride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import cavity from '../../../images/cavity.png';


const Services = () => {
    const services = [
        {
            name: "Floride Treatment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam.",
            img: floride
        },
        {
            name: "whitening Teeth",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam.",
            img: whitening
        },
        {
            name: "Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam.",
            img: cavity
        }
    ];
    return (
        <Container maxWidth="md">
            <Typography sx={{ m: 4 }} variant="h6" gutterBottom component="div">
                Our Services
            </Typography>
            <Typography sx={{ m: 4 }} variant="h3" gutterBottom component="div">
                Services we provide
            </Typography>

            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </Grid>


        </Container>
    );
};

export default Services;