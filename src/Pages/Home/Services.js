import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import treatment from '../../assets/images/treatment.png';
import teeth from '../../assets/images/whitening.png';
import PrimaryButton from '../Sheard/PrimaryButton';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: '',
            img: teeth
        },
    ]

    return (
        <div className='mt-24'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold  text-primary'>OUR SERVICES</h3>
                <h2 className='text-4xl mt-1'>Service We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="hero min-w-full lg:px-16">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg lg:ml-4 shadow-2xl" />
                    <div className='px-10'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;