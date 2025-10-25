import { motion } from 'framer-motion';
import VideoCard from '../components/VideoCard';
import { getCreativeVideos } from '../data/videos';
import '../styles/Section.css';

const Creative = () => {
  const videos = getCreativeVideos();

  return (
    <div className="section-page">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title">Creative</h1>
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
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>No creative projects yet. Check back soon!</p>
        </motion.div>
      )}
    </div>
  );
};

export default Creative;
