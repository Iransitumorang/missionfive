import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/bayar.css';

const Bayar = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ minutes: 60, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            clearInterval(timer);
            return prev;
          }
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  return (
    <div className="bayar-page">
      <Header />
      
      <div className="container py-4">
        {/* Progress Bar */}
        <div className="payment-progress">
          <div className="progress-item completed">
            <div className="progress-circle">✓</div>
            <span>Pilih Metode</span>
          </div>
          <div className="progress-line completed"></div>
          <div className="progress-item active">
            <div className="progress-circle">2</div>
            <span>Bayar</span>
          </div>
          <div className="progress-line"></div>
          <div className="progress-item">
            <div className="progress-circle">3</div>
            <span>Selesai</span>
          </div>
        </div>

        {/* Timer */}
        <div className="timer-container">
          <p>Selesaikan pemesanan dalam</p>
          <div className="timer">
            <span className="time-box">{formatTime(timeLeft.minutes)}</span>
            <span className="time-separator">:</span>
            <span className="time-box">{formatTime(timeLeft.seconds)}</span>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-8">
            <div className="payment-detail">
              <h2>Metode Pembayaran</h2>
              
              <div className="virtual-account">
                <div className="bank-logo">
                  <img src="/path/to/bca.png" alt="BCA" />
                </div>
                <div className="payment-info">
                  <p>Bayar Melalui Virtual Account BCA</p>
                  <div className="va-number">
                    <span>117239 0812345678990</span>
                    <button className="btn-salin">Salin</button>
                  </div>
                </div>
              </div>

              {/* Tata Cara Pembayaran */}
              <div className="payment-instructions">
                <h3>Tata Cara Pembayaran</h3>
                <div className="instruction-group">
                  <h4>Transfer Bank</h4>
                  <div className="instruction-item">
                    <i className="arrow down"></i>
                  </div>
                </div>
                <div className="instruction-group">
                  <h4>E-Wallet</h4>
                  <div className="instruction-item">
                    <i className="arrow down"></i>
                  </div>
                </div>
                <div className="instruction-group">
                  <h4>Kartu Kredit/Debit</h4>
                  <div className="instruction-item">
                    <i className="arrow down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="order-summary">
              <img 
                src="/path/to/course-image.jpg" 
                alt="Course Image" 
                className="course-image"
              />
              <h3>Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager</h3>
              
              <div className="price-info">
                <div className="current-price">Rp 250K</div>
                <div className="original-price">Rp 500K</div>
                <div className="discount-badge">Diskon 50%</div>
              </div>

              <div className="course-features">
                <h4>Kelas Ini Sudah Termasuk</h4>
                <div className="feature-list">
                  <div className="feature-item">
                    <i className="feature-icon">📝</i>
                    <span>Ujian Akhir</span>
                  </div>
                  <div className="feature-item">
                    <i className="feature-icon">🎥</i>
                    <span>49 Video</span>
                  </div>
                  <div className="feature-item">
                    <i className="feature-icon">📄</i>
                    <span>7 Dokumen</span>
                  </div>
                  <div className="feature-item">
                    <i className="feature-icon">✅</i>
                    <span>Sertifikat</span>
                  </div>
                  <div className="feature-item">
                    <i className="feature-icon">📋</i>
                    <span>Pretest</span>
                  </div>
                </div>

                <div className="language-section">
                  <h4>Bahasa Pengantar</h4>
                  <div className="language-item">
                    <i className="language-icon">🌐</i>
                    <span>Bahasa Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bayar; 