import {Container, Row, Col, ListGroup, CardGroup, Card} from 'react-bootstrap';
import {useEffect, useState} from "react";
import axios from "axios";

function SaleList(){
    let [sales, setSales] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get('http://localhost:8080/api/v1/sellers/sales', {
            headers: {
                Authorization: "Bearer "+token
            }
        }).then(res => {
            setSales(res.data);
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <Container>
            <Row className="g-4">
                <Col>
                 <CardGroup className="d-flex flex-wrap">
                     {sales.length > 0 ? (sales.map(sale => (
                        <Card key={sale.id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Sale #${sale.id}</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Title:{sale.product.title}</ListGroup.Item>
                                <ListGroup.Item>Date: {sale.dateCreated} </ListGroup.Item>
                                <ListGroup.Item>status: {sale.status}</ListGroup.Item>
                            </ListGroup>
                            </Card.Body>
                        </Card>
                    ))) :
                         (
                           <div className="text-center">You have not made any sales  </div>
                         )}
                </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default SaleList;