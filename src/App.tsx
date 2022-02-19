import React, { ReactElement, useEffect, useState } from 'react';
import { grommet, Grommet, ThemeType } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { Route, Switch } from 'react-router-dom';

import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import LandingPage from './intro/pages/landingPage/LandingPage';
import { ThemeModeContext } from './common/context/CommonContexts';
import LoginPage from './login/pages/loginPage/LoginPage';
import Explanation from './explanation/pages/explanation/Explanation';
import Congratulations from './common/pages/congratulations/Congratulations';
import Dashboard from './dashboard/pages/dashboard/Dashboard';
import SecuredRoute from './common/components/securedRoute/SecuredRoute';

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

const config: { domain: string; clientId: string; redirectUri: string } = {
  domain: process.env.REACT_APP_DOMAIN ?? 'missing domain',
  clientId: process.env.REACT_APP_CLIENT_ID ?? 'missing clientId',
  redirectUri: window.location.origin,
};

export const App = (): ReactElement => {
  const [darkMode, setDarkMode] = useState(false);

  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => console.log(user, isLoading), [user, isLoading]);

  return (
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={config.redirectUri}
    >
      <Grommet
        themeMode={darkMode ? 'dark' : 'light'}
        theme={deepMerge(grommet, theme)}
        full
      >
        <ThemeModeContext.Provider value={{ darkMode, setDarkMode }}>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/start' component={LandingPage} />
            <Route path='/begin' component={LoginPage} />
            <Route path='/explanationFirst' component={Explanation} />
            <Route path='/congratulations' component={Congratulations} />
            <SecuredRoute path='/explanation' exact component={Explanation} />
            <SecuredRoute path='/dashboard' exact component={Dashboard} />
          </Switch>
        </ThemeModeContext.Provider>
      </Grommet>
    </Auth0Provider>
  );
};

export default App;
