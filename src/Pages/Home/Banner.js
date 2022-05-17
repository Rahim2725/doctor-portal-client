import React from 'react';
import banner from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class=" w-5/12 rounded-lg shadow-2xl" />
                <div className=' w-6/12 mr-10'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est similique quis molestias vero fugit, eos velit repudiandae officiis, nostrum ratione necessitatibus neque iure a, adipisci iste aperiam sapiente. Tempora, molestiae.</p>
                    <button class="btn btn-primary ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;