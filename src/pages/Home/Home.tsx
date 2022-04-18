import React from 'react';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import BannerLarge from '../../layouts/BannerLarge/BannerLarge';
import Container from '@mui/material/Container';
import RecentlyAnalyzed from './RecentlyAnalyzed/RecentlyAnalyzed';
import {Box} from '@mui/material';

export default function Home() {

  return (
    <Box data-testid='Home'>
      <BannerLarge/>
      <Container>
        <WhatWeDo/>
        <RecentlyAnalyzed/>
      </Container>
    </Box>
  );
}

