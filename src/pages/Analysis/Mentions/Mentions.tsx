import React from 'react';
import styles from './Mentions.module.css';
import {Card, CardContent, Typography} from '@mui/material';

const Mentions = () => (
  <div className={styles.Mentions} data-testid="Mentions">
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          Twitter User Mentions
        </Typography>
        <Typography variant="h5" component="div">
          images
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default Mentions;
