import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InsideTweets from './InsideTweets';

describe('<InsideTweets />', () => {
  it('should mount', () => {
    render(<InsideTweets />);
    
    const insideTweets = screen.getByTestId('InsideTweets');

    expect(insideTweets).toBeInTheDocument();
  });
});