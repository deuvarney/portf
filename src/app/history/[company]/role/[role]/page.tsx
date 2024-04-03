'use client'

// import SchoolAwards from "@/components/Awards";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import DescAndResponsibilites from "@/components/DescAndResponsibilities";
import LargeBackgroundWithLogo from "@/components/LargeBackgroundWithLogo";
import { workHistoryData } from "@/utils/workHistory";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Accordion, AccordionDetails, AccordionSummary, Divider, Link, Typography } from "@mui/material";
import HeaderTypography from '@/components/HeaderTypography';
import SectionContainer, { ContainerWithBetterName, MainContentContainerWithBetterName } from '@/components/SectionContainer';
import BreadCrumbs from '@/components/Breadcrumbs';

import styles from './styles.module.scss';
import { useEffect } from 'react';

const PROJECTS_ID = 'projects';

function Role({params, searchParams,}) {
    const company = workHistoryData.find(comp => comp.urlPath === params.company);
    
    const role = company?.roles.find(role => role.urlPath === params.role);
    const {projectId} = searchParams || {};

    useEffect(() => {
        if(!projectId || !company || !role) { return; }
        requestIdleCallback(() => {
            const projectElement = document.getElementById(PROJECTS_ID);
            if(projectElement) {
                projectElement.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
            }
        }, {timeout: 1000})
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if(!company || !role) {
        // Dev purposes, replace with an actual 404 page
        return (<p>Todo: render 404 page For Role</p>)
    }


    const {images} = company;
    const {resumeTasks} = role;

    const breadcrumbs = [
        <Link 
            underline="hover"
            key="1"
            color="inherit"
            href="/history"
            // onClick={handleClick}
        >
            Experience
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href={`/history/${company.urlPath}`}
        //   onClick={handleClick}
        >
            {company.name}
        </Link>,
        <Typography key="3" color="text.primary">
            {role.urlPath.toUpperCase()}
        </Typography>,
    ];
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
                
                <SectionContainer id={PROJECTS_ID}> {/* TODO: Look into using a component for handling ids */}
                    <HeaderTypography variant="h3" addBottomMargin={true}>Projects</HeaderTypography>
                    

                    {
                        role.projects.map(project => (
                            <Accordion key={project.name} // update this
                            defaultExpanded={projectId === project.id}
                            // expanded={true} //dev
                            >
                                <AccordionSummary
                                    style={{alignItems: 'center'}}
                                    expandIcon={<ExpandMoreIcon />}
                                //   aria-controls="panel1bh-content"
                                //   id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {project.name}
                                    </Typography>
    
                                </AccordionSummary>
                                <AccordionDetails>
                                
                                    <>
                                    <Divider className={styles.roleDetailsDivider}/>
                                    {
                                        !!project.summary && (
                                            <ContainerWithBetterName>
                                                <p>{project.summary}</p>
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