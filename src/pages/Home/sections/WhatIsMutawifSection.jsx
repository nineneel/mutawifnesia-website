import "./WhatIsMutawifSection.css";

const WhatIsMutawifSection = () => {
  const keyPoints = [
    "Pembimbing ibadah umrah dan haji yang tersertifikasi",
    "Memastikan pelaksanaan ibadah sesuai syariat Islam",
    "Mendampingi jamaah dari persiapan hingga selesai",
    "Memiliki kompetensi berstandar nasional (SKKNI)",
  ];

  return (
    <section className="what-is-mutawif-section">
      <div className="content">
        <div className="content-bottom">
          <div className="content-left">
            <div className="content-header">
              <p className="subtitle">Pendamping Spiritual di Tanah Suci</p>
              <h2 className="title">Apa Itu Mutawif</h2>
            </div>

            <p className="description">
              Mutawif adalah pembimbing ibadah umrah yang bertugas memastikan
              jamaah memahami dan melaksanakan ibadah sesuai tuntunan syariat
              Islam. Dalam praktiknya, mutawif juga dikenal sebagai pembimbing
              jamaah atau religious guide yang mendampingi sejak persiapan
              hingga pelaksanaan ibadah di Tanah Suci.
            </p>

            <div className="key-points">
              {keyPoints.map((point, index) => (
                <div key={index} className="key-point-item">
                  <div className="key-point-marker" />
                  <span className="key-point-text">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="image-container">
            <div className="image-border" />
            <div className="image-wrapper">
              <img
                src="/images/home/what-is-mutawif/mutawif-guide.png"
                alt="Mutawif Guide"
                className="mutawif-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMutawifSection;
