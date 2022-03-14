import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Analysis from './Analysis';
import {TwitterAnalysis} from './model/TwitterAnalysis';
import * as hooks from '../../hooks/AnalysisHooks';

describe('<Analysis />', () => {

  let mockAnalysis: TwitterAnalysis;
  beforeEach(() => {
    mockAnalysis = new TwitterAnalysis();
    jest.spyOn(hooks, 'useAnalysis').mockImplementation(() => mockAnalysis);
  });

  it('should mount', () => {
    render(<Analysis />);
    
    const analysis = screen.getByTestId('Analysis');

    expect(analysis).toBeInTheDocument();
  });

  it('should render the VerifiedIcon when verified is true', () => {
    mockAnalysis.verified = 1;

    render(<Analysis />);

    expect(screen.getByTestId('VerifiedIcon')).toBeInTheDocument();
  });

  it('should not render the VerifiedIcon when verified is false', () => {
    mockAnalysis.verified = 0;

    render(<Analysis />);

    expect(screen.queryByTestId('VerifiedIcon')).not.toBeInTheDocument();
  });
});