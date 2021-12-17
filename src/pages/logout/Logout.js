import {Container, Row, Col} from 'react-bootstrap';
import {useContext, useEffect} from "react";
import AuthServices from "../../services/authservice";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function Logout() {
    const navigate = useNavigate();

    const [authState,setAuthState] = useContext(AuthContext);

    useEffect(() => {
        AuthServices.logout();
        setAuthState({ loggedIn: false, user: null});
        navigate("/login");
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    Logging out....
                </Col>
            </Row>
        </Container>
    )
}

export default Logout;