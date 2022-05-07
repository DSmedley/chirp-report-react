import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Analysis from './Analysis';
import {UserAnalysis} from './model/UserAnalysis';
import {useAnalysis} from '../../hooks/AnalysisHooks';
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

jest.mock('../../hooks/AnalysisHooks');

describe('<Analysis />', () => {

  let mockAnalysis: UserAnalysis;
  let loading: boolean;
  beforeEach(() => {
    mockAnalysis = new UserAnalysis();
    loading = true;
    (useAnalysis as jest.Mock).mockReturnValue( {analysis: mockAnalysis, loading: loading});
  });

  it('should mount', () => {
    render(<Analysis/>, { wrapper: MemoryRouter });

    const analysis = screen.getByTestId('Analysis');

    expect(analysis).toBeInTheDocument();
  });

  it('should call useAnalysis with username and append the returned id param to the url when the param doesnt exist', () => {
    const history = createBrowserHistory();
    const id = 123;
    const username = 'someUser';
    mockAnalysis.background.id = id;
    history.push(`/analysis/${username}`);
    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path='/analysis/:screenName'
            element={<Analysis/>}/>
        </Routes>
      </HistoryRouter>
    );

    expect(useAnalysis).toHaveBeenCalledWith(username, null);
    expect(history.location.pathname).toEqual(`/analysis/${username}`);
    expect(history.location.search).toEqual(`?id=${id}`);
  });

  it('should call useAnalysis with username and id when the param exists on the url', () => {
    const history = createBrowserHistory();
    const id = 123;
    const username = 'someUser';
    history.push(`/analysis/${username}?id=${id}`);
    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path='/analysis/:screenName'
            element={<Analysis/>}/>
        </Routes>
      </HistoryRouter>
    );

    expect(useAnalysis).toHaveBeenCalledWith(username, id);
    expect(history.location.pathname).toEqual(`/analysis/${username}`);
    expect(history.location.search).toEqual(`?id=${id}`);
  });

  it('should not set the id param if id is 0', () => {
    const history = createBrowserHistory();
    const username = 'someUser';
    mockAnalysis.background.id = 0;
    history.push(`/analysis/${username}`);
    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path='/analysis/:screenName'
            element={<Analysis/>}/>
        </Routes>
      </HistoryRouter>
    );

    expect(history.location.pathname).toEqual(`/analysis/${username}`);
    expect(history.location.search).toEqual('');
  });

  it('should render the VerifiedIcon when verified is true', () => {
    mockAnalysis.background.verified = 1;

    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.getByTestId('VerifiedIcon')).toBeInTheDocument();
  });

  it('should not render the VerifiedIcon when verified is false', () => {
    mockAnalysis.background.verified = 0;

    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.queryByTestId('VerifiedIcon')).not.toBeInTheDocument();
  });

  it('should render the location Chip when location is not empty', () => {
    const location = 'America';
    mockAnalysis.background.location = location;

    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.getByTestId('location')).toBeInTheDocument();
    expect(screen.getByTestId('location').textContent).toEqual(location);
  });

  it('should not render the location Chip when location is empty', () => {
    mockAnalysis.background.location = '';

    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.queryByTestId('location')).not.toBeInTheDocument();
  });

  it('should render the join date Chip when joined is not empty', () => {
    mockAnalysis.background.joined = 'Wed Nov 23 03:44:50 +0000 2011';

    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.getByTestId('joined')).toBeInTheDocument();
    expect(screen.getByTestId('joined').textContent).toEqual('Joined November 2011');
  });

  it('should not render the join date Chip when joined is empty', () => {
    mockAnalysis.background.joined = '';

    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.queryByTestId('joined')).not.toBeInTheDocument();
  });

  it('should render the link Chip when url is not empty', () => {
    const url = 'https://some.url';
    mockAnalysis.background.url = url;

    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.getByTestId('userLink')).toBeInTheDocument();
    expect(screen.getByTestId('userLink').textContent).toEqual(url);
  });

  it('should not render the link Chip when url is empty', () => {
    mockAnalysis.background.url = '';

    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.queryByTestId('userLink')).not.toBeInTheDocument();
  });

  it('should render the timezone Chip when timezone is not empty', () => {
    const timezome = 'Eastern';
    mockAnalysis.background.time_zone = timezome;

    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.getByTestId('timezone')).toBeInTheDocument();
    expect(screen.getByTestId('timezone').textContent).toEqual(timezome);
  });

  it('should not render the timezone Chip when timezone is empty', () => {
    mockAnalysis.background.time_zone = '';

    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.queryByTestId('timezone')).not.toBeInTheDocument();
  });

  it('should render skeletons when loading is true', () => {
    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.getByTestId('nameSkeleton')).toBeInTheDocument();
    expect(screen.getByTestId('screenNameSkeleton')).toBeInTheDocument();
    expect(screen.getByTestId('descriptionSkeleton')).toBeInTheDocument();
    expect(screen.getByTestId('avatarSkeleton')).toBeInTheDocument();
  });

  it('should not render skeletons when loading is false', () => {
    loading = false;
    (useAnalysis as jest.Mock).mockReturnValue( {analysis: mockAnalysis, loading: loading});

    render(<Analysis/>, { wrapper: MemoryRouter });

    expect(screen.queryByTestId('nameSkeleton')).not.toBeInTheDocument();
    expect(screen.queryByTestId('screenNameSkeleton')).not.toBeInTheDocument();
    expect(screen.queryByTestId('descriptionSkeleton')).not.toBeInTheDocument();
    expect(screen.queryByTestId('avatarSkeleton')).not.toBeInTheDocument();
  });
});