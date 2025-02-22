'use client'

// import SchoolAwards from "@/components/Awards";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import DescAndResponsibilites from "@/components/DescAndResponsibilities";
import LargeBackgroundWithLogo from "@/components/LargeBackgroundWithLogo";
import { workHistoryData } from "@/utils/workHistory";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Accordion, AccordionDetails, AccordionSummary, Divider, Link, Typography } from "@mui/material";
import HeaderTypography from '@/components/HeaderTypography';
import SectionContainer, { ContainerWithBetterName, MainContentContainerWithBetterName, SectionTitleContainer } from '@/components/SectionContainer';
import BreadCrumbs from '@/components/Breadcrumbs';

// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';

import styles from './styles.module.scss';
import { useCallback, useEffect, useMemo, useRef, } from 'react';
import { scrollElementIntoView } from '@/utils/domUtils';
import ResourceCard from '@/components/SharedCard';


function Role({ params, searchParams, }) {

    let company;
    let role;
    for (const comp of workHistoryData) {
        if (comp.urlPath === params.company) {
            company = comp;
            role = comp.roles.find(role => role.urlPath === params.role);
            break;
        }
    }

    const { projectId } = searchParams || {};

    const projectContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!projectId || !company || !role) { return; }
        projectContainerRef.current && scrollElementIntoView(projectContainerRef.current);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onAccordionOpenChange = useCallback((event: React.SyntheticEvent, isExpanded: boolean) => {
        if (isExpanded) {
            event.currentTarget && scrollElementIntoView(event.currentTarget);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const breadcrumbs = useMemo(() => {
        return [
            <Link
                underline="hover"
                key="1"
                color="inherit"
                href="/history"
            >
                Experience
            </Link>,
            <Link
                underline="hover"
                key="2"
                color="inherit"
                href={`/history/${company?.urlPath}`}
            >
                {company?.name}
            </Link>,
            <Typography key="3" color="text.primary">
                {role?.urlPath?.toUpperCase()}
            </Typography>,
        ];
    }, [company, role]);

    if (!company || !role) {
        // Dev purposes, replace with an actual 404 page
        return (<p>Todo: render 404 page For Role</p>)
    }

    const { images } = company;
    const { resumeTasks } = role;

    return (
        <>
            <BreadCrumbs breadcrumbs={breadcrumbs} />
            <LargeBackgroundWithLogo
                name={role.name} l
                location={company.location}
                company={company.name}
                duration={role.dates}
                largeLogo={images?.largeLogo}
                backgroundPositionFocus={images?.largePositionFocus}
                largeBackgroundImg={images?.largeBackground}
            />
            <MainContentContainerWithBetterName>
                <SectionContainer>
                    <DescAndResponsibilites
                        resumeTasks={resumeTasks}
                    />
                </SectionContainer>

                <SectionContainer ref={projectContainerRef}> {/* TODO: Look into using a component for handling ids */}
                    <SectionTitleContainer>
                        <HeaderTypography variant="h3" addBottomMargin={true}>Projects</HeaderTypography>
                    </SectionTitleContainer>

                    {
                        role.projects.map(project => (
                            <Accordion key={project.name} // update this
                                defaultExpanded={projectId === project.id}
                                onChange={onAccordionOpenChange}
                            // expanded={true} //dev
                            >
                                <AccordionSummary
                                    style={{ alignItems: 'center' }}
                                    expandIcon={<ExpandMoreIcon />}
                                //   aria-controls="panel1bh-content"
                                //   id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>
                                        {project.name}
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <>
                                        <Divider className={styles.roleDetailsDivider} />
                                        {
                                            !!project.summary && (
                                                <ContainerWithBetterName>
                                                    <div className={styles.projectDescContainer}>
                                                        <div className={styles.projectImgWrapper}>
                                                            <img
                                                                src={project.tileImg}
                                                                className={styles.projectImg}
                                                            >
                                                            </img>
                                                            <div className={styles.projectImgOverlay}
                                                            ></div>
                                                        </div>
                                                        <div className={styles.projectNameContainer}>
                                                            <HeaderTypography variant="h3" addBottomMargin={true} className={styles.projectName}>{project.name}</HeaderTypography>
                                                        </div>
                                                    </div>
                                                    <p className={styles.projectSummary}>{project.summary}</p>
                                                </ContainerWithBetterName>
                                            )
                                        }
                                        <Grid container spacing={2}>
                                            {
                                                !!project.contributions?.length && (
                                                    <Grid xs={12} md={12} lg={6}>
                                                        <DescAndResponsibilites
                                                            listHeader={'Contributions'}
                                                            resumeTasks={project.contributions}
                                                        />
                                                    </Grid>
                                                )
                                            }
                                            {
                                                !!project.detailedContributions?.length && (
                                                    <Grid xs={12} md={12} lg={6}>
                                                        <DescAndResponsibilites
                                                            listHeader={'Contributions'}
                                                        >
                                                            <>
                                                                {
                                                                    project.detailedContributions.map((contribution, index) => (
                                                                        <Accordion key={index}>
                                                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                                                <Typography component="span">{contribution.title}</Typography>
                                                                            </AccordionSummary>
                                                                            <AccordionDetails>
                                                                                <Typography component={'p'}>{contribution.summary}</Typography>
                                                                            </AccordionDetails>
                                                                        </Accordion>
                                                                    ))
                                                                }
                                                            </>
                                                        </DescAndResponsibilites>
                                                    </Grid>
                                                )
                                            }
                                            {
                                                !!project.tools?.length && (
                                                    <Grid xs={12} md={6} lg={3}>
                                                        <DescAndResponsibilites
                                                            listHeader={'Tools'}
                                                            resumeTasks={project.tools}
                                                        />
                                                    </Grid>
                                                )
                                            }

                                            {
                                                !!project.languages?.length && (
                                                    <Grid xs={12} md={6} lg={3}>
                                                        <DescAndResponsibilites
                                                            listHeader={'Languages'}
                                                            resumeTasks={project.languages}
                                                        />
                                                    </Grid>

                                                )
                                            }
                                        </Grid>

                                        {
                                            !!project.links?.length && (
                                                <ContainerWithBetterName>
                                                    <HeaderTypography
                                                        variant="h3"
                                                        addBottomMargin={true}
                                                        className={styles.projectName}>Resources</HeaderTypography>
                                                    <Grid container spacing={2}>
                                                        {
                                                            project.links.map(projectLink => (
                                                                <Grid key={projectLink.id} xs={12} md={6} lg={4}>
                                                                    <ResourceCard
                                                                        key={projectLink.id}
                                                                        name={projectLink.title}
                                                                        summary={projectLink.summary}
                                                                        projectTileImg={projectLink.img || '/backgrounds/newspaper-background-torn-paper.webp'}
                                                                        url={projectLink.link}
                                                                        linkText={projectLink.linkText}
                                                                    />
                                                                </Grid>
                                                            ))
                                                        }
                                                    </Grid>
                                                </ContainerWithBetterName>
                                            )
                                        }


                                    </>

                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </SectionContainer>
            </MainContentContainerWithBetterName>
        </>
    )
}

export default Role;