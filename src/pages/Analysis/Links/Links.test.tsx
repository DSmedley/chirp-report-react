import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Links from './Links';

describe('<Links />', () => {
  test('it should mount', () => {
    render(<Links />);
    
    const links = screen.getByTestId('Links');

    expect(links).toBeInTheDocument();
  });
});