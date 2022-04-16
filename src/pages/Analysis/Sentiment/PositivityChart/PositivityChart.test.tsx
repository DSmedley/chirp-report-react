import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PositivityChart from './PositivityChart';

describe('<PositivityChart />', () => {
  it('should mount', () => {
    render(<PositivityChart positive={0} neutral={0} negative={0}/>);
    
    const positivityChart = screen.getByTestId('PositivityChart');

    expect(positivityChart).toBeInTheDocument();
  });
});