import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects';
import '../styles/CaseStudy.css';

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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

  return (
    <div className="case-study">
      <motion.div
        className="case-study-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back Button */}
        <Link to="/#technical" className="back-button" onClick={handleBackClick}>
          ← Back to Technical
        </Link>

        {/* Hero Section */}
        <div className="case-study-hero">
          <h1 className="case-study-title">{project.title}</h1>
          <p className="case-study-subtitle">{project.description}</p>
          <div className="case-study-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="case-study-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="project-details-grid">
          <div className="detail-card">
            <h3>Role</h3>
            <p>{project.role}</p>
          </div>
          <div className="detail-card">
            <h3>Timeline</h3>
            <p>{project.timeline}</p>
          </div>
          <div className="detail-card">
            <h3>Technologies</h3>
            <div className="tech-list">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Link */}
        {project.link && (
          <div className="project-link-section">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
            >
              {project.linkType === 'website' ? '🌐 Visit Website' : '💻 View on GitHub'}
            </a>
          </div>
        )}

        {/* Overview Section */}
        <section className="case-study-section">
          <h2 className="section-heading">Overview</h2>
          <p className="section-text">{project.overview}</p>
        </section>

        {/* Challenge Section */}
        <section className="case-study-section">
          <h2 className="section-heading">The Challenge</h2>
          <p className="section-text">{project.challenge}</p>
        </section>

        {/* Solution Section */}
        <section className="case-study-section">
          <h2 className="section-heading">The Solution</h2>
          <p className="section-text">{project.solution}</p>
        </section>

        {/* Results Section */}
        <section className="case-study-section">
          <h2 className="section-heading">Results & Impact</h2>
          <ul className="results-list">
            {project.results.map((result, idx) => (
              <li key={idx} className="result-item">
                {result}
              </li>
            ))}
          </ul>
        </section>

        {/* Images Section (if available) */}
        {project.images && project.images.length > 0 && (
          <section className="case-study-section">
            <h2 className="section-heading">Project Gallery</h2>
            <div className="image-gallery">
              {project.images.map((image, idx) => (
                <div key={idx} className="gallery-item">
                  <img src={image} alt={`${project.title} screenshot ${idx + 1}`} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="case-study-cta">
          <h2>Interested in working together?</h2>
          <p>Let's create something amazing.</p>
          <Link to="/" className="cta-button">
            View More Projects
          </Link>
        </section>
      </motion.div>
    </div>
  );
};

export default CaseStudy;
