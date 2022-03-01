import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './Navigation';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('<Navigation />', () => {
  it('should mount', () => {
    render(<Navigation />);
    
    const navigation = screen.getByTestId('Navigation');

    expect(navigation).toBeInTheDocument();
  });
});