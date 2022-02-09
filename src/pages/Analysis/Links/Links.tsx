import React from 'react';
import styles from './Links.module.css';
import {Card, CardContent, Typography} from '@mui/material';

const Links = () => (
  <div className={styles.Links} data-testid="Links">
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          URLs Linked
        </Typography>
        <Typography variant="h5" component="div">
          links
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default Links;
