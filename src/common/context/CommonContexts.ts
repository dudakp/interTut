import { createContext } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const ThemeModeContext = createContext<{
  darkMode?: boolean;
  setDarkMode?: (b: boolean) => void;
}>({});
