'use client';


import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from 'next/image';
import HeaderTypography from '@/components/HeaderTypography';

import styles from './styles.module.scss';
import CustomSpeedDial from '@/components/SpeedDial';

export default function Home(){
    return (
        <>
            <div className={styles.mainContent}>
                <Grid container>
                    <Grid xs={12} md={8} 
                        className={styles.introCont} 
                    >
                        <HeaderTypography variant="h1" sizeLevel={2}>
                            Hi There, I am Deuvarney
                        </HeaderTypography>
                        <p className={styles.aboutMe}>I am a results-driven developer with a focus on Building Tomorrow&apos;s Solutions, Today.</p>
                    </Grid>
                    <Grid xs={12} md={4} 
                        className={styles.avatarImgCont} 
                    >
                        <Image 
                            className={styles.avatarImg}
                            alt="Deuvarney's Avatar Profile Picture" 
                            src="/avatarPic1.jpeg" 
                            width={512} 
                            height={512}
                        />
                    </Grid>            
                </Grid>
                <div className={styles.speedDialCont}>
                    <CustomSpeedDial/>
                </div>
            </div>
        </>
    );
}