import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <img 
          src={Logo} 
          alt="videobelajar" 
          className="logo"
          onClick={() => navigate('/home')}
          style={{ cursor: 'pointer', height: '32px', width: 'auto' }}
        />
        {!isAuthPage && (
          <div className="right-section">
            <div className="nav-links">
              <a href="#" className="nav-link">Kategori</a>
            </div>
            <div className="profile-section">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60" 
                alt="Profile" 
                className="profile-avatar"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="profile-dropdown ps-4">
                  <a href="#" className="dropdown-item">Profil Saya</a>
                  <a href="#" className="dropdown-item">Kelas Saya</a>
                  <a href="#" className="dropdown-item">Pesanan Saya</a>
                  <a onClick={handleLogout} className="dropdown-item logout">
                    Keluar <span className="logout-icon">→</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;