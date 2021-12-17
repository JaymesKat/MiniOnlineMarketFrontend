import {Button, Card, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const ProductCard = ({product, showProduct}) => {
    const navigate = useNavigate();

    const [productIdToDelete, setProductIdToDelete] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editProduct = (id) => {
         navigate("edit/"+id);
     }

    const deleteProduct = (id) => {
        if(!show){
            setProductIdToDelete(id);
            handleShow();
        }
        else {
            const token = localStorage.getItem("token");
            axios.delete('http://localhost:8080/api/v1/sellers/products/'+productIdToDelete, {
                headers: {
                    Authorization: "Bearer "+token
                }
            }).then(res => {
                handleClose();
            }).catch(err=>{
                handleClose();
            })
        }
    }

     return (
         <>
         <Card className="m-2">
             <Card.Img variant="top" src="https://via.placeholder.com/100x100"
                       onClick={() => showProduct(product)}/>
             <Card.Body>
                 <Card.Title>{product.title}</Card.Title>
                 <Card.Text>
                     {product.description}
                 </Card.Text>
                 <Card.Text>
                     {product.price}
                 </Card.Text>
                 <Card.Text>
                     {product.quantity < 1 ? "Out of Stock" : `Items in stock: ${product.quantity}`}
                 </Card.Text>
                 <Button className={"secondary m-2"} variant="secondary" onClick={() => editProduct(product.id)}>Edit</Button>
                 <Button variant="warning" onClick={() => deleteProduct(product.id)}>Delete</Button>
             </Card.Body>
         </Card>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete product?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this product? This cannot be undone!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => deleteProduct(product.id)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    </>
     )
 }

export  default ProductCard;