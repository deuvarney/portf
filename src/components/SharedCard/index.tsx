import { Launch } from "@mui/icons-material";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import Link from "next/link";

import styles from './styles.module.scss';

type SharedCardProps = {
    name: string;
    summary: string;
    projectTileImg: string;
    url: string;
    linkText?: string;
}

function SharedCard (props: SharedCardProps) {
    const {name, summary, projectTileImg, url, linkText = "Learn More"} = props;
    let matchingHost;
    
    try {
        matchingHost = window.location.hostname === new URL(url).hostname;
    } catch {
        matchingHost = true
    }

    return (
        <Card sx={{ maxWidth: 345, height: '100%', margin: 'auto'}} elevation={8}>
            <CardActionArea LinkComponent={Link} href={url} className={styles.cardActionArea} target= { matchingHost ? "_self" : "_blank"} rel={ matchingHost ? "" : "noopener noreferrer"}>
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
                        <span className={styles.cardBtnText}>{linkText}</span><Launch/>
                    </div>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}

export default SharedCard;