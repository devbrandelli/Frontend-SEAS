import React from 'react';
import { Switch } from 'react-router-dom';

import Logon from '../Pages/Logon'
import Main from '../Pages/Main'
import Cadastro from '../Pages/Cadastro';
import Usuario from '../Pages/Usuario'

import PrivateRoute from './privateRoutes'
import LoginRoute from './loginRoute'

export default function Routes(){
  return (
      <Switch>
        <LoginRoute path="/" exact>
          <Logon/>
        </LoginRoute>
        <PrivateRoute path="/main">
          <Main/>
        </PrivateRoute>
        <PrivateRoute path="/cadastro">
          <Cadastro/>
        </PrivateRoute>
        <PrivateRoute path="/usuario">
          <Usuario/>
        </PrivateRoute>
      </Switch>
  )
} 