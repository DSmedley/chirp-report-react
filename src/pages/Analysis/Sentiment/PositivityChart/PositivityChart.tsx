import React from 'react';
import {ResponsivePie} from '@nivo/pie';
import {Box, Typography, useTheme} from '@mui/material';
import {BasicTooltip} from '@nivo/tooltip';


type PositivityChartProps = {
  positive: number;
  negative: number;
  neutral: number;
}

export default function PositivityChart(props: PositivityChartProps) {
  const theme = useTheme();

  const data = [
    {
      'id': 'positive',
      'label': 'Positive',
      'value': props.positive,
      'color': 'hsl(120, 100%, 50%)'
    },
    {
      'id': 'negative',
      'label': 'Negative',
      'value': props.negative,
      'color': 'hsl(0, 100%, 50%)'
    },
    {
      'id': 'neutral',
      'label': 'Neutral',
      'value': props.neutral,
      'color': 'hsl(0, 0%, 75%)'
    }
  ];

  return (
    <Box sx={{height: '25rem'}} data-testid='PositivityChart'>
      <Typography variant='overline' display='block' gutterBottom fontWeight='700' textAlign='center'>
        Overall Positivity Index
      </Typography>
      <ResponsivePie
        data={data}
        colors={{datum: 'data.color'}}
        margin={{top: 20, right: 0, bottom: 80, left: 0}}
        innerRadius={0.6}
        padAngle={2}
        cornerRadius={3}
        activeOuterRadiusOffset={10}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              0.2
            ]
          ]
        }}
        enableArcLinkLabels={false}
        tooltip={({datum: {label, value, color}}) => (
          <BasicTooltip color={color} id={label} enableChip value={`${value} Tweet(s)`}/>
        )}
        theme={{
          tooltip: {
            container: {
              color: '#000',
            },
          },
        }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 20,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: theme.palette.text.primary
                }
              }
            ]
          }
        ]}
      />
    </Box>
  );
}
