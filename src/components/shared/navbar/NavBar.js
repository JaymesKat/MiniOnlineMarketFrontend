import {Link} from 'react-router-dom';
import {Container, Navbar, Nav, NavItem} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {LinkContainer} from 'react-router-bootstrap';
import {BsFillCartCheckFill, BsFillPersonFill} from 'react-icons/bs';
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext";
import AuthServices from "../../../services/authservice";

function NavBar() {
    const cartItems = useSelector(state => state.cart.cartItems);

    const [authState, setAuthState] = useContext(AuthContext);

    if (authState) {
        console.log(authState);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/"><Navbar.Brand>Mini Market</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    {
                        !authState.loggedIn && (
                            <Nav>
                                <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
                                <LinkContainer to="/register">
                                    <Nav.Link>
                                        Register
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        )
                    }
                    {
                        authState.loggedIn &&
                        <Nav className="d-flex ms-auto order-5">
                            {authState.user.roles.includes(AuthServices.ROLE_BUYER) &&
                                (<LinkContainer to="/cart">
                                    <Nav.Link>
                                        {`(${cartItems.length} items)`}
                                        <BsFillCartCheckFill className="ms-1" size={30}/>
                                    </Nav.Link>
                                </LinkContainer>)
                            }
                            <div style={{"cursor": "pointer"}} className="d-flex">
                                <div className="ms-2 m-auto" style={{"color": "#FFF"}}>{authState.user.username}</div>
                                }
                                <BsFillPersonFill color="white" className="ms-2 mt-2" size={30}/>)
                            </div>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;