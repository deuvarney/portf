const MDAProject = {
    name: "MicroStrategy Desktop Application",
    summary: "The MicroStrategy Desktop Application was a software program that allowed users to access, interact with, and analyze data from the MicroStrategy platform on their local computers. It provided features like offline data access, report viewing and editing, and dashboard exploration. This enabled users to work with data even without an internet connection, and offered data filtering, sorting, and drilling down for in-depth analysis.",
    tools: ['Electron','Jenkins', 'Service Workers', 'IndexedDB'],
    languages: ['Ruby', 'TypeScript'],
    tileImg: '/projectImages/mdaProjectTile.gif',
    contributions: [
        'Orchestrated and led the engineering efforts in architecting middleware layers.',
        'Spearheaded the implementation of Service Workers for efficient request intercepts.',
        'Devised and executed high-performance caching strategies to enhance system efficiency and offline functionality.',
        'Developed essential developer tooling to streamline workflow and improve productivity.',
        'Directed multidisciplinary teams in the integration of major feature additions.',
    ],
    links: [
        {
            title: 'Read About It',
            link: 'https://www.primecubeit.com/blog/2020/10/13/new-microstrategy-application-which-mirrors-functionality-from-microstrategy-library'
        }
    ]
};

const MAIProject = {
    name: "MicroStrategy AI Authoring",
    summary: "MicroStrategy AI Authoring is a tool leveraging natural language processing and machine learning to aid users in creating data-driven reports and dashboards. It translates user questions and requests into technical queries, generates insights, and builds reports without complex coding. This empowers less technical users to analyze data, democratize access to insights, and streamline report creation within organizations.",
    tools: ['Jenkins', 'LangChain'],
    languages: ['Ruby', 'Python'],
    tileImg: '/projectImages/mstrAIProjectTile.jpeg',
    contributions: [
        'Developed and integrated Machine Learning pipelines',
        'Identify the most effective prompt phrasing and structure',
        'Implemented a CI/CD pipeline to automate the building, testing, and deployment',
        'Created & Presented educational content explaining how the underlying technology behind ChatGPT functions within the MicroStrategy AI Authoring platform',
    ],
    links: [
        // {
        //     title: 'Read About It',
        //     link: 'https://www.primecubeit.com/blog/2020/10/13/new-microstrategy-application-which-mirrors-functionality-from-microstrategy-library'
        // }
    ]
}

const PendoProject = {
    name: "PendoIO Integration",
    summary: "Pendo.IO is a digital adoption platform focused on improving user experience within software applications. It equips software companies with tools to guide users through their product, gather feedback, and understand user behavior.",
    tools: ['Jenkins', 'Tomcat'],
    languages: ['Ruby', 'JavaScript', 'Java'],
    tileImg: '/projectImages/pendoProjectTile2.webp',
    contributions: [
        'Established and implemented best practices for analytics development',
    ],
    links: [
        // {
        //     title: 'Read About It',
        //     link: 'https://www.primecubeit.com/blog/2020/10/13/new-microstrategy-application-which-mirrors-functionality-from-microstrategy-library'
        // }
    ]
}

const LibraryWebProject = {
    name: "Library Web Application",
    summary: "MicroStrategy Library Web is a web-based portal within the MicroStrategy platform that functions as a central repository for various enterprise content and resources. It acts like a digital library, housing documents, reports, presentations, and other assets relevant to different business areas.",
    tools: ['Jenkins', 'ReactJS'],
    languages: ['JavaScript', 'Java'],
    contributions: [
        'Architected and Implemented Automated Pipelines for Deployment and Testing',
        'Established 508 compliance guidelines',
        '',
    ],
    tileImg: '/projectImages/libraryWebProjectTile.png',
    links: [
        {
            title: 'Check It Out',
            link: 'https://demo.microstrategy.com/MicroStrategyLibrary/app'
        }
    ]
}

const CollabSvcProject = {
    name: "Collaboration Service",
    summary: `MicroStrategy's Collaboration Service fosters secure, real-time collaboration within the MicroStrategy platform. Teams can discuss and analyze data, share insights, and make informed decisions directly within dashboards and dossiers, streamlining workflows and boosting productivity. Think of it as adding a layer of interactive discussion threads and an intuitive comments panel right on top of your data visualizations.

    With features like real-time alerts, notifications, and easily shared personalized views, Collaboration Service breaks down communication silos and empowers data-driven decision making across teams.`,
    tools: ['ExpressJS'],
    languages: ['EcmaScript'],
    contributions: [
        
    ],
    tileImg: '/projectImages/collabSvcProjectTile.png',
    links: [
        {
            title: 'Check It Out',
            link: 'https://demo.microstrategy.com:3000'
        }
    ]
}

