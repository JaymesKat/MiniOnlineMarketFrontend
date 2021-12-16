import {Button, Card} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/cart/cartSlice";

const ProductCard = ({product, showProduct}) => {
     const dispatch = useDispatch();

     const addToCart = ({id, title, description}) => {
         const cartItem = {
             productId: id,
             title,
             quantity: 1,
             inStock: product.quantity,
             description
         }
         dispatch(addCartItem(cartItem));
     }

     return (
         <Card className="m-2">
             <Card.Img variant="top" src="https://via.placeholder.com/100x100"
                       onClick={() => showProduct(product)}/>
             <Card.Body>
                 <Card.Title>{product.title}</Card.Title>
                 <Card.Text>
                     {product.description}
                 </Card.Text>
                 <Card.Text>
                     $ {product.price}
                 </Card.Text>
                 <Card.Text>
                     {product.quantity < 1 ? "Out of Stock" : `Items in stock: ${product.quantity}`}
                 </Card.Text>
                 <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
             </Card.Body>
         </Card>
     )
 }

export  default ProductCard;