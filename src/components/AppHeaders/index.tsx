'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from '@/components/Appbar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function AppHeaders({children}) {
    // console.log('AppHeaders', children)
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <ResponsiveAppBar/>
            {children}
        </ThemeProvider>
    );
    

}

export default AppHeaders;