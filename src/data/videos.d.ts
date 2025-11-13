export interface Video {
    title: string;
    slug: string;
    url: string;
    thumbnail: string;
    category: string[];
    section: 'technical' | 'creative';
}
export declare const videos: Video[];
export declare const getTechnicalVideos: () => Video[];
export declare const getCreativeVideos: () => Video[];
export declare const getVideoBySlug: (slug: string) => Video | undefined;
