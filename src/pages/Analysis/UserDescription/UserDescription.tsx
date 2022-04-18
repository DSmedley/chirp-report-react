import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

type UserDescriptionProps = {
  description: string;
}

export default function UserDescription({description}: UserDescriptionProps) {
  return (
    <Card data-testid='UserDescription' variant='outlined'>
      <CardContent>
        <Typography sx={{fontSize: 14}} color='text.secondary' gutterBottom>
          Description
        </Typography>
        <Typography variant='h5' component='div'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
