import { Link } from 'react-router-dom';
import Logo from '../../common/Logo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section footer-brand">
            <Logo />
            <p>Sertifikasi profesional untuk Mutawif Indonesia masa depan</p>
          </div>

          <div className="footer-section">
            <h4>Tautan Cepat</h4>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/about">Tentang Kami</Link></li>
              <li><Link to="/obligasi">Obligasi</Link></li>
              <li><Link to="/join">Gabung Sekarang</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontak</h4>
            <ul>
              <li>Email: info@mutawifnesia.com</li>
              <li>Telepon: +62 XXX XXX XXX</li>
              <li>Alamat: Jakarta, Indonesia</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Ikuti Kami</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mutawifnesia. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
