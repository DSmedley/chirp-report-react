import React from 'react';
import {Box, Typography, useTheme} from '@mui/material';
import {ResponsiveBar} from '@nivo/bar';
import {BasicTooltip} from '@nivo/tooltip';

type EmotionsChartProps = {
  anger: number;
  anticipation: number;
  disgust: number;
  fear: number;
  joy: number;
  sadness: number;
  surprise: number;
  trust: number;
}

export default function EmotionsChart(props: EmotionsChartProps) {
  const theme = useTheme();

  const data = [
    {
      'emotionKey': 'Anger',
      'emotion': props.anger,
      'emotionColor': 'hsl(355, 70%, 50%)',
    },
    {
      'emotionKey': 'Anticipation',
      'emotion': props.anticipation,
      'emotionColor': 'hsl(355, 70%, 50%)',
    },
    {
      'emotionKey': 'Disgust',
      'emotion': props.disgust,
      'emotionColor': 'hsl(355, 70%, 50%)',
    },
    {
      'emotionKey': 'Fear',
      'emotion': props.fear,
      'emotionColor': 'hsl(355, 70%, 50%)',
    },
    {
      'emotionKey': 'Joy',
      'emotion': props.joy,
      'emotionColor': 'hsl(355, 70%, 50%)',
    },
    {
      'emotionKey': 'Sadness',
      'emotion': props.sadness,
      'emotionColor': 'hsl(355, 70%, 50%)',
    },
    {
      'emotionKey': 'Surprise',
      'emotion': props.surprise,
      'emotionColor': 'hsl(355, 70%, 50%)',
    },
    {
      'emotionKey': 'Trust',
      'emotion': props.trust,
      'emotionColor': 'hsl(355, 70%, 50%)',
    }
  ];
  return (
    <Box sx={{height: '25rem'}} data-testid='EmotionsChart'>
      <Typography variant='overline' display='block' gutterBottom fontWeight='700' textAlign='center'>
        Individual Emotions
      </Typography>
      <ResponsiveBar
        data={data}
        keys={['emotion']}
        indexBy='emotionKey'
        margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
        colors={{ scheme: 'blues' }}
        colorBy='indexValue'
        borderRadius={3}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              2
            ]
          ]
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Emotion',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Tweets',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        tooltip={({color, indexValue, value}) => (
          <BasicTooltip color={color} id={indexValue} enableChip value={`${value} Tweet(s)`}/>
        )}
        theme={{
          tooltip: {
            container: {
              color: '#000',
            },
          },
          axis: {
            legend: {
              text: {
                fill: theme.palette.text.primary
              }
            },
            ticks: {
              text: {
                fill: theme.palette.text.primary
              },
              line: {
                stroke: theme.palette.text.primary
              }
            }
          }
        }}
        role='application'
        barAriaLabel={function(e){return e.id+': '+e.formattedValue+' in emotion: '+e.indexValue;}}
      />
    </Box>
  );
}
