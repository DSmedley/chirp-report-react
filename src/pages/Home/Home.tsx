import React from 'react';
import styles from './Home.module.css';
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import BannerLarge from "../../layouts/BannerLarge/BannerLarge";
import Container from "@mui/material/Container";
import RecentlyAnalyzed from "./RecentlyAnalyzed/RecentlyAnalyzed";

export default function Home() {

    return (
        <div className={styles.Home} data-testid="Home">
            <BannerLarge/>
            <Container>
                <WhatWeDo/>
                <RecentlyAnalyzed/>
            </Container>
        </div>
    )
};

