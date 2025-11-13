import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import pfp from '../assets/gabeinf.jpg';
function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('hero');
    const isHomePage = location.pathname === '/';
    useEffect(() => {
        if (!isHomePage)
            return;
        const handleScroll = () => {
            const sections = ['hero', 'technical', 'creative'];
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && scrollPosition >= section.offsetTop) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerOffset = 80;
            const elementPosition = section.offsetTop;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        if (isHomePage) {
            // Already on home page, just scroll to section
            scrollToSection(sectionId);
        }
        else {
            // Navigate to home page with the section hash, then scroll
            navigate('/', { replace: false });
            // Wait for navigation to complete before scrolling
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        }
    };
    return (_jsx("header", { className: "header", children: _jsxs("div", { className: "header-container", children: [_jsxs("a", { href: "/", className: "header-logo", onClick: (e) => handleNavClick(e, 'hero'), children: [_jsx("img", { className: "header-pfp", src: pfp, alt: "Gabriel Smith" }), _jsx("span", { className: "header-name", children: "Gabriel Smith" })] }), _jsxs("nav", { className: "header-nav", children: [_jsx("a", { href: "/#hero", onClick: (e) => handleNavClick(e, 'hero'), className: `nav-link ${isHomePage && activeSection === 'hero' ? 'active' : ''}`, children: "Home" }), _jsx("a", { href: "/#technical", onClick: (e) => handleNavClick(e, 'technical'), className: `nav-link ${isHomePage && activeSection === 'technical' ? 'active' : ''}`, children: "Technical" }), _jsx("a", { href: "/#creative", onClick: (e) => handleNavClick(e, 'creative'), className: `nav-link ${isHomePage && activeSection === 'creative' ? 'active' : ''}`, children: "Creative" }), _jsx("a", { href: "https://www.instagram.com/gabeinf/", target: "_blank", rel: "noopener noreferrer", className: "nav-link external", children: "Instagram" })] })] }) }));
}
export default Header;
