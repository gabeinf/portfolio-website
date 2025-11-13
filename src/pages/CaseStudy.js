import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects';
import '../styles/CaseStudy.css';
const CaseStudy = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = slug ? getProjectBySlug(slug) : undefined;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);
    if (!project) {
        return _jsx(Navigate, { to: "/", replace: true });
    }
    const handleBackClick = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const technicalSection = document.getElementById('technical');
            if (technicalSection) {
                const headerOffset = 80;
                const elementPosition = technicalSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }, 100);
    };
    return (_jsx("div", { className: "case-study", children: _jsxs(motion.div, { className: "case-study-content", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, children: [_jsx(Link, { to: "/#technical", className: "back-button", onClick: handleBackClick, children: "\u2190 Back to Technical" }), _jsxs("div", { className: "case-study-hero", children: [_jsx("h1", { className: "case-study-title", children: project.title }), _jsx("p", { className: "case-study-subtitle", children: project.description }), _jsx("div", { className: "case-study-tags", children: project.tags.map((tag, idx) => (_jsx("span", { className: "case-study-tag", children: tag }, idx))) })] }), _jsxs("div", { className: "project-details-grid", children: [_jsxs("div", { className: "detail-card", children: [_jsx("h3", { children: "Role" }), _jsx("p", { children: project.role })] }), _jsxs("div", { className: "detail-card", children: [_jsx("h3", { children: "Timeline" }), _jsx("p", { children: project.timeline })] }), _jsxs("div", { className: "detail-card", children: [_jsx("h3", { children: "Technologies" }), _jsx("div", { className: "tech-list", children: project.technologies.map((tech, idx) => (_jsx("span", { className: "tech-badge", children: tech }, idx))) })] })] }), project.link && (_jsx("div", { className: "project-link-section", children: _jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "project-link-button", children: project.linkType === 'website' ? '🌐 Visit Website' : '💻 View on GitHub' }) })), _jsxs("section", { className: "case-study-section", children: [_jsx("h2", { className: "section-heading", children: "Overview" }), _jsx("p", { className: "section-text", children: project.overview })] }), _jsxs("section", { className: "case-study-section", children: [_jsx("h2", { className: "section-heading", children: "The Challenge" }), _jsx("p", { className: "section-text", children: project.challenge })] }), _jsxs("section", { className: "case-study-section", children: [_jsx("h2", { className: "section-heading", children: "The Solution" }), _jsx("p", { className: "section-text", children: project.solution })] }), _jsxs("section", { className: "case-study-section", children: [_jsx("h2", { className: "section-heading", children: "Results & Impact" }), _jsx("ul", { className: "results-list", children: project.results.map((result, idx) => (_jsx("li", { className: "result-item", children: result }, idx))) })] }), project.images && project.images.length > 0 && (_jsxs("section", { className: "case-study-section", children: [_jsx("h2", { className: "section-heading", children: "Project Gallery" }), _jsx("div", { className: "image-gallery", children: project.images.map((image, idx) => (_jsx("div", { className: "gallery-item", children: _jsx("img", { src: image, alt: `${project.title} screenshot ${idx + 1}` }) }, idx))) })] })), _jsxs("section", { className: "case-study-cta", children: [_jsx("h2", { children: "Interested in working together?" }), _jsx("p", { children: "Let's create something amazing." }), _jsx(Link, { to: "/", className: "cta-button", children: "View More Projects" })] })] }) }));
};
export default CaseStudy;
