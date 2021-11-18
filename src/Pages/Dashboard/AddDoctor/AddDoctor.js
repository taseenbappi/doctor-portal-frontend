import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image);

    const doctorHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/doctos', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
    return (
        <div>
            <h1>Add doctor here</h1>
            <div>
                <form onSubmit={doctorHandler}>

                    <TextField
                        sx={{ width: "40%" }}
                        label="Name"
                        variant="standard"
                        onBlur={e => setName(e.target.value)}
                    />
                    <br />
                    <TextField
                        sx={{ width: "40%" }}
                        label="Email"
                        variant="standard"
                        onBlur={e => setEmail(e.target.value)}
                    />
                    <br />
                    <br />
                    <Input
                        sx={{ width: "40%" }}
                        type="file"
                        accept="image/*"
                        variant="standard"
                        onChange={e => setImage(e.target.files[0])} />
                    <br />
                    <br />

                    <Button type="submit" variant="contained" value="submit">Add Doctor</Button>


                </form>
            </div>
        </div>
    );
};

export default AddDoctor;