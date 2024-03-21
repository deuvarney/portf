'use client';

// import ResponsiveAppBar from "@/components/Appbar";
// import { ThemeProvider, createTheme } from '@mui/material/styles';


import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';


function saveToClipboard(text: string) {
    navigator.clipboard.writeText(text);
}

function ContactCard(props) {
    const {text, icon, value, openText = 'Open', copyValue = value} = props;
    return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card sx={{ maxWidth: 240, maxHeight: 345, margin: 'auto'}}>
                <CardActionArea>
                    <Link target="_blank" rel="noopener noreferrer" href={value}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            { icon }
                        </CardContent>
                        <CardContent sx={{ textAlign: '' }}>
                            <Typography variant="body2" color="text.secondary">
                                {text}
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
                <CardActions>
                    <Link target="_blank" rel="noopener noreferrer" href={value}>
                        <Button size="small" color="primary">
                            {openText}
                        </Button>
                    </Link>
                    <Button onClick={() => saveToClipboard(copyValue)} size="small" color="primary">
                        Copy
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

// const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//     },
//   });

function ContactPage(){
    return (
        <>
            {/* <ThemeProvider theme={darkTheme}>
            <ResponsiveAppBar></ResponsiveAppBar>                 */}
                <main>
                    <Grid container spacing={4} justifyContent={'center'} sx={{marginTop: 6, marginBottom: 6}}>
                        <ContactCard 
                            text="+1 (123) 456-7890"
                            icon={<PhoneIcon sx={{ fontSize: 128}}/>}
                            value="tel:11234567890"
                            openText="Call"
                            copyValue="+1 (123) 456-7890"
                            />
                        
                        <ContactCard 
                            text="Email Deuvarney1@aol.com"
                            icon={<EmailIcon sx={{ fontSize: 128}}/>}
                            value="mailto:deuvarney1@aol.com"
                            openText="Email"
                            copyValue="deuvarney1@aol.com"
                            />
                        
                        <ContactCard 
                            text="Deuvarney @ LinkedIn"
                            icon={<LinkedInIcon sx={{ fontSize: 128}}/>}
                            value="https://www.linkedin.com/in/deuvarney"
                            openText="Open"
                            />

                        <ContactCard 
                            text="Deuvarney @ GitHub"
                            icon={<GitHubIcon sx={{ fontSize: 128}}/>}
                            value="https://github.com/deuvarney"

                            />
                    </Grid>
                </main>
            {/* </ThemeProvider> */}
        </>
    )
}

export default ContactPage;