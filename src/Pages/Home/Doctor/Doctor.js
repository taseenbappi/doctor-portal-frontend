import React from 'react';

const Doctor = (props) => {
    const { name, email, image } = props.doctor;
    return (
        <div>
            <img src={`data:image/png;base64,${image}`} alt="" />
        </div>
    );
};

export default Doctor;