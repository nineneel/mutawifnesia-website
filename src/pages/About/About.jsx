import { useEffect, useRef } from "react";
import Button from "../../components/common/Button";
import "./About.css";
import "./css/ProfileSection.css";
import "./css/VisionSection.css";
import "./css/OrganizationSection.css";

const About = () => {
  const contentTextRef = useRef(null);
  const imageContainerRef = useRef(null);

  // Vision and Mission data
  const visionMissionValues = [
    {
      type: "Visi",
      content:
        "Menjadi lembaga sertifikasi profesi terkemuka yang menghasilkan mutawif berkualitas tinggi untuk melayani jamaah Indonesia.",
    },
    {
      type: "Misi",
      items: [
        "Menyelenggarakan sertifikasi mutawif berstandar nasional dan internasional",
        "Meningkatkan kompetensi pembimbing ibadah Umrah & Haji",
        "Membangun ekosistem profesional dalam industri Umrah & Haji",
        "Memberikan jaminan kualitas pelayanan kepada jamaah",
      ],
    },
  ];

  // Organization structure data
  const organizationRoles = [
    {
      position: "Ketua LSP",
      name: "Dr. Ahmad Hidayat, M.Si",
      image: "/images/home/mutawif/mutawif-1.webp",
    },
    {
      position: "Sekretaris",
      name: "Dra. Siti Nurhaliza",
      image: "/images/home/mutawif/mutawif-2.webp",
    },
    {
      position: "Bendahara",
      name: "M. Rizki Pratama, S.E",
      image: "/images/home/mutawif/mutawif-3.webp",
    },
    {
      position: "Koordinator Asesor",
      name: "Prof. Dr. Abdullah Malik",
      image: "/images/home/mutawif/mutawif-4.webp",
    },
  ];

  // Sync image height with content text height
  useEffect(() => {
    const syncHeight = () => {
      if (contentTextRef.current && imageContainerRef.current) {
        const contentHeight = contentTextRef.current.offsetHeight;
        imageContainerRef.current.style.height = `${contentHeight}px`;
      }
    };

    syncHeight();
    window.addEventListener("resize", syncHeight);

    return () => {
      window.removeEventListener("resize", syncHeight);
    };
  }, []);

  return (
    <div className="about">
      {/* ========= HERO SECTION ========= */}
      <section className="about-hero-section">
        <div className="about-hero-background">
          <img
            src="/images/home/mutawif/mutawif-2.webp"
            alt="Masjidil Haram"
            className="about-hero-bg-image"
          />
          <div className="about-hero-overlay"></div>
        </div>

        <div className="about-hero-content">
          <p className="about-hero-subtitle">Mengenal Lebih Dekat</p>
          <h1 className="about-hero-title">Tentang Kami</h1>
          <p className="about-hero-description">
            Lembaga sertifikasi profesi terpercaya untuk menghasilkan mutawif
            berkualitas tinggi melayani jamaah Indonesia
          </p>
        </div>
      </section>

      {/* ========= PROFILE SECTION ========= */}
      <section className="profile-section">
        <div className="profile-container">
          <div className="profile-content">
            <div className="profile-text" ref={contentTextRef}>
              <div className="profile-header">
                <p className="profile-subtitle">Profil Lembaga</p>
                <h2 className="profile-title">PT & LSP AHLAN</h2>
              </div>

              <p className="profile-description">
                LSP AHLAN adalah <span className="highlight">Lembaga Sertifikasi Profesi</span> yang berkomitmen untuk
                meningkatkan standar kompetensi mutawif di Indonesia. Kami
                bekerja sama dengan <span className="highlight">Badan Nasional Sertifikasi Profesi (BNSP)</span> dan
                Kementerian Agama RI untuk menghasilkan pembimbing ibadah yang
                profesional dan kompeten.
              </p>

              <p className="profile-description">
                Dengan pengalaman lebih dari 5 tahun, kami telah mensertifikasi
                ratusan mutawif yang kini aktif melayani jamaah di seluruh
                Indonesia dan Tanah Suci.
              </p>
            </div>

            <div className="profile-image-container" ref={imageContainerRef}>
              <div className="profile-image-border" />
              <div className="profile-image-wrapper">
                <img
                  src="/images/home/what-is-mutawif/mutawif-guide.png"
                  alt="LSP AHLAN Building"
                  className="profile-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= VISION MISSION SECTION ========= */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-header">
            <h2 className="vision-main-title">Visi dan Misi</h2>
            <p className="vision-main-description">
              Fondasi yang mendasari setiap langkah kami dalam menghasilkan
              mutawif profesional untuk melayani jamaah Indonesia.
            </p>
          </div>

          <div className="vision-grid">
            {visionMissionValues.map((item, index) => (
              <div key={index} className="vision-card">
                <h3 className="vision-card-type">{item.type}</h3>
                {item.content ? (
                  <p className="vision-card-content">{item.content}</p>
                ) : (
                  <ul className="vision-card-list">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="vision-card-list-item">
                        <span className="vision-bullet" />
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= ORGANIZATION STRUCTURE SECTION ========= */}
      <section className="organization-section">
        <div className="organization-container">
          <div className="organization-header">
            <p className="organization-subtitle">Kepemimpinan</p>
            <h2 className="organization-title">Struktur Organisasi</h2>
            <p className="organization-description">
              Tim kepemimpinan yang berpengalaman dan berkomitmen untuk
              mengembangkan standar profesional mutawif Indonesia.
            </p>
          </div>

          <div className="organization-grid">
            {organizationRoles.map((member, index) => (
              <div key={index} className="organization-card">
                <div
                  className="organization-card-image"
                  style={{ backgroundImage: `url(${member.image})` }}
                >
                  <div className="organization-card-overlay" />
                </div>
                <div className="organization-card-content">
                  <p className="organization-position">{member.position}</p>
                  <h3 className="organization-name">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= CTA SECTION ========= */}
      <section className="about-cta-section">
        <div className="about-cta-container">
          <h2 className="about-cta-title">
            Siap Bergabung dengan Program Sertifikasi?
          </h2>
          <p className="about-cta-subtitle">
            Mari bersama-sama meningkatkan kualitas pelayanan jamaah Umrah &
            Haji Indonesia
          </p>
          <Button to="/join" variant="primary" size="large">
            Daftar Sekarang
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
