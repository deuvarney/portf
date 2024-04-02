import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ContainerWithBetterName } from "../SectionContainer";

import styles from './styles.module.scss';
import Link from "next/link";

function WorkProjectItemCard(props) {
    // console.log('WorkProjectItemCard props', props)
    const {name, summary, tileImg, tools, languages, renderDivider, url} = props;
    const projectTileImg = tileImg || '/345x140.svg';
    return (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Card sx={{ maxWidth: 345, height: '100%', margin: 'auto'}} elevation={8}>
                <CardActionArea>
                    <Link href={url}>
                        {/* TODO: This creates a link inside of a btn, look into improving this */}

                        <CardMedia
                            component="img"
                            height="140"
                            image={projectTileImg}
                            alt={`${name} logo`}
                            className={styles.cardMedia}
                        />
                        <CardContent>
                        <Typography className={styles.cardProjectName} gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {summary}
                        </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

function ProjectItems(props) {
    const {projects} = props;
    return (
        <>
            {
                !!projects?.length && (
                    <ContainerWithBetterName>
                        <Typography variant="h4">Projects</Typography>
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