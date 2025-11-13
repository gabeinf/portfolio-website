import '../styles/ProjectCard.css';
interface ProjectCardProps {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    thumbnail?: string;
    index: number;
}
declare const ProjectCard: ({ title, slug, description, tags, thumbnail, index }: ProjectCardProps) => import("react/jsx-runtime").JSX.Element;
export default ProjectCard;
