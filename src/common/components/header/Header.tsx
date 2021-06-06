import React from 'react';
import {
  Box,
  Button,
  Header as GHeader,
  Nav,
  Text,
  ThemeContext,
} from 'grommet';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import DarkModeSwitch from '../darkModeSwitch/DarkModeSwitch';
import { HeaderProps } from './Header.types';

const useLogout = () => {
  const { oktaAuth } = useOktaAuth();

  return async () => {
    await oktaAuth.signOut({
      postLogoutRedirectUri: 'http://localhost:3001/',
    });
  };
};

// eslint-disable-next-line react/prop-types
const Header: React.FC<HeaderProps> = ({ boxProps }) => {
  const history = useHistory();
  const { authState } = useOktaAuth();
  const logout = useLogout();

  return (
    <ThemeContext.Extend value={{}}>
      <GHeader>
        <Box direction='row' align='center'>
          {history.location.pathname !== '/explanation' ? (
            <Button onClick={(e) => history.push('/explanation?id=react')}>
              <Box pad='small' direction='row' align='center' gap='small'>
                <Text>peek under the hood</Text>
              </Box>
            </Button>
          ) : (
            ''
          )}
          {authState.isAuthenticated ? (
            <Button onClick={logout}>logout</Button>
          ) : (
            ''
          )}
        </Box>
        {/* eslint-disable-next-line react/prop-types,react/jsx-props-no-spreading */}
        <Nav {...boxProps} direction='row-reverse'>
          <DarkModeSwitch />
        </Nav>
      </GHeader>
    </ThemeContext.Extend>
  );
};
export default Header;
