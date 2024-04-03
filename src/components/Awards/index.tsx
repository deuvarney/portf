import { useMediaQuery, Typography } from "@mui/material";
import HorizontalStepper from "../HorizontalStepper";
import BasicTimeline from "../Timeline";

import styles from './styles.module.scss';
import HeaderTypography from "../HeaderTypography";
import { ContainerWithBetterName } from "../SectionContainer";


type SchoolAwardsType = {
    awards?: Array<{
        name: string,
        summary: string,
        yearsAwarded: Array<string>,
    }>,
    variant: 1|2|3|4,

};

function SchoolAwards({ awards: awardsList, variant = 2 }: SchoolAwardsType) {
    const isSmallView = useMediaQuery('(max-width: 600px)');
    const subHeader = `h${variant+1}` as 'h2' | 'h3' | 'h4' | 'h5';
    const subSubHeader = `h${variant+2}` as 'h3' | 'h4' | 'h5' | 'h6';
    if (!awardsList?.length) return null;

    return (
        <ContainerWithBetterName>
            <HeaderTypography variant={`h${variant}`} sizeLevel={2}>Awards</HeaderTypography>
            { awardsList.map((award, idx) => (
                <>
                    <div key={idx} className={styles.awardSection}>
                        <HeaderTypography variant={subHeader} sizeLevel={4} className={styles.awardName}>
                            {award.name}
                        </HeaderTypography>
                        <Typography variant="body2" className={styles.awardSummary}>
                            {award.summary}
                        </Typography>
                        <HeaderTypography variant={subSubHeader} sizeLevel={5} className={styles.yearsAwarded}>
                            {'Years Awarded'}
                        </HeaderTypography>
                        {
                            isSmallView ? 
                                <BasicTimeline steps={award.yearsAwarded} />
                                :  <HorizontalStepper steps={award.yearsAwarded} />
                        }
                    </div>
                </>
            ))}
        </ContainerWithBetterName>
    );
}

export default SchoolAwards