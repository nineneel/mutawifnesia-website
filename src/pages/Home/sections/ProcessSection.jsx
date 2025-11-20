import './ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Pendaftaran dan Verifikasi Dokumen.'
    },
    {
      number: '02',
      title: 'Asesmen Mandiri Self Assessment'
    },
    {
      number: '03',
      title: 'Uji Kompetensi: simulasi, wawancara, dan pengetahuan.'
    },
    {
      number: '04',
      title: 'Penetapan hasil: Kompeten atau Belum Kompeten.'
    },
    {
      number: '05',
      title: 'Penerbitan Sertifikat Kompetensi.'
    }
  ];

  return (
    <section className="process-section">
      <div className="process-accent"></div>

      <div className="process-header">
        <h2 className="process-title">Proses Sertifikasi</h2>
        <p className="process-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan.
        </p>
      </div>

      <div className="timeline">
        {steps.map((step, index) => (
          <div key={index} className="timeline-step">
            <div className="timeline-line">
              <img src="/images/sections/timeline-line.png" alt="" />
            </div>
            <p className="step-number">{step.number}</p>
            <p className="step-title">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
