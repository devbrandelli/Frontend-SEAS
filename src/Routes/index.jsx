import React from 'react';
import { Switch } from 'react-router-dom';

import Logon from '../Pages/Logon'
import Main from '../Pages/Main'
import Register from '../Pages/Register';

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
          <Register/>
        </PrivateRoute>
      </Switch>
  )
} 