import React from 'react';
import {IconButton, useTheme} from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {ColorModeContext} from '../../layouts/AppLayout/AppLayout';

export default function ThemeSwitch() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color='inherit' data-testid='ThemeSwitch'>
      {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
    </IconButton>
  );
}
