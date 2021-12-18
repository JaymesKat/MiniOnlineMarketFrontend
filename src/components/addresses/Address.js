import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Form, FormText, ListGroup, Row } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

function Address() {
    const [validated, setValidated] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/buyers/112/addresses', {
            headers: {
                Authorization: "Bearer "+token
            }
        }).then(res => {
            setAddresses(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    let [addresses, setAddresses] = useState({
        shippingAddress: {
            street: "", state: "", zip: "", city: ""
        },
        billingAddress: {
            street: "", state: "", zip: "", city: ""
        }
    })

    let navigate = useNavigate();

    const handleBilling = (event) => {
        setAddresses({
            ...addresses,
            billingAddress: {
                ...addresses.billingAddress,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleShipping = (event) => {
        setAddresses({
            ...addresses,
            shippingAddress: {
                ...addresses.shippingAddress,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        console.log(token);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        axios.post('http://localhost:8080/api/v1/buyers/112/addresses', addresses, {
            headers: {
                Authorization: "Bearer " + token
            },
        })
            .then(console.log('Addresses updated successfully !'))
            .catch((message) => { console.log(message) })
        navigate('/');
    };

    return (
        <>
            <Row>
                <Col sm={12}>
                    <ListGroup>
                        <ListGroup.Item><h2>Addresses</h2></ListGroup.Item>
                        <ListGroup.Item>
                        <strong>Shipping address: </strong><br />
                            Street: {addresses.shippingAddress.street} <br />
                            City: {addresses.shippingAddress.city} <br />
                            State: {addresses.shippingAddress.state} <br />
                            Zip: {addresses.shippingAddress.zip}
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <strong> Billing address: </strong><br />
                        Street: {addresses.billingAddress.street} <br />
                        City: {addresses.billingAddress.city} <br />
                        State: {addresses.billingAddress.state} <br />
                        Zip: {addresses.billingAddress.zip}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={9}>
                    <Outlet />
                </Col>
            </Row>
            <br></br>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <FormText>Update Shipping Address</FormText>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="text" placeholder="Street"
                            value={addresses.shippingAddress.street}
                            onChange={handleShipping}
                            name="street" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Street.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City"
                            value={addresses.shippingAddress.city}
                            onChange={(event) => handleShipping(event)}
                            name="city" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State"
                            value={addresses.shippingAddress.state}
                            onChange={(event) => handleShipping(event)}
                            name="state" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip"
                            value={addresses.shippingAddress.zip}
                            onChange={(event) => handleShipping(event)}
                            name="zip" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <br />
                <FormText>Update Billing Address</FormText>

                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="text" placeholder="Street"
                            value={addresses.billingAddress.street}
                            onChange={(event) => handleBilling(event)}
                            name="street" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Street.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City"
                            value={addresses.billingAddress.city}
                            onChange={(event) => handleBilling(event)}
                            name="city" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State"
                            value={addresses.billingAddress.state}
                            onChange={(event) => handleBilling(event)}
                            name="state" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip"
                            value={addresses.billingAddress.zip}
                            onChange={(event) => handleBilling(event)}
                            name="zip" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </>
    );
}

export default Address