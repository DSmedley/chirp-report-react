import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('<Home />', () => {
  it('should mount', () => {
    render(<Home />);

    const home = screen.getByTestId('Home');

    expect(home).toBeInTheDocument();
  });
});