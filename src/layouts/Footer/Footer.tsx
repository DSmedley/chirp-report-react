import React from 'react';
import {Box, Container, Divider, Grid, Link, Stack, Typography} from '@mui/material';
import moment from 'moment';

const Footer = () => (
  <Container data-testid='Footer' sx={{mt: '2rem', mb: '2rem'}}>
    <Grid container>
      <Grid item xs={12} sm={2} sx={{display: 'flex', justifyContent: {xs: 'center', md: 'left'}}}>
        <Link href={'/'} underline={'none'}>
          <Typography variant='button' color='primary.light'>
            <b>Chirp Report</b>
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={10}>
        <Stack direction='row' spacing={2} sx={{display: 'flex', justifyContent: {xs: 'center', md: 'right'}}}>
          <Link href={'/'} underline={'none'}>
            <Typography variant='button' color='primary.light'>
              <b>Analyze</b>
            </Typography>
          </Link>
          <Link href={'/'} underline={'none'}>
            <Typography variant='button' color='primary.light'>
              <b>Compare</b>
            </Typography>
          </Link>
          <Link href={'/about'} underline={'none'}>
            <Typography variant='button' color='primary.light'>
              <b>About</b>
            </Typography>
          </Link>
        </Stack>
      </Grid>
    </Grid>
    <Divider sx={{mt: '1rem', mb: '2rem'}}/>
    <Box sx={{textAlign: 'center'}}>
      <Typography sx={{fontSize: 14}} color='text.secondary'>
        Copyright © Chirp Report {moment().year()}. All Rights Reserved
      </Typography>
    </Box>
  </Container>
);

export default Footer;
