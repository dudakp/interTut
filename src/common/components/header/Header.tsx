import React from 'react';
import { Nav, ThemeContext } from 'grommet';
import DarkModeSwitch from '../darkModeSwitch/DarkModeSwitch';
import { HeaderProps } from './Header.types';

// eslint-disable-next-line react/prop-types
const Header: React.FC<HeaderProps> = ({ boxProps }) => {
  return (
    <ThemeContext.Extend value={{}}>
      {/* eslint-disable-next-line react/prop-types,react/jsx-props-no-spreading */}
      <Nav {...boxProps} direction='row-reverse'>
        <DarkModeSwitch />
      </Nav>
    </ThemeContext.Extend>
  );
};
export default Header;
