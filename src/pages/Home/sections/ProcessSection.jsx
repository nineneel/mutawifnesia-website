import { forwardRef, useEffect, useState } from 'react';
import './ProcessSection.css';

const ProcessSection = forwardRef((props, ref) => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleChange = event => setIsSmallDevice(event.matches);

    handleChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Pendaftaran dan Verifikasi Dokumen.'
    },
    {
      number: '02',
      title: 'Asesmen Mandiri (Self Assessment).'
    },
    {
      number: '03',
      title: 'Uji Kompetensi: observasi praktik/simulasi bimbingan, wawancara, dan tes pengetahuan.'
    },
    {
      number: '04',
      title: 'Penetapan hasil: Kompeten / Belum Kompeten.'
    },
    {
      number: '05',
      title: 'Penerbitan Sertifikat Kompetensi.'
    }
  ];

  return (
    <section ref={ref} className="process-section">
      {/* <div className="process-accent"></div> */}

      <div className="process-header">
        <h2 className="process-title">Proses Sertifikasi</h2>
        <p className="process-description">
          Ikuti alur sertifikasi dari pendaftaran dan verifikasi berkas, asesmen
          mandiri, uji kompetensi, penetapan hasil hingga penerbitan sertifikat.
        </p>
      </div>

      <div className="timeline">
        {steps.map((step, index) => (
          <div key={index} className="timeline-step">
            <div className="timeline-header">
              {!isSmallDevice && (
                <div className="timeline-line">
                  <svg viewBox="0 0 337 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <circle cx="9" cy="9" r="8" fill="white" />
                    <line x1="18" y1="9" x2="337" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              )}
              <p className="step-number">{step.number}</p>
              {isSmallDevice && (
                <div className="timeline-line timeline-line--vertical">
                  <svg viewBox="0 0 337 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <circle cx="9" cy="9" r="8" fill="white" />
                    <line x1="18" y1="9" x2="337" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </div>
            
            <p className="step-title">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

ProcessSection.displayName = 'ProcessSection';

export default ProcessSection;
