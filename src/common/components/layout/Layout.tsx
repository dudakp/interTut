import React from 'react';
import { Footer as GrommetFooter } from 'grommet/components/Footer';
import { Box, ResponsiveContext } from 'grommet';
import { LayoutProps } from './Layout.types';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import { StyledGrid, StyledMainBox } from './LayoutStyles';
import useOnPath from '../../hooks/useOnPath';

const Layout: React.FC<LayoutProps> = ({
  navbarProps,
  footerProps,
  mainMarginLeft,
  children,
}) => {
  const size = React.useContext(ResponsiveContext);

  const learning = useOnPath('explanation');

  return (
    <StyledGrid
      size={size}
      explanationPage={learning}
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
      <GrommetFooter gridArea='footer'>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Footer {...footerProps} />
      </GrommetFooter>
    </StyledGrid>
  );
};

export default Layout;
