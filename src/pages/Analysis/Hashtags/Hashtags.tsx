import React from 'react';
import styles from './Hashtags.module.css';
import {Card, CardContent, Typography} from '@mui/material';

const Hashtags = () => (
  <div className={styles.Hashtags} data-testid="Hashtags">
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          Most used Hashtags
        </Typography>
        <Typography variant="h5" component="div">
          hashtags
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default Hashtags;
