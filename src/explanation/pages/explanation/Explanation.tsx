import React from 'react';
import { ExplanationProps } from './Explanation.types';
import Layout from '../../../common/components/layout/Layout';
import useQuery from '../../../common/hooks/useQuery';
import useUserInfo from '../../../common/hooks/useUserInfo';

const Explanation: React.FC<ExplanationProps> = (props) => {
  const queryParams = useQuery();

  const userInfo = useUserInfo();

  return <Layout>{userInfo?.email}</Layout>;
};

export default Explanation;
