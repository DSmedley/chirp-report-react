import React, {useEffect, useState} from 'react';
import styles from './Analysis.module.css';
import {TwitterAnalysis} from "./model/TwitterAnalysis";
import axios from "axios";
import Moment from 'moment';
import {useParams} from "react-router-dom";
import {
    Avatar, Box, Button,
    Chip,
    Container, Grid, Link, Stack,
    Typography
} from "@mui/material";
import ActiveHours from "./ActiveHours/ActiveHours";
import Mentions from "./Mentions/Mentions";
import Hashtags from "./Hashtags/Hashtags";
import Links from "./Links/Links";
import InsideTweets from "./InsideTweets/InsideTweets";
import Sentiment from "./Sentiment/Sentiment";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LinkIcon from '@mui/icons-material/Link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';

const Analysis = () => (

    <div className={styles.Analysis} data-testid="Analysis">
        <DisplayAnalysis/>
    </div>
);


function DisplayAnalysis() {
    const {screenName} = useParams();
    const [analysis, setAnalysis] = useState(new TwitterAnalysis());

    const getImage = (screenName: string) => {
        return `https://unavatar.io/twitter/${screenName}`
    }
    useEffect(() => {
        axios.get(`http://chirp.local/api/analyze?screen_name=${screenName}`)
            .then(res => {
                setAnalysis(res.data);
            })
    }, [screenName])

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={10}>
                    <Box sx={{mt: 2}}>
                        <Button sx={{backgroundColor: "#4267B2", "&:hover": {backgroundColor: "#6784C0"}, mr: 1}}
                                variant="contained" startIcon={<FacebookIcon/>}>Share</Button>
                        <Button sx={{backgroundColor: "#1D9BF0", "&:hover": {backgroundColor: "#76BCF0"}, mr: 1}}
                                variant="contained" startIcon={<TwitterIcon/>}>Tweet</Button>
                        <Button sx={{backgroundColor: "#7D7D7D", "&:hover": {backgroundColor: "#969696"}}}
                                variant="contained" startIcon={<EmailIcon/>}>Email</Button>
                    </Box>
                    <Typography variant="h4">
                        {analysis.name}<VerifiedIcon sx={{color: "#1D9BF0"}}/>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        @{analysis.screen_name}
                    </Typography>
                    <Typography variant="subtitle2">
                        {analysis.description}
                    </Typography>
                    <Box>
                        <Chip icon={<LocationOnOutlinedIcon/>} label={analysis.location} variant="outlined"
                              sx={{mr: 1, mb: 1}}/>
                        <Chip icon={<CalendarTodayIcon/>}
                              label={'Joined ' + Moment(analysis.joined).format('MMMM YYYY')} variant="outlined"
                              sx={{mr: 1, mb: 1}}/>
                        <Chip
                            icon={<LinkIcon/>}
                            label={<Link href={analysis.url} rel="noopener" target="_blank">{analysis.url}</Link>}
                            variant="outlined"
                            sx={{mr: 1, mb: 1}}
                        />
                        <Chip icon={<AccessTimeIcon/>} label={analysis.time_zone} variant="outlined"
                              sx={{mr: 1, mb: 1}}/>
                    </Box>
                    <Box>
                        <Chip label={analysis.following + ' Following'} variant="outlined" sx={{mr: 1, mb: 1}}/>
                        <Chip label={analysis.followers + ' Followers'} variant="outlined" sx={{mr: 1, mb: 1}}/>
                        <Chip label={analysis.tweets + ' Tweets'} variant="outlined" sx={{mr: 1, mb: 1}}/>
                        <Chip label={analysis.likes + ' Likes'} variant="outlined" sx={{mr: 1, mb: 1}}/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Box sx={{mt: 2}}>
                        <Avatar
                            alt={analysis.name}
                            src={getImage(analysis.screen_name)}
                            sx={{width: '9em', height: '9em', float: 'right'}}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={2}>
                        <Sentiment
                            positive={analysis.positive}
                            negative={analysis.negative}
                            neutral={analysis.neutral}
                            anger={analysis.anger}
                            anticipation={analysis.anticipation}
                            disgust={analysis.disgust}
                            fear={analysis.fear}
                            joy={analysis.joy}
                            sadness={analysis.sadness}
                            surprise={analysis.surprise}
                            trust={analysis.trust}
                        />
                        <InsideTweets/>
                        <Links/>
                        <Hashtags/>
                        <Mentions/>
                        <ActiveHours/>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Analysis;
