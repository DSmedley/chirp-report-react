import React from 'react';
import styles from './Sentiment.module.css';
import {Button, Card, CardContent, Grid, Typography} from '@mui/material';
import PositivityChart from './PositivityChart/PositivityChart';
import EmotionsChart from './EmotionsChart/EmotionsChart';

interface SentimentProps {
  neutral: number;
  positive: number;
  negative: number;
  anger: number;
  anticipation: number;
  disgust: number;
  fear: number;
  joy: number;
  sadness: number;
  surprise: number;
  trust: number;
}

export default function Sentiment(props: SentimentProps) {

  return (
    <div className={styles.Sentiment} data-testid="Sentiment">
      <Card variant="outlined" sx={{overflow: 'visible'}}>
        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            Sentiment
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <PositivityChart
                positive={props.positive}
                negative={props.negative}
                neutral={props.neutral}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <EmotionsChart
                anger={props.anger} anticipation={props.anticipation} disgust={props.disgust}
                fear={props.fear} joy={props.joy} sadness={props.sadness} surprise={props.surprise}
                trust={props.trust}
              />
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'right'}}>
              <Button variant="contained">Most Emotional</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
