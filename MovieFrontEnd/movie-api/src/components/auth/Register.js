import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import api from '../../api/axiosConfig';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/v1/auth/register', { email, password });
            console.log('Registration successful:', response.data);
            alert('Registration successful!');
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration failed. Try again.');
        }
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h3>Register</h3>
                    <Form onSubmit={handleRegister}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="Full Name"
                                placeholder="Enter Your Name"
                                value={email}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="mobileno">
                            <Form.Label>Mobile.No</Form.Label>
                            <Form.Control
                                type="contact no"
                                placeholder="Mobile No"
                                value={email}
                                onChange={(e) => setmobileno(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        

                        <Button variant="info" type="submit" className="mt-3">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
