import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecentlyAnalyzed from './RecentlyAnalyzed';
import {useRecent} from '../../../hooks/AnalysisHooks';
import {Background} from '../../Analysis/model/Background';

jest.mock('../../../hooks/AnalysisHooks');

describe('<RecentlyAnalyzed />', () => {
  
  let mockRecent: Background[];
  beforeEach(() => {
    mockRecent = [];
    (useRecent as jest.Mock).mockImplementation(() => mockRecent);
  });

  it('should mount', () => {
    render(<RecentlyAnalyzed />);
    
    const recentlyAnalyzed = screen.getByTestId('RecentlyAnalyzed');

    expect(recentlyAnalyzed).toBeInTheDocument();
  });

  it('should render each item in the list returned from useRecent', () => {
    const recent1 = new Background(1, 1, 'firstName', 'firstScreenName');
    const recent2 = new Background(2, 2, 'secondName', 'secondScreenName');
    mockRecent = [recent1, recent2];

    render(<RecentlyAnalyzed/>);

    const allRecent = screen.getAllByTestId('UserCard');
    expect(allRecent.length).toEqual(2);
  });
});