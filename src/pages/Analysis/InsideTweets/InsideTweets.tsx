import React from 'react';
import {Box, Card, CardContent, Grid, Typography, useTheme} from '@mui/material';
import PercentageChart from './PercentageChart/PercentageChart';
import {RadialBarCustomLayerProps} from '@nivo/radial-bar';

type InsideTweetsProps = {
  totalTweets: number;
  replies: number;
  mentions: number;
  hashtags: number;
  retweets: number;
  links: number;
  media: number;
  retweetCount: number;
  favoriteCount: number;
  favoriteTotal: number;
}

export default function InsideTweets(props: InsideTweetsProps) {

  function CustomLayer(title: string, percent: number) {
    const theme = useTheme();
    return function chartTitleLayer({ center }: RadialBarCustomLayerProps) {
      return (
        <g>
          <g transform={`translate(${center[0]}, ${center[1]-40})`}>
            <text
              textAnchor='middle'
              dominantBaseline='central'
              style={{
                fontSize: 35,
                fontWeight: 800,
                fill: theme.palette.text.primary,
              }}
            >
              {percent}%
            </text>
          </g>
          <g transform={`translate(${center[0]}, ${center[1]})`}>
            <text
              textAnchor='middle'
              dominantBaseline='central'
              style={{
                fontSize: 25,
                fontWeight: 600,
                fill: theme.palette.text.primary,
              }}
            >
              {title}
            </text>
          </g>
        </g>
      );
    };
  }

  const repliesLayer = CustomLayer('Replies', getRepliesPercent(props));
  const mentionsLayer = CustomLayer('@Mentions', getMentionsPercent(props));
  const hashtagsLayer = CustomLayer('Hashtags', getHashtagsPercent(props));
  const retweetsLayer = CustomLayer('Retweets', getRetweetsPercent(props));
  const linksLayer = CustomLayer('Links Included', getLinksPercent(props));
  const mediaLayer = CustomLayer('Media Included', getMediaPercent(props));
  const retweetedLayer = CustomLayer('Retweeted', getRetweetedPercent(props));
  const favoritedLayer = CustomLayer('Favorited', getFavoritedPercent(props));

  return (
    <Box data-testid='InsideTweets' sx={{overflowY: 'clip'}}>
      <Card variant='outlined' sx={{overflow: 'visible'}}>
        <CardContent>
          <Typography sx={{fontSize: 14}} color='text.secondary' gutterBottom>
            Inside Their Tweets
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} sx={{height: '11rem'}}>
              <PercentageChart title='Replies' percentage={getRepliesPercent(props)} customLayer={repliesLayer}/>
            </Grid>
            <Grid item xs={12} sm={3} sx={{height: '11rem'}}>
              <PercentageChart title='@Mentions' percentage={getMentionsPercent(props)} customLayer={mentionsLayer}/>
            </Grid>
            <Grid item xs={12} sm={3} sx={{height: '11rem'}}>
              <PercentageChart title='Hashtags' percentage={getHashtagsPercent(props)} customLayer={hashtagsLayer}/>
            </Grid>
            <Grid item xs={12} sm={3} sx={{height: '11rem'}}>
              <PercentageChart title='Retweets' percentage={getRetweetsPercent(props)} customLayer={retweetsLayer}/>
            </Grid>
            <Grid item xs={12} sm={3} sx={{height: '11rem'}}>
              <PercentageChart title='Links Included' percentage={getLinksPercent(props)} customLayer={linksLayer}/>
            </Grid>
            <Grid item xs={12} sm={3} sx={{height: '11rem'}}>
              <PercentageChart title='Media Included' percentage={getMediaPercent(props)} customLayer={mediaLayer}/>
            </Grid>
            <Grid item xs={12} sm={3} sx={{height: '11rem'}}>
              <PercentageChart title='Retweeted' percentage={getRetweetedPercent(props)} customLayer={retweetedLayer}/>
            </Grid>
            <Grid item xs={12} sm={3} sx={{height: '11rem'}}>
              <PercentageChart title='Favorited' percentage={getFavoritedPercent(props)} customLayer={favoritedLayer}/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export function getRepliesPercent(props: InsideTweetsProps) {
  return props.totalTweets > 0 ? Math.round((props.replies/props.totalTweets)*100) : 0;
}

export function getMentionsPercent(props: InsideTweetsProps) {
  return props.totalTweets > 0 ? Math.round((props.mentions/props.totalTweets)*100) : 0;
}

export function getHashtagsPercent(props: InsideTweetsProps) {
  return props.totalTweets > 0 ? Math.round((props.hashtags/props.totalTweets)*100) : 0;
}

export function getRetweetsPercent(props: InsideTweetsProps) {
  return props.totalTweets > 0 ? Math.round((props.retweets/props.totalTweets)*100) : 0;
}

export function getLinksPercent(props: InsideTweetsProps) {
  return props.totalTweets > 0 ? Math.round((props.links/props.totalTweets)*100) : 0;
}

export function getMediaPercent(props: InsideTweetsProps) {
  return props.totalTweets > 0 ? Math.round((props.media/props.totalTweets)*100) : 0;
}

export function getRetweetedPercent(props: InsideTweetsProps) {
  return props.totalTweets > 0 ? Math.round((props.retweetCount/props.totalTweets)*100) : 0;
}

export function getFavoritedPercent(props: InsideTweetsProps) {
  return (props.totalTweets-props.retweets) > 0 ?
    Math.round((props.favoriteCount/(props.totalTweets-props.retweets))*100) :
    0;
}
