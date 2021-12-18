import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function ProductView() {
    let params = useParams();
    let [product, setProduct] = useState({});
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/products/' + params.productId,
        {headers: {
            Authorization: "Bearer "+token
        }})
            .then(res => {
                setProduct(res.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/100x100" />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    <p>Code: {product.code}</p>
                    <p>Price: {product.price}</p>
                    <p>Added on: {product.dateCreated}</p>
                    <p>Description: {product.description}</p>
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>

    )
}

export default ProductView;