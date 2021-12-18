import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {incrementQuantity, decrementQuantity, removeCartItem} from "../../redux/cart/cartSlice";


const CartItem = ({item :{ productId, title, description, quantity, inStock }}) => {
    const dispatch = useDispatch();
    console.log("Id: "+productId)
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
                    onClick={() => dispatch(incrementQuantity(productId))}
                    disabled={ quantity == inStock? true : false}>+</Button>

                <Button className="m-2" variant="secondary"
                        onClick={() => dispatch(decrementQuantity(productId))}
                        disabled={ quantity<=1 ? true: false}>-</Button>
                <br/>
                <Button variant="warning" onClick={() => dispatch(removeCartItem(productId))}>Remove</Button>
            </Card.Body>
        </Card>
    );
}

export default CartItem;