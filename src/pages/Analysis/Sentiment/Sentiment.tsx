import React from 'react';
import styles from './Sentiment.module.css';
import {Button, Card, CardContent, Grid, Typography, useTheme} from '@mui/material';
import {Doughnut, Bar} from 'react-chartjs-2';
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

interface SentimentProps {
  neutral: number;
  positive: number;
  negative: number;
  anger: number;
  anticipation: number;
  disgust: number;
  fear: number;
  joy: number;
  sadness: number;
  surprise: number;
  trust: number;
}


export default function Sentiment(props: SentimentProps) {
  const theme = useTheme();
  ChartJS.defaults.color = theme.palette.text.primary;

  const barData = {
    labels: ['Anger', 'Anticipation', 'Disgust', 'Fear', 'Joy', 'Sadness', 'Surprise', 'Trust'],
    datasets: [
      {
        data: [props.anger, props.anticipation, props.disgust, props.fear, props.joy, props.sadness, props.surprise, props.trust],
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

            return `${tweetCount} Tweets (${percentage}%)`;
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
        text: 'Individual Emotions',
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


  const circleData = {
    labels: ['Neutral', 'Positive', 'Negative'],
    datasets: [
      {
        data: [props.neutral, props.positive, props.negative],
        backgroundColor: [
          'rgba(192, 192, 192, 0.6)',
          'rgba(0, 204, 0, 0.6)',
          'rgba(255, 0, 0, 0.6)'
        ],
        borderColor: [
          'rgba(192, 192, 192, 1)',
          'rgba(0, 204, 0, 1)',
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const circleOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'doughnut'>) {
            const tweetCount = context.dataset.data[context.dataIndex];
            const totalTweets = context.dataset.data.reduce(function (a, b) {
              return a + b;
            }, 0);
            const percentage = Math.round(tweetCount / totalTweets * 100);

            return `${tweetCount} Tweets (${percentage}%)`;
          },
          title: function (context: TooltipItem<'doughnut'>[]) {
            return context[0].label;
          }
        }
      },
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Overall Positivity Index',
      },
    },
  };
  return (
    <div className={styles.Sentiment} data-testid="Sentiment">
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            Sentiment
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Doughnut options={circleOptions} data={circleData}/>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Bar options={barOptions} data={barData} height={150}/>
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'right'}}>
              <Button variant="contained">Most Emotional</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
