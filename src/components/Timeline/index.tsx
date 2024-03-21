// import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';

import styles from './styles.module.scss';


export default function BasicTimeline(props) {
    const {steps} = props;
    if(!steps?.length) {return null;}
  return (
    <Timeline // Set items left aligned
        sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
            },
        }}
    >
        {
            steps.map((step, idx) => (
                <TimelineItem key={step} className={styles.MuiTimelineItem}>
                    <TimelineSeparator>
                        <TimelineDot />
                        {(steps.length -1 !== idx) && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>{step}</TimelineContent>
                </TimelineItem>
            ))
        }
    </Timeline>
  );
}