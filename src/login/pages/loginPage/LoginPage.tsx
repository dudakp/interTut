import React from 'react';
import { ResponsiveContext } from 'grommet';
import Layout from '../../../common/components/layout/Layout';
import LoginForm from '../../components/loginForm/LoginForm';

const LoginPage: React.FC<any> = () => {
  const size = React.useContext(ResponsiveContext);

  return (
    <Layout mainMarginLeft={size !== 'small' ? '3rem' : undefined}>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
