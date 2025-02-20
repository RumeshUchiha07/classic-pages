import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  // Import useNavigate for redirection

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Initialize navigation

  const handleLogin = (e) => {
    e.preventDefault();  // Prevent default form submission

    // Dummy authentication check (Replace this with an API call)
    if (email === "bava@gmail.com" && password === "password") {
      alert("Login Successful!");
      navigate("/");  // Redirect to home page
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>

      <p className="mt-3">
        Don't have an account? <Button variant="link" onClick={() => navigate("/register")}>Register</Button>
      </p>
    </Container>
  );
};

export default Login;
