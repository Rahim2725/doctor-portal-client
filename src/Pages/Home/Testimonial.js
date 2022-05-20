import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name:"Winson Herry",
            description: '',
            img:people1 ,
            location : "California"
        },
        {
            _id: 2,
            name:"Winson Herry",
            description: '',
            img:people2 ,
            location : "California"
        },
        {
            _id: 3,
            name:"Winson Herry",
            description: '',
            img:people3 ,
            location : "California"
        },
    ]

    return (
        <section className='my-36'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className="text-xl text-primary font-bold">Testimonial</h3>
                    <h2 className="text-2xl">What Our Patients Says</h2>
                </div>
                <div>
                    <img className=' w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-10 mt-20'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
            
        </section>
    );
};

export default Testimonial;