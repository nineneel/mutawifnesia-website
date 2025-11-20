import './DiscoverSection.css';

const DiscoverSection = () => {
  return (
    <section className="discover-section">
      <div className="discover-header">
        <h2 className="discover-title">Discover Your Mutawif</h2>
        <p className="discover-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan.
        </p>
      </div>

      <div className="discover-card">
        <div className="card-image">
          <img
            src="/images/sections/discover-package.jpg"
            alt="Umrah Package"
            className="package-image"
          />
        </div>

        <div className="card-content">
          <p className="card-subtitle">Discover Your Mutawif</p>
          <h3 className="card-title">BATCH 1 MUTAWIFNESIA</h3>

          <ul className="package-features">
            <li>
              <img src="/images/sections/check-icon.png" alt="" />
              <span>Saudia Airlines - Direct Flight</span>
            </li>
            <li>
              <img src="/images/sections/check-icon.png" alt="" />
              <span>Hotel Madinah Bintang 5 dekat Masjid Nabawi</span>
            </li>
            <li>
              <img src="/images/sections/check-icon.png" alt="" />
              <span>Hotel Makkah Bintang 5 dekat Masjid Haram</span>
            </li>
          </ul>

          <div className="package-info">
            <div className="info-badges">
              <div className="info-badge">
                <span>📅</span>
                <span>January</span>
              </div>
              <div className="info-badge">
                <span>⏱️</span>
                <span>30 Days</span>
              </div>
              <div className="info-badge">
                <span>💰</span>
                <span>Monthly</span>
              </div>
            </div>

            <div className="package-price">
              <p className="price-label">Start From</p>
              <p className="price-amount">
                <span className="currency">Rp</span>
                <span className="amount">2.899.9999</span>
              </p>
            </div>

            <button className="interest-button">I am Interest</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
