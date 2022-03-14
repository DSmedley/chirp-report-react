import {useAnalysis} from './AnalysisHooks';
import {renderHook} from '@testing-library/react-hooks';
import {TwitterAnalysis} from '../pages/Analysis/model/TwitterAnalysis';
import axios from 'axios';

jest.mock('axios');

describe('AnalysisHooks', () => {
  let mockedAxios: jest.Mocked<typeof axios>;
  beforeEach(() => {
    mockedAxios = axios as jest.Mocked<typeof axios>;
  });

  describe('useAnalysis', () => {
    it('should call api and set analysis to the response', async() => {
      const screenName = 'someName';
      const analysis = new TwitterAnalysis(5);
      mockedAxios.get.mockResolvedValue({data: analysis});
      const { result, waitForNextUpdate  } = renderHook(() => useAnalysis(screenName));

      expect(result.current).toEqual(new TwitterAnalysis());

      await waitForNextUpdate();

      expect(mockedAxios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_CHIRP_API_URL}/analyze?screen_name=${screenName}`)
      expect(result.current).toEqual(analysis);
    });
  });
});