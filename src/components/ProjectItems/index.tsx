import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ContainerWithBetterName } from "../SectionContainer";

import styles from './styles.module.scss';
import Link from "next/link";
import HeaderTypography from "../HeaderTypography";
import { WorkHistoryProject } from "@/types/types";
import Launch from "@mui/icons-material/Launch";

type WorkProjectItemCardProps = {
    name: string;
    summary: string;
    tileImg?: string;
    tools: string[];
    languages: string[];
    renderDivider: boolean;
    url: string;
}

function WorkProjectItemCard(props: WorkProjectItemCardProps) {
    const {name, summary, tileImg, tools, languages, renderDivider, url} = props;
    const projectTileImg = tileImg || '/345x140.svg'; // TODO: Move this string to a constants file
    return (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Card sx={{ maxWidth: 345, height: '100%', margin: 'auto'}} elevation={8}>
                <CardActionArea LinkComponent={Link} href={url} className={styles.cardActionArea}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={projectTileImg}
                        alt={`${name} logo`}
                        className={styles.cardMedia}
                    />
                    <CardContent className={styles.cardContent}>
                        <Typography className={styles.cardProjectName} gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {summary}
                        </Typography>
                        <div className={styles.fadeEffectElement}/>
                    </CardContent>

                    <CardActions className={styles.cardActions}>
                        <div className={styles.cardBtnLinkCont}>
                            <span className={styles.cardBtnText}>Learn More</span><Launch/>
                        </div>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

type ProjectsItemsType = (WorkHistoryProject & {url: string})[]
type ProjectItemType = {projects: ProjectsItemsType}

function ProjectItems(props: ProjectItemType) {
    const {projects}: {projects: ProjectsItemsType } = props;
    return (
        <>
            {
                !!projects?.length && (
                    <ContainerWithBetterName>
                        <HeaderTypography variant="h4" addBottomMargin={true}>Projects</HeaderTypography>
                        <Grid container spacing={4} justifyContent={'start'}>
                            {projects.map((projectItem, idx) => 
                                <WorkProjectItemCard
                                    key={projectItem.name + idx}
                                    name={projectItem.name}
                                    summary={projectItem.summary}
                                    tools={projectItem.tools}
                                    languages={projectItem.languages}
                                    tileImg={projectItem.tileImg}
                                    renderDivider={idx !== projects.length -1}
                                    url={projectItem.url}
                                />)
                            }
                        </Grid>
                    </ContainerWithBetterName>
                )
            }
        </>
    );
}

export default ProjectItems;