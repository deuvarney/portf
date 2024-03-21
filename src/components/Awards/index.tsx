import { useMediaQuery, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import HorizontalStepper from "../HorizontalStepper";
import BasicTimeline from "../Timeline";

import styles from './styles.module.scss';
import HeaderTypography from "../HeaderTypography";
import { ContainerWithBetterName } from "../SectionContainer";

function SchoolAwards(props) {
    const {awards} = props;
    const isSmallView = useMediaQuery('(max-width: 600px)');
    // console.log('isSMallView', isSmallView);
    if(!awards?.length){
        return null;
    }
    return (
        <ContainerWithBetterName>
            {/* <h2>Awards</h2> */}
            <HeaderTypography variant='h2'>
                Awards</HeaderTypography>
            { awards.map((award, idx)=> (
                <>
                {/* {!!idx &&<Divider className={styles.awardDivider}/>} */}
                <div className={styles.awardSection} key={idx}>
                     {/* <p>{award.name}</p> */}
                    <HeaderTypography variant="h3" sizeLevel={4} className={`${styles.awardName} ${styles.centerIconWithText}`}> {award.name}</HeaderTypography>
                     {/* <p>{award.summary}</p> */}
                     <Typography variant="body2" className={styles.awardSummary}>{award.summary}</Typography>
                     <HeaderTypography variant="h4" sizeLevel={5} className={styles.yearsAwarded}>{'Years Awarded'}</HeaderTypography>

                     {/* <ul>
                     {award.yearsAwarded.map((year, idx) => (
                        <li key={idx}>{year}</li>
                     ))}
                     </ul> */}
                     {
                        isSmallView ? 
                        // <HorizontalStepper orientation="vertical" steps={award.yearsAwarded}/>:
                        <BasicTimeline steps={award.yearsAwarded}/> :
                        <HorizontalStepper steps={award.yearsAwarded}/>


                     }
                </div>
                </>
               
            ))}
        </ContainerWithBetterName>
    );
}

export default SchoolAwards