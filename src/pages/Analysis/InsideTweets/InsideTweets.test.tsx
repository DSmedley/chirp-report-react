import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InsideTweets from './InsideTweets';

describe('<InsideTweets />', () => {
  it('should mount', () => {
    render(
      <InsideTweets
        totalTweets={0}
        replies={0}
        mentions={0}
        hashtags={0}
        retweets={0}
        links={0}
        media={0}
        retweetCount={0}
        favoriteCount={0}
        favoriteTotal={0}
      />
    );
    
    const insideTweets = screen.getByTestId('InsideTweets');

    expect(insideTweets).toBeInTheDocument();
  });
});