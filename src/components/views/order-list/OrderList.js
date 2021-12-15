import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, CardGroup, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function OrderList() {
    let [orders, setOrders] = useState([]);
    let params = useParams();

    useEffect(() => {
        axios.get('http://localhost:8080/order/user/' + params.id)
            .then(res => {
                setOrders(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <Container>
            <Row className="g-4">
                <Col>
                    <CardGroup className="d-flex flex-wrap">{
                        orders.map(order => {
                            return (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Order {order.id}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Order Item #1</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderList;