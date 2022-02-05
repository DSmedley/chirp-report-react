import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sentiment from './Sentiment';

// describe('<Sentiment />', () => {
//   test('it should mount', () => {
//     render(<Sentiment />);
//
//     const sentiment = screen.getByTestId('Sentiment');
//
//     expect(sentiment).toBeInTheDocument();
//   });
// });