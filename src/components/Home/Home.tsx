import React from 'react';
import styles from './Home.module.css';
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import AnalyzeHeader from "../AnalyzeHeader/AnalyzeHeader";
import Container from "@mui/material/Container";

export default function Home() {

    return (
        <div className={styles.Home} data-testid="Home">
            <AnalyzeHeader/>
            <Container>
                <WhatWeDo/>
            </Container>
        </div>
    )
};