const AOLHelpProject = {
    name: "AOL Help",
    summary: "AOL Help is a resource center offering support to AOL users through various channels like online articles, tutorials, forums, and live chat. Its goal was to assist users with troubleshooting technical issues, navigating AOL's features, and finding answers to their questions, aiming to empower users and enhance their overall experience.",
    tools: ['HapiJS', 'Jenkins'],
    languages: ['JavaScript'],
    contributions: [

    ],
    tileImg: '/projectImages/aolHelpProjectTile2.png',
    links: [
        {
            title: 'Check It Out',
            link: 'https://demo.microstrategy.com:3000'
        }
    ]
}

const AolPrefProject = {
    name: "AOL Preferences",
    summary: "AOL Preferences allowed users to personalize their web experience by adjusting settings across various AOL features like email, instant messaging, browsing, and more. Users could control aspects like notification preferences, content filtering, security options, and visual themes.",
    tools: ['Jenkins', 'Angular'],
    languages: ['JavaScript', "Java"],
    contributions: [

    ],
    tileImg: '/projectImages/aolPrefProjectTile.png',
    // links: [
    //     {
    //         title: 'Check It Out',
    //         link: 'https://demo.microstrategy.com:3000'
    //     }
    // ]
}

const AolPaidSvcProject = {
    name: "AOL Paid Services",
    summary: "AOL Paid Services provided premium features and content for a subscription fee. These included enhanced email storage, ad-free experiences, tech support, and access to exclusive content.",
    tools: ['Jenkins'],
    languages: ['Ruby'],
    contributions: [

    ],
    tileImg: '/projectImages/aolProjectTile2.png',
    // links: [
    //     {
    //         title: 'Check It Out',
    //         link: 'https://demo.microstrategy.com:3000'
    //     }
    // ]
}

