import React, {FC} from 'react';
import styles from './SectionTitle.module.css';
import Typography from '@mui/material/Typography';
import {Divider} from '@mui/material';
import Box from '@mui/material/Box';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: FC<SectionTitleProps> = (props) => (
  <div className={styles.SectionTitle} data-testid="SectionTitle">
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        pb: '2em',
        pt: '2em'
      }}
    >
      <Typography variant="h4" gutterBottom component="div">
        {props.title}
      </Typography>
      <Divider sx={{bgcolor: 'primary.light', height: '.25em', width: '4em', margin: 'auto'}}/>
    </Box>
  </div>
);

export default SectionTitle;
