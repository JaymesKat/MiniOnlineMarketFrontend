import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {ProductContext} from "../../../../context/ProductContext";
import ProductCard from "../../../seller-product-card/ProductCard";

function SellerProductList() {

    let navigate = useNavigate();

    const [products, setProducts] = useContext(ProductContext);
    const [loading, setLoading] = useState(true);

    function showProduct(product) {
        navigate('/products/'+ product.id)
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        setLoading(true);
        axios.get('http://localhost:8080/api/v1/sellers/products', {
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
                <Col sm={3}>
                    <Link to={"add"} className={"m-3"}><Button variant={"primary"}>Add Product</Button></Link>
                </Col>
            </Row>
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
                                                    key={product.id} product={product} showProduct={() => showProduct()} />))
                                        }
                                    </CardGroup>) : (<div>There are no products</div>)
                        ) : (<>Loading....</>)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default SellerProductList;