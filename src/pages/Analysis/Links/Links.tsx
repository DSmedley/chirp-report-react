import React from 'react';
import {Box, Card, CardContent, Link, Tooltip, Typography} from '@mui/material';
import {UserLink} from '../model/UserLink';

type LinksProps = {
  links: UserLink[]
}

export default function Links({links}: LinksProps) {
  return (
    <Card data-testid='Links' variant='outlined'>
      <CardContent>
        <Typography sx={{fontSize: 14}} color='text.secondary' gutterBottom>
          URLs Linked
        </Typography>
        <Box
          data-testid='url-box'
          sx={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {links.map((link) => (
            <Tooltip sx={{pr: 2}} title={`Used ${link.occurs} time(s)`} placement='top' arrow key={link.id}>
              <Link href={link.url}>{link.url}</Link>
            </Tooltip>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
