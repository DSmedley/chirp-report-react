import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InfoCard from './InfoCard';

// describe('<InfoCard />', () => {
//   test('it should mount', () => {
//     render(<InfoCard />);
//
//     const infoCard = screen.getByTestId('InfoCard');
//
//     expect(infoCard).toBeInTheDocument();
//   });
// });