export interface AccordionsItem {
    title: string,
    content: AcconrdionContent[],
    open: boolean,
}

interface AcconrdionContent {
    title: string,
    link: string,
    icon?: string,
}