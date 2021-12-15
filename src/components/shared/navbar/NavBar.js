import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BsFillCartCheckFill } from 'react-icons/bs';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/"><Navbar.Brand>Mini Market</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
                        <LinkContainer to="/register">
                            <Nav.Link>
                                Register
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav class="d-flex ms-auto order-5">
                        <LinkContainer to="/">
                            <Nav.Link>
                                <BsFillCartCheckFill size={30}/>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;