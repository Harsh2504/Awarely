import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


const postData = async (formData) => {
    const toastId = toast.loading('Sending email... Please wait!');
    try {
        const response = await fetch('http://localhost:1313/api/contactUs/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.errors.map(err => err.msg).join(", "));
        }

        await response.text();
        toast.success('Email sent successfully! 🎉', { id: toastId });
    } catch (error) {
        toast.error('' + error.message, { id: toastId });
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData);
};


    return (
        <section id="contactUs" className='my-5' style={{
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '',
            backgroundColor: '#FFFFFF'
        }}>
            <style type="text/css">
                {`
                    .contactUsSubmit {
                        width: 90px;
                        height: 40px;
                        position: relative;
                        font-family: var(--font);
                        color: #3b82f6;
                        font-weight: 600;
                        background-color: #fff;
                        border: none;
                        overflow: hidden;
                        border-radius: 5px;
                        box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px 1px;
                        transition: all ease 100ms;
                    }

                    .contactUsSubmit:hover {
                        background-color: #cbdcf8;
                    }

                    .contactUsSubmit:focus {
                        background-color: #cbdcf8;
                    }

                    .contactUsSubmit::before {
                        position: absolute;
                        color: #3b82f6;
                        left: 0;
                        top: -14px;
                        right: 0;
                        transition: all ease 300ms;
                        opacity: 0%;
                    }

                    .contactUsSubmit:focus::before {
                        opacity: 100%;
                        transform: translateY(26px);
                    }

                    .submit {
                        transition: all ease 100ms;
                        opacity: 100%;
                    }

                    .contactUsSubmit:focus > .submit {
                        opacity: 0%;
                    }
                `}
            </style>
            <style type="text/css">
                {`
                    .getStartedButton {
                    --color: #0077ff;
                    font-family: inherit;
                    display: inline-block;
                    width: 7em;
                    text-align: centre;
                    align-items: 'center',
                    justify-content: center;
                    height: 2.6em;
                    line-height: 2.5em;
                    overflow: hidden;
                    cursor: pointer;
                    margin: 20px;
                    font-size: 17px;
                    padding: 0px;
                    z-index: 1;
                    background-color: #FFF;
                    color: var(--color);
                    border: 2px solid var(--color);
                    border-radius: 6px;
                    position: relative;
                    }

                    .getStartedButton::before {
                    position: absolute;
                    content: "";
                    background: var(--color);
                    width: 150px;
                    height: 200px;
                    z-index: -1;
                    border-radius: 50%;
                    }

                    .getStartedButton:hover {
                    color: white;
                    }

                    .getStartedButton:before {
                    top: 100%;
                    left: 100%;
                    transition: 0.5s all;
                    }

                    .getStartedButton:hover::before {
                    top: -65px;
                    left: -30px;
                    }
               `} </style>
            <Container className='px-5'>
                <Row className="justify-content-center mb-2">
                    <Col md={12} className="text-center">
                        <h1 className="mb-4 my-5 fustat-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0089EA' }}>Contact Us</h1>
                        <p className="mb-4  manrope-paragraph" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#0089EA' }}>
                            Please fill out the form below and we will get back to you as soon as possible.
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                    <Col md={6}>
                        <img className="w-100 rounded" src="https://res.cloudinary.com/dq3uubb5s/image/upload/v1719088799/kbfmwblqlszm19hqg9yd.png" alt="Contact" />
                    </Col>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label style={{ fontSize: '1.25rem',  margin: '0.2rem', color: '#0089EA' }} className='fustat-heading' >Your Name</Form.Label>
                                <Form.Control
                                    style={{
                                        boxShadow: '0 0 10px rgba(0, 137, 234, 0.3)',
                                        backgroundColor: '#FFFFFF',
                                        color: '#0089EA'
                                    }}
                                    placeholder='Enter your name'
                                    required
                                    type="text"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label style={{ fontSize: '1.25rem',  margin: '0.2rem', color: '#0089EA' }} className='fustat-heading'>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name='email'
                                    placeholder='Enter your email'
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        boxShadow: '0 0 10px rgba(0, 137, 234, 0.3)',
                                        backgroundColor: '#FFFFFF',
                                        color: '#0089EA'
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label style={{ fontSize: '1.25rem', margin: '0.2rem', color: '#0089EA' }}className='fustat-heading'>Message</Form.Label>
                                <Form.Control
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{
                                        boxShadow: '0 0 10px rgba(0, 137, 234, 0.3)',
                                        backgroundColor: '#FFFFFF',
                                        color: '#000000'
                                    }}
                                    placeholder='Enter your message'
                                    required
                                    as="textarea"
                                    rows={6} />
                            </Form.Group>
                            <div className='d-flex justify-content-center'>
                                <button className=' getStartedButton' type="submit">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;
