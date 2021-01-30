import React, { ReactElement } from 'react';
import { Grommet, Heading, Main, Paragraph } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

export const App = (): ReactElement => {
  return (
    <Grommet theme={theme}>
      <Main pad='large'>
        <Heading>Hello React</Heading>
        <Paragraph>We made something</Paragraph>
      </Main>
    </Grommet>
  );
};

export default App;
