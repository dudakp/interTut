import React from 'react';
import { Box, Header, Nav, ThemeContext } from 'grommet';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import DarkModeSwitch from '../darkModeSwitch/DarkModeSwitch';
import { NavBarProps } from './NavBar.types';
import If from '../if/If';
import Avatar from '../avatar/Avatar';

const AvatarContainer = styled(Box)`
  margin-right: 2rem;
`;

const NavBar: React.FC<NavBarProps> = ({ boxProps }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <ThemeContext.Extend value={{}}>
      <Header>
        <Box direction='row' align='center' gap='small' />
        <Nav {...boxProps} direction='row' align='center'>
          <AvatarContainer pad='small' direction='row'>
            <If ifTrue={isAuthenticated}>
              <Avatar />
            </If>
            <DarkModeSwitch />
          </AvatarContainer>
        </Nav>
      </Header>
    </ThemeContext.Extend>
  );
};
export default NavBar;
