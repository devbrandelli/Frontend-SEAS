import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

export default function RouteWrapper ({
  redirectTo, isPrivate, component: Component, ...rest
}) {
  const authenticated = localStorage.getItem('token');

  if(!authenticated && isPrivate) {
    return <redirectTo to={redirectTo}/>;
  }
   
  return <Route {...rest} render={ props => <Component {...props} />} />
}

RouteWrapper.propTypes = {
  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  redirectTo: '/',
  isPrivate: false,
};