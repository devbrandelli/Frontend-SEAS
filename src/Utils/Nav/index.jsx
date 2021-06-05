import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import Dropdown from '../Dropdown';
import './style.css';

export default function Header() {
  const handleLogoff = () => {
    localStorage.clear();
  }
  return (
    <>
      <Navbar variant="dark" className="navbar" justify="true">
        <Navbar.Brand href="#home" >SEAS</Navbar.Brand>
        <Dropdown></Dropdown>
        <Nav className=" nav-comun mr-auto" as="ul">
          <NavItem as="li">
            <Nav.Link href="/main">Home</Nav.Link>
          </NavItem>
          <NavItem as="li">
            <Nav.Link href="/usuario">Usuarios</Nav.Link>
          </NavItem>
          <NavItem as="li">
            <Nav.Link href="#pricing">Relatorios</Nav.Link>
          </NavItem>
          <NavItem as="li">
            <Nav.Link href="/cadastro">Cadastro</Nav.Link>
          </NavItem>
          <NavItem as="li">
            <Nav.Link href="/" onClick={handleLogoff} className="button-logoff">Sair</Nav.Link>
          </NavItem>
        </Nav>        
      </Navbar>
    </>
  );
}
