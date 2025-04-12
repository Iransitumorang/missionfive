import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isAuthPage = false }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header>
      <Link to="/home" className="logo">
        <img src="Logo.png" alt="videobelajar" />
      </Link>
      {!isAuthPage && (
        <div className="header-right">
          <Link to="#" className="kategori-link">Kategori</Link>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <img 
              src="jenet.png" 
              alt="Profile" 
              className="profile-icon" 
              onClick={handleLogout}
              style={{cursor: 'pointer'}}
            />
            <span onClick={handleLogout} style={{cursor: 'pointer'}}>Logout</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;