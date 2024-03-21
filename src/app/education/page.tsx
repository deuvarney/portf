'use client'

// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import ResponsiveAppBar from '@/components/Appbar';
import { schoolHistory } from '@/utils/workHistory';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import schooBackground from "st_johns_large_background_image.jpeg";
import styles from  './styles.module.scss';
import { Divider } from '@mui/material';



import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DescAndResponsibilites from '@/components/DescAndResponsibilities';
import HorizontalStepper from '@/components/HorizontalStepper';

import useMediaQuery from '@mui/material/useMediaQuery';
import BasicTimeline from '@/components/Timeline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import LargeBackgroundWithLogo from '@/components/LargeBackgroundWithLogo';
import SchoolAwards from '@/components/Awards';
import { ContainerWithBetterName, MainContentContainerWithBetterName } from '@/components/SectionContainer';
import HeaderTypography from '@/components/HeaderTypography';
// const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//     },
//   });




function SchoolGroups(props) {
    const {groups} = props;
    if(!groups?.length){
        return null;
    }
    return (
        <ContainerWithBetterName>
            {/* <h2>Groups</h2> */}
            <Typography variant='h2' className={styles.groupTitle}>
                {/* <GroupsIcon/> */}
                Groups</Typography>

            { groups.map((group, idx)=> (
                <>
                {/* {!!idx &&<Divider className='group-divider'/>} */}

                <div className={styles.groupSection} key={idx}>
                     {/* <h3>{group.name}</h3> */}
                     <HeaderTypography variant="h3" sizeLevel={5} className={`${styles.groupName} ${styles.centerIconWithText}`}>{group.name}</HeaderTypography>

                     {/* <p>{group.position}</p> */}
                     <HeaderTypography variant="h4" sizeLevel={6}>{group.position}</HeaderTypography>
                     <p className={`${styles.centerIconWithText} ${styles.groupRoleDuration}`}><CalendarMonthOutlinedIcon/>{group.dates?.start} - {group.dates?.end}</p>
                     {/* <p>{group.summary}</p> */}
                     <Typography variant="body2"  className={`${styles.groupSummary}`}>{group.summary}</Typography>

                     {/* <div>Held office:</div> */}

                     {/* <p>{group.dates?.start} - {group.dates?.end}</p> */}
                     <ul>
                     {/* {group.yearsAwarded.map((year, idx) => (
                        <li key={idx}>{year}</li>
                     ))} */}
                     </ul>
                </div>
                </>
            ))}
        </ContainerWithBetterName>
    );
    
}

function School(props) {
    const { duration, name, location, awards, groups, images={}, degree } = props;
    
    return (
        <>
            
            <LargeBackgroundWithLogo
                name={name} location={location} duration={duration}
                degree={degree}
                largeLogo={images.largeLogo}
                largeBackgroundImg={images.largeBackground}
                backgroundPositionFocus={images.largePositionFocus}
            />
            <MainContentContainerWithBetterName>
                <SchoolAwards awards={awards} />
                <SchoolGroups groups={groups} />
            </MainContentContainerWithBetterName>
            
        </>
    );
}
  

function Education(){

    return (
        // <ThemeProvider theme={darkTheme}>
        //     <CssBaseline />
        //     <ResponsiveAppBar/>
            <main>
                {/* Educational Purposes */}
                {
                    schoolHistory.map((school, idx) => (
                        <School 
                            key={idx}
                            { ...school}
                        />
                    ))
                }   
                

            </main>
        // </ThemeProvider>
    );
}

export default Education;