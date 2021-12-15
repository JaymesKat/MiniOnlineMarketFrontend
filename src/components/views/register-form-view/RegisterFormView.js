import { Form, Container, Row, Col, Button, Alert } from "react-bootstrap";

import { useState } from "react";

import AuthServices from "../../../services/authservice";
import Validation from "../../../utils/validation";

function RegisterFormView() {
  const [validated, setValidated] = useState(false);
  const [passNotMatch, setPassNotMatch] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowMessage(true);

    if (Validation.formValid(event) && passNotMatch === false) {
      try {
        await AuthServices.login(formInfo);
        setShowSuccess(true);
      } catch (err) {
        console.log(err);
        setShowSuccess(false);
      }
    } else {
      event.stopPropagation();
    }
    setValidated(true);
  };

  const confirmHandler = (event) => {
    if (formInfo.password !== formInfo.confirmPass) {
      setPassNotMatch(true);
    } else {
      setPassNotMatch(false);
    }
    focusHandler(event);
  };
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPass: "",
    phone: "",
    role: "",
  });
  const focusHandler = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Row className="m-3">
        <Col md={6} className="m-auto mt-5">
          {showSuccess && showMessage && (
            <Alert variant="success">login success</Alert>
          )}
          {!showSuccess && showMessage && (
            <Alert variant="danger">User Not Registered</Alert>
          )}
          {!passNotMatch && (
            <Alert variant="danger">Password doesn't match </Alert>
          )}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGroupFirstname"
              >
                <Form.Label>First name</Form.Label>
                <Form.Control
                  onBlur={(event) => focusHandler(event)}
                  name="firstName"
                  type="text"
                  placeholder="Enter firstname"
                  required
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGroupLastname"
              >
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  onBlur={(event) => focusHandler(event)}
                  name="lastName"
                  type="text"
                  placeholder="Enter lastname"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGroupUsername"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onBlur={(event) => focusHandler(event)}
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onBlur={(event) => focusHandler(event)}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGroupPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={(event) => focusHandler(event)}
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGroupPassword"
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={(event) => confirmHandler(event)}
                  name="confirmPass"
                  type="password"
                  placeholder="confirmPassword"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-6">
              <Form.Group as={Col} className="mb-3" controlId="formGroupPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  onBlur={(event) => focusHandler(event)}
                  name="phone"
                  type="number"
                  placeholder="Enter phone number"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} className="mb-3" controlId="formGroupRole">
                <Form.Select
                  onChange={(event) => focusHandler(event)}
                  name="role"
                  aria-label="Select role"
                >
                  <option>Select Role (Buyer or Seller)</option>
                  <option value="BUYER">buyer</option>
                  <option value="SELLER">seller</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button type="submit" variant="primary">
              Submit
            </Button>
            <span></span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterFormView;
