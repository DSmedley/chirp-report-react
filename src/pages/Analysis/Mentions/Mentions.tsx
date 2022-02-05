import React, { FC } from 'react';
import styles from './Mentions.module.css';
import {Card, CardContent, Typography} from "@mui/material";

interface MentionsProps {}

const Mentions: FC<MentionsProps> = () => (
  <div className={styles.Mentions} data-testid="Mentions">
      <Card variant="outlined">
          <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Twitter User Mentions
              </Typography>
              <Typography variant="h5" component="div">
                  images
              </Typography>
          </CardContent>
      </Card>
  </div>
);

export default Mentions;
