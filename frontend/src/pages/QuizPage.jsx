import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, ProgressBar, Form } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const QuizPage = () => {
    useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.state || !location.state.subject) {
            navigate('/login');
        }
    }, [location, navigate]);

    if (!location.state || !location.state.subject) {
        return null;
    }

    const [quiz, setQuiz] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const { subject } = location.state;

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                setQuiz(subject.quizzes[0]);
            } catch (error) {
                console.error('Error fetching quiz:', error);
            }
        };

        fetchQuiz();
    }, [subject]);

    const handleAnswer = (e) => {
        const { value } = e.target;
        setAnswers({
            ...answers,
            [currentQuestionIndex]: value,
        });
    };

    const handleNext = async () => {
        try {
            if (currentQuestionIndex < quiz.questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }
    
                const getUserResponse = await fetch('https://redhouseedtech.onrender.com/api/auth/fetchUser', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': token,
                    }
                });
    
                if (!getUserResponse.ok) {
                    const errorDetails = await getUserResponse.json();
                    console.error('Error fetching user details:', errorDetails);
                    throw new Error('Failed to fetch user details');
                }
    
                const userData = await getUserResponse.json();

                const updateSubjectResponse = await fetch('https://redhouseedtech.onrender.com/api/auth/updateFinishedSubjects', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userData._id,
                        subjectId: subject._id,
                    })
                });
    
                if (!updateSubjectResponse.ok) {
                    const errorDetails = await updateSubjectResponse.json();
                    console.error('Error updating finished subjects:', errorDetails);
                    throw new Error('Failed to update finished subjects');
                }
    
                const updateSubjectData = await updateSubjectResponse.json();
                console.log('Update subject response:', updateSubjectData);
    
                navigate('/quiz-result', { state: { subject, quiz, answers } });
            }
        } catch (error) {
            console.error('Error handling next:', error);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    if (!quiz) {
        return <div>Loading...</div>;
    }

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isAnswerSelected = answers[currentQuestionIndex] !== undefined;

    return (
        <Container
            className="question-page mt-5 my-5"
            style={{
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            }}
        >
            <Row className="justify-content-center">
                <Col md={8}>
                    <ProgressBar
                        now={(currentQuestionIndex / quiz.questions.length) * 100}
                    />
                    <p className="text-center mt-2">
                        Question {currentQuestionIndex + 1} of {quiz.questions.length}
                    </p>
                    <h3 className="mt-4">
                        {currentQuestionIndex + 1}. {currentQuestion.questionText}
                    </h3>
                    <Form className="mt-4">
                        {currentQuestion.answerOptions.map((option, index) => (
                            <Form.Check
                                key={index}
                                type="radio"
                                name="answer"
                                label={option}
                                value={option}
                                checked={answers[currentQuestionIndex] === option}
                                onChange={handleAnswer}
                                style={{ marginBottom: '10px', color: '#000', fontSize: '1.25rem' }} // Increased font size
                            />
                        ))}
                    </Form>
                    <div className="mt-4 d-flex justify-content-between">
                        <Button
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                            style={{ backgroundColor: '#0089EA', borderColor: '#0089EA', color: '#FFF' }}
                        >
                            Previous
                        </Button>
                        <Button
                            onClick={handleNext}
                            disabled={!isAnswerSelected} // Disable the Next button if no answer is selected
                            style={{ backgroundColor: '#0089EA', borderColor: '#0089EA', color: '#FFF' }}
                        >
                            {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Submit'}
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default QuizPage;
