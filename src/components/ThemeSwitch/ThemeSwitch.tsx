import React from 'react';
import styles from './ThemeSwitch.module.css';
import {IconButton, useTheme} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import {ColorModeContext} from "../../layouts/AppLayout/AppLayout";

export default function ThemeSwitch() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <div className={styles.ThemeSwitch} data-testid="ThemeSwitch">
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </div>
    );
}
