import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/VideoCard.css';
const VideoCard = ({ title, slug, thumbnail, index }) => {
    return (_jsx(motion.div, { className: "video-card", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, whileHover: {
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
        }, children: _jsxs(Link, { to: `/creative/${slug}`, className: "video-card-link", children: [_jsxs("div", { className: "video-card-image-container", children: [_jsx("img", { src: thumbnail, alt: title, className: "video-card-image", loading: "lazy" }), _jsx("div", { className: "video-card-overlay" })] }), _jsx("div", { className: "video-card-content", children: _jsx("h3", { className: "video-card-title", children: title }) })] }) }));
};
export default VideoCard;
