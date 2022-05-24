import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheard/Loading';
import BookingModel from './BookingModel';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null)

    const formatDate = format(date, 'PP');

    const {data: services, isLoading, refetch} = useQuery(['available', formatDate], () => fetch(`http://localhost:5000/available?date=${formatDate}`)
        .then(res => res.json()))


        if(isLoading){
           return <Loading></Loading>
        }
    return (
        <div className='lg:my-32'>
            <h4 className='text-center text-xl text-secondary'>Available Appointment on  {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModel
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModel>}
        </div>
    );
};

export default AvailableAppointment;