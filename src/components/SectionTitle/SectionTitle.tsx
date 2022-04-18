import React from 'react';
import Typography from '@mui/material/Typography';
import {Divider} from '@mui/material';
import Box from '@mui/material/Box';

type SectionTitleProps = {
  title: string;
}

export default function SectionTitle({title}: SectionTitleProps) {
  return (
    <Box
      data-testid='SectionTitle'
      sx={{
        width: '100%',
        textAlign: 'center',
        pb: '2em',
        pt: '2em'
      }}
    >
      <Typography variant='h4' gutterBottom component='div'>
        {title}
      </Typography>
      <Divider sx={{bgcolor: 'primary.light', height: '.25em', width: '4em', margin: 'auto'}}/>
    </Box>
  );
}
