import CartItem from "../../../cart-item/CartItem";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <Container fluid>
            <Row className="m-3">
                <Col md={12} className="m-auto mt-3">
                    <h1>Cart</h1>
                </Col>
                <Col className="d-flex flex-fill justify-content-center m-auto mt-1" md={4}>
                    {
                        cartItems.length == 0
                            ?
                            (<div>Your cart is empty.  <Link to="/">Continue Shopping</Link></div>)
                            :
                            cartItems.map(
                                (item, idx) => <CartItem key={idx} item={item}/>
                            )
                    }
                < /Col>
            </Row>
        </Container>
    )
}

export default Cart;