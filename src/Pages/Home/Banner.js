import React from 'react';
import banner from '../../assets/images/chair.png'
import PrimaryButton from '../Sheard/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class=" max-w-sm lg:max-w-lg lg:ml-12   rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est similique quis molestias vero fugit, eos velit repudiandae officiis, nostrum ratione necessitatibus neque iure a, adipisci iste aperiam sapiente. Tempora, molestiae.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;