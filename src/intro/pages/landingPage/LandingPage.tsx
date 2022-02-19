import React, { useEffect } from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { LandingPageProps } from './LandingPage.types';
import { StyledButton, StyledHeading, StyledList } from './LandingPage.styles';
import Layout from '../../../common/components/layout/Layout';
import useLocalStorageState from '../../../common/hooks/useLocalStorageState';

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
  const [startedModules] = useLocalStorageState<string[]>('startedModules', []);
  const [finishedModules] = useLocalStorageState<string[]>(
    'finishedModules',
    []
  );

  const { isAuthenticated } = useAuth0();
  const history = useHistory();
  const size = React.useContext(ResponsiveContext);

  useEffect(() => {
    if (isAuthenticated && startedModules && finishedModules) {
      console.log('reporting modules!');
    }
  }, [startedModules, finishedModules, isAuthenticated]);

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
              onClick={() => history.push('/explanationFirst?id=intro/0_hello')}
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