export const workHistoryData = [
{
    name: 'MicroStrategy',
    summary: `MicroStrategy is a leading provider of enterprise analytics and mobility software, empowering organizations to make informed decisions and take action on their data. Their platform offers advanced analytics, data visualization, and mobile capabilities, enabling businesses to analyze large datasets, uncover insights, and drive performance improvements across various industries. With a focus on scalability, security, and usability, MicroStrategy helps businesses harness the power of data to gain a competitive edge in today's rapidly evolving market landscape.`,
    logo: '/mstr-logo.png',
    id: 'mstr',
    location: 'Tysons, VA',
    urlPath: 'microstrategy',
    backgroundImage: '',
    dates: 'March 2016 - Current',
    images: {
        largeBackground: '/microstrategy_building.webp',
        largePositionFocus: '40',
    },
    roles: [
        {
            name: "Senior Software Engineer",
            dates: "October 2019 - Current",
            urlPath: "sse",
            summary: "Led creation of architectural documents for global teams, enabling simultaneous service modifications. Developed scalable desktop apps with Electron. Mentored junior engineers and facilitated feature design discussions for efficient implementation.",
            projects:[
                MDAProject,
                MAIProject,
                PendoProject,
            ],
            resumeTasks: [
                "Architect Engineering documents and lead for multiple teams to reference when implementing new features in order to effectively modify a Service simultaneously across multiple teams around the world.",
                "Building highly scalable and efficient desktop applications utilizing Electron",
                "Mentoring associate/junior level engineers",
                "Create, review and conduct discussions for feature design documents in order to provide insight for an efficient and scalable implementation.",
            ],
        },
        {
            name: "Software Engineer II",
            dates: "January 2016 - September 2019",
            urlPath: "ss2",
            summary: "Collaborated with stakeholders to update client apps using React, Webpack, ES6+. Researched and resolved performance issues, standardized solutions. Enhanced test automation for efficiency, reliability, and speed.",
            projects:[
                LibraryWebProject,
                CollabSvcProject,
            ],
            resumeTasks: [
                "Collaborate with product owners, stakeholders and designers to effectively review, create and update client-facing applications by utilizing the latest libraries including React, Webpack, ES6+",
                "Research, design and implement solutions for performance bottlenecks and create standardized approaches for handling common issues in the application.",
                "Create and update automated unit, regression, functional, and acceptance tests. Architect improvements to tests and automated environment deployments in order to provide greater efficiency, insight, reliability and speed."
            ],
    
        },
        {
        name: "Software Engineer",
        dates: "March 2016 - December 2016",
        urlPath: "se",
        summary: "Implemented robust build/CI-CD processes for quality assurance and successful product releases. Mentored on 508 compliance solutions, ensuring accessibility. Managed E2E test cases for functional integrity and maintained environments.",
        projects:[
            LibraryWebProject,
    ],
        resumeTasks: [
            "Evaluate, implement and enforce build/CI-CD processes for the assurance of high quality, expected functionality and successful release of products.",
            "Analyze, create and mentor team members on solutions to address 508 compliance issues across applications. Propose and implement consistent approaches to mitigate common accessibility oversights.",
            "Create/update E2E automated functional and integration test cases. Maintain current test cases/environments",
        ],
    },
    
     
    // {
    //     name: "Senior Software Engineer II",
    //     dates: "May 2021 - Current",
    //     summary: "",
    //     projects:[{
    //         name: "MicroStrategy Desktop Application",
    //         summary: "",
    //         tools: ['Electron','Jenkins', 'Service Workers', 'IndexedDB'],
    //         languages: ['Ruby', 'TypeScript'],
    //     },{
    //         name: "MicroStrategy AI Authoring",
    //         summary: "",
    //         tools: ['Jenkins', 'LangChain'],
    //         languages: ['Ruby', 'Python'],
    //     },{
    //         name: "PendoIO Integration",
    //         summary: "",
    //         tools: ['Jenkins', 'Tomcat'],
    //         languages: ['Ruby', 'JavaScript', 'Java'],
    //     }]
    // }
    ],
    awards: [
        {
            name: `Employee Of The Quarter`,
            yearsAwarded: [2018, 2023],
            summary: `MicroStrategy's Employee of The Quarter award recognizes individuals who consistently demonstrate outstanding performance, exceeding expectations in their contributions to the company throughout the quarter.`,
        },
    ],
},
{
    name: 'AOL',
    summary: `AOL (America Online) was once a prominent internet service provider and web portal, offering dial-up internet access, email services, and a range of online content and features. Initially popular in the 1990s and early 2000s, AOL played a significant role in introducing many users to the internet. However, as broadband internet became widespread, AOL's subscriber base declined, leading it to transition into a digital media company focusing on advertising and content creation.`,
    logo: '/aol-eraser-logo-red.png',
    id: 'aol',
    urlPath: 'aol',
    backgroundImage: '',
    location: 'Ashburn, VA',
    dates: 'June 2014 - December 2015',
    images: {
        largeBackground: '/aolBuilding2.jpeg',
        largePositionFocus: '35',
    },
    roles: [
        {
            name: "Senior Software Engineer",
            dates: "March 2015 - December 2015",
            urlPath: "sse",
            summary: "",
            projects:[
                AOLHelpProject,
                AolPaidSvcProject
            ],
            resumeTasks: [
                `Add and update back-end REST APIs consumed by front-end services for account/product specific data`,
                `Refactor legacy applications by bringing them up to date with modern practices, making the code easier to understand, more efficient, and quicker to deploy `,
                `Create, configure and maintain a Logstash/ElasticSearch/Kibana stack on Amazon Web Services to parse, organize and review logs from multiple front-end applications while adhering to internal security standard`,
                `Implement automated analyses for verification of web page structure/functionality using automation tools such as Selenium, TestNG, Applitools, Sauce Labs and Browserstack`,
                `Promptly debug and create hot-fix patches for moderate to critical level production bugs upon discovery`,
            ]
        },
        {
        name: "Software Engineer",
        dates: "June 2014 - March 2015",
        urlPath: "se",
        summary: "",
        projects:[
            AolPrefProject,
            AolPaidSvcProject,
        // {
        //     name: "AOL Paid Services",
        //     summary: "AOL Paid Services provided premium features and content for a subscription fee. These included enhanced email storage, ad-free experiences, tech support, and access to exclusive content.",
        //     tools: ['Jenkins', 'ElasticSearch', 'LogStash', 'Kibana'],
        //     languages: ['JavaScript'],
        //     contributions: [

        //     ],
        // },
        AOLHelpProject,
    ],
        resumeTasks: [
            `Create and update customer facing applications for a clean/friendly user experience with the latest web practices including HTML5, Jade, SASS, JavaScript/jQuery, AngularJS`,
            `Quickly learn and apply best practices for various production server platforms including NodeJS, Apache, Tomcat and Spring to complete assigned tickets`,
            `Dockerize new/existing applications for use in AWS for zero failure/downtime with Beanstalk and Auto-scaling`,
            `Implement, maintain and enforce automated Continuous Integration and Continuous Deployment standards of web applications/services with tools including Jenkins, SonarQube, AWS and various testing frameworks`,
        ],
    }, 
    ],
    awards: [
        {
            name: `QMonster Award`,
            yearsAwarded: [2014],
            summary: `The AOL QMonster award recognized employees who consistently demonstrated exceptional skill and dedication in their work.`,
        },
    ],
},
{
    name: 'TekSystems',
    logo: '/teksyslogo.webp',
    summary: `TekSystems is a leading provider of technology staffing and services, connecting businesses with top IT professionals for contract, contract-to-hire, and direct placement roles. With a vast network of skilled candidates and expertise in various industries, TekSystems helps organizations meet their IT workforce needs efficiently. Offering tailored solutions and flexible engagement models, TekSystems enables companies to adapt to evolving technology demands and achieve their business objectives.`,
    id: 'teks',
    urlPath: 'teksystems',
    backgroundImage: '',
    location: 'Leesburg, VA',
    dates: 'June 2013 - June 2014',
    images: {
        // largeLogo: '/teksystemsLongLogo2.png',
        largePositionFocus: '30',
        largeBackground: '/tekSystemsLargeBackground.webp',
    },
    roles: [
        {
            name: "Mobile QA Engineer",
            dates: "January 2014 - June 2014",
            urlPath: "mqae",
            summary: "Facilitated seamless collaboration among developers and QA, meeting tight deadlines for iterative development. Pivotal in testing client software across diverse mobile devices, crafting test cases, and validating features.",
            projects:[{
                name: "Gathr",
                summary: "Gathr is a bundling tool that allows users to select up to 10 of popular services, including popular video streaming and music services, and have the services be bundled into one, lower cost total rate over the higher cost of paying for services separately",
                tools: ['Jenkins'],
                languages: ['Ruby'],
                contributions: [

                ],
                tileImg: '/projectImages/gathrProjectTile.png',
                // links: [
                //     {
                //         title: 'Check It Out',
                //         link: 'https://demo.microstrategy.com:3000'
                //     }
                // ]
            },{
                name: "LastPass",
                summary: "LastPass is a password manager that stores your passwords securely in an encrypted vault. It autofills login information on websites and apps, eliminating the need to remember individual passwords. This helps improve online security by reducing the risk of password reuse and phishing attacks.",
                tools: ['Jenkins'],
                languages: ['Ruby'],
                contributions: [

                ],
                tileImg: '/projectImages/lastPassProjectTile.jpeg',
                // links: [
                //     {
                //         title: 'Check It Out',
                //         link: 'https://demo.microstrategy.com:3000'
                //     }
                // ]
            }],
            resumeTasks: [
            //    "Collaborated with developers and fellow QA engineers to effectively complete time sensitive iterations",
            //     "Participated in daily meetings with the offshore team to convey new issues, updates, and transfer ownership to the active QA unit",
            //     "Assumed a large role in the testing efforts of client software with responsibilities including the creation of test cases and testing product features to ensure they perform as designed on a wide range of Android, Apple and Windows mobile devices",
            //     "Logged all software bugs and potential issues through Jira, categorized by product, subsystem, platform, and level of severity. Tracked bug status and tested fixes to ensure defects were corrected",
            //     "Assured that software releases adhere to requirements outlined in design and product documents, while preserving usability",
            //     "Communicated heavily with design, product, and development teams when necessary to resolve issues and find acceptable alternatives for original designs/BRD requirements",
            //     "Involved in the entire SDLC from planning through maintenance phases by participating in requirement document reviews, feature design discussions, as well as test case reviews",
    
                "Collaborated seamlessly with developers and QA peers to meet tight deadlines, ensuring timely completion of iterative development cycles.",
                // "Facilitated communication and knowledge transfer with offshore teams through daily meetings, effectively conveying new issues and updates to ensure continuity in QA efforts.",
                "Played a pivotal role in testing client software across diverse Android, Apple, and Windows mobile devices, meticulously crafting test cases and validating product features for adherence to design specifications.",
                "Managed the comprehensive tracking of software defects and potential issues using Jira, meticulously categorizing them by product, subsystem, platform, and severity level. Ensured timely resolution through rigorous testing of fixes.",
                "Enforced adherence to design and product requirements throughout the software release process, prioritizing usability and user experience.",
                // "Engaged in proactive communication with design, product, and development teams, fostering collaboration to resolve issues and explore alternative solutions as needed.",
                "Contributed to the entire Software Development Life Cycle (SDLC), from requirement analysis through maintenance phases, actively participating in requirement document reviews, feature design discussions, and test case evaluations.",
            ]
        },
        {
        name: "Junior QA Engineer",
        dates: "June 2013 - December 2013",
        urlPath: "jqae",
        // summary: "I specialized in ensuring the quality and reliability of the Advertising Platform. My role involved meticulously testing and validating platform functionalities to maintain optimal performance and user experience. With a keen eye for detail and a commitment to excellence, I contributed to the seamless operation and ongoing enhancement of the Advertising Platform, supporting its mission to deliver impactful analytical solutions.",
        summary: "I ensured Advertising Platform quality, meticulously testing functionalities for optimal performance. With a keen eye for detail, I contributed to seamless operation and ongoing enhancement, supporting impactful analytical solutions.",
        projects:[{
            name: "Advertising Platform",
            summary: "AOL Advertising Platform was a comprehensive suite of tools and services designed to help advertisers reach their target audience across various digital channels. The platform aimed to provide a range of solutions for advertisers to create, manage, and optimize their online advertising campaigns. ",
            tools: ['Jenkins'],
            languages: ['Ruby'],
            contributions: [

            ],
            tileImg: '/projectImages/aolAdsProjectTile.png',
            // links: [
            //     {
            //         title: 'Check It Out',
            //         link: 'https://demo.microstrategy.com:3000'
            //     }
            // ]
        }],
        resumeTasks:[
            // "Verified product quality and release readiness of new features and fixes in an agile work environment with 3-4 week iterations using Kanban methodologies",
            // "Documented various software defects through bug tracking software including JIRA and Version One",
            // "Utilized and manipulated test environments and services including Apache Tomcat, (My)SQL/Vertica, user interface and engine configurations in order to obtain the desired results/ proper environments for complete and effective testing",
            // "Collaborated with other team members and product developers in order to complete stories tracked through Version One",
            // "Constructed and executed test cases for individual stories and regression testing in Test Link",
            // "Created automated test environments and test scenarios for expeditious and precise regression testing of post-build deployments with services including Selenium and Cucumber",
            // "Functioned in a Linux/Unix environment for the web application with an infrastructure of open source languages/services",
            
            // "Ensured the quality and readiness of software releases within agile frameworks, managing iterative development cycles using Kanban methodologies.",
            "Proficiently documented software defects using industry-standard bug tracking tools such as JIRA and Version One, contributing to streamlined issue resolution processes.",
            "Demonstrated expertise in configuring and manipulating test environments and services, including Apache Tomcat, SQL/Vertica databases, and various user interface and engine settings, ensuring comprehensive testing coverage.",
            "Actively collaborated with cross-functional teams and product developers to deliver on sprint objectives, effectively tracking progress and tasks through Version One.",
            "Developed and executed comprehensive test cases for individual user stories and regression testing using Test Link, ensuring software integrity and reliability.",
            "Automated regression testing procedures by designing and implementing test environments and scenarios utilizing Selenium and Cucumber, optimizing post-build deployment validation.",
        ]
    },
    ]
},


{
    name: 'Lessard Design',
    summary: `Lessard Design is a renowned architectural firm recognized for its innovative and sustainable design solutions across diverse sectors including residential, commercial, and hospitality. With a focus on creating timeless and functional spaces, Lessard Design collaborates closely with clients to deliver projects that exceed expectations. Combining creativity, expertise, and a commitment to excellence, Lessard Design continues to shape environments that inspire and enrich communities worldwide.`,
    logo: '/lessard-design-logo.webp',
    id: 'less',
    urlPath: 'lessarddesign',
    backgroundImage: 'May 2012 - February 2013',
    location: 'Leesburg, VA',
    dates: 'March 2016 - Current',

    images: {
        // largeLogo: '/StJohnsLogo.png',
        // largeBackground: '/aolBuilding2.jpeg',
        // largePositionFocus: '75',
        largeLogo: '/lessardLongLogo.png',
        largeBackground: '/lessardLargeBackground.webp',

    },
    roles: [{
        name: "Information Technology Intern",
        dates: "May 2012 - February 2013",
        urlPath: "iti",
        summary: "Delivered desktop support, managed device enrollments, secured networks, updated systems, maintained inventory, and instructed staff on IT initiatives ",
        projects:[{
            name: "IT Solutions",
            summary: "",
            tools: [`WSUS`, `Trend Micro Security`, `Active Directory`],
            languages: ['Powershell'],
            contributions: [

            ],
            tileImg: '/projectImages/lessardITProjectTile.jpeg',
            // links: [
            //     {
            //         title: 'Check It Out',
            //         link: 'https://demo.microstrategy.com:3000'
            //     }
            // ]
        }],
        resumeTasks: [
            `Provided desktop/hardware support to clients and staff based off of helpdesk ticket requests`,
            `Enrolled and administered company phones and tablets in the Mobile Device Management System and ensured the devices remained compliant with company protocols`,
            `Confirmed and managed network stability and security through use of programs such as WSUS, Active Directory, and TrendMicro Business Security`,
            `Maintained and updated the inventory for all company equipment through use of Microsoft Office and Sharepoint`,
            `Instructed staff on new IT initiatives and applications in order to increase productivity and understanding of programs`,
        ]
    }]
},
];

