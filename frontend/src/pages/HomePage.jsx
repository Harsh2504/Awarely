import HeroSection from '../components/HeroSection';
import About from '../components/About';
import FAQ from '../components/Faqs';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
    
    const headingStyle = {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '2.5rem',
    };

    const redTextStyle = {
        color: 'red',
    };

    return (
        <div>
            <h1 style={headingStyle}>
                Welcome to <span style={redTextStyle}>Awarely</span>
            </h1>
            <HeroSection />
            <About />
            <FAQ />
            <ContactUs />
        </div>
    );
};

export default HomePage;
