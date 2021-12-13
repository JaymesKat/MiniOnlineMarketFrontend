import {Container, Row, Col, Card, CardGroup} from 'react-bootstrap';

function ProductList(){
    return (
        <Container>
            <Row className="g-4">
            <Col>
                <CardGroup className="d-flex flex-wrap">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Card className="m-2">
                        <Card.Img variant="top" src="https://via.placeholder.com/100x100" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
                </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductList;