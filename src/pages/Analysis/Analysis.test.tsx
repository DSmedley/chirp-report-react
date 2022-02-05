import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Analysis from './Analysis';

describe('<Analysis />', () => {
  test('it should mount', () => {
    render(<Analysis />);
    
    const analysis = screen.getByTestId('Analysis');

    expect(analysis).toBeInTheDocument();
  });
});