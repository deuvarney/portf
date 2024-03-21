import { Typography, List, ListItem, ListItemText, Divider, ListItemButton } from "@mui/material";

import { CalendarMonthOutlined, ChevronRight } from "@mui/icons-material";
import HeaderTypography from "../HeaderTypography";
import { ContainerWithBetterName } from "../SectionContainer";

import styles from './styles.module.scss';

function DescAndResponsibilites (props) {


    const {summary, resumeTasks} = props;
    const listHeader = props.listHeader || 'Role Responsibilities';
    // console.log('resumeTakses', resumeTasks);
    return (
        <>
            {
                !!summary && (
                    <ContainerWithBetterName key={'summary'}>
                        <HeaderTypography key={'roles-name'} variant="h4" className={styles.rolesName}>Role Description</HeaderTypography>
                        <Typography key={'summary'} variant="body2">{summary}</Typography>
                    </ContainerWithBetterName>
                )
            }
            
            {!!resumeTasks?.length && (
                <ContainerWithBetterName key={'responsibilities'}>
                    <Typography variant='h4'>{listHeader}</Typography>
                    {/* <ul>
                        {resumeTasks.map((resumeTask: string, index: number) => <li key={index}>{resumeTask}</li>)}
                    </ul> */}

                    <List sx={{ width: '100%' }}>
                        { // TODO: Remove any
                            resumeTasks.map((resumeTask: string |any , index: number) => {

                                if (typeof resumeTask === 'string' || resumeTask instanceof String){

                                 return (
                                <>
                                    <ListItem key={index} alignItems="flex-start">
                                        {/* <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar> */}
                                        <ListItemText
                                            primary={resumeTask}
                                            />
                                    {/* <ListItemText>Test</ListItemText> */}
                                    </ListItem>
                                    {(resumeTasks.length - 1 !== index) && <Divider style={{margin: `0 16px`}} component="li" />}
                                </>
                                 );
                            }
                               
                                        
                            return (
                                <>
                                    <ListItemButton component="a" href={resumeTask.url}>
                                        <ListItemText
                                            primary={resumeTask.name}
                                            secondary={<span className={styles.centerIconWithText}><CalendarMonthOutlined className={styles.roleCalendar}/>{resumeTask.date}</span>}
                                            />
                                            <ChevronRight/>
                                    </ListItemButton>
                                    {(resumeTasks.length - 1 !== index) && <Divider style={{margin: `0 16px`}} component="li" />}

                                </>
                            );
                        
                            })
                        }
                        
                    </List>
                </ContainerWithBetterName>
            )}
        </>
    );
}

export default DescAndResponsibilites;