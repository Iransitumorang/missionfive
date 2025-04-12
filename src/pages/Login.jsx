import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div>
      <Header isAuthPage={true} />
      
      <div className="login-container">
        <h1>Masuk ke Akun</h1>
        <p className="subtitle">Yuk, lanjutin belajarmu di videobelajar.</p>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>E-Mail <span style={{color: 'red'}}>*</span></label>
            <input type="email" required defaultValue="situmorang@gmail.com" />
          </div>
          
          <div className="form-group">
            <label>Kata Sandi <span style={{color: 'red'}}>*</span></label>
            <input type="password" required defaultValue="situmorang" />
          </div>
          
          <div className="forgot-password">
            <Link to="#" style={{color: '#666', textDecoration: 'none'}}>Lupa Password?</Link>
          </div>
          
          <button type="submit" className="btn-masuk">Masuk</button>
          <Link to="/register" className="btn-daftar">Daftar</Link>
          
          <div className="divider">atau</div>
          
          <button type="button" className="google-login">
            <img src="https://www.google.com/favicon.ico" width="20" height="20" alt="Google" />
            Masuk dengan Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;