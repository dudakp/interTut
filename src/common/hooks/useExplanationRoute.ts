import { useAuth0 } from '@auth0/auth0-react';

/**
 * returns secured/unsecured route based on auth state
 * use in explanation page witch doesnt require user to be logged in
 */
export default () =>
  useAuth0().isAuthenticated ? '/explanation' : '/explanationFirst';
