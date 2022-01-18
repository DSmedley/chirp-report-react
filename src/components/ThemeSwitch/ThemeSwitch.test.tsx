import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThemeSwitch from './ThemeSwitch';

describe('<ThemeSwitch />', () => {
  test('it should mount', () => {
    render(<ThemeSwitch />);
    
    const themeSwitch = screen.getByTestId('ThemeSwitch');

    expect(themeSwitch).toBeInTheDocument();
  });
});