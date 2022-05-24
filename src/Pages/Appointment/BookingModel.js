import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModel = ({ treatment, date, setTreatment,refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const formatDate = format(date, 'PP')


    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value ;
        // const fullName = event.target.name.value ;
        const phone = event.target.number.value ;
        // const email = event.target.email.value ;

        const booking = {
            treatmentId : _id,
            treatment: name,
            date: formatDate,
            slot: slot,
            patient: user.email ,
            patientName: user.displayName ,
            phone: phone,            
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => { 
            if(data.success){
                toast(`Appointment is set, ${formatDate} at ${slot}`)
            }
            else{
                toast.error(`Already have an appointment on ${data.booking.date} at ${data.booking.slot}`)
            }
            refetch()
            setTreatment(null)
        })

        

        // console.log(_id, name, slot, fullName, number, email)
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-center mb-3 text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center' >
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                 value={slot}
                                 key={index}
                                 >{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled value={user?.displayName} name='name' placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email} name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='number'  placeholder="Phone Number" className="input input-bordered w-full max-w-xs"  />
                        <input type="submit" value="Submit" className=' btn btn-secondary w-full max-w-xs' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModel;