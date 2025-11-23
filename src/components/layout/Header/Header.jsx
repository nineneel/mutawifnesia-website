import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../../common/Button';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
      if (!event.matches) {
        setIsMenuOpen(false);
      }
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const handleNavLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    if (!isMobile) return;
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Mutawifnesia Logo" className="logo-image" />
          <h1 className="logo-text">Mutawifnesia</h1>
        </Link>
        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <nav id="primary-navigation" className="nav">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={handleNavLinkClick}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleNavLinkClick}>
              About
            </Link>
            <Link to="/obligasi" className={`nav-link ${isActive('/obligasi') ? 'active' : ''}`} onClick={handleNavLinkClick}>
              Obligasi
            </Link>
          </nav>
          <Button to="/join" variant="primary" size="small" className="nav-cta">
            Gabung Sekarang
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
