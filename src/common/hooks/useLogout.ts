import { useAuth0 } from '@auth0/auth0-react';

const useLogout = () => {
  const { logout } = useAuth0();

  return async () => {
    await logout();
  };
};

export default useLogout;
