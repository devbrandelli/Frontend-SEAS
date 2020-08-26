import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from './Pages/Logon'
import Main from './Pages/Main'
import Register from './Pages/Register';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/main"  component={Main} />
        <Route path="/cadastro" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}