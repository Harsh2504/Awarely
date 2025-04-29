import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    let navigate = useNavigate();
    const [key, setKey] = useState('login');
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
    const [signupFormData, setSignupFormData] = useState({ name: '', email: '', password: '' });

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://redhouseedtech.onrender.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: loginFormData.email, password: loginFormData.password
                })
            });
            const data = await response.json();
            console.log('Login response:', data);
            if (!data.success) {
                alert('Enter valid login credentials')
                return null;
            }
            alert("Login successful.. !");
            localStorage.setItem('token', data.token);
            navigate("/");
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://redhouseedtech.onrender.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: signupFormData.name, email: signupFormData.email, password: signupFormData.password
                })
            });
            const data = await response.json();
            console.log('Signup response:', data);
            alert("Account Registration successful.. !");
            setKey('login');
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    const handleLoginInputChange = (event) => {
        const { id, value } = event.target;
        setLoginFormData({ ...loginFormData, [id]: value });
    };

    const handleSignupInputChange = (event) => {
        const { id, value } = event.target;
        setSignupFormData({ ...signupFormData, [id]: value });
    };

    return (
        <Container className="mt-5 my-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
                        <Nav variant="tabs" className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link eventKey="login">Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="signup">Signup</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {/* Login Tab */}
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="login">
                                <Form onSubmit={handleLogin}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={loginFormData.email}
                                            onChange={handleLoginInputChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password ( Should be of atleast 5 characters )"
                                            value={loginFormData.password}
                                            onChange={handleLoginInputChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" block="true">
                                        Login
                                    </Button>
                                </Form>
                            </Tab.Pane>

                            {/* Signup */}
                            <Tab.Pane eventKey="signup">
                                <Form onSubmit={handleSignup}>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your name"
                                            value={signupFormData.name}
                                            onChange={handleSignupInputChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={signupFormData.email}
                                            onChange={handleSignupInputChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password ( Should be of atleast 5 characters )"
                                            value={signupFormData.password}
                                            onChange={handleSignupInputChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" block="true">
                                        Signup
                                    </Button>
                                </Form>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    );
};

export default AuthForm;
