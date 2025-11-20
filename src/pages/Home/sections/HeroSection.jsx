import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src="/images/hero-bg.jpg" alt="Masjidil Haram" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <p>Association Mutawif Indonesia</p>
        </div>
        <h1 className="hero-title">
          Professional Certification for Future Mutawif Indonesia
        </h1>
      </div>

      <div className="hero-cta">
        <div className="hero-line"></div>
        <Link to="/join" className="hero-button">
          Gabung Sekarang
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
