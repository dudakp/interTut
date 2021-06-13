import React, { ReactElement, useState } from 'react';
import { grommet, Grommet, ThemeType } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { Route, Switch, useHistory } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import LandingPage from './intro/pages/landingPage/LandingPage';
import { ThemeModeContext } from './common/context/CommonContexts';
import LoginPage from './login/pages/loginPage/LoginPage';
import Explanation from './explanation/pages/explanation/Explanation';

const theme: ThemeType = {
  global: {
    colors: {
      brand: '#6C63FF',
      'accent-1': '#6C63FF',
      'bg-light': 'white',
      'bg-dark': '#424058',
      background: {
        light: 'bg-light',
        dark: 'bg-dark',
      },
    },
    focus: {
      shadow: {
        size: '0px',
      },
    },
  },
};

const config = {
  issuer: process.env.REACT_APP_ISSUER,
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: `http://${window.location.host}${process.env.REACT_APP_CALLBACK_PATH}`,
  scopes: process.env.REACT_APP_SCOPES?.split(','),
};

const oktaAuth = new OktaAuth(config);

const useRestoreOriginalUri = () => {
  const history = useHistory();
  return async (_oktaAuth: OktaAuth, originalUri: string) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };
};

export const App = (): ReactElement => {
  const [darkMode, setDarkMode] = useState(false);
  const restoreOriginalUri = useRestoreOriginalUri();

  return (
    <Grommet
      themeMode={darkMode ? 'dark' : 'light'}
      theme={deepMerge(grommet, theme)}
      full
    >
      <ThemeModeContext.Provider value={{ darkMode, setDarkMode }}>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/start'>
              <LandingPage />
            </Route>
            <Route path='/begin' component={LoginPage} />
            <Route path='/login/callback' component={LoginCallback} />
            <Route path='/explanationFirst' component={Explanation} />
            <SecureRoute path='/explanation' exact component={Explanation} />
          </Switch>
        </Security>
      </ThemeModeContext.Provider>
    </Grommet>
  );
};

export default App;
