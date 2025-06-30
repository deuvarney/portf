

import type { Metadata } from 'next'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from 'next/image';
import HeaderTypography from '@/components/HeaderTypography';

import styles from './styles.module.scss';
import CustomSpeedDial from '@/components/SpeedDial';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { FlipWords } from '@/components/ui/flip-words';
import { shuffleArray } from '@/utils/dataStrucUtils';

const attributes = [
  "Innovative", "Analytical", "Methodical", "Versatile", "Efficient",
  "Scalable", "Robust", "Optimized", "Strategic", "Creative",
  "Logical", "Adaptable", "Resourceful", "Intuitive", "Persistent",
  "Thorough", "Collaborative", "Meticulous", "Proactive", "Reliable",
  "Dedicated", "Focused", "Agile", "Disciplined", "Driven"
];

let dotsCount = 1;
function addTexToEveryNth(words: string[], name = "Deuvarney", count = 0) {
  const result: string[] = [name];
  
  for (let i = 0; i < words.length; i++) {
    result.push(words[i]);

    // Check if current position is a multiple of count (every nth item)
    if ((i + 1) % count === 0) {
        const val = name+ ".".repeat(dotsCount)
      result.push(val);
      dotsCount += 1;
    }
  }
  
  return result;
}


export default function Home(){
    const flippedwords = addTexToEveryNth(shuffleArray(attributes), 'Deuvarney', 5);

    return (
        <>
            <BackgroundBeams/>           
            <div className={styles.mainContent}>
                <Grid container>
                    <Grid xs={12} md={8} 
                        className={styles.introCont} 
                    >
                        <HeaderTypography variant="h1" sizeLevel={2}>
                            Hi There, I am <wbr/><FlipWords words={flippedwords}/>
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

export const metadata: Metadata = {
  title: 'Home',
  description: 'Homepage for Deuvarney\'s portfolio.',
}