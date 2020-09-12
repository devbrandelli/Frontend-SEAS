import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Logon from '../Pages/Logon'
import Main from '../Pages/Main'
import Register from '../Pages/Register';

import PrivateRoute from './routes'

export default function Routes(){
  return (
      <Switch>
        <Route path="/" exact component={Logon} />
        <PrivateRoute path="/main">
          <Main/>
        </PrivateRoute>
        <PrivateRoute path="/cadastro">
          <Register/>
        </PrivateRoute>
      </Switch>
  )
} 