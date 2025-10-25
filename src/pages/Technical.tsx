import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import '../styles/Section.css';

const Technical = () => {
  return (
    <div className="section-page">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title">Technical</h1>
        <p className="section-description">
          Web Development, UI/UX Design & Software Engineering
        </p>
      </motion.div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            slug={project.slug}
            description={project.description}
            tags={project.tags}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Technical;
