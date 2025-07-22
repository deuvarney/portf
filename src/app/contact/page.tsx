import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from '@mui/material';

import styles from './styles.module.scss';
import { Metadata } from 'next';
import { ContactCard } from './ContactCard';
import { StickyBanner } from '@/components/ui/sticky-banner';
import Link from 'next/link';

function ContactPage() {
    return (
        <main>
            <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
                <Link href="/contactBeta"><p>Click here to check out the upcoming/beta version of this page!</p></Link>
            </StickyBanner>
            <Grid container spacing={4} justifyContent={'center'} sx={{ marginTop: 6, marginBottom: 6 }}>
                <ContactCard
                    text="+1 (123) 456-7890"
                    icon={<PhoneIcon sx={{ fontSize: 128 }} className={`${styles.phone} ${styles.contactCard}`} />}
                    value="tel:11234567890"
                    openText="Call"
                    copyValue="+1 (123) 456-7890"
                />

                <ContactCard
                    text="Email Deuvarneysanderson@gmail.com"
                    icon={<EmailIcon sx={{ fontSize: 128 }} className={`${styles.email} ${styles.contactCard}`} />}
                    value="mailto:deuvarneysanderson@gmail.com"
                    openText="Email"
                    copyValue="deuvarneysanderson@gmail.com"
                />

                <ContactCard
                    text="Deuvarney @ LinkedIn"
                    icon={<LinkedInIcon sx={{ fontSize: 128 }} className={`${styles.linkedin} ${styles.contactCard}`} />}
                    value="https://www.linkedin.com/in/deuvarney"
                    openText="Open"
                />

                <ContactCard
                    text="Deuvarney @ GitHub"
                    icon={<GitHubIcon sx={{ fontSize: 128 }} className={`${styles.github} ${styles.contactCard}`} />}
                    value="https://github.com/deuvarney"
                />
            </Grid>
        </main>
    );
}

export default ContactPage;

export const metadata: Metadata = {
    title: 'Contact Me',
    description: 'Contact information for Deuvarney',
}