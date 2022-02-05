import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActiveHours from './ActiveHours';

describe('<ActiveHours />', () => {
  test('it should mount', () => {
    render(<ActiveHours />);
    
    const activeHours = screen.getByTestId('ActiveHours');

    expect(activeHours).toBeInTheDocument();
  });
});