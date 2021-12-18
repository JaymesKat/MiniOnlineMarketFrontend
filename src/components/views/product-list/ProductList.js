import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {ProductContext} from "../../../context/ProductContext";
import ProductView from '../product-view/ProductView';
import ProductCard from "../../product-card/ProductCard";

function ProductList() {

    let navigate = useNavigate();

    const [products, setProducts] = useContext(ProductContext);
    const [loading, setLoading] = useState(true);

    function showProduct(product) { 
        navigate('/products/'+ product.id)
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        setLoading(true);
        axios.get('http://localhost:8080/api/v1/products', {
            headers: {
                Authorization: "Bearer "+token
            }
        }).then(res => {
            setProducts(res.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false)
        })
    }, []);

    return (
        <Container>
            <Row className="g-4">
                <Col>
                    {!loading ?
                        (products.length > 0 ?
                                (
                                    <CardGroup  className="d-flex flex-fill justify-content-start m-auto mt-1 flex-wrap">
                                    {
                                        products.map(
                                            (product) =>  (<ProductCard
                                                className="border" style={{"minWidth": "10rem"}}
                                                key={product.id} product={product} showProduct={() => showProduct(product)} />))
                                    }
                                </CardGroup>) : (<div>There are no products</div>)
                        ) : (<>Loading....</>)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default ProductList;