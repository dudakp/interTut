import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from 'grommet';
import { Github, Google } from 'grommet-icons';
import { useAuth0 } from '@auth0/auth0-react';
import If from '../../../common/components/if/If';

const LoginForm: React.FC<any> = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const login = () => {
    loginWithRedirect();
  };

  return (
    <Card width='medium' background='rgba(108, 99, 255, .65)' elevation='large'>
      <CardHeader pad='medium'>
        <Heading>
          Sign in <br /> to start your <u>journey</u>
        </Heading>
      </CardHeader>
      <CardBody pad='medium'>
        <Text alignSelf='start'>
          everything in this tutorial is free, <br /> you only need to login
          with GitHub or Google account
        </Text>
      </CardBody>
      <If ifTrue={!isAuthenticated}>
        <CardFooter pad='small' justify='center'>
          <Button
            onClick={login}
            icon={<Github size='large' color='plain' />}
            hoverIndicator
          />
          <Button
            onClick={login}
            icon={<Google size='large' color='plain' />}
            hoverIndicator
          />
        </CardFooter>
      </If>
    </Card>
  );
};

export default LoginForm;
