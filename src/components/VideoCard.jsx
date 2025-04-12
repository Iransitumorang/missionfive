import React from 'react';

const VideoCard = () => {
  return (
    <div className="video-card">
      <img src="card1.png" alt="Video Thumbnail" className="video-thumbnail" />
      <div className="video-info">
        <h3 className="video-title">Big 4 Auditor Financial Analyst</h3>
        <p className="video-description">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
        <div className="instructor">
          <img src="Avatar.png" alt="Jenna" className="instructor-avatar" />
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