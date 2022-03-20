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
    const recentName1 = 'firstName';
    const recentName2 = 'secondName';
    const recentScreenName1 = 'firstScreenName';
    const recentScreenName2 = 'secondScreenName';
    const recent1 = new Background(1, 1, recentName1, recentScreenName1);
    const recent2 = new Background(2, 2, recentName2, recentScreenName2);
    mockRecent = [recent1, recent2];

    render(<RecentlyAnalyzed/>);

    const allRecent = screen.getAllByRole('img');
    expect(allRecent.length).toEqual(2);
    expect(allRecent[0]).toHaveAttribute('alt', recentName1);
    expect(allRecent[0]).toHaveAttribute('src', `https://unavatar.io/twitter/${recentScreenName1}`);
    expect(allRecent[1]).toHaveAttribute('alt', recentName2);
    expect(allRecent[1]).toHaveAttribute('src', `https://unavatar.io/twitter/${recentScreenName2}`);
  });
});