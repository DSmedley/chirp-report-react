import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionTitle from './SectionTitle';

// describe('<SectionTitle />', () => {
//   test('it should mount', () => {
//     render(<SectionTitle />);
//
//     const sectionTitle = screen.getByTestId('SectionTitle');
//
//     expect(sectionTitle).toBeInTheDocument();
//   });
// });