import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import About from './maincontent';


const AboutUs = () => {
    return (
        <div>
            <Navbar/>
            <About />
            <Footer/>
        </div>
    );
};

export default AboutUs;