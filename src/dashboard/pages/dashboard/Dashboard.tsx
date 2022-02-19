import React from 'react';
import { DashboardProps } from './Dashboard.types';
import Layout from '../../../common/components/layout/Layout';

const Dashboard: React.FC<DashboardProps> = (props) => {
  return <Layout displayBackground={false}>dashboard</Layout>;
};

export default Dashboard;
