import { useOktaAuth } from '@okta/okta-react';

const useLogout = () => {
  const { oktaAuth } = useOktaAuth();

  return async () => {
    await oktaAuth.signOut({
      postLogoutRedirectUri: 'http://localhost:3000/',
    });
  };
};

export default useLogout;
