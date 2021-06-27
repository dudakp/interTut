import React from 'react';
import { Box, Button, Header, Nav, Text, ThemeContext } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import styled from 'styled-components';
import DarkModeSwitch from '../darkModeSwitch/DarkModeSwitch';
import { NavBarProps } from './NavBar.types';
import useOnPath from '../../hooks/useOnPath';
import If from '../if/If';
import Avatar from '../avatar/Avatar';

const AvatarContainer = styled(Box)`
  margin-right: 2rem;
`;

// eslint-disable-next-line react/prop-types
const NavBar: React.FC<NavBarProps> = ({ boxProps }) => {
  const history = useHistory();

  const learning = useOnPath();

  const { authState } = useOktaAuth();

  return (
    <ThemeContext.Extend value={{}}>
      <Header>
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
        </Box>
        {/* eslint-disable-next-line react/prop-types,react/jsx-props-no-spreading */}
        <Nav {...boxProps} direction='row-reverse'>
          <If ifTrue={authState.isAuthenticated}>
            <AvatarContainer pad='small' direction='row'>
              <Avatar />
            </AvatarContainer>
          </If>
          <If ifTrue={!authState.isAuthenticated}>
            <DarkModeSwitch />
          </If>
        </Nav>
      </Header>
    </ThemeContext.Extend>
  );
};
export default NavBar;
