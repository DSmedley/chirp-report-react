import React from 'react';
import {Box, Card, CardContent, Typography, useTheme} from '@mui/material';
import {Hour} from '../model/Hour';
import {ResponsiveBar} from '@nivo/bar';
import {BasicTooltip} from '@nivo/tooltip';
import {ActiveHour} from './model/ActiveHour';

type ActiveHoursProps = {
  hours: Hour[]
}

export default function ActiveHours({hours}: ActiveHoursProps) {
  const theme = useTheme();

  return (
    <Card variant='outlined' sx={{overflow: 'visible'}} data-testid='ActiveHours'>
      <CardContent>
        <Typography sx={{fontSize: 14}} color='text.secondary' gutterBottom>
            Active Hours
        </Typography>
        <Box sx={{height: '30rem'}}>
          <Typography variant='overline' display='block' gutterBottom fontWeight='700' textAlign='center'>
            Tweets Per Hours (UTC)
          </Typography>
          <ResponsiveBar
            data={getActiveHours(hours)}
            keys={['tweets']}
            indexBy='hourKey'
            margin={{ top: 50, right: 30, bottom: 70, left: 60 }}
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
              legend: 'Hour',
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
            barAriaLabel={function(e){return e.id+': '+e.formattedValue+' in tweets: '+e.indexValue;}}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export function getActiveHours(activeHours: Hour[]) {
  const data: ActiveHour[] = [];
  const keys = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
  let hourCounter = 0;

  function addActiveHour(tweetCount: number) {
    data.push(new ActiveHour(keys[hourCounter], tweetCount));
    hourCounter++;
  }

  activeHours.forEach((activity) => {
    if (activity.hour < keys.length) {
      while (activity.hour !== hourCounter) {
        addActiveHour(0);
      }
      addActiveHour(activity.occurs);
    }
  });
  while (hourCounter < keys.length) {
    addActiveHour(0);
  }
  return data;
}

