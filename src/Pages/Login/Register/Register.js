import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImg from "../../../images/login.png";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerHangler, isLoading } = useAuth();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);

    }
    const userRegisterHangler = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("Password Note Match!");
            return
        }
        registerHangler(loginData.email, loginData.password, loginData.name, history);
        alert("Register Successfully!");
    }

    return (
        <Container sx={{ py: 5 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} sx={{ p: 3, mt: 8 }}  >
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {
                        !isLoading &&
                        <form onSubmit={userRegisterHangler}>
                            <TextField
                                style={{ width: "75%", mt: 1 }}
                                id="name"
                                required
                                label="your name"
                                variant="standard"
                                name="name"
                                onChange={handleOnChange} />
                            <TextField
                                style={{ width: "75%", mt: 1 }}
                                id="email"
                                required
                                label="your email"
                                variant="standard"
                                name="email"
                                onChange={handleOnChange} />

                            <TextField
                                style={{ width: "75%", mt: 1 }}
                                type="password"
                                required
                                id="password"
                                label="new password"
                                variant="standard"
                                name="password"
                                onChange={handleOnChange} />
                            <br />
                            <TextField
                                style={{ width: "75%", mt: 1 }}
                                type="password"
                                required
                                id="password2"
                                label="confirm password"
                                variant="standard"
                                name="password2"
                                onChange={handleOnChange} />
                            <br />
                            <br />
                            <Button
                                style={{ width: "75%", m: 1 }}
                                variant="contained"
                                type="submit">Register</Button>

                            <NavLink style={{ textDecoration: "none" }} to="/login">
                                <Button

                                    variant="text" >Already register? Please login here</Button>
                            </NavLink>


                        </form>}
                    {isLoading && <CircularProgress />}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} alt="" style={{ width: "100%" }}></img>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;