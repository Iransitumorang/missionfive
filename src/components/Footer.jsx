import React, { useEffect } from 'react';
import Logo from '../assets/Logo.png';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  useEffect(() => {
    const initMobileFooter = () => {
      if (window.innerWidth <= 768) {
        const footerSections = document.querySelectorAll('.footer-section:not(:first-child)');
        
        footerSections.forEach(section => {
          const title = section.querySelector('h3');
          if (title) {
            title.addEventListener('click', () => {
              footerSections.forEach(otherSection => {
                if (otherSection !== section && otherSection.classList.contains('active')) {
                  otherSection.classList.remove('active');
                }
              });
              section.classList.toggle('active');
            });
          }
        });
      }
    };

    initMobileFooter();
    window.addEventListener('resize', initMobileFooter);

    return () => {
      window.removeEventListener('resize', initMobileFooter);
    };
  }, []);

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <img 
              src={Logo} 
              alt="videobelajar" 
              style={{ height: '24px', width: 'auto' }}
            />
          </div>
          <p className="footer-description">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
          <p className="footer-address">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
          <p className="footer-phone">+62-877-7123-1234</p>
        </div>
        <div className="footer-section">
          <h3>Perusahaan</h3>
          <ul>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Kebijakan Privasi</a></li>
            <li><a href="#">Ketentuan Layanan</a></li>
            <li><a href="#">Bantuan</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Perusahaan</h3>
          <ul>
            <li><a href="#">Digital & Teknologi</a></li>
            <li><a href="#">Pemasaran</a></li>
            <li><a href="#">Manajemen Bisnis</a></li>
            <li><a href="#">Pengembangan Diri</a></li>
            <li><a href="#">Desain</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Komunitas</h3>
          <ul>
            <li><a href="#">Tips Sukses</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>©2023 Gerobak Sayur All Rights Reserved.</div>
        <div className="social-links">
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;