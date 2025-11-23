import Button from '../../../components/common/Button';
import './CTASection.css';

const CTASection = ({ isBottom = false }) => {
  const sectionClassName = isBottom ? 'cta-section cta-bottom' : 'cta-section';

  return (
    <section className={sectionClassName}>
      <div className="cta-container">
        <h2 className="cta-title">
          Mulai Perjalanan Anda Menjadi Mutawif Profesional
        </h2>
        <p className="cta-subtitle">
          Bergabunglah dengan program sertifikasi mutawif dan wujudkan impian membimbing jamaah haji
        </p>
        <Button variant="primary" size="large">
          Daftar Sekarang
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
