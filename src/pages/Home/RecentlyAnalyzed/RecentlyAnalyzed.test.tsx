import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecentlyAnalyzed from './RecentlyAnalyzed';

describe('<RecentlyAnalyzed />', () => {
  test('it should mount', () => {
    render(<RecentlyAnalyzed />);
    
    const recentlyAnalyzed = screen.getByTestId('RecentlyAnalyzed');

    expect(recentlyAnalyzed).toBeInTheDocument();
  });
});