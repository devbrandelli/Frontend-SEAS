import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import './style.css';

export default function Header() {
  return (
    <>
      <Navbar variant="dark" className="navbar">
        <Navbar.Brand href="#home" >SEAS</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Usuarios</Nav.Link>
          <Nav.Link href="#pricing">Relatorios</Nav.Link>
        </Nav>        
      </Navbar>
    </>
  );
}
