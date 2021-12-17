import {Container, Row, Col, Alert, Form, Button} from 'react-bootstrap';
import {useEffect, useState} from "react";
import Util from "../../../../utils/util";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function ProductEdit(){
    const params = useParams();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [productInfo, setProductInfo] = useState({
        id: "",
        title: "",
        description: "",
        code: "",
        price: "",
        quantity: "",
        dateCreated: "",
        reviews: []
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (Util.formValid(event)) {
            try {

                const token = localStorage.getItem("token");
                const payload = {...productInfo, dateCreated: (new Date().toISOString())}
                axios.post(`http://localhost:8080/api/v1/sellers/products/`, payload, {
                    headers: {
                        Authorization: "Bearer "+token
                    }})
                    .then(response=>{
                        console.log(response);
                        navigate("/seller-home/products");
                    })
            } catch (err) {
                console.log(err);
                setShowError(false);
            }
        } else {
            event.stopPropagation();
        }
        setValidated(true);
    };

    const focusHandler = (event) => {
        setProductInfo({ ...productInfo, [event.target.name]: event.target.value });
    };

    const [showError, setShowError] = useState(false);

    return (
        <Container>
            <Row>
                <Col sm={10} className="m-auto">
                    {showError && (
                        <Alert
                            onClose={() => setShowError(false)}
                            variant="danger"
                            dismissible
                        >
                            Some product details are missing or incorrect
                        </Alert>
                    )}
                </Col>
                <Col sm ={6} className="mt-2">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="formGroupTitle"
                            >
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    onChange={(event) => focusHandler(event)}
                                    name="title"
                                    label="Title"
                                    type="text"
                                    placeholder="Enter title"
                                    value={productInfo.title}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="formGroupCode"
                            >
                                <Form.Label>Code</Form.Label>
                                <Form.Control
                                    onChange={(event) => focusHandler(event)}
                                    name="code"
                                    type="text"
                                    placeholder="Enter code"
                                    value={productInfo.code}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="formGroupDescription"
                            >
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    as="textarea" rows={3}
                                    onChange={(event) => focusHandler(event)}
                                    name="description"
                                    type="text"
                                    value={productInfo.description}
                                    placeholder="Enter description"
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="formGroupQuantity"
                            >
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    onChange={(event) => focusHandler(event)}
                                    name="quantity"
                                    type="text"
                                    placeholder="Quantity"
                                    value={productInfo.quantity}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="formGroupPrice"
                            >
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    onChange={(event) => focusHandler(event)}
                                    name="price"
                                    type="text"
                                    placeholder="Price"
                                    value={productInfo.price}
                                    required
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-8">
                                <Button type="submit" variant="primary">
                                    Submit
                                </Button>
                            </Form.Group>
                        </Row>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
}

export default ProductEdit;