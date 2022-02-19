import React from 'react';
import { render, screen } from '@testing-library/react';
import DarkModeSwitch from './DarkModeSwitch';

it('Component renders', () => {
  const container = render(<DarkModeSwitch />);
  expect(container.container.firstChild).toBeInTheDocument();
});

it('Switch toogle', () => {
  render(<DarkModeSwitch />);

  const checkbox = screen.getByRole('checkbox');
  checkbox.click();
  expect(checkbox).toBeChecked();
  checkbox.click();
  expect(checkbox).not.toBeChecked();
});
