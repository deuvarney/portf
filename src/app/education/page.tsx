'use client'

import { schoolHistory } from '@/utils/workHistory';
import Typography from '@mui/material/Typography';
import styles from  './styles.module.scss';


import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LargeBackgroundWithLogo from '@/components/LargeBackgroundWithLogo';
import SchoolAwards from '@/components/Awards';
import { ContainerWithBetterName, MainContentContainerWithBetterName } from '@/components/SectionContainer';
import HeaderTypography from '@/components/HeaderTypography';


function SchoolGroups(props) {
    const {groups} = props;
    if(!groups?.length){
        return null;
    }
    return (
        <ContainerWithBetterName>
            <HeaderTypography variant='h2'>Groups</HeaderTypography>

            { groups.map((group, idx)=> (
                <div className={styles.groupSection} key={idx}>
                    <HeaderTypography variant="h3" sizeLevel={5} className={`${styles.groupName} ${styles.centerIconWithText}`}>{group.name}</HeaderTypography>
                    <HeaderTypography variant="h4" sizeLevel={6}>{group.position}</HeaderTypography>
                    <p className={`${styles.centerIconWithText} ${styles.groupRoleDuration}`}><CalendarMonthOutlinedIcon/>{group.dates?.start} - {group.dates?.end}</p>
                    <Typography variant="body2"  className={`${styles.groupSummary}`}>{group.summary}</Typography>
                </div>
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
