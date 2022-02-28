import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BannerLarge from './BannerLarge';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('<BannerLarge />', () => {
  it('should mount', () => {
    render(<BannerLarge />);
    
    const bannerLarge = screen.getByTestId('BannerLarge');

    expect(bannerLarge).toBeInTheDocument();
  });
});