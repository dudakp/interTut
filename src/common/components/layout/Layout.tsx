import React from 'react';
import { Box, ResponsiveContext } from 'grommet';
import { LayoutProps } from './Layout.types';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import { StyledGrid, StyledMainBox } from './LayoutStyles';
import useOnPath from '../../hooks/useOnPath';
import If from '../if/If';

const Layout: React.FC<LayoutProps> = ({
  navbarProps,
  footerProps,
  mainMarginLeft,
  displayBackground = true,
  children,
}) => {
  const size = React.useContext(ResponsiveContext);

  const learning = useOnPath('explanation') && displayBackground;

  return (
    <StyledGrid
      size={size}
      displayBackground={learning}
      fill
      rows={['auto', 'flex', 'auto']}
      columns={['auto', 'flex']}
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'main', start: [1, 1], end: [1, 1] },
        { name: 'footer', start: [0, 2], end: [1, 2] },
      ]}
    >
      <Box gridArea='header'>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <NavBar {...navbarProps} />
      </Box>

      <StyledMainBox pad='large' gridArea='main' marginLeft={mainMarginLeft}>
        {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
        {children}
      </StyledMainBox>
      <If ifTrue={false}>
        <Box gridArea='footer'>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Footer {...footerProps} />
        </Box>
      </If>
    </StyledGrid>
  );
};

export default Layout;
