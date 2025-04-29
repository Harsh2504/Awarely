import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ConceptIntro = () => {
    useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.state || !location.state.subject) {
            navigate('/login');
        }
    }, [location, navigate]);

    // Ensure component does not render if subject is not present
    if (!location.state || !location.state.subject) {
        return null;
    }

    const { subject } = location.state;

    const backgroundImage = subject.imageUrl;

    return (
        <>
            <style type="text/css">
                {`
                    .open-sans {
                        font-family: "Open Sans", sans-serif;
                        font-optical-sizing: auto;
                        font-weight: 500;
                        font-style: normal;
                    }
                    .concept-box {
                        margin-top: 15px;
                        border: 2px solid #0089EA;
                        border-radius: 10px;
                        color: #000000;
                        display: flex;
                        height: 70px;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>

            <div
                className="concept-intro"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    height: '50vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: 'white',
                }}
            >
                <div
                    className="overlay"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* This is the Title of the Subject */}
                    <Container>
                        <Row className="justify-content-center text-center">
                            <Col md={8}>
                                <h1 className="concept-title" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                                    {subject.name}
                                </h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            {/* This is the introduction about the subject */}
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={10}>
                        <p className="intro-text open-sans" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                            {subject.introText}
                        </p>
                        <h3 className="mt-4" style={{ color: '#0089EA' }}><b>
                            Key Concepts
                        </b>
                        </h3>

                        <Row>
                            {subject.keyConcepts.map((concept, index) => (
                                <Col key={index} md={4} style={{ color: '#0089EA' }}>
                                    <div className='concept-box'>
                                        <p className='my-3'>{concept}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="text-center my-5">
                <Button style={{ marginBottom: '30px' }} variant="primary" size="lg" onClick={() => navigate(`/quiz`, { state: { subject } })}>
                    Start The Quiz →
                </Button>
            </div>
        </>
    );
};

export default ConceptIntro;
