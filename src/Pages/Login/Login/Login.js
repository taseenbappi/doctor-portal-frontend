import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImg from "../../../images/login.png";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { registerSignInHangler, googleLoginHandler } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const userLoginHangler = e => {

        registerSignInHangler(loginData.email, loginData.password, location, history);
        alert("Login Successfully!");
        e.preventDefault();
    }
    const handleGoogleSign = () => {
        googleLoginHandler(location, history);
    }

    return (
        <Container sx={{ py: 5 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} sx={{ p: 3, mt: 8 }}  >
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={userLoginHangler}>
                        <TextField
                            style={{ width: "75%", mt: 1 }}
                            id="email"
                            required
                            label="Your Email"
                            variant="standard"
                            name="email"
                            onChange={handleOnChange} />

                        <TextField
                            style={{ width: "75%", mt: 1 }}
                            type="password"
                            required
                            id="password"
                            label="Your Password"
                            variant="standard"
                            name="password"
                            onChange={handleOnChange} />
                        <br />
                        <br />
                        <Button
                            style={{ width: "75%", m: 1 }}
                            variant="contained"
                            type="submit">Login</Button>

                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button

                                variant="text" >New user? Please go for register New account!</Button>
                        </NavLink>


                    </form>
                    <Typography component={'span'}>----------------OR------------------</Typography>
                    <Button onClick={handleGoogleSign} variant="contained" >Google Sign In</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} alt="" style={{ width: "100%" }}></img>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;