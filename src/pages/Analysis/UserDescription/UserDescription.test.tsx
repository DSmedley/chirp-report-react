import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDescription from './UserDescription';

// describe('<UserDescription />', () => {
//   test('it should mount', () => {
//     render(<UserDescription />);
//
//     const userDescription = screen.getByTestId('UserDescription');
//
//     expect(UserDescription).toBeInTheDocument();
//   });
// });