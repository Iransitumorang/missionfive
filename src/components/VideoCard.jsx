import React from 'react';

const VideoCard = () => {
  return (
    <div className="video-card">
      <img 
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60" 
        alt="Video Thumbnail" 
        className="video-thumbnail" 
        loading="lazy"
      />
      <div className="video-info">
        <h3 className="video-title">Big 4 Auditor Financial Analyst</h3>
        <p className="video-description">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
        <div className="instructor">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=60" 
            alt="Jenna" 
            className="instructor-avatar"
            loading="lazy"
          />
          <div className="instructor-info">
            <div className="instructor-name">Jenna Ortega</div>
            <div className="instructor-role">Senior Accountant di Gojek</div>
          </div>
        </div>
        <div className="course-meta">
          <div className="rating">
            <span className="stars">★★★☆☆</span>
            <span>3.5 (86)</span>
          </div>
          <div className="price">Rp 300K</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;