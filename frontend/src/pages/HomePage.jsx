import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import FAQ from '../components/Faqs';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <FAQ/>
            <About/>
            <ContactUs/>
        </div>
    );
};

export default HomePage;
