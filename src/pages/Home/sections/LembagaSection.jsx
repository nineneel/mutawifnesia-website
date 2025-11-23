import { forwardRef } from 'react';
import './LembagaSection.css';

const LembagaSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="lembaga-section">
      <div className="lembaga-inner">
        <figure className="lembaga-visual">
          <img
            src="/images/sections/lembaga-image.jpg"
            alt="Mutawif memberikan bimbingan ibadah kepada jamaah"
            className="lembaga-visual-image"
            loading="lazy"
          />
        </figure>

        <div className="lembaga-copy">
          <h2 className="lembaga-heading">
            <span>Lembaga</span>
            <span>Penyelenggara</span>
            <span>Sertifikasi</span>
          </h2>

          <p className="lembaga-description">
            Sertifikasi Mutawif dilaksanakan oleh LSP AHLAN, lembaga sertifikasi profesi yang telah mendapat lisensi dari Badan Nasional Sertifikasi Profesi (BNSP) dan memiliki skema sertifikasi yang disahkan oleh Kementerian Haji &amp; Umrah RI.
          </p>

          <div className="lembaga-highlight">
            <p className="lembaga-highlight-value">221K+</p>
            <div className="lembaga-highlight-text">
              <p className="lembaga-highlight-title">Jamaah Haji Tahunan</p>
              <p className="lembaga-highlight-caption">
                Dengan warga Indonesia yang membentuk salah satu kontingen nasional terbesar setiap tahunnya –{' '}
                <a href="https://haji.go.id" className="lembaga-link" target="_blank" rel="noreferrer">
                  haji.go.id
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

LembagaSection.displayName = 'LembagaSection';

export default LembagaSection;
