import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { SecuredRouteProps } from './SecuredRoute.types';

const SecuredRoute: React.FC<SecuredRouteProps> = ({ component, ...args }) => {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <>Loading</>,
      })}
      {...args}
    />
  );
};

export default SecuredRoute;
