'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from '@/components/Appbar';
import { LightThemeContext } from '@/hooks/ThemeContext';
import { useContext, useEffect } from 'react';
import useBodyClass from '@/hooks/UseBodyClass';
import { Themes } from '@/constants/themes';
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
    const {theme} = useContext(LightThemeContext);
    const bodyClassTheme = `app-theme-${theme}`;
    const {updateBodyClass} = useBodyClass(bodyClassTheme);

    useEffect(() => {
        updateBodyClass(bodyClassTheme)
    }, [bodyClassTheme])
    const lightDarkTheme = theme === Themes.DARK || theme === Themes.TWILIGHT ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={lightDarkTheme}>
            <CssBaseline />
            <ResponsiveAppBar/>
            {children}
        </ThemeProvider>
    );
    

}

export default AppHeaders;