import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup, Card } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import { GaugeComponent } from 'react-gauge-component';

const QuizResultPage = () => {
    useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const { subject, quiz, answers } = location.state;

    const calculateScore = () => {
        let score = 0;
        quiz.questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) {
                score++;
            }
        });
        return score;
    };

    const score = calculateScore();

    const calculatePerformance = () => {
        const percentage = (score / quiz.questions.length) * 100;
        if (percentage >= 80) return 'Excellent';
        if (percentage >= 50) return 'Average';
        return 'Poor';
    };

    const performance = calculatePerformance();

    return (
        <Container
            className="results-page my-5 p-4"
            style={{
                borderRadius: '20px',
                boxShadow: '',
                backgroundColor: '#ffffff',
                maxWidth: '900px',
                margin: 'auto',
                padding: '50px',
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <Row className="justify-content-center">
                <Col md={10} className="text-center">
                    <h1
                        style={{
                            fontSize: '3rem',
                            fontWeight: '800',
                            color: '#2c3e50',
                            marginBottom: '30px',
                        }}
                    >
                        🎉 Quiz Results
                    </h1>
                    <div style={{ marginBottom: '30px' }}>
            <GaugeComponent
                type="semicircle"
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    margin: 'auto',
                }}
                arc={{
                    colorArray: ['#e74c3c', '#f1c40f', '#2ecc71'],
                    subArcs: [
                        { limit: 40 }, // Red (Low)
                        { limit: 70 }, // Yellow (Mid)
                        {},            // Green (High)
                    ],
                    padding: 0.02,
                    width: 0.2,
                }}
                pointer={{
                    type: 'blob',
                    animationDelay: 0,
                    color: '#34495e'
                }}
                labels={{
                    valueLabel: {
                        formatTextValue: (val) => `${val} / ${quiz.questions.length}`,
                        style: {
                            fontSize: '1.5rem',
                            fill: '#2c3e50',
                            fontWeight: '600',
                        }
                    }
                }}
                value={(score / quiz.questions.length) * 100}
                minValue={0}
                maxValue={100}
            />
        </div>
        <h2
            style={{
                fontSize: '2.2rem',
                color: '#1abc9c',
                marginBottom: '25px',
            }}
        >
            You Scored: {score} / {quiz.questions.length}
        </h2>

        <h3
            style={{
                fontSize: '1.8rem',
                marginBottom: '40px',
                color:
                    performance === 'Excellent'
                        ? '#2ecc71'
                        : performance === 'Average'
                        ? '#f39c12'
                        : '#e74c3c',
            }}
        >
            Performance: {performance}
        </h3>
                    <ListGroup className="mt-4">
                        {quiz.questions.map((question, index) => (
                            <Card
                                className="mb-4"
                                key={index}
                                style={{
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '15px',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                    overflow: 'hidden',
                                }}
                            >
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            fontSize: '1.4rem',
                                            fontWeight: '700',
                                            color: '#34495e',
                                        }}
                                    >
                                        {index + 1}. {question.questionText}
                                    </Card.Title>
                                    <Card.Text
                                        style={{
                                            fontSize: '1.1rem',
                                            color: '#7f8c8d',
                                            marginTop: '15px',
                                        }}
                                    >
                                        <strong>Your Answer:</strong>{' '}
                                        <span
                                            style={{
                                                color:
                                                    question.correctAnswer === answers[index]
                                                        ? '#2ecc71'
                                                        : '#e74c3c',
                                                fontWeight: '600',
                                            }}
                                        >
                                            {answers[index]}
                                        </span>
                                    </Card.Text>
                                    <Card.Text
                                        style={{
                                            fontSize: '1.1rem',
                                            color: '#7f8c8d',
                                        }}
                                    >
                                        <strong>Correct Answer:</strong>{' '}
                                        <span style={{ fontWeight: '600' }}>
                                            {question.correctAnswer}
                                        </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </ListGroup>
                    <div className="mt-5">
                        <Button
                            onClick={() => navigate(`/quiz`, { state: { subject } })}
                            variant="primary"
                            size="lg"
                            style={{
                                backgroundColor: '#1abc9c',
                                borderColor: '#1abc9c',
                                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                                padding: '15px 30px',
                                fontSize: '1.3rem',
                                marginRight: '20px',
                                borderRadius: '10px',
                            }}
                        >
                            Retake Quiz
                        </Button>
                        <Button
                            onClick={() => navigate('/subject')}
                            variant="secondary"
                            size="lg"
                            style={{
                                backgroundColor: '#bdc3c7',
                                borderColor: '#bdc3c7',
                                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                                padding: '15px 30px',
                                fontSize: '1.3rem',
                                borderRadius: '10px',
                            }}
                        >
                            Explore Subjects
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default QuizResultPage;
