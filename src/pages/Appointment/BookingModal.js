import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment
    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" class="btn btn-accent btn-circle absolute right-2 top-2 text-white">✕</label>
                    <h3 className="font-bold text-lg text-secondary ">{name}</h3>

                    <form className='grid grid-cols-1 gap-4 justify-items-center py-5 ' >

                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" readOnly />
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className='btn btn-accent text-white w-full max-w-xs' htmlFor="booking-modal" value="Submit" />

                    </form>

                </div>
            </div>

        </div >
    );
};

export default BookingModal;