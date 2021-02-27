import { css } from 'styled-components';

export const checkboxCheckStyle = css`
  background-color: rgba(108, 99, 255, 0.4);
`;

export const checkBoxStyles = css`
  border: 2px solid white;
  box-shadow: none;
`;

export const knobStyles = css`
  top: 0;
  height: 20px;
  width: 20px;
  border: 2px solid white;
`;

export const checkBoxTheme = {
  checkBox: {
    hover: {
      border: {
        color: undefined,
      },
    },
    toggle: {
      color: {
        light: '#C1BEFF',
        dark: '#37354B',
      },
      background: { light: '#6C63FF' },
      knob: {
        extend: `
        ${knobStyles}`,
      },
      extend: ({ checked }: never): string => `
      ${checkBoxStyles}
      ${checked && checkboxCheckStyle}
      `,
    },
  },
};
