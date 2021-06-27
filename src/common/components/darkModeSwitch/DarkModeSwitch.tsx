import React, { useContext, useState } from 'react';
import { Box, CheckBox, ThemeContext } from 'grommet';
import { DarkModeSwitchProps } from './DarkModeSwitch.types';
import { checkBoxTheme } from './DarkModeSwitchStyles';
import { ThemeModeContext } from '../../context/CommonContexts';

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const { darkMode, setDarkMode } = useContext(ThemeModeContext);

  return (
    <Box align='center' pad='small'>
      <ThemeContext.Extend value={checkBoxTheme}>
        <CheckBox
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
            if (setDarkMode) {
              setDarkMode(!darkMode);
            }
          }}
          toggle
        />
      </ThemeContext.Extend>
    </Box>
  );
};

export default DarkModeSwitch;
