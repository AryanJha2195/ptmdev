import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBarr = () => {
  return (
    <div>
        <Navbar className='fixed-top' bg="light" data-bs-theme="light">
        <Container>
          <img style={{width: '4rem', height: '4rem', borderRadius: '50px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBUxPCkpN7dAMtx7DAJPxoXzUgJ4de0gii8eogEG-&s' alt='PTM'/>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about us">About Us</Nav.Link>
            <Nav.Link href="#insights">Insights</Nav.Link>
            <Nav.Link href="#parent">Parent Portal</Nav.Link>
            <Nav.Link href="#teacher">Teacher Portal</Nav.Link>
            <Nav.Link href="#student">Student Portal</Nav.Link>
          </Nav>
          <Nav className=''>
          <Nav.Link href="#LogIn">Log In</Nav.Link>
          <Button variant="primary">Sign Up</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarr