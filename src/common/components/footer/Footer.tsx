import React from 'react';
import { Anchor, Box, Text } from 'grommet';
import { FooterProps } from './Footer.types';

// eslint-disable-next-line react/prop-types
const Footer: React.FC<FooterProps> = () => {
  return (
    <Box direction='column' pad='large'>
      <Box direction='row' gap='medium'>
        {['about', 'twitter', 'license'].map((item: string) => (
          <Anchor
            color={{ light: 'text', dark: 'white' }}
            href='#'
            label={item}
          />
        ))}
      </Box>
      <Box direction='row'>
        <Text size='xsmall'>@ 2021 - Pavol Dudak - All rights reserved</Text>
      </Box>
    </Box>
  );
};

export default Footer;
