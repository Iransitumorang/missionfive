import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/video.css';

const Video = () => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState('intro');

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="video-page">
      <header className="video-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Foundations of User Experience Design
        </button>
        <div className="header-right">
          <div className="progress">
            <span className="progress-text">10/12</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=60"
            alt="Profile"
            className="profile-image"
          />
        </div>
      </header>

      <div className="video-content">
        <div className="video-player">
          <div className="play-button">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        
        <div className="video-info">
          <h1>Praktikkan Skill dengan Technical Book</h1>
          <p>Pelajari dan praktikkan skill teknis dalam berbagai industri dengan Technical Book Riselearn</p>
          
          <div className="instructor">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=60"
              alt="Instructor"
              className="instructor-avatar"
            />
            <div className="instructor-info">
              <div className="instructor-name">Jenna Ortega</div>
              <div className="instructor-role">Senior Accountant di Gojek</div>
            </div>
          </div>

          <div className="rating">
            <div className="stars">
              {'★'.repeat(3)}{'☆'.repeat(2)}
            </div>
            <span className="rating-text">3.5 (86)</span>
          </div>
        </div>
      </div>

      <div className="video-sidebar">
        <div className="completion-card">
          <h3>25% Modul Telah Selesai</h3>
          <p>Selesaikan Semua Modul Untuk Mendapatkan Sertifikat</p>
          <button className="certificate-button">Ambil Sertifikat</button>
        </div>

        <div className="module-list">
          <div className={`module-section ${expandedSection === 'intro' ? 'expanded' : ''}`}>
            <h3 onClick={() => toggleSection('intro')}>Introduction to HR</h3>
            {expandedSection === 'intro' && (
              <div className="module-content">
                <div className="video-item completed">
                  <div className="video-item-icon">✓</div>
                  <div className="video-item-info">
                    <div>Video: Introduction to HR</div>
                    <span>12 Menit</span>
                  </div>
                </div>
                <div className="video-item">
                  <div className="video-item-icon">▶</div>
                  <div className="video-item-info">
                    <div>Video: Introduction to HR</div>
                    <span>12 Menit</span>
                  </div>
                </div>
                <div className="video-item">
                  <div className="video-item-icon">▶</div>
                  <div className="video-item-info">
                    <div>Video: Introduction to HR</div>
                    <span>12 Menit</span>
                  </div>
                </div>
                <div className="video-item">
                  <div className="video-item-icon">▶</div>
                  <div className="video-item-info">
                    <div>Video: Introduction to HR</div>
                    <span>12 Menit</span>
                  </div>
                </div>
                <div className="video-item">
                  <div className="video-item-icon">📄</div>
                  <div className="video-item-info">
                    <div>Rangkuman: Introduction to HR</div>
                    <span>12 Menit</span>
                  </div>
                </div>
                <div className="video-item">
                  <div className="video-item-icon">❓</div>
                  <div className="video-item-info">
                    <div>Quiz: Introduction to HR</div>
                    <span>10 Pertanyaan</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button className="review-button">
          ⭐ Beri Review & Rating
        </button>
      </div>

      <div className="navigation-footer">
        <button className="nav-button prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 19l-7-7 7-7"/>
          </svg>
          Foundations of User Experience Design
        </button>
        <button className="nav-button next">
          Foundations of User Experience Design
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Video; 