import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  // Import useNavigate for redirection

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();  // Initialize navigation

  const handleRegister = (e) => {
    e.preventDefault();  // Prevent page reload

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Dummy registration process (Replace this with an API call)
    alert("Registration successful!");
    navigate("/login");  // Redirect to login page after registration
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>
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

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>

      <p className="mt-3">
        Already have an account? <Button variant="link" onClick={() => navigate("/login")}>Login</Button>
      </p>
    </Container>
  );
};

export default Register;
