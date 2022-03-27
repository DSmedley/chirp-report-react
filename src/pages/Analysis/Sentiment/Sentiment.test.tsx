import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sentiment from './Sentiment';

jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
  Doughnut: () => null
}));

describe('<Sentiment />', () => {
  const neutral = 0;
  const positive = 1;
  const negative = 2;
  const anger = 3;
  const anticipation = 4;
  const disgust = 5;
  const fear = 6;
  const joy = 7;
  const sadness = 8;
  const surprise = 9;
  const trust = 10;
  it('should mount', () => {
    render(<Sentiment
      neutral={neutral}
      positive={positive}
      negative={negative}
      anger={anger}
      anticipation={anticipation}
      disgust={disgust}
      fear={fear}
      joy={joy}
      sadness={sadness}
      surprise={surprise}
      trust={trust}
    />);

    const sentiment = screen.getByTestId('Sentiment');

    expect(sentiment).toBeInTheDocument();
  });
});