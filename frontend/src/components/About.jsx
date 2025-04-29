import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <section id="About" style={{ background: '#1a202c', color: '#cbd5e0', paddingTop: '3rem', paddingBottom: '6rem', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Container className='py-0 px-5'>
                <Row className="justify-content-center mb-5">
                    <Col md={12} className="text-center">
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Our Mission</h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                            At [Your Website Name], we believe that education is the key to a brighter future. Our mission is to provide accessible, interactive, and engaging learning resources for young adults and adults alike. Whether you are looking to understand your basic human rights, learn essential first aid techniques, or gain insights into personal and traffic safety, we have got you covered.
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                    <Col md={6}>
                        {/* Optional: You can add an image or additional content here */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
