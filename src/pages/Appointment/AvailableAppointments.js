import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';

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
                <h1 className='text-3xl font-semibold text-center text-secondary py-5'>Available Appointments on {format(date, 'PP')}</h1>
                <p className='text-xl text-center font-semibold'>Please Select a service</p>
            </div>

            <div className='grid md:grid-cols-1 xl:grid-cols-3 gap-5 mt-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default AvailableAppointments;