import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';



const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <InfoCard bgclass=" bg-gradient-to-r from-primary to-secondary" text="Lorem Ipsum is simply dummy text of the pri" cardTitle="Opening Hours" img={clock}></InfoCard>
            <InfoCard bgclass="bg-accent" text="Nithpur, Porsha, Naogaon" cardTitle="Visit our location" img={marker}></InfoCard>
            <InfoCard bgclass=" bg-gradient-to-r from-primary to-secondary" text="+880 1827251661" cardTitle="Contact us now" img={phone}></InfoCard>
        </div>
    );
};
export default Info;