import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/bayar.css';

const Selesai = () => {
  const navigate = useNavigate();

  return (
    <div className="bayar-page">
      <div className="header">
        <div className="header-content">
          <div className="logo">videobelajar</div>
          <div className="payment-progress">
            <div className="progress-item completed">
              <div className="progress-circle">✓</div>
              <span>Pilih Metode</span>
            </div>
            <div className="progress-line completed"></div>
            <div className="progress-item completed">
              <div className="progress-circle">✓</div>
              <span>Bayar</span>
            </div>
            <div className="progress-line completed"></div>
            <div className="progress-item active">
              <div className="progress-circle">3</div>
              <span>Selesai</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="success-payment-container">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png" 
            alt="Pembayaran Berhasil" 
            className="success-image"
            style={{ width: '120px', height: '120px', marginBottom: '24px' }}
          />
          <h1 className="success-title">Pembayaran Berhasil!</h1>
          <p className="success-message">
            Silakan cek email kamu untuk informasi lebih lanjut. Hubungi
            kami jika ada kendala.
          </p>
          <button 
            className="btn-lihat-detail"
            onClick={() => navigate('/home')}
          >
            Lihat Detail Pesanan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selesai; 