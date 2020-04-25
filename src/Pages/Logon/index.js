import React from 'react';
//import { Link } from 'react-router-dom';

import logoImg from '../../Assets/logo.png';
import image from '../../Assets/imageLogon.png'

import './style.css';

export default function Logon() {
  return (
    <div className="logon-container">
    <section className="form">
      <img src={logoImg} alt="Be the hero" />

      <form >
        <h1>Faça seu logon</h1>
        
        <input 
          placeholder="Sua ID"
          //value={id}
          //onChange = {e => setId(e.target.value)} 
          />
          <input
          className="input-password"
          placeholder="Sua Senha"
          type="password"
          //value={password}
          //onChange = {e => setPassword(e.target.value)} 
          />
        <button type="submit" className="button">Entrar</button>        
      </form>
    </section>
    <img src={image} alt="winter"/>
  </div>
  );
}
