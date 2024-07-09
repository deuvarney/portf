type ProjectLink = {
    title: string;
    link: string;
    linkText?: string;
    img?: string;
    id: number | string;
    summary: string;
};

export type WorkHistoryProject = {
    name: string;
    summary: string;
    tools: string[];
    languages: string[];
    tileImg: string;
    contributions: string[];
    links?: ProjectLink[];
    id: string;
};

type Image = {
    largeLogo?: string;
    largeBackground: string;
    largePositionFocus?: string;
};

type SchoolGroup = {
    name: string;
    position: string;
    summary: string;
    dates: {
        start: number | string;
        end: number | string;
    };
};

type Award = {
    name: string;
    yearsAwarded: number[];
    summary: string;
};

type SchoolHistoryItem = {
    name: string;
    level: string;
    location: string;
    duration: string;
    degree: string;
    secondaryDegree?: string;
    finalGPA: string;
    images: Image;
    groups: SchoolGroup[];
    awards: Award[];
};

export type SchoolHistory = SchoolHistoryItem[];

type WorkHistoryRole = {
    name: string;
    dates: string;
    summary?: string;
    urlPath?: string;
    projects: Project[];
    resumeTasks: string[];
};

export type WorkHistoryItem = {
    name: string;
    summary: string;
    logo: string;
    id: string;
    location: string;
    urlPath: string;
    backgroundImage: string;
    dates: string;
    images: Image;
    roles: WorkHistoryRole[];
    awards: Award[];
};
