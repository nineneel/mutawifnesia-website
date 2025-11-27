import { useEffect, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import CTA from "../../components/common/CTA";
import { IMAGES } from "../../constants/imageConstants";
import "./About.css";
import "./css/ProfileSection.css";
import "./css/VisionSection.css";
import "./css/OrganizationSection.css";

const About = () => {
  const { t } = useTranslation();
  const contentTextRef = useRef(null);
  const imageContainerRef = useRef(null);

  // Vision and Mission data
  const visionMissionValues = [
    {
      type: t('about.vision.visionType'),
      content: t('about.vision.visionContent'),
    },
    {
      type: t('about.vision.missionType'),
      items: t('about.vision.missionItems', { returnObjects: true }),
    },
  ];

  // Organization structure data
  // const organizationRoles = [
  //   {
  //     position: t('about.organization.roles.chairman'),
  //     name: "Dr. Ahmad Hidayat, M.Si",
  //     image: IMAGES.MUTAWIF[1],
  //   },
  //   {
  //     position: t('about.organization.roles.secretary'),
  //     name: "Dra. Siti Nurhaliza",
  //     image: IMAGES.MUTAWIF[2],
  //   },
  //   {
  //     position: t('about.organization.roles.treasurer'),
  //     name: "M. Rizki Pratama, S.E",
  //     image: IMAGES.MUTAWIF[3],
  //   },
  //   {
  //     position: t('about.organization.roles.coordinator'),
  //     name: "Prof. Dr. Abdullah Malik",
  //     image: IMAGES.MUTAWIF[4],
  //   },
  // ];

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
    <main className="about">
      {/* ========= HERO SECTION ========= */}
      <section className="about-hero-section">
        <div className="about-hero-background">
          <img
            src={IMAGES.MUTAWIF[4]}
            alt="Masjidil Haram"
            className="about-hero-bg-image"
          />
          <div className="about-hero-overlay"></div>
        </div>

        <div className="about-hero-content">
          <p className="about-hero-subtitle">{t('about.hero.subtitle')}</p>
          <h1 className="about-hero-title">{t('about.hero.title')}</h1>
          <p className="about-hero-description">
            {t('about.hero.description')}
          </p>
        </div>
      </section>

      {/* ========= PROFILE SECTION ========= */}
      <section className="profile-section">
        <div className="profile-container">
          <div className="profile-content">
            <div className="profile-text" ref={contentTextRef}>
              <div className="profile-header">
                <p className="profile-subtitle">{t('about.profile.subtitle')}</p>
                <h2 className="profile-title">{t('about.profile.title')}</h2>
              </div>

              <p className="profile-description">
                <Trans
                  i18nKey="about.profile.description1"
                  components={{
                    0: <span className="highlight" />,
                    1: <span className="highlight" />
                  }}
                />
              </p>

              <p className="profile-description">
                {t('about.profile.description2')}
              </p>
            </div>

            <div className="profile-image-container" ref={imageContainerRef}>
              <div className="profile-image-border" />
              <div className="profile-image-wrapper">
                <img
                  src={IMAGES.MUTAWIF[2]}
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
            <h2 className="vision-main-title">{t('about.vision.mainTitle')}</h2>
            <p className="vision-main-description">
              {t('about.vision.mainDescription')}
            </p>
          </div>

          <div className="vision-grid">
            {visionMissionValues.map((item, index) => (
              <div
                key={index}
                className="vision-card"
                style={{
                  backgroundImage: `url(${index === 0 ? IMAGES.MUTAWIF[1] : IMAGES.MUTAWIF[2]})`
                }}
              >
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
      {/* <section className="organization-section">
        <div className="organization-container">
          <div className="organization-header">
            <p className="organization-subtitle">{t('about.organization.subtitle')}</p>
            <h2 className="organization-title">{t('about.organization.title')}</h2>
            <p className="organization-description">
              {t('about.organization.description')}
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
      </section> */}

      {/* ========= CTA SECTION ========= */}
      <CTA translationKey="about.cta" buttonTo="/join" />
    </main>
  );
};

export default About;
