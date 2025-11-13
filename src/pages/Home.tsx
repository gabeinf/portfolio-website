import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import VideoCard from '../components/VideoCard';
import { projects } from '../data/projects';
import { getCreativeVideos } from '../data/videos';
import portrait from '../assets/Portrait.jpg';
import '../styles/Home.css';

const Home = () => {
  const videos = getCreativeVideos();

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="hero" className="home-hero">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-layout">
            {/* Left Side - Info */}
            <div className="hero-info">
              <motion.h1
                className="home-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Gabriel Smith
              </motion.h1>

              <motion.p
                className="home-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                React Native developer blending technical precision with high-performance
                design, building scalable, visually dynamic mobile applications.
              </motion.p>

              <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <span>Scroll to explore</span>
                <div className="scroll-arrow">↓</div>
              </motion.div>
            </div>

            {/* Right Side - Portrait */}
            <motion.div
              className="hero-portrait"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img src={portrait} alt="Gabriel Smith" className="portrait-image" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technical Section */}
      <section id="technical" className="home-section technical-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical</h2>
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
              thumbnail={project.thumbnail}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Creative Section */}
      <section id="creative" className="home-section creative-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Creative</h2>
          <p className="section-description">
            Music Videos & Creative Direction
          </p>
        </motion.div>

        <div className="video-grid">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              slug={video.slug}
              thumbnail={video.thumbnail}
              index={index}
            />
          ))}
        </div>

        {videos.length === 0 && (
          <motion.div
            className="empty-state"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>No creative projects yet. Check back soon!</p>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Home;
