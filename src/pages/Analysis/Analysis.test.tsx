import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Analysis from './Analysis';
import {TwitterAnalysis} from './model/TwitterAnalysis';
import {useAnalysis} from '../../hooks/AnalysisHooks';

jest.mock('../../hooks/AnalysisHooks');

jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
  Doughnut: () => null
}));

describe('<Analysis />', () => {

  let mockAnalysis: TwitterAnalysis;
  let loading: boolean;
  beforeEach(() => {
    mockAnalysis = new TwitterAnalysis();
    loading = true;
    (useAnalysis as jest.Mock).mockReturnValue( {analysis: mockAnalysis, loading: loading});
  });

  it('should mount', () => {
    render(<Analysis/>);

    const analysis = screen.getByTestId('Analysis');

    expect(analysis).toBeInTheDocument();
  });

  it('should render the VerifiedIcon when verified is true', () => {
    mockAnalysis.background.verified = 1;

    render(<Analysis/>);

    expect(screen.getByTestId('VerifiedIcon')).toBeInTheDocument();
  });

  it('should not render the VerifiedIcon when verified is false', () => {
    mockAnalysis.background.verified = 0;

    render(<Analysis/>);

    expect(screen.queryByTestId('VerifiedIcon')).not.toBeInTheDocument();
  });

  it('should render the location Chip when location is not empty', () => {
    const location = 'America';
    mockAnalysis.background.location = location;

    render(<Analysis/>);

    expect(screen.getByTestId('location')).toBeInTheDocument();
    expect(screen.getByTestId('location').textContent).toEqual(location);
  });

  it('should not render the location Chip when location is empty', () => {
    mockAnalysis.background.location = '';

    render(<Analysis/>);

    expect(screen.queryByTestId('location')).not.toBeInTheDocument();
  });

  it('should render the join date Chip when joined is not empty', () => {
    mockAnalysis.background.joined = 'Wed Nov 23 03:44:50 +0000 2011';

    render(<Analysis/>);

    expect(screen.getByTestId('joined')).toBeInTheDocument();
    expect(screen.getByTestId('joined').textContent).toEqual('Joined November 2011');
  });

  it('should not render the join date Chip when joined is empty', () => {
    mockAnalysis.background.joined = '';

    render(<Analysis/>);

    expect(screen.queryByTestId('joined')).not.toBeInTheDocument();
  });

  it('should render the link Chip when url is not empty', () => {
    const url = 'https://some.url';
    mockAnalysis.background.url = url;

    render(<Analysis/>);

    expect(screen.getByTestId('userLink')).toBeInTheDocument();
    expect(screen.getByTestId('userLink').textContent).toEqual(url);
  });

  it('should not render the link Chip when url is empty', () => {
    mockAnalysis.background.url = '';

    render(<Analysis/>);

    expect(screen.queryByTestId('userLink')).not.toBeInTheDocument();
  });

  it('should render the timezone Chip when timezone is not empty', () => {
    const timezome = 'Eastern';
    mockAnalysis.background.time_zone = timezome;

    render(<Analysis/>);

    expect(screen.getByTestId('timezone')).toBeInTheDocument();
    expect(screen.getByTestId('timezone').textContent).toEqual(timezome);
  });

  it('should not render the timezone Chip when timezone is empty', () => {
    mockAnalysis.background.time_zone = '';

    render(<Analysis/>);

    expect(screen.queryByTestId('timezone')).not.toBeInTheDocument();
  });

  it('should render skeletons when loading is true', () => {
    render(<Analysis/>);

    expect(screen.getByTestId('nameSkeleton')).toBeInTheDocument();
    expect(screen.getByTestId('screenNameSkeleton')).toBeInTheDocument();
    expect(screen.getByTestId('descriptionSkeleton')).toBeInTheDocument();
    expect(screen.getByTestId('avatarSkeleton')).toBeInTheDocument();
  });

  it('should not render skeletons when loading is false', () => {
    loading = false;
    (useAnalysis as jest.Mock).mockReturnValue( {analysis: mockAnalysis, loading: loading});

    render(<Analysis/>);

    expect(screen.queryByTestId('nameSkeleton')).not.toBeInTheDocument();
    expect(screen.queryByTestId('screenNameSkeleton')).not.toBeInTheDocument();
    expect(screen.queryByTestId('descriptionSkeleton')).not.toBeInTheDocument();
    expect(screen.queryByTestId('avatarSkeleton')).not.toBeInTheDocument();
  });
});