import React from 'react';
import { NavDropdown } from 'react-bootstrap'

import './style.css';

export default function Dropdown() {
    const handleLogoff = () => {
        localStorage.clear();
      }
    return(
        <>
        <NavDropdown title="Menu" id="nav-dropdown" className="nav-dropdown">
        <NavDropdown.Item href="/main">Home</NavDropdown.Item>
        <NavDropdown.Item href="/usuario">Usuarios</NavDropdown.Item>
        <NavDropdown.Item href="#relatorios">Relatorios</NavDropdown.Item>
        <NavDropdown.Item href="/cadastro">Cadastro</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/" onClick={handleLogoff}>Sair</NavDropdown.Item>
        </NavDropdown>
        </>
    )
}