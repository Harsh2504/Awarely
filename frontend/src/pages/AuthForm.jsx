import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AuthForm = () => {
    let navigate = useNavigate();
    const [key, setKey] = useState('login');
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
    const [signupFormData, setSignupFormData] = useState({ name: '', email: '', password: '' });

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://redhouseedtech.onrender.com/api/auth/login', {
            // const response = await fetch('http://localhost:1313/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: loginFormData.email,
                    password: loginFormData.password
                })
            });
            const data = await response.json();
    
            if (!data.success) {
                toast.error('Invalid login credentials!');
                return;
            }
    
            toast.success(`Welcome, ${data.name}!`);
            localStorage.setItem('token', data.token);
            localStorage.setItem('name', data.name);
            navigate("/");
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Login failed. Please try again.');
        }
    };

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const toastId = toast.loading('Creating your account...');
    
            const response = await fetch('https://redhouseedtech.onrender.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: signupFormData.name,
                    email: signupFormData.email,
                    password: signupFormData.password
                })
            });
    
            const data = await response.json();
            console.log('Signup response:', data);
            // if (response.status !== 201 || !data.success) {
            //     toast.dismiss(toastId);
            //     toast.error(data.message || 'Signup failed. Please try again.');
            //     return;
            // }
    
            toast.success('Account created successfully!', { id: toastId });
            setKey('login');
        } catch (error) {
            console.error('Signup error:', error);
            toast.error('Something went wrong. Please try again.');
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
        <Container className="my-5">
        <Row className="justify-content-center">
            <Col md={6}>
                <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
                    <Nav variant="tabs" className="justify-content-center mb-4 border-bottom">
                        <Nav.Item>
                            <Nav.Link eventKey="login" className="px-4 py-2 text-uppercase fw-semibold">
                                Login
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="signup" className="px-4 py-2 text-uppercase fw-semibold">
                                Signup
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
    
                    <Tab.Content className="p-4 shadow-sm rounded border bg-white">
                        {/* Login Tab */}
                        <Tab.Pane eventKey="login">
                            <h4 className="text-center mb-4 text-secondary">Welcome Back</h4>
                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label className="text-muted">Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="example@domain.com"
                                        value={loginFormData.email}
                                        onChange={handleLoginInputChange}
                                        required
                                        className="rounded-md"
                                    />
                                </Form.Group>
    
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label className="text-muted">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        value={loginFormData.password}
                                        onChange={handleLoginInputChange}
                                        required
                                        className="rounded-md"
                                    />
                                </Form.Group>
    
                                <Button
                                    variant="dark"
                                    type="submit"
                                    className="w-100 rounded-md"
                                >
                                    Login
                                </Button>
                            </Form>
                        </Tab.Pane>
    
                        {/* Signup Tab */}
                        <Tab.Pane eventKey="signup">
                            <h4 className="text-center mb-4 text-secondary">Create Account</h4>
                            <Form onSubmit={handleSignup}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label className="text-muted">Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={signupFormData.name}
                                        onChange={handleSignupInputChange}
                                        required
                                        className="rounded-md"
                                    />
                                </Form.Group>
    
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label className="text-muted">Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="example@domain.com"
                                        value={signupFormData.email}
                                        onChange={handleSignupInputChange}
                                        required
                                        className="rounded-md"
                                    />
                                </Form.Group>
    
                                <Form.Group className="mb-4" controlId="password">
                                    <Form.Label className="text-muted">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Minimum 5 characters"
                                        value={signupFormData.password}
                                        onChange={handleSignupInputChange}
                                        required
                                        className="rounded-md"
                                    />
                                </Form.Group>
    
                                <Button
                                    variant="success"
                                    type="submit"
                                    className="w-100 rounded-md"
                                >
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
