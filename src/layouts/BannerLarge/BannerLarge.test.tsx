import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BannerLarge from './BannerLarge';

describe('<BannerLarge />', () => {
  test('it should mount', () => {
    render(<BannerLarge />);
    
    const bannerLarge = screen.getByTestId('BannerLarge');

    expect(bannerLarge).toBeInTheDocument();
  });
});