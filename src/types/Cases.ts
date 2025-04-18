export type CaseContainerThemeType = 'particles' | 'lattice' | 'smartphones' | 'tablet' | 'ground' | 'nature';

export type CaseCardThemeType = 'nature' | 'laptop-above' | 'laptop-below';

export type CaseCardType = {
    image: string;
    title: string;
    number: string;
    link?: string;
    year?: string;
    desc?: string;
    video?: string;
    theme?: CaseCardThemeType;
};
