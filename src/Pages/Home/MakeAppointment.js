import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Sheard/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className="flex justify-center items-center mt-36">

            <div className='flex-1 hidden lg:block md:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <div className='p-10 lg:pr-12 lg:p-0'>
                    <h3 className='text-primary text-xl mb-3'>Appointment</h3>
                    <h2 className='text-3xl mb-3 text-white'>Make an Appointment Today</h2>
                    <p className='mb-5 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;