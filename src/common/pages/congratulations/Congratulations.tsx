import React from 'react';
import { Button, Heading } from 'grommet';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { CongratulationsProps } from './Congratulations.types';
import Layout from '../../components/layout/Layout';
import useQuery from '../../hooks/useQuery';
import If from '../../components/if/If';

const Congratulations: React.FC<CongratulationsProps> = () => {
  const finishedModule = useQuery('module');
  const { isAuthenticated } = useAuth0();
  const history = useHistory();

  return (
    <Layout>
      <Heading>Congratulations, you finished {finishedModule} module</Heading>
      <If ifTrue={!isAuthenticated}>
        <Button
          primary
          label='Login to continue!'
          onClick={() => history.push('/begin')}
        />
      </If>
    </Layout>
  );
};

export default Congratulations;
