import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, CardGroup, Card } from 'react-bootstrap';

function OrderList() {
    let [orders, setOrders] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get('http://localhost:8080/orders', {
            headers: {
                Authorization: "Bearer "+token
            }
        }).then(res => {
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
                    <CardGroup className="d-flex flex-wrap flex-fill justify-content-start">{
                        orders.map(order =>
                                <Card className="m-4 b-2" style={{ minWidth: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title>Order {order.id}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Number of Items: {order.orderItems.length} </ListGroup.Item>
                                            <ListGroup.Item>Date: { new Date(order.dateCreated).toISOString().substring(0, 10) }</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                        )
                    }
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderList;