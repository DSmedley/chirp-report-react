import {useEffect, useState} from 'react';
import {UserAnalysis} from '../pages/Analysis/model/UserAnalysis';
import axios from 'axios';
import {Background} from '../pages/Analysis/model/Background';
import {UserAnalysisRequest} from './model/UserAnalysisRequest';

export function useAnalysis(screenName: string, id: number | null = null): {analysis: UserAnalysis, loading: boolean} {
  const [analysis, setAnalysis] = useState(new UserAnalysis());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.REACT_APP_CHIRP_API_URL}/analyze?username=${screenName}&id=${id}`)
        .then(res => {
          setAnalysis(res.data);
          setLoading(false);
        });
    } else {
      axios.post(`${process.env.REACT_APP_CHIRP_API_URL}/analyze`, new UserAnalysisRequest(screenName))
        .then(res => {
          setAnalysis(res.data);
          setLoading(false);
        });
    }
  }, [id, screenName]);

  return {analysis, loading};
}

export function useRecent(): Background[] {
  const [recent, setRecent] = useState<Array<Background>>([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CHIRP_API_URL}/analyses`)
      .then(res => {
        setRecent(res.data);
      });
  }, []);

  return recent;
}