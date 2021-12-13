import {Container, Row, Col} from 'react-bootstrap';
import RegisterFormView from '../../components/views/register-form-view/RegisterFormView';

function Register() {
    return (
        <Container>
            <Row>
                <Col>
                    <RegisterFormView />
                </Col>
            </Row>
        </Container>
    )
}

export default Register;