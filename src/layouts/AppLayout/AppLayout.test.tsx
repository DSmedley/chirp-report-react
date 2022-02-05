import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppLayout from './AppLayout';

describe('<AppLayout />', () => {
  test('it should mount', () => {
    render(<AppLayout />);
    
    const appLayoout = screen.getByTestId('AppLayout');

    expect(appLayoout).toBeInTheDocument();
  });
});