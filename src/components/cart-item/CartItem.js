import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {incrementQuantity, decrementQuantity, removeCartItem} from "../../redux/cart/cartSlice";


const CartItem = ({item :{ id, title, description, quantity, inStock }}) => {
    const dispatch = useDispatch();

    return (
        <Card bg="light" className="m-5">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    { description }
                </Card.Text>
                <Card.Text>
                    Quantity: { quantity }
                </Card.Text>
                <Button className="m-2" variant="secondary"
                    onClick={() => incrementQuantity(id)}
                    disabled={ quantity == inStock? true : false}>+</Button>

                <Button className="m-2" variant="secondary"
                        onClick={() => decrementQuantity(id)}
                        disabled={ quantity<=1 ? true: false}>-</Button>
                <br/>
                <Button variant="warning" onClick={(id) => removeCartItem(id)}>Remove</Button>
            </Card.Body>
        </Card>
    );
}

export default CartItem;