import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <section id="contactUs" className='my-5' style={{
            background: '#1a202c', color: '#cbd5e0', paddingTop: '3rem', paddingBottom: '6rem', borderRadius: '25px',
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        }}>
            <Container className='py-0 px-5'>
                <Row className="justify-content-center mb-5">
                    <Col md={12} className="text-center">
                        <h1 className="mb-4" style={{ fontSize: '2.5rem' }}>Contact Us</h1>
                        <p className="mb-4">
                            Please fill out the form below and we will get back to you as soon as possible.
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                    <Col md={6}>
                        <img className="w-100 rounded" src="https://dummyimage.com/720x600" alt="Contact" />
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={6} placeholder="Enter your message" />
                            </Form.Group>
                            <div className='d-flex justify-content-center'>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;
