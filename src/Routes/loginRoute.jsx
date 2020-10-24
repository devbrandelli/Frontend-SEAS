import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function LoginRoute({children, ...rest }) {
  const authorizated = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
         !authorizated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/main",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}