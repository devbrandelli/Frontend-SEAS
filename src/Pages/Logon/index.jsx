import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../Assets/logo.png';
import image from '../../Assets/imageLogon.png';

import api from '../../Services/api';

import './style.css';

export default function Logon() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin(e){
    e.preventDefault();
    try {
      const response = await api.post("/auth", {usuario, senha});

      localStorage.setItem('token',response.data.token);
      localStorage.setItem('usuario', usuario)
      
      history.push('/cidadao');    
    }catch(er){
      alert("Falha no login")
      setSenha('')
      setUsuario('')
    }  
  }
  
  return (
    <div className="logon-container">
    <section className="form">
      <img src={logoImg} alt="SEAS"/>

      <form onSubmit={handleLogin} className="formLogin">
        <h1>Faça seu logon</h1>
        
        <input 
          placeholder="Sua ID"
          value={usuario}
          onChange = {e => setUsuario(e.target.value)} 
          />
          <input
          className="input-password"
          placeholder="Sua Senha"
          type="password"
          value={senha}
          onChange = {e => setSenha(e.target.value)} 
          />
        <button type="submit" className="button">Entrar</button>        
      </form>
    </section>
    <img src={image} alt="winter" id="image-winter"/>
  </div>
  );
}
