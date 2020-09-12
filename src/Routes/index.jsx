import React from 'react';
import { Switch} from 'react-router-dom';

import Logon from '../Pages/Logon'
import Main from '../Pages/Main'
import Register from '../Pages/Register';

import Route from './routes'

export default function Routes(){
  return (
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/main"  component={Main} isPrivate />
        <Route path="/cadastro" component={Register} isPrivate/>
      </Switch>
  )
}