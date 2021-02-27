import React, { ReactElement, useState } from 'react';
import { grommet, Grommet, ThemeType } from 'grommet';
import { deepMerge } from 'grommet/utils';
import LandingPage from './intro/pages/landingPage/LandingPage';
import { ThemeModeContext } from './common/context/CommonContexts';

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

export const App = (): ReactElement => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Grommet
      themeMode={darkMode ? 'dark' : 'light'}
      theme={deepMerge(grommet, theme)}
      full
    >
      <ThemeModeContext.Provider value={{ darkMode, setDarkMode }}>
        <LandingPage />
      </ThemeModeContext.Provider>
    </Grommet>
  );
};

export default App;
