import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import '../styles/Section.css';
const Technical = () => {
    return (_jsxs("div", { className: "section-page", children: [_jsxs(motion.div, { className: "section-header", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, children: [_jsx("h1", { className: "section-title", children: "Technical" }), _jsx("p", { className: "section-description", children: "Web Development, UI/UX Design & Software Engineering" })] }), _jsx("div", { className: "project-grid", children: projects.map((project, index) => (_jsx(ProjectCard, { title: project.title, slug: project.slug, description: project.description, tags: project.tags, index: index }, project.slug))) })] }));
};
export default Technical;
