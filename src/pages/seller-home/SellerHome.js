import {Container, Row, Col, ListGroup} from 'react-bootstrap';
import {Link, Outlet} from "react-router-dom";

function SellerHome() {
    return (
        <Container fluid className="mt-4">
            <Row>
                <Col sm={3}>
                    <ListGroup>
                        <ListGroup.Item><Link to="products">My Products</Link></ListGroup.Item>
                        <ListGroup.Item><Link to="sales">Sales</Link></ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={9}>
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    );
}

export default SellerHome;