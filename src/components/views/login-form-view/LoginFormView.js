import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';


function LoginFormView(){

  return(
      <Container>
        <Row className="m-3">
            <Col md={6} className="m-auto mt-5">
                <Form>
                    <Row className="mb-3">
                        <Form.Group  as={Col}  className="mb-3" controlId="formGroupUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username"/>
                        </Form.Group>
                        <Form.Group  as={Col} className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary">Submit</Button>
                    </Row>
                </Form>
            </Col>
        </Row>
    </Container>
  );
}

export default LoginFormView;

