
import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import {Link} from  'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '@/Context/Auth.jsx';
import Search from "./Search";


const NavBar = () => {
  const { isAuth, logout, userActual } = useContext(AuthContext);



  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand>E-Commerce Capital</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
            </Nav>
            <Form className="d-flex col-6 mx-auto">
              <Search/>
            </Form>
            <Nav className="me-auto">
            {
              isAuth && userActual.role === 'ADMIN' ? (
                <>
                <Nav.Link as={Link} to='/NewProduct'>Registrar Producto</Nav.Link>
                </>
              ):(<></>)
            }
            {isAuth ? (
              <>
              <Nav.Link as={Link} to='/' onClick={logout}>Logout</Nav.Link>
              <Nav.Link as={Link} to='/Cart'><FontAwesomeIcon icon={faCartShopping} style={{color:'#E74C3C'}}/></Nav.Link>
              <Nav.Link as={Link} to='/MyAccount'><FontAwesomeIcon icon={faUserCircle} style={{color:'#393734'}}/></Nav.Link>
              </>
              ) : (<></>)
            }
            {!isAuth ? (
              <>
              <Nav.Link as={Link} to='/Login'>Login</Nav.Link>
              <Nav.Link as={Link} to='/SignUp'>Register</Nav.Link>
              </>
              ) : (<></>)
            }
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar