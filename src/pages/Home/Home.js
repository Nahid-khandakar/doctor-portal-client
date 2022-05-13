import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Service from './Service';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;