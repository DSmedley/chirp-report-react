import React from 'react';
import styles from './WhatWeDo.module.css';
import {Grid} from '@mui/material';
import InfoCard from '../../../components/InfoCard/InfoCard';
import InfoIcon from '@mui/icons-material/Info';
import BarChartIcon from '@mui/icons-material/BarChart';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const WhatWeDo = () => (
  <div className={styles.WhatWeDo} data-testid="WhatWeDo">
    <SectionTitle title={'What We Do'}/>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <InfoCard
          title={'User Details'}
          description={'The user details section includes general information about the user being analyzed like tweets, location and join date.'}
          icon={InfoIcon}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InfoCard
          title={'Sentiment'}
          description={'The sentiment section displays the users overall positivity as well as a more in-depth analysis of eight emotions and how many times the user displays those emotions.'}
          icon={InsertEmoticonIcon}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InfoCard
          title={'Inside Their Tweets'}
          description={'This section displays statistics about how the user tweets and interacts with their followers and the people that they follow such as retweets, mentions and hashtags.'}
          icon={BarChartIcon}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InfoCard
          title={'Active Hours'}
          description={'In the active hours section we compile all of the users tweets that we pull into hours of the day to help determine the times that they are the most active on twitter.'}
          icon={ChatBubbleOutlineRoundedIcon}
        />
      </Grid>
    </Grid>
  </div>
);

export default WhatWeDo;
