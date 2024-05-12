'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from '@/components/Appbar';
import { Themes, useTheme } from '@/hooks/ThemeContext';
import { useEffect } from 'react';
import useBodyClass from '@/hooks/UseBodyClass';
// import styles from './styles.module.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function AppHeaders({children}) {
    const {theme} = useTheme();
    // const bodyClassTheme = `${styles[`app-theme-${theme}`]}`;
    // const bodyClassTheme = styles.appThemeLight;
    const bodyClassTheme = `app-theme-${theme}`;
    const {updateBodyClass} = useBodyClass(bodyClassTheme);

    useEffect(() => {
        updateBodyClass(bodyClassTheme)
    }, [bodyClassTheme])

    return (
        <ThemeProvider theme={theme === Themes.DARK || theme === Themes.TWILIGHT ? darkTheme : lightTheme}>
            <CssBaseline />
            <ResponsiveAppBar/>
            {children}
        </ThemeProvider>
    );
    

}

export default AppHeaders;