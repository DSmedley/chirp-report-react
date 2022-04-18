import React from 'react';
import {Card, CardActionArea, CardMedia} from '@mui/material';


type UserCardProps = {
  screenName: string;
  name: string;
}

export default function UserCard({screenName, name}: UserCardProps) {
  return (
    <Card sx={{maxWidth: 185}} data-testid='UserCard'>
      <CardActionArea>
        <CardMedia
          component='img'
          image={`https://unavatar.io/twitter/${screenName}`}
          alt={name}
        />
      </CardActionArea>
    </Card>
  );
}
