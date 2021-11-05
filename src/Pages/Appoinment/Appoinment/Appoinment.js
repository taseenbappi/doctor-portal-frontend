import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvaiableAppointment from '../AvaiableAppointment/AvaiableAppointment';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvaiableAppointment date={date} ></AvaiableAppointment>
        </div>
    );
};

export default Appoinment;