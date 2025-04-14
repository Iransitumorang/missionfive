import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/bayar.css';

const Bayar = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ minutes: 50, seconds: 55 });
  const [activeInstruction, setActiveInstruction] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    // Ambil data pembayaran yang dipilih
    const paymentData = localStorage.getItem('selectedPayment');
    if (paymentData) {
      setSelectedPayment(JSON.parse(paymentData));
    }

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

  const toggleInstruction = (index) => {
    setActiveInstruction(activeInstruction === index ? null : index);
  };

  // Generate nomor VA berdasarkan bank
  const getVANumber = (bankId) => {
    const numbers = {
      'bca': '11739 081234567890',
      'bni': '8808 081234567890',
      'bri': '88810 081234567890',
      'mandiri': '89508 081234567890'
    };
    return numbers[bankId] || '11739 081234567890';
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      // Tidak perlu setTimeout karena akan kembali saat hover
    });
  };

  // Render metode pembayaran yang sesuai
  const renderPaymentMethod = () => {
    if (!selectedPayment) return null;

    if (selectedPayment.type === 'bank') {
      const vaNumber = getVANumber(selectedPayment.id);
      return (
        <div className="payment-method-info">
          <div className="bca-info">
            <img 
              src={selectedPayment.logo}
              alt={selectedPayment.name}
              className="bank-logo"
            />
            <div className="payment-text">
              <p>Bayar Melalui Virtual Account {selectedPayment.name}</p>
              <div className="va-number">
                <span>{vaNumber}</span>
                <span 
                  className={`btn-salin ${copySuccess ? 'copied' : ''}`}
                  onClick={() => handleCopy(vaNumber)}
                  onMouseEnter={() => setCopySuccess(false)}
                >
                  {copySuccess ? 'Tersalin!' : 'Salin'}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedPayment.type === 'ewallet') {
      const phoneNumber = '081234567890';
      return (
        <div className="payment-method-info">
          <div className="bca-info">
            <img 
              src={selectedPayment.logo}
              alt={selectedPayment.name}
              className="bank-logo"
            />
            <div className="payment-text">
              <p>Bayar Melalui {selectedPayment.name}</p>
              <div className="va-number">
                <span>{phoneNumber}</span>
                <span 
                  className={`btn-salin ${copySuccess ? 'copied' : ''}`}
                  onClick={() => handleCopy(phoneNumber)}
                  onMouseEnter={() => setCopySuccess(false)}
                >
                  {copySuccess ? 'Tersalin!' : 'Salin'}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

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
        </div>
      </div>
      
      <div className="container py-4">
        <div className="timer-section">
          Selesaikan pemesanan dalam{' '}
          <span className="time-box">{formatTime(timeLeft.minutes)[0]}</span>
          <span className="time-box">{formatTime(timeLeft.minutes)[1]}</span>
          <span className="time-separator">:</span>
          <span className="time-box">{formatTime(timeLeft.seconds)[0]}</span>
          <span className="time-box">{formatTime(timeLeft.seconds)[1]}</span>
        </div>

        <div className="row mt-4">
          <div className="col-md-8">
            <div className="payment-detail">
              <h2>Metode Pembayaran</h2>
              
              {renderPaymentMethod()}

              {/* Ringkasan Pesanan */}
              <div className="order-summary-section">
                <h2>Ringkasan Pesanan</h2>
                <div className="order-details">
                  <div className="order-item">
                    <span>Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.</span>
                    <span>Rp 767.500</span>
                  </div>
                  <div className="order-item">
                    <span>Biaya Admin</span>
                    <span>Rp 7.000</span>
                  </div>
                </div>
                <div className="total-payment">
                  <div className="total-label">Total Pembayaran</div>
                  <div className="total-amount">Rp 774.500</div>
                </div>
                <div className="action-buttons">
                  <button className="btn-ganti-metode" onClick={() => navigate('/metode')}>
                    Ganti Metode Pembayaran
                  </button>
                  <button className="btn-bayar-sekarang" onClick={() => navigate('/ubah-metode')}>
                    Bayar Sekarang
                  </button>
                </div>
              </div>

              <div className="payment-instructions">
                <h2>Tata Cara Pembayaran</h2>
                <div className="instruction-group">
                  <div className="instruction-header" onClick={() => toggleInstruction(1)}>
                    <span>ATM BCA</span>
                    <i className={`arrow ${activeInstruction === 1 ? 'up' : 'down'}`}></i>
                  </div>
                  {activeInstruction === 1 && (
                    <div className="instruction-content">
                      <ol>
                        <li>Masukkan kartu ATM dan PIN BCA Anda</li>
                        <li>Pilih "Transaksi Lainnya". Pilih "Transfer". Pilih "Ke BCA Virtual Account"</li>
                        <li>Masukkan nomor Virtual Account</li>
                        <li>Pastikan data Virtual Account Anda benar, masukkan angka yang perlu Anda bayarkan, kemudian pilih "Benar"</li>
                        <li>Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar masih salah</li>
                        <li>Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak melanjutkan transaksi lain</li>
                      </ol>
                    </div>
                  )}
                </div>
                <div className="instruction-group">
                  <div className="instruction-header" onClick={() => toggleInstruction(2)}>
                    <span>Mobile Banking BCA</span>
                    <i className={`arrow ${activeInstruction === 2 ? 'up' : 'down'}`}></i>
                  </div>
                  {activeInstruction === 2 && (
                    <div className="instruction-content">
                      <ol>
                        <li>Buka Aplikasi BCA Mobile</li>
                        <li>Pilih "m-BCA", kemudian pilih "m-Transfer"</li>
                        <li>Pilih "BCA Virtual Account"</li>
                        <li>Masukkan nomor Virtual Account, lalu pilih "OK"</li>
                        <li>Klik tombol "Send" untuk melakukan transfer</li>
                        <li>Klik "OK" untuk melanjutkan pembayaran</li>
                        <li>Masukkan PIN Anda untuk meng-otorisasi transaksi</li>
                        <li>Transaksi Anda telah selesai</li>
                      </ol>
                    </div>
                  )}
                </div>
                <div className="instruction-group">
                  <div className="instruction-header" onClick={() => toggleInstruction(3)}>
                    <span>Internet Banking BCA</span>
                    <i className={`arrow ${activeInstruction === 3 ? 'up' : 'down'}`}></i>
                  </div>
                  {activeInstruction === 3 && (
                    <div className="instruction-content">
                      <ol>
                        <li>Login ke KlikBCA Individual</li>
                        <li>Pilih "Transfer", kemudian pilih "Transfer ke BCA Virtual Account"</li>
                        <li>Masukkan nomor Virtual Account</li>
                        <li>Pilih "Lanjutkan" untuk melanjutkan pembayaran</li>
                        <li>Masukkan "RESPON KEYBCA APPLI 1" yang muncul pada Token BCA Anda, lalu klik tombol "Kirim"</li>
                        <li>Pembayaran telah selesai</li>
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="order-summary">
              <img 
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80" 
                alt="Course Preview" 
                className="course-image"
              />
              <h3>Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager</h3>
              
              <div className="price-info">
                <div className="current-price">Rp 250.000</div>
                <div className="original-price">Rp 500.000</div>
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