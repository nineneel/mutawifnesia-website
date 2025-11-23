import { forwardRef } from 'react';
import "./WhyMutawifnesiaSection.css";

const WhyMutawifnesiaSection = forwardRef((_props, ref) => {
  const whyChooseUs = [
    {
      number: "01",
      title: "Platform Terpercaya",
      description:
        "Sistem terintegrasi yang menghubungkan mutawif tersertifikasi dengan jamaah umrah di seluruh Indonesia.",
      image: "/images/home/mutawif/mutawif-1.webp",
    },
    {
      number: "02",
      title: "Mutawif Bersertifikat",
      description:
        "Semua mutawif telah memiliki sertifikasi resmi dan pengalaman mendalam dalam membimbing ibadah umrah.",
      image: "/images/home/mutawif/mutawif-2.webp",
    },
    {
      number: "03",
      title: "Proses Mudah & Cepat",
      description:
        "Pendaftaran online yang sederhana dengan verifikasi cepat untuk memudahkan jamaah menemukan mutawif terbaik.",
      image: "/images/home/mutawif/mutawif-3.webp",
    },
    {
      number: "04",
      title: "Jaminan Kualitas",
      description:
        "Standar pelayanan tinggi dengan monitoring berkala untuk memastikan pengalaman ibadah yang khusyuk dan aman.",
      image: "/images/home/mutawif/mutawif-4.webp",
    },
  ];

  return (
    <section ref={ref} className="why-mutawifnesia-section">
      <div className="why-mutawifnesia-content">
        <div className="why-mutawifnesia-header">
          <h2 className="why-mutawifnesia-title">Mengapa Mutawifnesia</h2>
          <p className="why-mutawifnesia-subtitle">
            Platform terpercaya yang menghubungkan jamaah dengan mutawif bersertifikat untuk pengalaman ibadah yang berkualitas.
          </p>
        </div>

        <div className="why-mutawifnesia-list">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="why-mutawifnesia-card">
              <div className="why-mutawifnesia-card-image-wrapper">
                <div
                  className="why-mutawifnesia-card-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="why-mutawifnesia-card-overlay" />
                <p className="why-mutawifnesia-number">{item.number}</p>
              </div>
              <div className="why-mutawifnesia-card-content">
                <h3 className="why-mutawifnesia-card-title">{item.title}</h3>
                <p className="why-mutawifnesia-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

WhyMutawifnesiaSection.displayName = 'WhyMutawifnesiaSection';

export default WhyMutawifnesiaSection;
