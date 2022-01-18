import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnalyzeHeader from './AnalyzeHeader';

describe('<AnalyzeHeader />', () => {
  test('it should mount', () => {
    render(<AnalyzeHeader />);
    
    const analyzeHeader = screen.getByTestId('AnalyzeHeader');

    expect(analyzeHeader).toBeInTheDocument();
  });
});