import { useOktaAuth } from '@okta/okta-react';
import { useEffect, useState } from 'react';

const useUserInfo = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<{
    email?: string;
    given_name?: string;
    family_name?: string;
  }>({});

  useEffect(() => {
    const getUserInfo = async () => {
      const userClaims = await oktaAuth.getUser().then((info) => info);
      setUserInfo(userClaims);
    };

    if (!authState.isAuthenticated) {
      setUserInfo({});
    } else {
      getUserInfo();
    }
  }, [authState, oktaAuth]);

  return userInfo;
};

export default useUserInfo;
