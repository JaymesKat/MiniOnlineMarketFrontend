import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ProductView from '../product-view/ProductView';

function ProductList() {

    let navigate = useNavigate();
    function showProduct(product) { 
        navigate('/products/'+ product.id)
    }

    let [listProducts, setListProducts] = useState([
        {
            title: "Product 1",
            description: "This is a product"
        },
        {
            title: "Product 2",
            description: "This is a product"
        },
        {
            title: "Product 3",
            description: "This is a product"
        },
        {
            title: "Product 4",
            description: "This is a product"
        }
    ]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/products').then(res => {
            setListProducts(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <Container>
            {/* <Row className="g-4">
                <Col> */}
            <CardGroup className="d-flex">
                {
                    listProducts.map(product => {
                        return (
                            <Card className="m-2">
                                <Card.Img variant="top" src="https://via.placeholder.com/100x100" onClick={() => showProduct(product)}/>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    <Button variant="primary">Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </CardGroup>
            {/* </Col>
            </Row> */}
        </Container>
    )
}

export default ProductList;