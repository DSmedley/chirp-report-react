import React, {FC} from 'react';
import styles from './UserDescription.module.css';
import {Card, CardContent, Typography} from '@mui/material';

interface UserDescriptionProps {
  description: string
}

const UserDescription: FC<UserDescriptionProps> = (props) => (
  <div className={styles.UserDescription} data-testid="UserDescription">
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          Description
        </Typography>
        <Typography variant="h5" component="div">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default UserDescription;
