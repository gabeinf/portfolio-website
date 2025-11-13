import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getVideoBySlug } from '../data/videos';
import '../styles/VideoDetail.css';
const VideoDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const video = slug ? getVideoBySlug(slug) : undefined;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);
    if (!video) {
        return _jsx(Navigate, { to: "/", replace: true });
    }
    const handleBackClick = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const creativeSection = document.getElementById('creative');
            if (creativeSection) {
                const headerOffset = 80;
                const elementPosition = creativeSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }, 100);
    };
    // Extract YouTube video ID if it's a YouTube URL
    const getYouTubeEmbedUrl = (url) => {
        const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
        if (videoIdMatch) {
            return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
        }
        return url; // Return original URL if it's not YouTube (for Cloudinary)
    };
    const embedUrl = getYouTubeEmbedUrl(video.url);
    const isCloudinary = video.url.includes('cloudinary');
    return (_jsx("div", { className: "video-detail", children: _jsxs(motion.div, { className: "video-detail-content", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, children: [_jsx(Link, { to: "/#creative", className: "back-button", onClick: handleBackClick, children: "\u2190 Back to Creative" }), _jsxs("div", { className: "video-hero", children: [_jsx("h1", { className: "video-title", children: video.title }), _jsx("div", { className: "video-categories", children: video.category.map((cat, idx) => (_jsx("span", { className: "video-category-tag", children: cat }, idx))) })] }), _jsx("div", { className: "video-player-container", children: _jsx("iframe", { src: embedUrl, className: "video-player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen", allowFullScreen: true, title: video.title }) }), _jsxs("section", { className: "video-info-section", children: [_jsx("h2", { className: "info-heading", children: "About This Project" }), _jsxs("div", { className: "info-grid", children: [_jsxs("div", { className: "info-card", children: [_jsx("h3", { children: "Type" }), _jsx("p", { children: video.category.join(' / ') })] }), _jsxs("div", { className: "info-card", children: [_jsx("h3", { children: "Platform" }), _jsx("p", { children: isCloudinary ? 'Cloudinary' : 'YouTube' })] })] })] }), _jsxs("section", { className: "video-description-section", children: [_jsx("h2", { className: "section-heading", children: "Project Details" }), _jsx("p", { className: "description-text", children: "This piece was created through an end-to-end production process \u2014 from concept development and storyboarding to the editing process. I managed both the technical and creative direction, using motion design and VFX to enhance the narrative while maintaining visual coherence with the project\u2019s theme." })] })] }) }));
};
export default VideoDetail;
