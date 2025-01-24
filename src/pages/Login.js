// pages/Login.js
import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
