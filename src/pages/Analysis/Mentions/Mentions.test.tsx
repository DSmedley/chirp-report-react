import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Mentions from './Mentions';

describe('<Mentions />', () => {
  test('it should mount', () => {
    render(<Mentions />);
    
    const mentions = screen.getByTestId('Mentions');

    expect(mentions).toBeInTheDocument();
  });
});