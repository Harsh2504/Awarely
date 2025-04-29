import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup, Card } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

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
        <Container className="results-page my-5 mt-5 p-4" style={{ borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.1)', backgroundColor: '#f8f9fa' }}>
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h1>{`<<<<< Results >>>>>`}</h1>
                    <h2>Score: {score} / {quiz.questions.length}</h2>
                    <h3>Your performance was: <span style={{ color: performance === 'Excellent' ? 'green' : performance === 'Average' ? 'orange' : 'red' }}>{performance}</span></h3>
                    <ListGroup className="mt-4">
                        {quiz.questions.map((question, index) => (
                            <Card className="mb-3" key={index} style={{ backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
                                <Card.Body>
                                    <Card.Title>{question.questionText}</Card.Title>
                                    <Card.Text>Your Answer: {answers[index]}</Card.Text>
                                    <Card.Text>Correct Answer: {question.correctAnswer}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </ListGroup>
                    <Button
                        className="mt-4 me-2"
                        onClick={() => navigate(`/quiz`, { state: { subject } })}
                        variant="primary"
                        size="lg"
                        style={{
                            backgroundColor: '#007bff',
                            borderColor: '#007bff',
                            boxShadow: '0 0 5px rgba(0,0,0,0.1)'
                        }}
                    >
                        Retake Quiz
                    </Button>
                    <Button
                        className="mt-4"
                        
                        onClick={() => navigate('/subject')}
                        variant="primary"
                        size="lg"
                        style={{
                            backgroundColor: '#007bff',
                            borderColor: '#007bff',
                            boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                            marginLeft:'12px',
                        }}
                    >
                        Go to Subjects
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default QuizResultPage;
