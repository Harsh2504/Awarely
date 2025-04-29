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
         color: '#0089EA' 

    };
    const name = localStorage.getItem('name')
    const isLoggedIn = localStorage.getItem('token') !== null;
    return (
        <div>
            {isLoggedIn ? (
                <>
                    <h1 style={headingStyle} className='fustat-heading'>
                        Welcome to <span style={redTextStyle}>Awarely</span> {name ? `, ${name}` : ''}!
                    </h1>
                    <p style={{ fontSize: '1.2rem', marginTop: '20px', textAlign: 'center' }}>
                        Now you can learn and take quizzes to enhance your knowledge!
                    </p>
                </>
            ) : (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1 style={headingStyle}>
                        Welcome to <span style={redTextStyle}>Awarely</span>!
                    </h1>
                    <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
                        Please <a href="/login" style={{ color: '#0089EA', textDecoration: 'none' }}>log in</a> to access the quiz and explore more features!
                    </p>
                </div>
            )}
            <HeroSection />
            <About />
            <FAQ />
            <ContactUs />
        </div>
    );
};

export default HomePage;
