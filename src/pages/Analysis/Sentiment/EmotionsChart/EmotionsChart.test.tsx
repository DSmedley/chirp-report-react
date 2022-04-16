import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmotionsChart from './EmotionsChart';

describe('<EmotionsChart />', () => {
  it('should mount', () => {
    render(<EmotionsChart anger={1} anticipation={2} disgust={3} fear={4} joy={5} sadness={6} surprise={7} trust={8}/>);

    const emotionsChart = screen.getByTestId('EmotionsChart');

    expect(emotionsChart).toBeInTheDocument();
  });
});