import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

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
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>

            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}

        </div>
    );
};

export default AvailableAppointments;