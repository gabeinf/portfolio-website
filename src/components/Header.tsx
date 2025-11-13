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
    if (!isHomePage) return;

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

  const scrollToSection = (sectionId: string) => {
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (isHomePage) {
      // Already on home page, just scroll to section
      scrollToSection(sectionId);
    } else {
      // Navigate to home page with the section hash, then scroll
      navigate('/', { replace: false });
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <a
          href="/"
          className="header-logo"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          <img className="header-pfp" src={pfp} alt="Gabriel Smith" />
          <span className="header-name">Gabriel Smith</span>
        </a>

        <nav className="header-nav">
          <a
            href="/#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className={`nav-link ${isHomePage && activeSection === 'hero' ? 'active' : ''}`}
          >
            Home
          </a>
          <a
            href="/#technical"
            onClick={(e) => handleNavClick(e, 'technical')}
            className={`nav-link ${isHomePage && activeSection === 'technical' ? 'active' : ''}`}
          >
            Technical
          </a>
          <a
            href="/#creative"
            onClick={(e) => handleNavClick(e, 'creative')}
            className={`nav-link ${isHomePage && activeSection === 'creative' ? 'active' : ''}`}
          >
            Creative
          </a>
          <a
            href="https://www.instagram.com/gabeinf/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link external"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
