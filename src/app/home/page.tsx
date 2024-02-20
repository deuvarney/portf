'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Typography } from '@mui/material';
import ResponsiveAppBar from '@/components/Appbar';

export default function Home(){
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Grid container>
                <Grid xs={12}>
                    <Typography variant="h1" gutterBottom>
                        Welcome to Deuvarney&apos;s Online Portfolio
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <img alt="Deuvarney's Profile Picture" src="https://placehold.co/600x400"/>
                    <h2>Building Tomorrow&apos;s Solutions, Today.</h2>
                </Grid>
                <Grid xs={12}>
                    <h3>About Myself</h3>
                </Grid>
                <Grid xs={12}>
                    <p>I am a results-driven software engineer with a strong background in [key technologies]. My passion lies in [specific areas of interest], and I am dedicated to delivering high-quality solutions that drive innovation.</p>
                </Grid>
        
        
            </Grid>
        </>
    );
}