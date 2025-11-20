import './RequirementsSection.css';

const RequirementsSection = () => {
  const requirements = [
    'Beragama Islam.',
    'Usia minimal 21 tahun.',
    'Pendidikan minimal SMA/MA atau sederajat.',
    'Mampu berkomunikasi dan membimbing jamaah.',
    'Menyerahkan dokumen administrasi (KTP, ijazah, pas foto, CV, dan bukti pengalaman)'
  ];

  return (
    <section className="requirements-section">
      <div className="requirements-accent"></div>

      <div className="requirements-container">
        <div className="requirements-content">
          <h2 className="requirements-title">Syarat Sertifikasi</h2>
          <p className="requirements-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </p>

          <ul className="requirements-list">
            {requirements.map((requirement, index) => (
              <li key={index} className="requirement-item">
                <img
                  src="/images/sections/check-icon.png"
                  alt=""
                  className="check-icon"
                />
                <span>{requirement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="requirements-image-wrapper">
          <div className="requirements-image-border"></div>
          <div className="requirements-image-container">
            <img
              src="/images/sections/syarat-image.jpg"
              alt="Masjid Nabawi"
              className="requirements-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
