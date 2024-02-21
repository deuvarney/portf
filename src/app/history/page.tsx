'use client'

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { CalendarMonthOutlined } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import React from 'react';
import Box from '@mui/material/Box';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  

// import Paper from '@mui/material/Paper';

import './styles.scss';

import {workHistoryData} from '../../utils/workHistory';
import { Accordion, AccordionDetails, AccordionSummary, Chip, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import ResponsiveAppBar from '@/components/Appbar';

function ToolItem({tool, flipped}) {
    let image;
    let description;
    switch(tool.trim().toLowerCase()){
        case 'angular':
            image = '/300x200.svg';
            description = 'AngularJS, developed by Google, is an open-source JavaScript framework that facilitates the development of dynamic, single-page web applications. It extends HTML with additional attributes and provides a structured framework for building interactive and data-driven front-end applications, making it easier for developers to create and maintain complex web applications.';
            break;
        case 'jenkins':
            image = '/300x200.svg';
            description = 'Jenkins is an open-source automation server that facilitates the continuous integration and continuous delivery (CI/CD) of software projects. Originally developed as Hudson, Jenkins has become a widely adopted tool in the software development and DevOps communities. ';
            break;
        case 'tomcat':
            image = '/300x200.svg';
            description = 'Tomcat is an open-source web server and servlet container developed by the Apache Software Foundation. It functions as a lightweight, robust application server for Java-based web applications.';
            break;
        case 'docker':
            image = '/300x200.svg';
            description = 'Docker is an open-source platform designed to automate the deployment, scaling, and management of applications within lightweight, portable containers. Containers are self-contained units that encapsulate an application and its dependencies, providing consistency across different environments. ';
            break;
        case 'hapijs':
            image = '/300x200.svg';
            description = 'Hapi.js, often referred to as Hapi, is an open-source and richly-featured web framework for building applications and services using Node.js. Developed by Walmart Labs, Hapi is designed to be a flexible, modular, and configuration-centric framework. It is particularly well-suited for building RESTful APIs and web services. ';
            break;
        case 'electron':
            image = '/300x200.svg';
            description = 'Electron is an open-source framework that enables developers to build cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript. Developed by GitHub, Electron allows for the creation of native-like applications for Windows, macOS, and Linux by bundling a web application within a standalone executable.';
            break;
        case 'elasticsearch':
            image = '/300x200.svg';
            description = 'Elasticsearch is an open-source, distributed search and analytics engine designed for scalability and speed. It is part of the Elastic Stack (ELK Stack) and is widely used for full-text search, log and event data analysis, and real-time data exploration across large volumes of data.';
            break;
        case 'logstash':
            image = '/300x200.svg';
            description = 'Logstash is an open-source data processing pipeline tool that collects, parses, and transforms log data in real-time for centralized logging and analysis.';
            break;
        case 'kibana':
            image = '/300x200.svg';
            description = 'Kibana is an open-source visualization and exploration platform designed to work with Elasticsearch, providing a user-friendly interface for searching, analyzing, and visualizing data stored in Elasticsearch.';
            break;
        case 'mongodb':
            image = '/300x200.svg';
            description = 'MongoDB is a NoSQL database management system that uses a document-oriented data model, providing flexibility and scalability for storing and retrieving data.';
            break;
        case 'postgresql':
            image = '/300x200.svg';
            description = 'PostgreSQL is a powerful open-source relational database management system known for its extensibility and support for advanced data types, making it suitable for a wide range of applications.';
            break;
        case 'expressjs':
            image = '/300x200.svg';
            description = 'Express.js is a minimal and flexible Node.js web application framework that simplifies the development of server-side applications, particularly for building APIs and web services.'
            break;
        case 'mysql':
            image = '/300x200.svg';
            description = 'MySQL is an open-source relational database management system widely used for managing structured data, known for its performance, reliability, and ease of use.'
            break;
        case 'vertica':
            image = '/300x200.svg';
            description = 'Vertica is a columnar storage, high-performance analytics database designed for handling large volumes of data and complex analytical queries.'
            break;
        case 'selenium':
            image = '/300x200.svg';
            description = 'Selenium is an open-source framework for automating web browser actions and testing web applications, providing a suite of tools for browser automation and testing.'
            break;
        case 'testng':
            image = '/300x200.svg';
            description = 'TestNG (Test Next Generation) is a testing framework for the Java programming language, inspired by JUnit and NUnit, and designed to cover a broader range of testing scenarios, including functional and integration testing.'
            break;
        case 'applitools':
            image = '/300x200.svg';
            description = 'Applitools is a visual testing platform that uses artificial intelligence to automatically validate the visual appearance of web and mobile applications, ensuring consistent UI across different browsers and devices.'
            break;
        case 'saucelabs':
            image = '/300x200.svg';
            description = 'Sauce Labs is a cloud-based platform that offers automated testing services for web and mobile applications, providing a scalable and reliable environment for running tests on various browsers and devices.'
            break;
        case 'browserstack':
            image = '/300x200.svg';
            description = 'BrowserStack is a cloud-based cross-browser testing platform that enables developers and testers to perform live, automated, and visual testing of web applications across a wide range of browsers and operating systems.'
            break;

        case 'redux':
            image = '/300x200.svg';
            description = 'Redux.js is a predictable state container for JavaScript applications, commonly used with React.js. It helps manage the state of an application in a consistent and predictable way, making it easier to develop and maintain complex user interfaces.'
            break;
        case 'nodejs':
            image = '/300x200.svg';
            description = 'Node.js is an open-source, server-side JavaScript runtime environment that allows developers to build scalable and high-performance network applications, making it particularly popular for building server-side applications.'
            break;
        case 'handlebars':
            image = '/300x200.svg';
            description = 'Handlebars.js is a templating engine for JavaScript that simplifies the process of dynamically generating HTML by providing a logic-less templating syntax. It is often used in conjunction with client-side and server-side JavaScript frameworks.'
            break;
        case 'langchain':
            image = '/300x200.svg';
            description = ''
            break;
        case 'cucumber':
            image = '/300x200.svg';
            description = 'Cucumber is a software tool that supports behavior-driven development (BDD) by allowing non-technical stakeholders to write executable specifications in plain language. It facilitates collaboration between developers, testers, and business stakeholders to ensure that software meets business requirements.'
            break;
        case 'jest':
            image = '/300x200.svg';
            description = 'est is a JavaScript testing framework developed by Facebook. It is commonly used for testing React applications but can be applied to any JavaScript project, providing features like snapshot testing, mocking, and parallel test execution.'
            break;
        
        case 'github':
            image = '/300x200.svg';
            description = 'GitHub is a web-based platform for version control using Git. It provides a collaborative environment for software development, enabling teams to manage and track changes in their codebase, collaborate on projects, and facilitate code review.'
            break;
        case 'storybook':
            image = '/300x200.svg';
            description = 'Storybook is an open-source tool for developing UI components in isolation. It provides a sandbox environment for developers to build, test, and showcase individual components independently of the application.'
            break;
        case 'webpack':
            image = '/300x200.svg';
            description = 'Webpack is an open-source JavaScript module bundler that simplifies the process of bundling and managing assets, such as JavaScript, CSS, and images, for web applications. It enables developers to create a dependency graph for their project, optimizing and packaging assets for efficient delivery to browsers.'
            break;
        case 'jira':
            image = '/300x200.svg';
            description = 'Jira is a popular project management and issue tracking tool developed by Atlassian. It is widely used for agile project management, helping teams plan, track, and manage software development projects efficiently.'
            break;
        case 'rally':
            image = '/300x200.svg';
            description = 'Rally (now part of Broadcom) is an agile project management tool designed to support the entire software development lifecycle. It facilitates collaboration, visibility, and traceability across development teams.'
            break;
        case 'confluence':
            image = '/300x200.svg';
            description = 'Confluence is a collaboration and documentation platform developed by Atlassian. It provides a centralized space for teams to create, share, and collaborate on documents, meeting notes, and project documentation.'
            break;
        case 'pendo':
            image = '/300x200.svg';
            description = 'Pendo.io is a product analytics and user feedback platform that helps businesses understand and improve user experiences. It provides insights into user behavior, enabling teams to make data-driven decisions to enhance product usability.'
            break;
        case 'protractor':
            image = '/300x200.svg';
            description = 'Protractor is an end-to-end testing framework for Angular and AngularJS applications. It is built on top of WebDriverJS and is designed to automate interactions between a user and an Angular-based web application.'
            break;
        case 'cypressjs':
            image = '/300x200.svg';
            description = 'Cypress is an end-to-end testing framework for web applications. It allows developers to write and run tests directly in the browser, providing fast and reliable testing for modern web applications.'
            break;
        case 'reactjs':
            image = '/300x200.svg';
            description = 'React.js is an open-source JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components, making the development of interactive and efficient single-page applications more manageable.'
            break;
        case 'socketio':
            image = '/300x200.svg';
            description = 'Socket.IO is a real-time, bidirectional communication library for web applications. It enables the establishment of persistent connections between a server and clients, facilitating real-time data exchange through WebSockets or fallback mechanisms like long polling.';

         
        default:
            break;
    }

    const imageItem = (
    <Grid xs={12}>
        <Image 
            src={image || ''}
            alt={`${tool} logo`}
            width={200}
            height={100}/>
    </Grid>);
    const descItem = (<Grid xs={12} display="flex" alignItems="center">
        <div className='tool-description-container'>
            <Typography className='tool-name' variant="h5">{tool}</Typography>
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
    let image;
    let color;
    let color2;
    // todo: move this logic to a util function
    switch(language.trim().toLowerCase()){
        case 'javascript':
            image = '/javascript-logo.jpeg';
            color = 'yellow';
            break;
        case 'java':
            image = '/java-logo.jpeg';
            color = "#507E9C";
            break;
        case 'python':
            image = '/python-logo.jpg';
            color = "#376C9C";
            color2 = "#F6CA3F";
            break;
        case 'ruby':
            image = '/ruby-logo.png';
            color = '#A41501';
            break;
        case 'typescript':
            image = '/typescript-logo.png';
            color = "#3074bf";
            break;
        default:
            break;
    }
    const icon = image && (<Image 
        src={image}
        alt={`${language} Logo`}
        width={16}
        height={16}/>) || undefined;
    return (<Chip className='language-chip' icon={icon} label={language} style={{border: `2px solid ${color}`}}></Chip>);
}

function WorkProjectItem(props) {
    const {name, summary, tools, languages, renderDivider} = props;
    return (
        <>
        <Grid xs={12} sm={12} md={6} lg={6} xl={4} 
        // className="role-container"
        >
            <Typography align='center' variant="h5" className="project-name">{name}</Typography>
            {summary && <Typography variant="body2">{summary}</Typography>}

            {/* <div className='project-details-container container-get-better-name'> */}
                {/* {!!tools.length && (
                    <>
                        <Typography variant="h4" className='project-details-headers'>Tools</Typography>
                        <Grid container rowSpacing={12}> */}
                            {/* <MobileStepperComponent tools={tools}/> */}
                            {/* {tools.map((tool, idx) => (<ToolItem key={tool} tool={tool} flipped={idx % 2}/>))} */}
                        {/* </Grid>
                    </>
                )} */}

                {/* {!!languages.length && (
                    <>
                        <Typography variant="h4" className='project-details-headers'>Languages</Typography>
                        {languages.map((language, idx) => (<LanguageChip key={idx} language={language}/>))}
                    </>
                )} */}
            {/* </div> */}
        </Grid>
       {/* {!!renderDivider && <Divider className='projects-divider'/>} */}
        </>
    );
}

function WorkProjectItemCard(props) {
    const {name, summary, tools, languages, renderDivider} = props;

    return (
        <Grid xs={12} sm={12} md={6} lg={6} xl={4}>
            <Card sx={{ maxWidth: 345, height: '100%', margin: 'auto'}} elevation={8}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/345x140.svg"
                        alt={`${name} logo`}
                    />
                    <CardContent>
                    <Typography className='card-project-name' gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {summary}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

// function MobileStepperComponent(props) {
//     const {tools} = props;
//     const theme = useTheme();
//     const [activeStep, setActiveStep] = React.useState(0);
//     const maxSteps = tools.length;
  

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//       };
    
//       const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//       };
    
//       const handleStepChange = (step: number) => {
//         setActiveStep(step);
//       };

//     return (
//         <>
//             <SwipeableViews
//                 axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//                 index={activeStep}
//                 onChangeIndex={handleStepChange}
//                 enableMouseEvents
//             >
//                 {tools.map((tool, index) => (
//                 <div key={index}>
//                     {Math.abs(activeStep - index) <= 2 ? (
//                         // <Box
//                         //     component="img"
//                         //     sx={{
//                         //     height: 255,
//                         //     display: 'block',
//                         //     maxWidth: 400,
//                         //     overflow: 'hidden',
//                         //     width: '100%',
//                         //     }}
//                         //     src={step.imgPath}
//                         //     alt={step.label}
//                         // />
//                         <ToolItem key={tool} tool={tool} flipped={index % 2} />
//                     ) : null}
//                 </div>
//                 ))}
//         </SwipeableViews>
//             <MobileStepper
//                 steps={maxSteps}
//                 position="static"
//                 activeStep={activeStep}
//                 nextButton={
//                 <Button
//                     size="small"
//                     onClick={handleNext}
//                     disabled={activeStep === maxSteps - 1}
//                 >
//                     Next
//                     {theme.direction === 'rtl' ? (
//                     <KeyboardArrowLeft />
//                     ) : (
//                     <KeyboardArrowRight />
//                     )}
//                 </Button>
//                 }
//                 backButton={
//                 <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//                     {theme.direction === 'rtl' ? (
//                     <KeyboardArrowRight />
//                     ) : (
//                     <KeyboardArrowLeft />
//                     )}
//                     Back
//                     </Button>
//             }
//         />
//       </>
//     );

// }

function WorkHistoryItem(props){
    const {name, summary, dates} = props;
    return (
    <div className="role-container">
        <Typography variant="h5" className="roles-name">{name}</Typography>
        <span className="role-date"><CalendarMonthOutlined/> {dates}</span>
        {summary && <Typography variant="body2">{summary}</Typography>}
    </div>
    );
}

function WorkHistoryItem2(props){
    const {name, summary, dates, projects = [], resumeTasks = []} = props;
    return (
        <Accordion 
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
          <Typography sx={{ color: 'text.secondary' }}><span className="role-date"><CalendarMonthOutlined className='role-calendar'/> {dates}</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Divider className='role-details-divider'/>
            
            {/* <p>Role Description:</p> */}
            {
                !!summary && (
                    <div className='container-get-better-name'>
                        <Typography variant="h4" className="roles-name">Role Description</Typography>
                        <Typography variant="body2">{summary}</Typography>
                    </div>
                )
            }
            
            {!!resumeTasks?.length && (
                <div className='container-get-better-name'>
                    <Typography variant='h4'>Role Responsibilities</Typography>
                    {/* <ul>
                        {resumeTasks.map((resumeTask: string, index: number) => <li key={index}>{resumeTask}</li>)}
                    </ul> */}

                    <List sx={{ width: '100%' }}>
                        {
                            resumeTasks.map((resumeTask: string, index: number) => 
                                // <li key={index}>{resumeTask}
                                // </li>
                                <>
                                <ListItem key={index} alignItems="flex-start">
                                    {/* <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar> */}
                                    <ListItemText
                                        primary={resumeTask}
                                        // secondary={
                                        //     <React.Fragment>
                                        //         <Typography
                                        //             sx={{ display: 'inline' }}
                                        //             component="span"
                                        //             variant="body2"
                                        //             color="text.primary"
                                        //         >
                                        //             Ali Connors
                                        //         </Typography>
                                        //         {/* {" — I'll be in your neighborhood doing errands this…"} */}
                                        //         {resumeTask}
                                        //     </React.Fragment>
                                        // }
                                        />
                                </ListItem>
                                {(resumeTasks.length - 1 !== index) && <Divider style={{margin: `0 16px`}} component="li" />}
                                </>
                            )
                        }
                        
                    </List>
                </div>
            )}
            
            {
                !!projects?.length && (
                    <div className='container-get-better-name'>
                        <Typography variant="h4" className="projects-header">Projects</Typography>
                        <Grid container spacing={4} justifyContent={'center'}>
                            {projects.map((projectItem, idx) => 
                                <WorkProjectItemCard
                                    key={name + idx}
                                    name={projectItem.name}
                                    summary={projectItem.summary}
                                    tools={projectItem.tools}
                                    languages={projectItem.languages}
                                    renderDivider={idx !== projects.length -1}
                                />)
                            }
                        </Grid>
                    </div>
                )
            }
           
        </AccordionDetails>
      </Accordion>
   
    );
}


export default function workHistory(){
    return (
    <>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
        <ResponsiveAppBar/>
        <main>
            <h1 className='main-heading'>Professional Experience</h1>
            {
                workHistoryData.map((workCompany, idx) => (
                    <section key={idx} className="section-container ">
                        <div className='section-top-header'>
                            {/* <h2 className="company-name"></h2> */}
                            <Image 
                                className="company-logo"
                                src={workCompany.logo}
                                alt={`${workCompany.name} Logo`}
                                width={120}
                                height={90}/>
                            <Typography variant="h2" className='company-name'>{workCompany.name}</Typography>
                        </div>
                        {/* <Typography variant="body2">{workCompany.summary}</Typography> */}
                        
                        {/* <div className="roles-container"> */}
                            {workCompany.roles?.map(role => (
                                <WorkHistoryItem2 key={role.name} name={role.name} dates={role.dates} summary={role.summary} projects={role.projects} resumeTasks={role.resumeTasks}/>
                            ))}
                        {/* </div> */}
                    </section>
                ))
            }
        </main>
        </ThemeProvider>
    </>
    );
}