import type { Metadata } from 'next'

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ArrowForwardIos, CalendarMonthOutlined, } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useCallback } from 'react';

import styles from './styles.module.scss';

import {workHistoryData} from '../../utils/workHistory';
import { Accordion, AccordionDetails, AccordionSummary, Chip, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import DescAndResponsibilites from '@/components/DescAndResponsibilities';
import Link from 'next/link';

import ProjectItems from '@/components/ProjectItems';
import HeaderTypography from '@/components/HeaderTypography';
import { getProgramLangInfo, getToolInfo } from '@/utils/toolsUtil';
import { WorkHistoryRole } from '@/types/types';
import { scrollElementIntoView } from '@/utils/domUtils';
import SectionContainer from '@/components/SectionContainer';
import { FadeInImage } from '@/components/FadeInImg';
import WorkHistoryItem from './WorkHistoryItem';

function ToolItem({tool, flipped}) {

    const {image, description} = getToolInfo(tool);

    const imageItem = (
    <Grid xs={12}>
        <Image 
            src={image || ''}
            alt={`${tool} logo`}
            width={200}
            height={100}/>
    </Grid>);
    const descItem = (<Grid xs={12} display="flex" alignItems="center">
        <div className={styles.toolDescriptionContainer}>
            <HeaderTypography className={styles.toolName} variant="h5">{tool}</HeaderTypography>
            <Image src="/32.svg"
            width={32}
            height={32}
            alt={`${tool} thumbnail`}
            />
            <p>{description}</p>
        </div>
        {/* <Item>xs=4</Item> */}
    </Grid>)
    return ( flipped ? (
        <>
            {imageItem}
            {descItem}
        </>) : (
         <>
            {descItem}
            {imageItem}
        </> 
        )   
    );
}

function LanguageChip({language}: {language: string;}) {

    // todo: move this logic to a util function
    const {image, color, color2} = getProgramLangInfo(language);
    const icon = image && (<Image 
        src={image}
        alt={`${language} Logo`}
        width={16}
        height={16}/>) || undefined;
    return (<Chip className={styles.languageChip} icon={icon} label={language} style={{border: `2px solid ${color}`}}></Chip>);
}


export default function WorkHistory(){
    // const pathname = usePathname();
    return (
    <>
        <main className={styles.main}>
            <HeaderTypography variant='h1' className={styles.mainHeading} centerText={true} sizeLevel={2}>Professional Experience</HeaderTypography>
            {
                workHistoryData.map((workCompany, idx) => (
                    <SectionContainer key={idx} className={styles.sectionContainer}>
                        <div className={styles.sectionTopHeader}>
                            <Link
                                href={`history/${workCompany.urlPath}`}
                                className={styles.workHistoryLink}
                            >
                                <FadeInImage 
                                    className={styles.companyLogo}
                                    src={workCompany.logo}
                                    alt={`${workCompany.name} Logo`}
                                    width={120}
                                    height={90}/>
                                <HeaderTypography variant="h2" className={styles.companyName}>{workCompany.name}</HeaderTypography>
                                <ArrowForwardIos/>
                            </Link>
                        </div>
                        
                        {workCompany.roles?.map(role => {
                            const projects = role.projects.map(project => {
                                return {
                                    ...project,
                                    url: `history/${workCompany.urlPath}/role/${role.urlPath}?projectId=${project.id}`,
                                }
                            })
                            return (<WorkHistoryItem key={role.name} name={role.name} dates={role.dates} projects={projects} resumeTasks={role.resumeTasks}/>);
                        })}
                    </SectionContainer>
                ))
            }
        </main>
    </>
    );
}

export const metadata: Metadata = {
  title: 'Work History',
  description: 'The tremendous tales of Deuvarney\'s work history.',
}