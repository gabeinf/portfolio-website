import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import pfp from '../assets/gabeinf.jpg';

function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img className="header-pfp" src={pfp} alt="Gabriel Smith" />
          <span className="header-name">Gabriel Smith</span>
        </Link>

        <nav className="header-nav">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/technical"
            className={`nav-link ${isActive('/technical') ? 'active' : ''}`}
          >
            Technical
          </Link>
          <Link
            to="/creative"
            className={`nav-link ${isActive('/creative') ? 'active' : ''}`}
          >
            Creative
          </Link>
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
