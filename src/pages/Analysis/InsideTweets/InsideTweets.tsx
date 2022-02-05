import React, { FC } from 'react';
import styles from './InsideTweets.module.css';
import {Card, CardContent, Typography} from "@mui/material";

interface InsideTweetsProps {}

const InsideTweets: FC<InsideTweetsProps> = () => (
  <div className={styles.InsideTweets} data-testid="InsideTweets">
      <Card variant="outlined">
          <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Inside Their Tweets
              </Typography>
              <Typography variant="h5" component="div">
                  stats
              </Typography>
          </CardContent>
      </Card>
  </div>
);

export default InsideTweets;
