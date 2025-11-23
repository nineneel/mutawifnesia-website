import Button from '../../../components/common/Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src="/images/hero-bg.jpg" alt="Masjidil Haram" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Professional Certification for Future Mutawif Indonesia
          </h1>
          <p className="hero-subtitle">
            Bergabunglah dengan program sertifikasi mutawif profesional dan wujudkan impian membimbing jamaah haji
          </p>
        </div>

        <Button to="/join" variant="primary" size="large">
          Gabung Sekarang
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
