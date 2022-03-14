import React from 'react';
import styles from './RecentlyAnalyzed.module.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import {Card, CardActionArea, CardMedia, Grid} from '@mui/material';
import {useRecent} from '../../../hooks/AnalysisHooks';
import {TwitterAnalysis} from '../../Analysis/model/TwitterAnalysis';

export default function RecentlyAnalyzed() {
  const recent: TwitterAnalysis[] = useRecent();

  return (
    <div className={styles.RecentlyAnalyzed} data-testid="RecentlyAnalyzed">
      <SectionTitle title={'Recently Analyzed'}/>
      <Grid container spacing={2}>
        {recent.map((analysis) => (
          <Grid key={analysis.id} item xs={6} sm={2}>
            <Card sx={{maxWidth: 185}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`https://unavatar.io/twitter/${analysis.screen_name}`}
                  alt={analysis.name}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
