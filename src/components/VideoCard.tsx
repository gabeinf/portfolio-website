import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/VideoCard.css';

interface VideoCardProps {
  title: string;
  slug: string;
  thumbnail: string;
  index: number;
}

const VideoCard = ({ title, slug, thumbnail, index }: VideoCardProps) => {
  return (
    <motion.div
      className="video-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <Link to={`/creative/${slug}`} className="video-card-link">
        <div className="video-card-image-container">
          <img
            src={thumbnail}
            alt={title}
            className="video-card-image"
            loading="lazy"
          />
          <div className="video-card-overlay"></div>
        </div>
        <div className="video-card-content">
          <h3 className="video-card-title">{title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default VideoCard;
