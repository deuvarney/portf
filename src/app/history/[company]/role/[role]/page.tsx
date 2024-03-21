// import SchoolAwards from "@/components/Awards";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import DescAndResponsibilites from "@/components/DescAndResponsibilities";
import LargeBackgroundWithLogo from "@/components/LargeBackgroundWithLogo";
import ProjectItems from "@/components/ProjectItems";
import { workHistoryData } from "@/utils/workHistory";
import { CalendarMonthOutlined } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Accordion, AccordionDetails, AccordionSummary, Divider, Link, Typography } from "@mui/material";
import HeaderTypography from '@/components/HeaderTypography';
import SectionContainer, { ContainerWithBetterName, MainContentContainerWithBetterName } from '@/components/SectionContainer';
import BreadCrumbs from '@/components/Breadcrumbs';

import styles from './styles.module.scss';

function Role({params /*, searchParams*/}) {
    const company = workHistoryData.find(comp => comp.urlPath === params.company);
    
    const role = company?.roles.find(role => role.urlPath === params.role)

    if(company && role) {
        const {images, awards} = company;
        const {resumeTasks} = role;
        const project = role.projects[0];
        // console.log('project', project)

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
{/* 
                    <hr/> */}
                    

                    <SectionContainer>
                        <HeaderTypography variant="h3" centerText={true}>Projects</HeaderTypography>
                        

                        {
                            role.projects.map(project => (
                            <Accordion key={project.name} // update this
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
                                    <ContainerWithBetterName>
                                        <p>{project.summary}</p>
                                    </ContainerWithBetterName>
                                
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
    // console.log('Paramsss', params);
    return (<p>Todo: render 404 page For Role</p>)
}

export default Role;