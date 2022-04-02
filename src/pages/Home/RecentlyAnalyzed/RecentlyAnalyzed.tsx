import React from 'react';
import styles from './RecentlyAnalyzed.module.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import {Grid} from '@mui/material';
import {useRecent} from '../../../hooks/AnalysisHooks';
import {Background} from '../../Analysis/model/Background';
import UserCard from '../../../components/UserCard/UserCard';

export default function RecentlyAnalyzed() {
  const recent: Background[] = useRecent();

  return (
    <div className={styles.RecentlyAnalyzed} data-testid="RecentlyAnalyzed">
      <SectionTitle title={'Recently Analyzed'}/>
      <Grid container spacing={2}>
        {recent.map((analysis) => (
          <Grid key={analysis.id} item xs={6} sm={2}>
            <UserCard screenName={analysis.screen_name} name={analysis.name}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
