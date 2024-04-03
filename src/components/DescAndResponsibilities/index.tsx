import { Fragment } from "react";

import { Typography, List, ListItem, ListItemText, Divider, ListItemButton } from "@mui/material";

import { CalendarMonthOutlined, ChevronRight } from "@mui/icons-material";
import HeaderTypography from "../HeaderTypography";
import { ContainerWithBetterName } from "../SectionContainer";

import styles from './styles.module.scss';


type DescAndResponsibilitiesProps = {
  summary?: string;
  resumeTasks: Array<{ name: string; date: string; url: string } | string>;
  listHeader?: string;
  listHeaderVariant?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';
  listHeaderSizeLevel?: 1|2|3|4|5|6|7|8;
};

function DescAndResponsibilities(props: DescAndResponsibilitiesProps) {
  const { summary, resumeTasks = [], listHeader = 'Role Responsibilities', listHeaderVariant = 'h4', listHeaderSizeLevel = 4 } = props;

  return (
    <>
      {summary && (
        <ContainerWithBetterName key="summary">
          <HeaderTypography variant={listHeaderVariant} sizeLevel={listHeaderSizeLevel} className={styles.rolesName}>
            Role Description
          </HeaderTypography>
          <Typography variant="body2">{summary}</Typography>
        </ContainerWithBetterName>
      )}
``
      {resumeTasks.length > 0 && (
        <ContainerWithBetterName key="responsibilities">
          <HeaderTypography variant={listHeaderVariant} sizeLevel={listHeaderSizeLevel}>
            {listHeader}
          </HeaderTypography>

          <List sx={{ width: '100%' }}>
            {resumeTasks.map((task, index) => {
              if (typeof task === 'string') {
                return (
                  <Fragment key={index}>
                    <ListItem key={index} alignItems="flex-start">
                      <ListItemText primary={task} />
                    </ListItem>
                    {resumeTasks.length - 1 !== index && (
                      <Divider style={{ margin: `0 16px` }} component="li" />
                    )}
                  </Fragment>
                );
              }

              return (
                <>
                  <ListItemButton component="a" href={task.url}>
                    <ListItemText
                      primary={task.name}
                      secondary={
                        <span className={styles.centerIconWithText}>
                          <CalendarMonthOutlined className={styles.roleCalendar} />
                          {task.date}
                        </span>
                      }
                    />
                    <ChevronRight />
                  </ListItemButton>
                  {resumeTasks.length - 1 !== index && (
                    <Divider style={{ margin: `0 16px` }} component="li" />
                  )}
                </>
              );
            })}
          </List>
        </ContainerWithBetterName>
      )}
    </>
  );
}

export default DescAndResponsibilities;