import { Form, FloatingLabel, Container, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';


function RegisterFormView(){

  return(
      <Container>
        <Row className="m-3">
            <Col md={6} className="m-auto mt-5">
            <Form>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formGroupFirstname">
                  <Form.Label>First name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter firstname" />
                </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGroupLastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter lastname" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                  type="text" 
                  placeholder="Enter username" />
            </Form.Group>
            <Form.Group  as={Col}  className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group  as={Col} className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                  type="password" 
                  placeholder="Password" />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formGroupPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="confirmPassword" />
            </Form.Group>
            </Row>
            <Row className="mb-6">
            <Form.Group as={Col} className="mb-3" controlId="formGroupPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control 
                  type="number" 
                  placeholder="Enter phone number" />
            </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} className="mb-3" controlId="formGroupRole">
                <Form.Select aria-label="Select role" >
                  <option>Select Role (Buyer or Seller)</option>
                  <option value="BUYER">buyer</option>
                  <option value="SELLER">seller</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button variant="primary">Submit</Button>
        </Form>
      </Col>
    </Row>
    </Container>
  );
}

export default RegisterFormView;

