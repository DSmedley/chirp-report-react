import {useAnalysis, useRecent} from './AnalysisHooks';
import {renderHook} from '@testing-library/react-hooks';
import {TwitterAnalysis} from '../pages/Analysis/model/TwitterAnalysis';
import axios from 'axios';
import {Background} from '../pages/Analysis/model/Background';

jest.mock('axios');

describe('AnalysisHooks', () => {
  let mockedAxios: jest.Mocked<typeof axios>;
  beforeEach(() => {
    mockedAxios = axios as jest.Mocked<typeof axios>;
  });

  describe('useAnalysis', () => {
    it('should call api and return the expected TwitterAnalysis', async() => {
      const screenName = 'someName';
      const analysis = new TwitterAnalysis(new Background(5));
      mockedAxios.get.mockResolvedValue({data: analysis});
      const { result, waitForNextUpdate  } = renderHook(() => useAnalysis(screenName));

      expect(result.current.analysis).toEqual(new TwitterAnalysis());
      expect(result.current.loading).toBeTruthy();

      await waitForNextUpdate();

      expect(mockedAxios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_CHIRP_API_URL}/analyze?screen_name=${screenName}`);
      expect(result.current.analysis).toEqual(analysis);
      expect(result.current.loading).toBeFalsy();
    });
  });

  describe('useRecent', () => {
    it('should call api and return a list of TwitterAnalysis', async() => {
      const recent = [new Background(1), new Background(2)];
      mockedAxios.get.mockResolvedValue({data: recent});
      const { result, waitForNextUpdate  } = renderHook(() => useRecent());

      expect(result.current).toEqual([]);

      await waitForNextUpdate();

      expect(mockedAxios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_CHIRP_API_URL}/analyses`);
      expect(result.current).toEqual(recent);
    });
  });
});