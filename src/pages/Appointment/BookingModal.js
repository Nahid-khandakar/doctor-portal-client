import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment

    const handleBooking = (event) => {
        event.preventDefault();
        const date = event.target.date.value
        const slot = event.target.slot.value
        const userName = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value

        console.log(_id, name, date, slot, userName, email, phone)
        setTreatment(null)
    }
    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-accent btn-circle absolute right-2 top-2 text-white">✕</label>
                    <h3 className="font-bold text-lg text-secondary ">{name}</h3>

                    <form className='grid grid-cols-1 gap-4 justify-items-center py-5 ' onSubmit={handleBooking} >

                        <input type="text" name='date' value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" disabled />

                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>

                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className='btn btn-accent text-white w-full max-w-xs' htmlFor="booking-modal" value="Submit" />

                    </form>

                </div>
            </div>

        </div >
    );
};

export default BookingModal;