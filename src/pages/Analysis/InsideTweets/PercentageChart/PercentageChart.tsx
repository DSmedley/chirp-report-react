import React from 'react';
import {RadialBarCustomLayer, ResponsiveRadialBar} from '@nivo/radial-bar';
import {Box, useTheme} from '@mui/material';
import {BasicTooltip} from '@nivo/tooltip';


type PercentageChartProps = {
  title: string
  percentage: number
  customLayer: RadialBarCustomLayer
}

export default function PercentageChart({title, percentage, customLayer}: PercentageChartProps) {
  const theme = useTheme();

  const data = [
    {
      'id': title,
      'data': [
        {
          'x': title,
          'y': percentage
        }
      ]
    }
  ];

  return (
    <Box sx={{height: '17rem'}} data-testid='PercentageChart'>
      <ResponsiveRadialBar
        data={data}
        startAngle={-90}
        endAngle={90}
        innerRadius={0.75}
        cornerRadius={3}
        margin={{top: 0, right: 10, bottom: 0, left: 10}}
        borderWidth={1}
        enableRadialGrid={false}
        radialAxisStart={{tickSize: 5, tickPadding: 5, tickRotation: 0}}
        circularAxisOuter={{tickSize: 5, tickPadding: 12, tickRotation: 0}}
        labelsSkipAngle={0}
        labelsRadiusOffset={0.75}
        transitionMode='startAngle'
        maxValue={100}
        tooltip={({bar: {color, category, value}}) => (
          <BasicTooltip color={color} id={category} enableChip value={`${value}%`}/>
        )}
        colors={theme.palette.primary.light}
        tracksColor={theme.palette.grey['300']}
        theme={{
          tooltip: {
            container: {
              color: '#000',
            },
          },
        }}
        layers={['tracks', 'bars', 'labels', 'legends', customLayer]}
      />
    </Box>
  );
}
