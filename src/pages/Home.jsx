import React, { useRef } from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import Hookah from '../components/Hookah';
import ContactUs from '../components/ContactUs';


const Home = () => {
    const scrolled = useRef(null)
    
    return (
        <div >
            <Banner />
            <AboutUs />
            <Hookah />
            <ContactUs />
        </div>
    );
}

export default Home;
