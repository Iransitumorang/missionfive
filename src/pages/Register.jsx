import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <Header isAuthPage={true} />
      
      <div className="register-container">
        <h1>Pendaftaran Akun</h1>
        <p className="subtitle">Yuk, daftarkan akunmu sekarang juga!</p>
        
        <form>
          <div className="form-group">
            <label>Nama Lengkap <span style={{color: 'red'}}>*</span></label>
            <input type="text" required />
          </div>
          
          <div className="form-group">
            <label>E-Mail <span style={{color: 'red'}}>*</span></label>
            <input type="email" required />
          </div>
          
          <div className="form-group">
            <label>No. Hp <span style={{color: 'red'}}>*</span></label>
            <div className="phone-input">
              <div className="phone-code">
                <img src="https://flagcdn.com/w20/id.png" alt="ID" />
                +62
              </div>
              <input type="tel" className="phone-number" required />
            </div>
          </div>
          
          <div className="form-group">
            <label>Kata Sandi <span style={{color: 'red'}}>*</span></label>
            <div className="password-field">
              <input type={showPassword ? "text" : "password"} required />
              <span 
                className="toggle-password" 
                onClick={() => setShowPassword(!showPassword)}
              >
                👁️
              </span>
            </div>
          </div>
          
          <div className="form-group">
            <label>Konfirmasi Kata Sandi <span style={{color: 'red'}}>*</span></label>
            <div className="password-field">
              <input type={showConfirmPassword ? "text" : "password"} required />
              <span 
                className="toggle-password" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                👁️
              </span>
            </div>
          </div>
          
          <button type="submit" className="btn-daftar">Daftar</button>
          <Link to="/login" className="btn-masuk">Masuk</Link>
          
          <div className="divider">atau</div>
          
          <button type="button" className="google-register">
            <img src="https://www.google.com/favicon.ico" width="20" height="20" alt="Google" />
            Daftar dengan Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;