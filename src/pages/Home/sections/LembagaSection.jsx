import './LembagaSection.css';

const LembagaSection = () => {
  return (
    <section className="lembaga-section">
      <div className="lembaga-accent lembaga-accent-1">
        <img src="/images/sections/lembaga-accent.png" alt="" />
      </div>
      <div className="lembaga-accent lembaga-accent-2">
        <img src="/images/sections/lembaga-accent.png" alt="" />
      </div>

      <div className="lembaga-container">
        <div className="lembaga-image-wrapper">
          <div className="lembaga-image-border"></div>
          <div className="lembaga-image-container">
            <img src="/images/sections/lembaga-image.jpg" alt="Mutawif membimbing jamaah" className="lembaga-image" />
          </div>
        </div>

        <div className="lembaga-content">
          <div className="lembaga-text">
            <h2 className="lembaga-title">
              Lembaga<br />
              Penyelenggara<br />
              Sertifikasi
            </h2>
            <p className="lembaga-description">
              Sertifikasi Mutawif dilaksanakan oleh LSP AHLAN, lembaga sertifikasi profesi yang telah mendapat lisensi dari Badan Nasional Sertifikasi Profesi (BNSP) dan memiliki skema sertifikasi yang disahkan oleh Kementerian Haji & Umrah RI.
            </p>
          </div>

          <div className="lembaga-stats">
            <div className="lembaga-stat">
              <p className="lembaga-stat-number">221K+</p>
              <h3 className="lembaga-stat-title">Jamaah Haji Tahunan</h3>
              <p className="lembaga-stat-description">
                Dengan warga Indonesia yang membentuk salah satu kontingen nasional terbesar setiap tahunnya - <span className="lembaga-link">haji.go.id</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LembagaSection;
