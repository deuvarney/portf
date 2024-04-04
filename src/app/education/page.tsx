'use client'

import { schoolHistory } from '@/utils/workHistory';
import Typography from '@mui/material/Typography';
import styles from  './styles.module.scss';


import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LargeBackgroundWithLogo from '@/components/LargeBackgroundWithLogo';
import SchoolAwards from '@/components/Awards';
import { ContainerWithBetterName, MainContentContainerWithBetterName } from '@/components/SectionContainer';
import HeaderTypography from '@/components/HeaderTypography';
import { SchoolGroup, SchoolHistoryItem } from '@/types/types';


function SchoolGroups({ groups }: { groups: SchoolGroup[] }) {
    if (groups.length === 0) { return null; }

    return (
        <ContainerWithBetterName>
            <HeaderTypography variant="h2">Groups</HeaderTypography>

            {groups.map((group) => {
                const { start, end } = group.dates || {};

                return (
                    <div className={styles.groupSection} key={group.name}>
                        <HeaderTypography variant="h3" sizeLevel={5} className={styles.groupName}>
                            {group.name}
                        </HeaderTypography>
                        <HeaderTypography variant="h4" sizeLevel={6}>
                            {group.position}
                        </HeaderTypography>
                        <p className={styles.groupRoleDuration}>
                            <CalendarMonthOutlinedIcon />
                            {start} - {end}
                        </p>
                        <Typography variant="body2" className={styles.groupSummary}>
                            {group.summary}
                        </Typography>
                    </div>
                );
            })}
        </ContainerWithBetterName>
    );
}

function School({ duration, name, location, awards, groups, images, degree }: SchoolHistoryItem) {
    return (
        <>
            <LargeBackgroundWithLogo
                name={name} location={location} duration={duration}
                degree={degree}
                largeLogo={images?.largeLogo}
                largeBackgroundImg={images?.largeBackground}
                backgroundPositionFocus={images?.largePositionFocus}
            />
            <MainContentContainerWithBetterName>
                {awards && <SchoolAwards awards={awards} />}
                {groups && <SchoolGroups groups={groups} />}
            </MainContentContainerWithBetterName>
        </>
    );
}
  

function Education(){

    return (
        <main>
            {
                schoolHistory.map((school) => (
                    <School 
                        key={school.name}
                        { ...school}
                    />
                ))
            }   
        </main>
    );
}

export default Education;
