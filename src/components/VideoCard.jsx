import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/videocard.css';

const VideoCard = ({ id = 1 }) => {
  const navigate = useNavigate();

  // Array gambar placeholder untuk course
  const courseImages = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=60"
  ];

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Tambahkan bintang penuh
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star-full">★</span>
      );
    }

    // Tambahkan setengah bintang jika ada
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star-half">★</span>
      );
    }

    // Tambahkan bintang kosong
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star-empty">★</span>
      );
    }

    return stars;
  };

  // Menggunakan modulo untuk mengulang gambar jika id melebihi jumlah gambar
  const imageIndex = (id - 1) % courseImages.length;

  return (
    <div className="video-card" onClick={handleClick}>
      <div className="card-image">
        <img src={courseImages[imageIndex]} alt="Course Thumbnail" />
      </div>
      <div className="card-content">
        <h3>Big 4 Auditor Financial Analyst</h3>
        <p className="description">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
        <div className="instructor">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=60" 
            alt="Instructor" 
            className="instructor-avatar"
          />
          <span className="instructor-info">
            <span className="instructor-name">Jenna Ortega</span>
            <span className="instructor-role">Senior Accountant di Gojek</span>
          </span>
        </div>
        <div className="card-footer">
          <div className="rating">
            <div className="stars">
              {renderStars(3.5)}
            </div>
            <span className="rating-text">3.5 (86)</span>
          </div>
          <div className="price">Rp 300K</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;