import {useEffect, useState} from 'react';
import {TwitterAnalysis} from '../pages/Analysis/model/TwitterAnalysis';
import axios from 'axios';
import {Background} from '../pages/Analysis/model/Background';

export function useAnalysis(screenName: string): {analysis: TwitterAnalysis, loading: boolean} {
  const [analysis, setAnalysis] = useState(new TwitterAnalysis());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CHIRP_API_URL}/analyze?screen_name=${screenName}`)
      .then(res => {
        setAnalysis(res.data);
        setLoading(false);
      });
  }, [screenName]);

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