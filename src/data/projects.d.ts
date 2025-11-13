export interface Project {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    thumbnail?: string;
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    role: string;
    timeline: string;
    images?: string[];
    link?: string;
    linkType?: 'website' | 'github';
}
export declare const projects: Project[];
export declare const getProjectBySlug: (slug: string) => Project | undefined;
