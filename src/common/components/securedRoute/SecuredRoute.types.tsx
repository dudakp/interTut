import { RouteProps } from 'react-router-dom';
import { ComponentType } from 'react';

export interface SecuredRouteProps extends RouteProps {
  component: ComponentType<any>;
}
