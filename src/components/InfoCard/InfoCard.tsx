import React, {FC} from 'react';
import styles from './InfoCard.module.css';
import {Paper, SvgIcon} from '@mui/material';
import {SvgIconComponent} from '@mui/icons-material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface InfoCardProps {
  title: string;
  description: string;
  icon: SvgIconComponent;
}

const InfoCard: FC<InfoCardProps> = (props) => (
  <div className={styles.InfoCard} data-testid="InfoCard">
    <Paper
      sx={{
        minHeight: '9.25em',
        display: 'flex',
        p: '1.5em',
      }}
      elevation={3}
    >
      <Paper
        sx={{
          display: 'flex',
          width: '4.25em',
          height: '4.25em',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: '2em',
        }}
      >
        <SvgIcon
          sx={{
            width: '1.5em',
            height: '1.5em'
          }}
          component={props.icon}
          inheritViewBox
        />
      </Paper>
      <Box
        sx={{
          pl: '1em'
        }}
      >
        <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </Box>
    </Paper>
  </div>
);

export default InfoCard;
