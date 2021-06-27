import { useOktaAuth } from '@okta/okta-react';

/**
 * returns secured/unsecured route based on auth state
 * use in explanation page witch doesnt require user to be logged in
 */
export default () =>
  useOktaAuth().authState.isAuthenticated
    ? '/explanation'
    : '/explanationFirst';
