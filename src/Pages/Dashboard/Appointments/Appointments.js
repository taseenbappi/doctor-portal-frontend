import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

const Appointments = ({ date }) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const uri = `https://infinite-shore-61650.herokuapp.com/appointment?email=${user.email}&&date=${date.toLocaleDateString()}`;
        console.log(uri);
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setAppointments(data);
            })
    }, [date])
    return (
        <div>
            <Typography component={'span'} variant="h4">Appointment List </Typography>
            <Typography variant="h6">Date: {date.toLocaleDateString()} </Typography>
            <Box>
                <TableContainer component={Paper}>
                    <Table aria-label="Appointments table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Time</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Approve</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointments.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.patientName}
                                    </TableCell>
                                    <TableCell align="right">{row.time}</TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right"><Button variant="contained">+</Button></TableCell>
                                    <TableCell align="right"><Button variant="contained">X</Button></TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
};

export default Appointments;