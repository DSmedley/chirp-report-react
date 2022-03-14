import {useEffect, useState} from 'react';
import {TwitterAnalysis} from '../pages/Analysis/model/TwitterAnalysis';
import axios from 'axios';

export function useAnalysis(screenName: string): TwitterAnalysis {
  const [analysis, setAnalysis] = useState(new TwitterAnalysis());

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CHIRP_API_URL}/analyze?screen_name=${screenName}`)
      .then(res => {
        setAnalysis(res.data);
      });
  }, [screenName]);

  return analysis;
}