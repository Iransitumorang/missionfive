import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/bayar.css';

const UbahMetode = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const handleConfirm = () => {
    navigate('/selesai');
  };

  return (
    <div className="bayar-page ubah-metode-page">
      <div className="header">
        <div className="header-content">
          <div className="logo">videobelajar</div>
          <div className="payment-progress">
            <div className="progress-item active">
              <div className="progress-circle">1</div>
              <span>Pilih Metode</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-item">
              <div className="progress-circle">2</div>
              <span>Bayar</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-item">
              <div className="progress-circle">3</div>
              <span>Selesai</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row mt-4">
          <div className="col-md-8">
            <div className="payment-detail">
              <div className="order-summary-section">
                <h2>Ringkasan Belanja</h2>
                <div className="order-details">
                  <div className="order-item">
                    <span>Total Harga (3 barang)</span>
                    <span>Rp 767.500</span>
                  </div>
                  <div className="order-item">
                    <span>Ongkos Kirim</span>
                    <span>Rp 7.000</span>
                  </div>
                </div>
                <div className="total-payment">
                  <div className="total-label">Total Pembayaran</div>
                  <div className="total-amount">Rp 774.500</div>
                </div>
              </div>

              <div className="mt-6">
                <h2>Ubah Metode Pembayaran</h2>
                <div className="payment-options space-y-4 mt-4">
                  <div 
                    className={`payment-option ${selectedMethod === 'transfer' ? 'selected' : ''}`}
                    onClick={() => handleMethodChange('transfer')}
                  >
                    <div className="option-content">
                      <h3>Transfer Bank</h3>
                      <i className="arrow down"></i>
                    </div>
                  </div>

                  <div 
                    className={`payment-option ${selectedMethod === 'ewallet' ? 'selected' : ''}`}
                    onClick={() => handleMethodChange('ewallet')}
                  >
                    <div className="option-content">
                      <h3>E-Wallet</h3>
                      <i className="arrow down"></i>
                    </div>
                  </div>

                  <div 
                    className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`}
                    onClick={() => handleMethodChange('card')}
                  >
                    <div className="option-content">
                      <h3>Kartu Kredit/Debit</h3>
                      <i className="arrow down"></i>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                className="btn-bayar-sekarang"
              >
                Bayar Sekarang
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="course-preview">
              <img 
                src="/images/course-preview.jpg" 
                alt="Course Preview" 
                className="preview-image"
              />
              <h3>Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.</h3>
              
              <div className="price-info">
                <span className="current-price">Rp 250K</span>
                <span className="original-price">Rp 500K</span>
                <span className="discount-badge">Hemat 50%</span>
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

export default UbahMetode; 