import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const {user, logOut} = useAuth()

    return (
        <>
  <Navbar className='header_background' bg="danger" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand as={HashLink} to="/home">Pizza Delivery</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      
        <Nav.Link className="text-white" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link className="text-white" as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link className="text-white" as={HashLink} to="/experts">Employee</Nav.Link>
      <Nav.Link className="text-white" as={HashLink} to="/about">About Us</Nav.Link>
      <Nav.Link className="text-white" as={HashLink} to="/addService">New Order</Nav.Link>
      <Nav.Link className="text-white" as={HashLink} to="/manageServices">Delete Order</Nav.Link>
      {user?.email ?
          
          <Button className="text-white bg-danger border-0 mx-2" onClick={logOut} variant="light">LogOut</Button>:
          <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>
          
          }
      
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    <Nav className="">
      
    </Nav>
    </Container>
  </Navbar>

</>
    );
};

export default Header;