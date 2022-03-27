import React from 'react';
import styles from './ActiveHours.module.css';
import {Card, CardContent, Typography, useTheme} from '@mui/material';
import {Hour} from '../model/Hour';
import {Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ActiveHoursProps = {
  hours: Hour[]
}

export default function ActiveHours(props: ActiveHoursProps) {
  const theme = useTheme();
  ChartJS.defaults.color = theme.palette.text.primary;

  const barData = {
    labels: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
    datasets: [
      {
        data: getActiveHours(props.hours),
        backgroundColor: [
          'rgba(0, 99, 132, 0.6)',
          'rgba(30, 99, 132, 0.6)',
          'rgba(60, 99, 132, 0.6)',
          'rgba(90, 99, 132, 0.6)',
          'rgba(120, 99, 132, 0.6)',
          'rgba(150, 99, 132, 0.6)',
          'rgba(180, 99, 132, 0.6)',
          'rgba(210, 99, 132, 0.6)',
          'rgba(240, 99, 132, 0.6)'
        ],
        borderColor: [
          'rgba(0, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(60, 99, 132, 1)',
          'rgba(90, 99, 132, 1)',
          'rgba(120, 99, 132, 1)',
          'rgba(150, 99, 132, 1)',
          'rgba(180, 99, 132, 1)',
          'rgba(210, 99, 132, 1)',
          'rgba(240, 99, 132, 1)'
        ],
      }
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'bar'>) {
            const tweetCount = context.dataset.data[context.dataIndex];
            const totalTweets = context.dataset.data.reduce(function (a, b) {
              return a + b;
            }, 0);
            const percentage = Math.round(tweetCount / totalTweets * 100);

            return `${tweetCount} Tweets (${percentage}% of the day)`;
          },
          title: function (context: TooltipItem<'bar'>[]) {
            return context[0].label;
          }
        }
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Tweets Per Hour (UTC)',
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: true,
          color: theme.palette.text.primary
        }
      },
      y: {
        grid: {
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: true,
          color: theme.palette.text.primary
        }
      }
    }
  };
  return (
    <div className={styles.ActiveHours} data-testid="ActiveHours">
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
              Active Hours
          </Typography>
          <Bar options={barOptions} data={barData} height={100}/>
        </CardContent>
      </Card>
    </div>
  );
}

export function getActiveHours(activeHours: Hour[]): number[] {
  const data: number[] = [];
  let hourCounter = 0;
  activeHours.forEach((activity) => {
    while (activity.hour !== hourCounter) {
      data.push(0);
      hourCounter++;
    }
    data.push(activity.occurs);
    hourCounter++;
  });
  return data;
}

