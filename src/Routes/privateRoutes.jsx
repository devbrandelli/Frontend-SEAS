import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function PrivateRoute({children, ...rest }) {
  const authorizated = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
         authorizated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

// RouteWrapper.propTypes = {
//   redirectTo: PropTypes.string,
//   isPrivate: PropTypes.bool,
//   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
//     .isRequired,
// };

// RouteWrapper.defaultProps = {
//   redirectTo: '/',
//   isPrivate: false,
// };