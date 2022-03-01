import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppLayout from './AppLayout';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('<AppLayout />', () => {
  it('should mount', () => {
    render(<AppLayout />);
    
    const appLayoout = screen.getByTestId('AppLayout');

    expect(appLayoout).toBeInTheDocument();
  });
});