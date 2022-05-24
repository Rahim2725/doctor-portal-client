import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [treatments, setTreatments] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setTreatments(data)
                })
        }
    }, [user])

    return (
        <div>
            <h2 className='text-purple-500 mb-3'>My Appointment: {treatments.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            treatments.map((t, index) => <tr
                                key={index}>
                                <th>{index + 1}</th>
                                <td>{t.patientName}</td>
                                <td>{t.date}</td>
                                <td>{t.slot}</td>
                                <td>{t.treatment}</td>
                                <td></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;