import React from 'react';
import styles from './AppLayout.module.css';
import Navigation from "../Navigation/Navigation";
import {Outlet} from 'react-router-dom';
import {Container, createTheme, CssBaseline, PaletteMode, ThemeProvider} from "@mui/material";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";


export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

const getTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                background: {
                    default: '#F2F5F8'
                },
                primary: {
                    main: '#2A4F66',
                    light: '#0096C7',
                    dark: '#10395c',
                }
            }
            : {
                background: {
                    default: '#111B27',
                    paper: '#05090C'
                },
                primary: {
                    main: '#5C7F94',
                    light: '#0096C7',
                }
            }),
    },
});

export default function AppLayout() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(() => createTheme(getTheme(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className={styles.AppLayout} data-testid="AppLayout">
                    <Navigation/>
                    <Outlet/>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
