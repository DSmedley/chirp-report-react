import React from 'react';
import styles from './Hashtags.module.css';
import {Box, Card, CardContent, Tooltip, Typography} from '@mui/material';
import {Hashtag} from '../model/Hashtag';

type HashtagsProps = {
  hashtags: Hashtag[]
}

export default function Hashtags(props: HashtagsProps) {

  const getHashtags = () => {
    if (props.hashtags.length > 0) {
      return props.hashtags.map((hashtag) => (
        <Tooltip sx={{pr: 2}} title={`Used ${hashtag.occurs} time(s)`} placement="top" arrow key={hashtag.id}>
          <Typography data-testid='hashtag'>#{hashtag.hashtag}</Typography>
        </Tooltip>
      ));
    } else {
      return <Typography data-testid='empty-hashtag'>No Hashtags used</Typography>;
    }
  };

  return (
    <div className={styles.Hashtags} data-testid="Hashtags">
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            Most used Hashtags
          </Typography>
          <Box
            data-testid='hashtag-box'
            sx={{
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            {getHashtags()}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
