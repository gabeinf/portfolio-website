import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import VideoCard from '../components/VideoCard';
import { getCreativeVideos } from '../data/videos';
import '../styles/Section.css';
const Creative = () => {
    const videos = getCreativeVideos();
    return (_jsxs("div", { className: "section-page", children: [_jsxs(motion.div, { className: "section-header", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, children: [_jsx("h1", { className: "section-title", children: "Creative" }), _jsx("p", { className: "section-description", children: "Music Videos & Creative Direction" })] }), _jsx("div", { className: "video-grid", children: videos.map((video, index) => (_jsx(VideoCard, { title: video.title, slug: video.slug, thumbnail: video.thumbnail, index: index }, index))) }), videos.length === 0 && (_jsx(motion.div, { className: "empty-state", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.3 }, children: _jsx("p", { children: "No creative projects yet. Check back soon!" }) }))] }));
};
export default Creative;
