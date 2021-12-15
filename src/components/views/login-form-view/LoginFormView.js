import { Form, Container, Row, Col, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import AuthServices from "../../../services/authservice";
import Validation from "../../../utils/validation";

function LoginFormView() {
  const [validated, setValidated] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowMessage(true);

    if (Validation.formValid(event)) {
      try {
        let response = await AuthServices.login(loginInfo);

        Validation.persistToken(response);
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

  const focusHandler = (event) => {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Row className="m-3">
        <Col md={6} className="m-auto mt-5">
          {showSuccess && showMessage && (
            <Alert
              onClose={() => setShowMessage(false)}
              variant="success"
              dismissible
            >
              login success
            </Alert>
          )}
          {!showSuccess && showMessage && (
            <Alert
              onClose={() => setShowMessage(false)}
              variant="danger"
              dismissible
            >
              Invalid credential
            </Alert>
          )}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginFormView;
