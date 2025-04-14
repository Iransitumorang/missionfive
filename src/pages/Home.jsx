import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';
import '../styles/home.css';
import '../styles/header.css';

const Home = () => {
  const navigate = useNavigate();

  const handleTabClick = (e, path) => {
    e.preventDefault();
    if (path) {
      navigate(path);
    }
  };

  return (
    <div>
      <Header />
      
      <section className="hero">
        <div className="hero-text">
          <h1>Revolusi Pembelajaran</h1>
          <p>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
        </div>
        <button 
          className="hero-button"
          onClick={() => navigate('/video/1')}
        >
          Temukan Video Course untuk Dipelajari!
        </button>
      </section>

      <section className="content">
        <h2 className="section-title">Koleksi Video Pembelajaran Unggulan</h2>
        <p className="section-subtitle">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        <div className="tabs">
          <a href="#" className="tab active">Semua Kelas</a>
          <a href="#" className="tab">Pemasaran</a>
          <a href="#" className="tab">Desain</a>
          <a href="#" className="tab">Pengembangan Diri</a>
          <a href="#" className="tab">Bisnis</a>
          <a href="#" className="tab product-tab" onClick={(e) => handleTabClick(e, '/product')}>Semua Produk</a>
        </div>

        <div className="video-grid">
          {[...Array(9)].map((_, i) => (
            <VideoCard key={i} id={i + 1} />
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-label">NEWSLETTER</div>
          <h2>Mau Belajar Lebih Banyak?</h2>
          <p>Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Masukkan Emailmu"
              name="email"
              autoComplete="email"
            />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;