import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getVideoBySlug } from '../data/videos';
import '../styles/VideoDetail.css';

const VideoDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const video = slug ? getVideoBySlug(slug) : undefined;

  if (!video) {
    return <Navigate to="/creative" replace />;
  }

  // Extract YouTube video ID if it's a YouTube URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url; // Return original URL if it's not YouTube (for Cloudinary)
  };

  const embedUrl = getYouTubeEmbedUrl(video.url);
  const isCloudinary = video.url.includes('cloudinary');

  return (
    <div className="video-detail">
      <motion.div
        className="video-detail-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back Button */}
        <Link to="/creative" className="back-button">
          ← Back to Creative
        </Link>

        {/* Video Hero */}
        <div className="video-hero">
          <h1 className="video-title">{video.title}</h1>
          <div className="video-categories">
            {video.category.map((cat, idx) => (
              <span key={idx} className="video-category-tag">
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Video Player */}
        <div className="video-player-container">
          <iframe
            src={embedUrl}
            className="video-player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            title={video.title}
          />
        </div>

        {/* Video Info Section */}
        <section className="video-info-section">
          <h2 className="info-heading">About This Project</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Type</h3>
              <p>{video.category.join(' / ')}</p>
            </div>
            <div className="info-card">
              <h3>Platform</h3>
              <p>{isCloudinary ? 'Cloudinary' : 'YouTube'}</p>
            </div>
          </div>
        </section>

        {/* Description Section - Updated for collaboration and end-to-end creation */}
        <section className="video-description-section">
          <h2 className="section-heading">Project Details</h2>
          <p className="description-text">
            This piece was created through an end-to-end production process — 
            from concept development and storyboarding to the editing process. I managed both the technical and creative direction, using motion design and VFX 
            to enhance the narrative while maintaining visual coherence with the project’s theme.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default VideoDetail;
