import React from 'react';
import styles from './Analysis.module.css';
import Moment from 'moment';
import {useParams} from 'react-router-dom';
import {
  Avatar, Box, Button,
  Chip,
  Container, Grid, Link, Skeleton, Stack,
  Typography
} from '@mui/material';
import ActiveHours from './ActiveHours/ActiveHours';
import Mentions from './Mentions/Mentions';
import Hashtags from './Hashtags/Hashtags';
import Links from './Links/Links';
import InsideTweets from './InsideTweets/InsideTweets';
import Sentiment from './Sentiment/Sentiment';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LinkIcon from '@mui/icons-material/Link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';
import {useAnalysis} from '../../hooks/AnalysisHooks';

export default function Analysis() {
  const {screenName} = useParams();
  const {analysis, loading} = useAnalysis(screenName ? screenName : '');

  return (
    <div className={styles.Analysis} data-testid="Analysis">
      <Container>
        <Grid container spacing={2} sx={{mt: '.5rem'}}>
          <Grid item xs={12} md={10}>
            <Typography variant="h4">
              {loading ?
                <Skeleton data-testid='nameSkeleton' width='8rem' /> :
                analysis.background.name}<span>{getVerified(analysis.background.verified)}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {loading ? <Skeleton data-testid='screenNameSkeleton' width='5rem' /> : '@'+analysis.background.screen_name}
            </Typography>
            <Typography variant="subtitle2">
              {loading ? <Skeleton data-testid='descriptionSkeleton' width='90%' /> : analysis.background.description}
            </Typography>
            <Box>
              {getLocation(analysis.background.location)}
              {getJoinDate(analysis.background.joined)}
              {getLink(analysis.background.url)}
              {getTimeZone(analysis.background.time_zone)}
            </Box>
            <Box>
              <Chip label={analysis.background.following + ' Following'} variant="outlined" sx={{mr: 1, mb: 1}}/>
              <Chip label={analysis.background.followers + ' Followers'} variant="outlined" sx={{mr: 1, mb: 1}}/>
              <Chip label={analysis.background.tweets + ' Tweets'} variant="outlined" sx={{mr: 1, mb: 1}}/>
              <Chip label={analysis.background.likes + ' Likes'} variant="outlined" sx={{mr: 1, mb: 1}}/>
            </Box>
            <Box sx={{mt: 2}}>
              <Button sx={{backgroundColor: '#4267B2', '&:hover': {backgroundColor: '#6784C0'}, mr: 1}} size="small"
                variant="contained" startIcon={<FacebookIcon/>}>Share</Button>
              <Button sx={{backgroundColor: '#1D9BF0', '&:hover': {backgroundColor: '#76BCF0'}, mr: 1}} size="small"
                variant="contained" startIcon={<TwitterIcon/>}>Tweet</Button>
              <Button sx={{backgroundColor: '#7D7D7D', '&:hover': {backgroundColor: '#969696'}}} size="small"
                variant="contained" startIcon={<EmailIcon/>}>Email</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              {loading ? (
                <Skeleton
                  variant="circular"
                  sx={{width: '11rem', height: '11rem', float: 'right', maxWidth: '11rem'}}
                  data-testid='avatarSkeleton'
                >
                  <Avatar />
                </Skeleton>
              ) : (
                <Avatar
                  alt={analysis.background.name}
                  src={`https://unavatar.io/twitter/${analysis.background.screen_name}`}
                  sx={{width: '11rem', height: '11rem', float: 'right'}}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <Sentiment
                positive={analysis.background.positive}
                negative={analysis.background.negative}
                neutral={analysis.background.neutral}
                anger={analysis.background.anger}
                anticipation={analysis.background.anticipation}
                disgust={analysis.background.disgust}
                fear={analysis.background.fear}
                joy={analysis.background.joy}
                sadness={analysis.background.sadness}
                surprise={analysis.background.surprise}
                trust={analysis.background.trust}
              />
              <InsideTweets
                totalTweets={analysis.background.total}
                replies={analysis.background.replies}
                mentions={analysis.background.mentions}
                hashtags={analysis.background.hashtags}
                retweets={analysis.background.retweets}
                links={analysis.background.links}
                media={analysis.background.media}
                retweetCount={analysis.background.retweet_count}
                favoriteCount={analysis.background.favorite_count}
                favoriteTotal={analysis.background.favorite_total}
              />
              <Links links={analysis.urls}/>
              <Hashtags hashtags={analysis.hashtags}/>
              <Mentions mentions={analysis.mentions}/>
              <ActiveHours hours={analysis.hours}/>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

function getVerified(verified: number) {
  return verified === 1 && (
    <VerifiedIcon sx={{color: '#1D9BF0'}}/>
  );
}

function getLocation(location: string) {
  return location && (
    <Chip data-testid={'location'} icon={<LocationOnOutlinedIcon/>} label={location} variant="outlined"
      sx={{mr: 1, mb: 1}}/>
  );
}

function getJoinDate(joined: string) {
  return joined && (
    <Chip data-testid={'joined'} icon={<CalendarTodayIcon/>}
      label={'Joined ' + Moment(new Date(joined)).format('MMMM YYYY')} variant="outlined"
      sx={{mr: 1, mb: 1}}/>
  );
}

function getLink(url: string) {
  return url && (
    <Chip
      data-testid={'userLink'}
      icon={<LinkIcon/>}
      label={<Link href={url} rel="noopener" target="_blank">{url}</Link>}
      variant="outlined"
      sx={{mr: 1, mb: 1}}
    />
  );
}

function getTimeZone(timeZone: string) {
  return timeZone && (
    <Chip data-testid={'timezone'} icon={<AccessTimeIcon/>} label={timeZone} variant="outlined"
      sx={{mr: 1, mb: 1}}/>
  );
}
