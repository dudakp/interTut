import React from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';
import { useHistory } from 'react-router-dom';
import { LandingPageProps } from './LandingPage.types';
import { StyledButton, StyledHeading, StyledList } from './LandingPage.styles';
import Layout from '../../../common/components/layout/Layout';

const technologies: string[] = [
  'react',
  'styled-components',
  'recoil.js',
  'typescript',
  'authentification',
  'SSR',
  'monitoring & logging',
  'deployment',
];

const LandingPage: React.FC<LandingPageProps> = () => {
  const size = React.useContext(ResponsiveContext);

  const history = useHistory();

  return (
    <Layout>
      <Grid
        fill
        rows={['auto']}
        columns={['auto', 'auto']}
        gap='small'
        areas={[
          { name: 'headings', start: [0, 0], end: [1, 0] },
          { name: 'list', start: [1, 0], end: [1, 0] },
        ]}
        alignContent='between'
      >
        <Box gridArea='headings'>
          <StyledHeading size='large'>Hello developer,</StyledHeading>
          <StyledHeading size='medium'>
            are you interested how to build me?
          </StyledHeading>
          <Box height='100px' width='300px' fill={size === 'small'}>
            <StyledButton
              primary
              label='learn now'
              onClick={(e) =>
                history.push('/explanationFirst?id=intro/0_hello')
              }
            />
          </Box>
        </Box>
        {size !== 'small' ? (
          <Box gridArea='list'>
            <StyledList data={technologies} alignSelf='end' />
          </Box>
        ) : (
          ''
        )}
      </Grid>
    </Layout>
  );
};

export default LandingPage;
