import {Container, Row, Col} from 'react-bootstrap';
import LoginFormView from '../../components/views/login-form-view/LoginFormView';

function Login() {
    return (
        <Container>
            <Row>
                <Col>
                    <LoginFormView />
                </Col>
            </Row>
        </Container>
    )
}

export default Login;