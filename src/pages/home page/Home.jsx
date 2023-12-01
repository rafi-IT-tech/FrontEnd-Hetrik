import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Homemain from './maincontent';


const Home = () => {
    return (
        <div>
            <Navbar/>
           <Homemain/>
            <Footer/>
        </div>
    );
};

export default Home;