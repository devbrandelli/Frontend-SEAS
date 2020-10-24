import React from 'react';
import Routes from './Routes/index';
import { BrowserRouter } from 'react-router-dom'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
