import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  index: number;
}

const ProjectCard = ({ title, slug, description, tags, thumbnail, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {thumbnail && (
        <Link to={`/technical/${slug}`} className="project-card-thumbnail">
          <img src={thumbnail} alt={title} />
        </Link>
      )}
      <div className="project-card-content">
        <h3 className="project-card-title">
          <Link to={`/technical/${slug}`} className="project-title-link">
            {title}
          </Link>
        </h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-technologies">
          {tags.map((tag, idx) => (
            <span key={idx}>
              {tag}
              {idx < tags.length - 1 && ' ~ '}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
