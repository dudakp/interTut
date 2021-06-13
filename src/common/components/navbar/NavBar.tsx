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
import { NavBarProps } from './NavBar.types';
import useOnPath from '../../hooks/useOnPath';
import If from '../if/If';

const useLogout = () => {
  const { oktaAuth } = useOktaAuth();

  return async () => {
    await oktaAuth.signOut({
      postLogoutRedirectUri: 'http://localhost:3000/',
    });
  };
};

// eslint-disable-next-line react/prop-types
const NavBar: React.FC<NavBarProps> = ({ boxProps }) => {
  const history = useHistory();

  const learning = useOnPath();

  const { authState } = useOktaAuth();
  const logout = useLogout();

  return (
    <ThemeContext.Extend value={{}}>
      <GHeader>
        <Box direction='row' align='center'>
          <If
            ifTrue={
              !history.location.pathname.includes('/explanation') && learning
            }
          >
            <Button onClick={(e) => history.push('/explanation?id=react')}>
              <Box pad='small' direction='row' align='center' gap='small'>
                <Text>peek under the hood</Text>
              </Box>
            </Button>
          </If>
          <If ifTrue={authState.isAuthenticated}>
            <Button primary onClick={logout} label='logout' />
          </If>
        </Box>
        {/* eslint-disable-next-line react/prop-types,react/jsx-props-no-spreading */}
        <Nav {...boxProps} direction='row-reverse'>
          <DarkModeSwitch />
        </Nav>
      </GHeader>
    </ThemeContext.Extend>
  );
};
export default NavBar;
