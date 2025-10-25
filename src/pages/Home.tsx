import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
          React Native developer blending technical precision with high-performance<br />
          design, building scalable, visually dynamic mobile applications.
        </motion.p>


        <motion.div
          className="home-sections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/technical" className="section-card">
            <div className="section-card-content">
              <h2>Technical</h2>
              <p>React Native developer specializing in cross-platform mobile applications</p>
              <span className="section-arrow">→</span>
            </div>
          </Link>

          <Link to="/creative" className="section-card">
            <div className="section-card-content">
              <h2>Creative</h2>
              <p>Music Videos & Creative Direction</p>
              <span className="section-arrow">→</span>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
