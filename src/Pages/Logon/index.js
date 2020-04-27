import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../Assets/logo.png';
import image from '../../Assets/imageLogon.png'

import api from '../../Services/api'

import './style.css';

export default function Logon() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin(e){
    e.preventDefault();
    console.log(process.env.REACT_APP_BASE_ENDPOINT)
    try {
      const response = await api.post("/login", {usuario, senha});

      localStorage.setItem('token',response.data.token);
      localStorage.setItem('usuario', usuario)
      
      history.push('/main');    
    }catch(er){
      alert("Falha no login")
      setSenha('')
      setUsuario('')
    }  
  }
  
  return (
    <div className="logon-container">
    <section className="form">
      <img src={logoImg} alt="Be the hero" />

      <form onSubmit={handleLogin} >
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
    <img src={image} alt="winter"/>
  </div>
  );
}
