import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ title, slug, description, tags, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <Link to={`/technical/${slug}`} className="project-card-link">
        <div className="project-card-content">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">{description}</p>
          <div className="project-card-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="project-card-footer">
            <span className="view-case-study">View Case Study</span>
            <span className="arrow">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
