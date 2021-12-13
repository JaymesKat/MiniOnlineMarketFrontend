import {Container, Row, Col, ListGroup, CardGroup, Card} from 'react-bootstrap';

function OrderList(){
    return (
        <Container>
            <Row className="g-4">
                <Col>
                 <CardGroup className="d-flex flex-wrap">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Order #</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Order Item #1</ListGroup.Item>
                                <ListGroup.Item>Order Item #2</ListGroup.Item>
                                <ListGroup.Item>Order Item #3</ListGroup.Item>
                            </ListGroup>
                            </Card.Body>
                        </Card>
                    ))}
                </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderList;