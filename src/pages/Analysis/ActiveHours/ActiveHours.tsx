import React from 'react';
import styles from './ActiveHours.module.css';
import {Card, CardContent, Typography} from '@mui/material';

const ActiveHours = () => (
  <div className={styles.ActiveHours} data-testid="ActiveHours">
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          Active Hours
        </Typography>
        <Typography variant="h5" component="div">
          hours chart
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default ActiveHours;
