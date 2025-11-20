import { Link } from 'react-router-dom';
import './JoinCtaSection.css';

const JoinCtaSection = () => {
  return (
    <section className="join-cta-section">
      <div className="join-cta-card">
        <div className="join-cta-image">
          <img
            src="/images/sections/join-image.jpg"
            alt="Jamaah at Kaaba"
            className="join-image"
          />
        </div>

        <div className="join-cta-content">
          <h2 className="join-cta-title">Bergabung Bersama Kami</h2>
          <p className="join-cta-description">
            Sertifikasi berstandar dari Badan Nasional Sertifikasi Profesi (BNSP)
            dan memiliki skema sertifikasi yang disahkan oleh Kementerian Haji &
            Umrah RI.
          </p>
          <Link to="/join" className="join-cta-button">
            Gabung Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinCtaSection;
