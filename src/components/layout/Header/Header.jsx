import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Mutawifnesia Logo" className="logo-image" />
          <h1 className="logo-text">Mutawifnesia</h1>
        </Link>
        <div className="nav-wrapper">
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/obligasi" className="nav-link">Obligasi</Link>
          </nav>
          <Link to="/join" className="cta-button">
            Gabung Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
