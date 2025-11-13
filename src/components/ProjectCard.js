import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';
const ProjectCard = ({ title, slug, description, tags, thumbnail, index }) => {
    return (_jsxs(motion.div, { className: "project-card", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: [thumbnail && (_jsx(Link, { to: `/technical/${slug}`, className: "project-card-thumbnail", children: _jsx("img", { src: thumbnail, alt: title }) })), _jsxs("div", { className: "project-card-content", children: [_jsx("h3", { className: "project-card-title", children: _jsx(Link, { to: `/technical/${slug}`, className: "project-title-link", children: title }) }), _jsx("p", { className: "project-card-description", children: description }), _jsx("div", { className: "project-card-technologies", children: tags.map((tag, idx) => (_jsxs("span", { children: [tag, idx < tags.length - 1 && ' ~ '] }, idx))) })] })] }));
};
export default ProjectCard;
