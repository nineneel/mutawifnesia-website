import './RequirementsSection.css';

const RequirementsSection = () => {
  const requirements = [
    'Beragama Islam.',
    'Usia minimal 21 tahun.',
    'Pendidikan minimal SMA/MA atau sederajat.',
    'Mampu berkomunikasi dan membimbing jamaah.',
    'Menyerahkan dokumen administrasi (KTP, ijazah, pas foto, CV, dan bukti pengalaman).'
  ];

  return (
    <section className="requirements-section">
      <div className="requirements-inner">
        <div className="requirements-copy">
          <div className="requirements-header">
            <p className="requirements-eyebrow">Persyaratan Umum</p>
            <h2 className="requirements-heading">
              Syarat Sertifikasi
            </h2>
            <p className="requirements-description">
              Calon mutawif wajib memenuhi persyaratan berikut sebagai komitmen terhadap profesionalisme dalam
              mendampingi jamaah haji dan umrah Indonesia.
            </p>
          </div>

          <ul className="requirements-list">
            {requirements.map((requirement) => (
              <li key={requirement} className="requirements-item">
                <svg
                  className="requirements-item-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12.5l2.5 2.5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{requirement}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="requirements-visual">
          <img
            src="/images/sections/syarat-image.jpg"
            alt="Calon mutawif mengikuti pembekalan di Masjid Nabawi"
            className="requirements-visual-image"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
};

export default RequirementsSection;
