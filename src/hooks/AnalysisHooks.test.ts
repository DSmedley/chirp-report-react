import {useAnalysis, useRecent} from './AnalysisHooks';
import {renderHook} from '@testing-library/react-hooks';
import {UserAnalysis} from '../pages/Analysis/model/UserAnalysis';
import axios from 'axios';
import {Background} from '../pages/Analysis/model/Background';
import {UserAnalysisRequest} from './model/UserAnalysisRequest';

jest.mock('axios');

describe('AnalysisHooks', () => {
  let mockedAxios: jest.Mocked<typeof axios>;
  beforeEach(() => {
    mockedAxios = axios as jest.Mocked<typeof axios>;
  });

  describe('useAnalysis', () => {
    it('should make a post to api when no id is provided and return the expected UserAnalysis', async() => {
      const screenName = 'someName';
      const expectedRequest = new UserAnalysisRequest(screenName);
      const expectedAnalysis = new UserAnalysis(new Background(5));
      mockedAxios.post.mockResolvedValue({data: expectedAnalysis});
      const { result, waitForNextUpdate  } = renderHook(() => useAnalysis(screenName));

      expect(result.current.analysis).toEqual(new UserAnalysis());
      expect(result.current.loading).toBeTruthy();

      await waitForNextUpdate();

      expect(mockedAxios.post).toHaveBeenCalledWith(
        `${process.env.REACT_APP_CHIRP_API_URL}/analyze`,
        expectedRequest
      );
      expect(result.current.analysis).toEqual(expectedAnalysis);
      expect(result.current.loading).toBeFalsy();
    });
    it('should make a get to api when id is provided and return the expected UserAnalysis', async() => {
      const screenName = 'someName';
      const id = 123;
      const expectedAnalysis = new UserAnalysis(new Background(5));
      mockedAxios.get.mockResolvedValue({data: expectedAnalysis});
      const { result, waitForNextUpdate  } = renderHook(() => useAnalysis(screenName, id));

      expect(result.current.analysis).toEqual(new UserAnalysis());
      expect(result.current.loading).toBeTruthy();

      await waitForNextUpdate();

      expect(mockedAxios.get).toHaveBeenCalledWith(
        `${process.env.REACT_APP_CHIRP_API_URL}/analyze?username=${screenName}&id=${id}`,
      );
      expect(result.current.analysis).toEqual(expectedAnalysis);
      expect(result.current.loading).toBeFalsy();
    });
  });

  describe('useRecent', () => {
    it('should call api and return a list of UserAnalysis', async() => {
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