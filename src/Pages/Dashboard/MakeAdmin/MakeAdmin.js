import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {

    const [userEmail, setUserEmail] = useState({})
    const { token } = useAuth();

    const onBlurHandler = (e) => {
        setUserEmail(e.target.value);
    }
    const adminHandler = (e) => {
        const email = { email: userEmail };
        console.log(email);
        fetch("http://localhost:5000/user/admin", {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    alert("Created an Admin");
                    setUserEmail({})

                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make your admin</h1>
            <form onSubmit={adminHandler}>
                <TextField sx={{ p: 1 }} id="email" name="email" label="Email" variant="standard" type="email" onBlur={onBlurHandler} />

                <Button sx={{ p: 1 }} variant="contained" type="submit">Admin</Button>
            </form>


        </div>
    );
};

export default MakeAdmin;