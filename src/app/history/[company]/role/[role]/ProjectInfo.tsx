import styles from './projectInfo.module.scss'
import { ContainerWithBetterName } from "@/components/SectionContainer";
import HeaderTypography from "@/components/HeaderTypography";

function ProjectInfo({ name, summary, tileImgSrc, children }: { name: string, summary: string, tileImgSrc: string, children?: React.ReactNode }) {
    if (!name || !summary || !tileImgSrc) {
        return null;
    }
    return (

        <ContainerWithBetterName >
            <div className={styles.projectDescContainer}>
                <div className={styles.projectImgWrapper}>
                    <img
                        src={tileImgSrc}
                        className={styles.projectImg}
                    >
                    </img>
                    <div className={styles.projectImgOverlay}></div>
                </div>
                <div className={styles.projectNameContainer}>
                    <HeaderTypography variant="h3" addBottomMargin={true} className={styles.projectName}>{name}</HeaderTypography>
                </div>
            </div>
            <p className={styles.projectSummary}>{summary}</p>
            {children}
        </ContainerWithBetterName >

    )


}

export default ProjectInfo;