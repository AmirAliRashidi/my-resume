export interface AccordionsItem {
    title: string,
    content: AcconrdionContent[],
    link: boolean,
    open: boolean,
}

interface AcconrdionContent {
    title: string,
    link: string,
    icon?: string,
}

export interface ISkillsItem {
    name: string,
    icon: string,
    rating?: number,
}

export interface IProjectItem {
    name: string,
    detail?: string,
    link?: string,
    achievements?: string[],
}

export interface IJobItem {
    title: string,
    logo: string,
    detail?: string,
    website: string,
    date: string,
    achievements?: string[],
}