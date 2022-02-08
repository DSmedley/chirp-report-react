import React, {useEffect, useState} from 'react';
import styles from './RecentlyAnalyzed.module.css';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import {TwitterAnalysis} from "../../Analysis/model/TwitterAnalysis";
import {Card, CardActionArea, CardMedia, Grid} from "@mui/material";

export default function RecentlyAnalyzed() {
    const [recent, setRecent] = useState<Array<TwitterAnalysis>>([]);

    const getImage = (screenName: string) => {
        return `https://unavatar.io/twitter/${screenName}`
    }

    useEffect(() => {
        axios.get(`http://chirp.local/api/analyses`)
            .then(res => {
                setRecent(res.data);
            })
    }, [])

    return (
        <div className={styles.RecentlyAnalyzed} data-testid="RecentlyAnalyzed">
            <SectionTitle title={'Recently Analyzed'}/>
            <Grid container spacing={2}>
                {recent.map((analysis) => (
                    <Grid key={analysis.id} item xs={12} sm={2}>
                        <Card sx={{ maxWidth: 185 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={getImage(analysis.screen_name)}
                                    alt={analysis.name}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