export const schoolHistory = [
    {
        name: `St. John's University`,
        level: 'College, Cum Laude',
        location: 'New York, New York',
        duration: 'August 2009 - May 2013',
        degree: 'Computer Science, B.S., Cum Laude',
        secondaryDegree: 'Mathmatics - Minor',
        finalGPA: '3.7',
        images: {
            largeLogo: '/StJohnsLogo.png',
            largeBackground: '/st_johns_large_background_image.jpeg',
            largePositionFocus: '75',
        },
        groups: [
            {
                name: 'Student Government Association',
                position: `St. John's College Senator`,
                summary: 'Represent the student body, advocating for student interests, and participating in decision-making processes related to campus affairs.',
                // roles: [],
                dates: {
                    start: 2012,
                    end: 2013,
                },
            },{
                name: 'Global Politics Society',
                position: 'Vice President',
                summary: '',
                dates: {
                    start: 2010,
                    end: 2013,
                },
            },
            {
                name: 'Asian-American Cultural Organization',
                position: 'Parliamentarian',
                summary: '',
                dates: {
                    start: 2010,
                    end: 2011,
                },
            },
            {
                name: 'Recreation Order of the Gameroom',
                position: 'President',
                summary: '',
                dates: {
                    start: 2011,
                    end: 2013,
                },
            },
            {
                name: 'ODK Leadership Honors Society',
                position: 'Inductee',
                summary: 'The Omicron Delta Kappa (ODK) is a prestigious national honor society in the United States that recognizes and develops exceptional leadership qualities in college students across academics, service, athletics, and the arts.',
                dates: {
                    start: 2013,
                    end: 'Current',
                },
            },
            {
                name: 'Gamma Kappa Pi Honors Society',
                position: 'Inductee',
                summary: 'The Gamma Kappa Pi Honors Society acknowledges graduating students for outstanding scholarship, leadership, and a commitment to service.  They emphasize continued leadership and service after graduation, fostering a legacy of well-rounded, impactful graduates.',
                dates: {
                    start: 2013,
                    end: 'Current',
                },
            },
            {
                name: 'Who\'s Who',
                position: 'Inductee',
                summary: '\"Who\'s Who\" clubs recognize well-rounded students who excel in academics, leadership, and community service. Membership can be a prestigious honor that acknowledges a student\'s overall achievements and contributions.',
                dates: {
                    start: 2013,
                    end: 'Current',
                },
            },
            {
                name: 'ESL Program',
                position: 'Volunteer',
                summary: '',
                dates: {
                    start: 2010,
                    end: 2013,
                },
            },
        ],
        awards: [
            {
                name: `Dean's List`,
                yearsAwarded: [2010, 2011, 2012, 2013],
                summary: `The Dean’s List is awarded to full time students who achieve a minimum semester GPA of 3.4 for both semesters in an academic year.`,
            },
            {
                name: `Certificate of Acheievement, C.S.`,
                yearsAwarded: [2013],
                summary: `This is awarded to the student that has shown the best promise and highest GPA throughout the course of their education and awarded in their senior year.`,
            },
            
        ]
    }
];