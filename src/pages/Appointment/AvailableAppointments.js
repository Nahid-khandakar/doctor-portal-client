import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className='mt-10'>

            <div>
                <h1 className='text-2xl font-semibold text-center text-secondary'>Available Appointments on {format(date, 'PP')}</h1>
                <p className='text-xl text-center font-semibold'>Please Select a service</p>
            </div>

            <div>

            </div>

        </div>
    );
};

export default AvailableAppointments;