'use client'

import React, { useCallback } from 'react';

import { ArrowForwardIos, CalendarMonthOutlined, } from "@mui/icons-material";
import { scrollElementIntoView } from '@/utils/domUtils';
import { WorkHistoryRole } from '@/types/types';
import DescAndResponsibilites from '@/components/DescAndResponsibilities';
import ProjectItems from '@/components/ProjectItems';


import { Accordion, AccordionDetails, AccordionSummary, Chip, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './styles.module.scss';


export default function WorkHistoryItem(props: WorkHistoryRole){
    const {name, summary, dates, projects = [], resumeTasks = []} = props;
    const resumeTasksTrimmed = resumeTasks.slice(0, 3);

    const onAccordionOpenChange = useCallback((event: React.SyntheticEvent, isExpanded: boolean) => {
        if(isExpanded) {
            event.currentTarget && scrollElementIntoView(event.currentTarget);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Accordion 
            onChange={onAccordionOpenChange}
            // expanded={true} //dev
        >
            <AccordionSummary
                style={{alignItems: 'center'}}
                expandIcon={<ExpandMoreIcon />}
            //   aria-controls="panel1bh-content"
            //   id="panel1bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {name}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }} display={'flex'}><span className={styles.roleDate}><CalendarMonthOutlined className={styles.roleCalendar}/> {dates}</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Divider className={styles.roleDetailsDivider} />
                
                <DescAndResponsibilites
                    summary={summary}
                    resumeTasks={resumeTasksTrimmed}
                />
                
                <ProjectItems projects={projects} />
            
            </AccordionDetails>
        </Accordion>
   
    );
}