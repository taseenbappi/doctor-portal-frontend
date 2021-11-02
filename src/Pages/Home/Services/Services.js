import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Service from '../Service/Service';
import floride from '../../../images/fluoride.png';


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
            img: floride
        },
        {
            name: "Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam.",
            img: floride
        }
    ];
    return (
        <Container maxWidth="md">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Box>

        </Container>
    );
};

export default Services;