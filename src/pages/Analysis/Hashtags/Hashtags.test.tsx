import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hashtags from './Hashtags';

describe('<Hashtags />', () => {
  test('it should mount', () => {
    render(<Hashtags />);
    
    const hashtags = screen.getByTestId('Hashtags');

    expect(hashtags).toBeInTheDocument();
  });
});