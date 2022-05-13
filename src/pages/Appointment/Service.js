import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service
    return (
        <div>
            <div className="card max-w-sm xl:max-w-lg  bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="font-semibold text-secondary  text-2xl">{name}</h2>
                    <p>{slots.length > 0
                        ? slots[0] : <p className='text-red-400'>Try another date</p>
                    }</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} avilable</p>
                    <div className="card-actions justify-center py-5">
                        <button className="btn btn-secondary text-white" disabled={slots.length === 0}>Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;