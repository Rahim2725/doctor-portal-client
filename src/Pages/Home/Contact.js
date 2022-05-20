import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div style={{
            background: ` url(${appointment})`
        }} className='py-16 '>
            <div className=' p-3 lg:w-1/4 mx-auto text-center'>
                <h4 className="text-xl text-primary text-bold">Contact Us</h4>
                <h2 className="text-2xl text-white">Stay Connected With us</h2>
                <form className='mt-8' >
                    <input className='mb-3 w-full p-2 border-2 border-cyan-400 rounded-md' type="email" name='email' placeholder='Email Address' required />
                    <br />
                    <input className='mb-3 w-full p-2 border-2 border-cyan-400 rounded-md' type="text" name='subject' placeholder='Subject' required />
                    <br />
                    <textarea className='mb-3 h-32 border-2 border-cyan-400 rounded-md w-full p-2' name="message" id=""  placeholder='Your Message'></textarea>
                    <br />
                    <input className='mb-3 btn btn-primary bg-gradient-to-r from-primary to-secondary'  type="submit" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default Contact;