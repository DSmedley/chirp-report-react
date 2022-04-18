import React from 'react';
import {Card, CardContent, Grid, Typography} from '@mui/material';
import UserCard from '../../../components/UserCard/UserCard';
import {Mention} from '../model/Mention';

type MentionsProps = {
  mentions: Mention[]
}

export default function Mentions({mentions}: MentionsProps) {
  return (
    <Card data-testid='Mentions' variant='outlined'>
      <CardContent>
        <Typography sx={{fontSize: 14}} color='text.secondary' gutterBottom>
          Twitter User Mentions
        </Typography>
        <Grid container spacing={2}>
          {mentions.map((mention) => (
            <Grid key={mention.id} item xs={6} sm={2}>
              <UserCard screenName={mention.screen_name} name={`@${mention.screen_name}`}/>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
