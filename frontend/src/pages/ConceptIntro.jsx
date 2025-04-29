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
                        height: 80px;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                        background-color: #f9f9f9;
                        position: relative;
                        overflow: hidden;
                    }
                    .concept-box:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    }
                    .concept-box::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(135deg, rgba(0, 137, 234, 0.2), rgba(0, 137, 234, 0.1));
                        z-index: 0;
                        transition: opacity 0.3s ease;
                    }
                    .concept-box:hover::before {
                        opacity: 0.5;
                    }
                    .concept-box p {
                        z-index: 1;
                        font-size: 1.1rem;
                        font-weight: bold;
                        color: #333;
                        margin: 0;
                    }
                    .concept-intro {
                        position: relative;
                        border-radius: 15px;
                        overflow: hidden;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    }
                    .concept-title {
                        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
                    }
                    .intro-text {
                        font-size: 1.2rem;
                        line-height: 1.8;
                        color: #333;
                    }
                    .key-concepts-title {
                        color: #0089EA;
                        font-weight: bold;
                        margin-bottom: 20px;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                    .start-quiz-btn {
                        background-color: #0089EA;
                        border: none;
                        padding: 15px 30px;
                        font-size: 1.2rem;
                        border-radius: 50px;
                        transition: background-color 0.3s ease, transform 0.3s ease;
                    }
                    .start-quiz-btn:hover {
                        background-color: #005bb5;
                        transform: scale(1.05);
                    }
                `}
            </style>

            <div
                className="concept-intro"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    height: '60vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div
                    className="overlay"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        textAlign: 'center',
                    }}
                >
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={8}>
                                <h1 className="concept-title fustat-heading" style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
                                    {subject.name}
                                </h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={10}>
                        <p className="intro-text manrope-paragraph">
                            {subject.introText}
                        </p>
                        <h3 className="key-concepts-title fustat-heading">
                            Key Concepts
                        </h3>

                        <Row>
                            {subject.keyConcepts.map((concept, index) => (
                                <Col key={index} md={4} className="mb-4">
                                    <div className="concept-box">
                                        <p className="my-3 manrope-paragraph">{concept}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

            <div className="text-center my-5">
                <Button
                    className="start-quiz-btn"
                    size="lg"
                    onClick={() => navigate(`/quiz`, { state: { subject } })}
                >
                    Start The Quiz →
                </Button>
            </div>
        </>
    );
};

export default ConceptIntro;
