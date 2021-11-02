import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { margin } from '@mui/system';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid xs={4} sm={4} md={4}>

            <Card sx={{ minWidth: 300, border: 0, boxShadow: 0, gap: 2 }}>
                <CardMedia
                    component="img"
                    style={{ width: "auto", height: "80", margin: "0 auto" }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>

                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Service;