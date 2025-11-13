import '../styles/VideoCard.css';
interface VideoCardProps {
    title: string;
    slug: string;
    thumbnail: string;
    index: number;
}
declare const VideoCard: ({ title, slug, thumbnail, index }: VideoCardProps) => import("react/jsx-runtime").JSX.Element;
export default VideoCard;
