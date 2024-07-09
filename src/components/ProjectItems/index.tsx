import Grid from "@mui/material/Grid";

import { ContainerWithBetterName } from "../SectionContainer";
import ProjectCard from "../SharedCard";

import HeaderTypography from "../HeaderTypography";
import { WorkHistoryProject } from "@/types/types";

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
            <ProjectCard
                name={name}
                summary={summary}
                projectTileImg={projectTileImg}
                url={url}
            />
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