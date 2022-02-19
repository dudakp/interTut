import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const useUserInfo = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    const getUserInfo = async () => {
      setUserInfo(user);

      if (!isAuthenticated) {
        setUserInfo({});
      } else {
        getUserInfo();
      }
    };
  }, [user, isAuthenticated]);

  return userInfo;
};

export default useUserInfo;
