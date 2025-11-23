import Button from '../../../components/common/Button';
import './DiscoverSection.css';

const CheckIcon = () => (
  <div className='check-icon'>
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="#E4BD49" stroke="#E4BD49" strokeWidth="2" />
      <path
        d="M8.5 12.5L11 15L16 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div> 
);

const DiscoverSection = () => {
  return (
    <section className="discover-section">
      <div className="discover-header">
        <h2 className="discover-title">Program Mutawifnesia</h2>
        <p className="discover-description">
          Mutawifnesia menghadirkan program sertifikasi mutawif profesional dengan kurikulum
          eksklusif, mentor bersertifikat, dan pengalaman lapangan langsung di Tanah Suci.
        </p>
      </div>

      <div className="discover-card">
        <div className="card-image">
          <img
            src="/images/sections/discover-package.webp"
            alt="Program Sertifikasi Mutawifnesia"
            className="package-image"
          />
        </div>

        <div className="card-content">
          <p className="card-subtitle">Program Sertifikasi</p>
          <h3 className="card-title">Batch 1 Mutawifnesia 2025</h3>

          <ul className="package-features">
            <li>
              <CheckIcon />
              <span>Kurikulum berbasis SKKNI dengan mentor praktisi ibadah</span>
            </li>
            <li>
              <CheckIcon />
              <span>Simulasi bimbingan jamaah dan praktik lapangan terpandu</span>
            </li>
            <li>
              <CheckIcon />
              <span>Sertifikasi resmi dari LSP AHLAN &amp; BNSP</span>
            </li>
          </ul>

          <div className="package-info">
            <div className="info-badges">
              <div className="info-badge">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" stroke="#E4BD49" strokeWidth="2" />
                  <path d="M3 9H21" stroke="#E4BD49" strokeWidth="2" />
                  <path d="M8 3V7" stroke="#E4BD49" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 3V7" stroke="#E4BD49" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Januari 2026</span>
              </div>
              <div className="info-badge">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" stroke="#E4BD49" strokeWidth="2" />
                  <path d="M12 7V12L16 14" stroke="#E4BD49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>1-2 Bulan</span>
              </div>
              <div className="info-badge">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3L2 20H22L12 3Z"
                    stroke="#E4BD49"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path d="M12 10V14" stroke="#E4BD49" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="17" r="1" fill="#E4BD49" />
                </svg>
                <span>Kuota Terbatas</span>
              </div>
            </div>

            <div className="package-price">
              <p className="price-label">Investasi Mulai</p>
              <p className="price-amount">
                <span className="currency">Rp</span>
                <span className="amount">34.500.000</span>
              </p>
            </div>

            <Button variant="primary" size="medium">Daftar Sekarang</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
