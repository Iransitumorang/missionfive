import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';

const Home = () => {
  return (
    <div>
      <Header />
      
      <section className="hero">
        <h1>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
        <p>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
        <button className="hero-button">Temukan Video Course untuk Dipelajari!</button>
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
        </div>

        <div className="video-grid">
          {[...Array(9)].map((_, i) => (
            <VideoCard key={i} />
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-label">NEWSLETTER</div>
        <h2>Mau Belajar Lebih Banyak?</h2>
        <p>Daftarkan dirimu untuk mendapatkan informasi terbaru dan<br />penawaran spesial dari program-program terbaik hariesok.id</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Masukkan Emailmu" />
          <button>Subscribe</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;