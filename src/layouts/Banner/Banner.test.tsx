import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Banner from './Banner';

describe('<Banner />', () => {
  it('should mount', () => {
    render(<Banner />);
    
    const banner = screen.getByTestId('Banner');

    expect(banner).toBeInTheDocument();
  });
});