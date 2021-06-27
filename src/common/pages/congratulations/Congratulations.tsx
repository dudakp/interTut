import React from 'react';
import { Heading } from 'grommet';
import { CongratulationsProps } from './Congratulations.types';
import Layout from '../../components/layout/Layout';
import useQuery from '../../hooks/useQuery';

const Congratulations: React.FC<CongratulationsProps> = () => {
  const finishedModule = useQuery('module');

  return (
    <Layout>
      <Heading>Congratulations, you finished {finishedModule} module</Heading>
    </Layout>
  );
};

export default Congratulations;
