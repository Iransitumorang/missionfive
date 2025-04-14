import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/metode.css';

const Metode = () => {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [isEWalletOpen, setIsEWalletOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const courseData = {
    title: 'Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager',
    price: 250000,
    originalPrice: 500000,
    discount: '50%',
    courseInfo: {
      ujianAkhir: true,
      videoCount: '49 Video',
      documentCount: '7 Dokumen',
      pretest: true,
      sertifikat: true,
      language: 'Bahasa Indonesia'
    }
  };

  const banks = [
    { 
      id: 'bca', 
      name: 'Bank BCA', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg'
    },
    { 
      id: 'bni', 
      name: 'Bank BNI', 
      logo: 'https://upload.wikimedia.org/wikipedia/id/5/55/BNI_logo.svg'
    },
    { 
      id: 'bri', 
      name: 'Bank BRI', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg'
    },
    { 
      id: 'mandiri', 
      name: 'Bank Mandiri', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg'
    }
  ];

  const ewallets = [
    { 
      id: 'dana', 
      name: 'Dana', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg'
    },
    { 
      id: 'ovo', 
      name: 'OVO', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg'
    },
    { 
      id: 'linkaja', 
      name: 'LinkAja', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/LinkAja.svg'
    },
    { 
      id: 'shopeepay', 
      name: 'ShopeePay', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png'
    }
  ];

  const handleMethodSelect = (method) => {
    if (method === 'transfer') {
      setIsTransferOpen(!isTransferOpen);
      setIsEWalletOpen(false);
      setIsCardOpen(false);
    } else if (method === 'ewallet') {
      setIsEWalletOpen(!isEWalletOpen);
      setIsTransferOpen(false);
      setIsCardOpen(false);
    } else if (method === 'card') {
      setIsCardOpen(!isCardOpen);
      setIsTransferOpen(false);
      setIsEWalletOpen(false);
    }
  };

  const handleBankSelect = (bank) => {
    setSelectedBank(bank.id);
    // Simpan data bank yang dipilih
    localStorage.setItem('selectedPayment', JSON.stringify({
      type: 'bank',
      id: bank.id,
      name: bank.name,
      logo: bank.logo
    }));
  };

  const handleEWalletSelect = (wallet) => {
    setSelectedBank(wallet.id);
    // Simpan data e-wallet yang dipilih
    localStorage.setItem('selectedPayment', JSON.stringify({
      type: 'ewallet',
      id: wallet.id,
      name: wallet.name,
      logo: wallet.logo
    }));
  };

  return (
    <div className="metode-page">
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
            <div className="payment-methods">
              <h2>Metode Pembayaran</h2>
              
              {/* Transfer Bank */}
              <div className="payment-method-item">
                <div 
                  className="method-header" 
                  onClick={() => handleMethodSelect('transfer')}
                >
                  <div className="method-title">
                    <span>Transfer Bank</span>
                  </div>
                  <i className={`arrow ${isTransferOpen ? 'up' : 'down'}`}></i>
                </div>
                {isTransferOpen && (
                  <div className="method-content">
                    {banks.map((bank) => (
                      <div 
                        key={bank.id}
                        className={`bank-option ${selectedBank === bank.id ? 'selected' : ''}`}
                        onClick={() => handleBankSelect(bank)}
                      >
                        <div className="bank-info">
                          <img src={bank.logo} alt={bank.name} />
                          <span>{bank.name}</span>
                        </div>
                        <div className="bank-check">
                          {selectedBank === bank.id && <span className="checkmark">✓</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* E-Wallet */}
              <div className="payment-method-item">
                <div 
                  className="method-header"
                  onClick={() => handleMethodSelect('ewallet')}
                >
                  <div className="method-title">
                    <span>E-Wallet</span>
                  </div>
                  <i className={`arrow ${isEWalletOpen ? 'up' : 'down'}`}></i>
                </div>
                {isEWalletOpen && (
                  <div className="method-content">
                    {ewallets.map((wallet) => (
                      <div 
                        key={wallet.id}
                        className={`bank-option ${selectedBank === wallet.id ? 'selected' : ''}`}
                        onClick={() => handleEWalletSelect(wallet)}
                      >
                        <div className="bank-info">
                          <img src={wallet.logo} alt={wallet.name} />
                          <span>{wallet.name}</span>
                        </div>
                        <div className="bank-check">
                          {selectedBank === wallet.id && <span className="checkmark">✓</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Kartu Kredit/Debit */}
              <div className="payment-method-item">
                <div 
                  className="method-header"
                  onClick={() => handleMethodSelect('card')}
                >
                  <div className="method-title">
                    <span>Kartu Kredit/Debit</span>
                  </div>
                  <i className={`arrow ${isCardOpen ? 'up' : 'down'}`}></i>
                </div>
                {isCardOpen && (
                  <div className="method-content">
                    <div className="card-logos">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                        alt="Mastercard" 
                        style={{ height: '30px', marginRight: '15px' }}
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
                        alt="Visa"
                        style={{ height: '30px', marginRight: '15px' }}
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg" 
                        alt="JCB"
                        style={{ height: '30px' }}
                      />
                    </div>
                  </div>
                )}
              </div>

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
                <button 
                  className="btn-beli-sekarang" 
                  onClick={() => navigate('/bayar')}
                  disabled={!selectedBank}
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="order-summary">
              <img 
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80" 
                alt={courseData.title} 
                className="course-image"
              />
              <h3>{courseData.title}</h3>
              
              <div className="price-info">
                <div className="current-price">Rp {courseData.price.toLocaleString()}</div>
                <div className="original-price">Rp {courseData.originalPrice.toLocaleString()}</div>
                <div className="discount-badge">Diskon {courseData.discount}</div>
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
                    <span>{courseData.courseInfo.videoCount}</span>
                  </div>
                  <div className="feature-item">
                    <i className="feature-icon">📄</i>
                    <span>{courseData.courseInfo.documentCount}</span>
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
                    <span>{courseData.courseInfo.language}</span>
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

export default Metode; 