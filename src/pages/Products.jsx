import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/products.css';

const Products = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  
  // Data produk untuk setiap halaman
  const allProducts = {
    1: [
      {
        id: 1,
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Pahami konsep dasar hingga tingkat lanjut tentang pelaporan hingga yang menyangkut...',
        author: 'Jenna Ortega',
        rating: 4.5,
        reviews: 33.5,
        price: 300000,
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3'
      },
      {
        id: 2,
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Pahami konsep dasar hingga tingkat lanjut tentang pelaporan hingga yang menyangkut...',
        author: 'Jenna Ortega',
        rating: 4.5,
        reviews: 33.5,
        price: 300000,
        image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3'
      },
      {
        id: 3,
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Pahami konsep dasar hingga tingkat lanjut tentang pelaporan hingga yang menyangkut...',
        author: 'Jenna Ortega',
        rating: 4.5,
        reviews: 33.5,
        price: 300000,
        image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3'
      },
      {
        id: 4,
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Pahami konsep dasar hingga tingkat lanjut tentang pelaporan hingga yang menyangkut...',
        author: 'Jenna Ortega',
        rating: 4.5,
        reviews: 33.5,
        price: 300000,
        image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3'
      },
      {
        id: 5,
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Pahami konsep dasar hingga tingkat lanjut tentang pelaporan hingga yang menyangkut...',
        author: 'Jenna Ortega',
        rating: 4.5,
        reviews: 33.5,
        price: 300000,
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3'
      },
      {
        id: 6,
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Pahami konsep dasar hingga tingkat lanjut tentang pelaporan hingga yang menyangkut...',
        author: 'Jenna Ortega',
        rating: 4.5,
        reviews: 33.5,
        price: 300000,
        image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3'
      },
    ],
    2: [
      {
        id: 7,
        title: 'Digital Marketing Specialist',
        description: 'Pelajari strategi pemasaran digital yang efektif untuk mengembangkan bisnis online...',
        author: 'Emma Watson',
        rating: 4.8,
        reviews: 28.3,
        price: 250000,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3'
      },
      {
        id: 8,
        title: 'Social Media Marketing',
        description: 'Kuasai teknik marketing di berbagai platform social media untuk meningkatkan engagement...',
        author: 'Tom Holland',
        rating: 4.7,
        reviews: 25.1,
        price: 275000,
        image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3'
      },
      {
        id: 9,
        title: 'Content Creator Master',
        description: 'Belajar membuat konten yang menarik dan viral di berbagai platform social media...',
        author: 'Zendaya',
        rating: 4.9,
        reviews: 31.2,
        price: 225000,
        image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3'
      },
    ],
    3: [
      {
        id: 10,
        title: 'UI/UX Design Professional',
        description: 'Pelajari prinsip desain dan teknik UX research untuk membuat produk yang user-friendly...',
        author: 'Chris Evans',
        rating: 4.6,
        reviews: 22.8,
        price: 350000,
        image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3'
      },
      {
        id: 11,
        title: 'Web Development Expert',
        description: 'Kuasai teknologi web terkini untuk membangun aplikasi modern yang responsif...',
        author: 'Robert Downey Jr',
        rating: 4.9,
        reviews: 35.4,
        price: 400000,
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3'
      },
    ],
    4: [
      {
        id: 12,
        title: 'Public Speaking Master',
        description: 'Tingkatkan kemampuan berbicara di depan umum dan bangun kepercayaan diri...',
        author: 'Scarlett Johansson',
        rating: 4.7,
        reviews: 29.6,
        price: 200000,
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3'
      },
      {
        id: 13,
        title: 'Leadership & Management',
        description: 'Pelajari teknik kepemimpinan modern untuk memimpin tim dengan efektif...',
        author: 'Chris Hemsworth',
        rating: 4.8,
        reviews: 27.3,
        price: 325000,
        image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3'
      },
    ],
    5: [
      {
        id: 14,
        title: 'Business Analytics',
        description: 'Analisis data bisnis untuk pengambilan keputusan yang lebih baik...',
        author: 'Mark Ruffalo',
        rating: 4.6,
        reviews: 24.7,
        price: 375000,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3'
      },
      {
        id: 15,
        title: 'Investment Strategy',
        description: 'Pelajari strategi investasi untuk mengembangkan portfolio keuangan...',
        author: 'Jeremy Renner',
        rating: 4.8,
        reviews: 30.2,
        price: 450000,
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3'
      },
    ],
    6: [
      {
        id: 16,
        title: 'Personal Branding',
        description: 'Bangun personal brand yang kuat untuk meningkatkan karir...',
        author: 'Elizabeth Olsen',
        rating: 4.7,
        reviews: 26.9,
        price: 275000,
        image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3'
      },
      {
        id: 17,
        title: 'Creative Writing',
        description: 'Kembangkan kemampuan menulis kreatif untuk berbagai keperluan...',
        author: 'Tom Hiddleston',
        rating: 4.5,
        reviews: 23.4,
        price: 225000,
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3'
      },
    ]
  };

  const [filters, setFilters] = useState({
    bidangStudi: [],
    harga: [],
    durasi: []
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handlePrevNext = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    } else if (direction === 'next' && currentPage < 6) {
      setCurrentPage(prev => prev + 1);
    }
    window.scrollTo(0, 0);
  };

  // Mendapatkan produk untuk halaman saat ini
  const currentProducts = allProducts[currentPage] || [];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <Header />
      <div className="container mt-4 mb-5">
        <div className="row">
          {/* Sidebar Filter */}
          <div className="col-lg-3">
            <div className="filter-container">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="m-0">Filter</h5>
                <button className="btn btn-link text-danger p-0 text-decoration-none">Reset</button>
              </div>

              {/* Bidang Studi */}
              <div className="filter-section">
                <div className="filter-header">
                  <span className="filter-title">
                    <i className="bi bi-journal-text text-success me-2"></i>
                    Bidang Studi
                  </span>
                  <i className="bi bi-chevron-up text-success"></i>
                </div>
                <div className="filter-content">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="pemasaran" />
                    <label className="form-check-label" htmlFor="pemasaran">
                      Pemasaran
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="digitalTeknologi" />
                    <label className="form-check-label" htmlFor="digitalTeknologi">
                      Digital & Teknologi
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="pengembanganDiri" />
                    <label className="form-check-label" htmlFor="pengembanganDiri">
                      Pengembangan Diri
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="bisnisManajemen" />
                    <label className="form-check-label" htmlFor="bisnisManajemen">
                      Bisnis Manajemen
                    </label>
                  </div>
                </div>
              </div>

              {/* Harga */}
              <div className="filter-section">
                <div className="filter-header">
                  <span className="filter-title">
                    <i className="bi bi-tag text-success me-2"></i>
                    Harga
                  </span>
                  <i className="bi bi-chevron-up text-success"></i>
                </div>
                <div className="filter-content">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="harga1" />
                    <label className="form-check-label" htmlFor="harga1">
                      Pemasaran
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="harga2" />
                    <label className="form-check-label" htmlFor="harga2">
                      Digital & Teknologi
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="harga3" />
                    <label className="form-check-label" htmlFor="harga3">
                      Pengembangan Diri
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="harga4" />
                    <label className="form-check-label" htmlFor="harga4">
                      Bisnis Manajemen
                    </label>
                  </div>
                </div>
              </div>

              {/* Durasi */}
              <div className="filter-section">
                <div className="filter-header">
                  <span className="filter-title">
                    <i className="bi bi-clock text-success me-2"></i>
                    Durasi
                  </span>
                  <i className="bi bi-chevron-up text-success"></i>
                </div>
                <div className="filter-content">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="durasi" id="durasi1" />
                    <label className="form-check-label" htmlFor="durasi1">
                      Kurang dari 4 Jam
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="durasi" id="durasi2" />
                    <label className="form-check-label" htmlFor="durasi2">
                      4 - 8 Jam
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="durasi" id="durasi3" />
                    <label className="form-check-label" htmlFor="durasi3">
                      Lebih dari 8 Jam
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4>Koleksi Video Pembelajaran Unggulan</h4>
              <div className="d-flex gap-3">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Cari kelas..." />
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="bi bi-search"></i> Cari
                  </button>
                </div>
                <select className="form-select" style={{width: 'auto'}}>
                  <option>Terbaru</option>
                  <option>Terpopuler</option>
                  <option>Harga Terendah</option>
                  <option>Harga Tertinggi</option>
                </select>
              </div>
            </div>

            <div className="row g-4">
              {currentProducts.map((product) => (
                <div key={product.id} className="col-md-6 col-lg-4">
                  <div 
                    className="card h-100 cursor-pointer" 
                    onClick={() => handleProductClick(product.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={product.image} className="card-img-top" alt={product.title} style={{height: '200px', objectFit: 'cover'}} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text text-muted small">{product.description}</p>
                      <div className="d-flex align-items-center mb-2">
                        <img src="https://i.pravatar.cc/40" className="rounded-circle me-2" alt={product.author} width="24" />
                        <small className="text-muted">{product.author}</small>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="text-warning mb-1">
                            {'★'.repeat(Math.floor(product.rating))}
                            <small className="text-muted ms-1">({product.reviews}K)</small>
                          </div>
                          <div className="text-success fw-bold">
                            Rp {product.price.toLocaleString('id-ID')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <nav className="mt-4" aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePrevNext('prev')}
                    disabled={currentPage === 1}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                </li>
                {[1, 2, 3, 4, 5, 6].map((number) => (
                  <li 
                    key={number} 
                    className={`page-item ${currentPage === number ? 'active' : ''}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(number)}
                    >
                      {number}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === 6 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePrevNext('next')}
                    disabled={currentPage === 6}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products; 