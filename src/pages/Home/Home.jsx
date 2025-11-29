import { useState, useEffect, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import Button from "../../components/common/Button";
import CTA from "../../components/common/CTA";
import SEO from "../../components/SEO";
import { seoConfig } from "../../config/seo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { IMAGES } from "../../constants/imageConstants";
import { getWhatsAppUrl } from "../../constants/contactConstants";
import "./Home.css";
import "./css/HeroSection.css";
import "./css/MutawifGoalSection.css";
import "./css/WhyMutawifnesiaSection.css";
import "./css/WhatIsMutawifSection.css";
import "./css/LembagaSection.css";
import "./css/RequirementsSection.css";
import "./css/ProcessSection.css";
import "./css/DiscoverSection.css";
import "./css/JoinCtaSection.css";
import "./css/ImpactSection.css";

const Home = () => {
  const { t } = useTranslation();
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#1A1A1A");
  const [isDarkBg, setIsDarkBg] = useState(false);
  const toRedBgRef = useRef(null);
  const contentTextRef = useRef(null);
  const imageContainerRef = useRef(null);

  // Hero slider content
  const heroSlidesData = t('home.hero.slides', { returnObjects: true });
  const heroSlides = [
    {
      image: IMAGES.HERO[1],
      ...heroSlidesData[0],
      buttonLink: "#program-mutawifnesia",
    },
    {
      image: IMAGES.HERO[3],
      ...heroSlidesData[1],
      buttonLink: "#program-mutawifnesia",
    },
    {
      image: IMAGES.HERO[2],
      ...heroSlidesData[2],
      buttonLink: "#program-mutawifnesia",
    },
  ];

  // Key points for What is Mutawif section
  const keyPoints = t('home.whatIsMutawif.keyPoints', { returnObjects: true });

  // Goals for Mutawif Purpose section
  const certificationGoalsData = t('home.mutawifGoal.goals', { returnObjects: true });
  const certificationGoals = [
    {
      icon: IMAGES.GOALS[1],
      ...certificationGoalsData[0],
    },
    {
      icon: IMAGES.GOALS[2],
      ...certificationGoalsData[1],
    },
    {
      icon: IMAGES.GOALS[3],
      ...certificationGoalsData[2],
    },
    {
      icon: IMAGES.GOALS[4],
      ...certificationGoalsData[3],
    },
    {
      icon: IMAGES.GOALS[5],
      ...certificationGoalsData[4],
    },
  ];

  // Why choose us for Why Mutawifnesia section
  const whyChooseUsData = t('home.whyMutawifnesia.reasons', { returnObjects: true });
  const whyChooseUs = [
    {
      number: "01",
      ...whyChooseUsData[0],
      image: IMAGES.WHY[1],
    },
    {
      number: "02",
      ...whyChooseUsData[1],
      image: IMAGES.WHY[2],
    },
    {
      number: "03",
      ...whyChooseUsData[2],
      image: IMAGES.WHY[3],
    },
    {
      number: "04",
      ...whyChooseUsData[3],
      image: IMAGES.WHY[4],
    },
  ];

  // Impact and Benefits data
  const impactBenefitsData = t('home.impact.benefits', { returnObjects: true });
  const impactBenefits = [
    {
      number: "01",
      ...impactBenefitsData[0],
      image: IMAGES.IMPACT[1],
    },
    {
      number: "02",
      ...impactBenefitsData[1],
      image: IMAGES.IMPACT[2],
    },
    {
      number: "03",
      ...impactBenefitsData[2],
      image: IMAGES.IMPACT[3],
    },
    {
      number: "04",
      ...impactBenefitsData[3],
      image: IMAGES.IMPACT[4],
    },
  ];

  // Requirements for Requirements section
  const requirements = t('home.requirements.list', { returnObjects: true });

  // Steps for Process section
  const stepsData = t('home.process.steps', { returnObjects: true });
  const steps = [
    {
      number: "01",
      title: stepsData[0],
      image: IMAGES.CERTIFICATION_PROCESS[1],
    },
    {
      number: "02",
      title: stepsData[1],
      image: IMAGES.CERTIFICATION_PROCESS[2],
    },
    {
      number: "03",
      title: stepsData[2],
      image: IMAGES.CERTIFICATION_PROCESS[3],
    },
    {
      number: "04",
      title: stepsData[3],
      image: IMAGES.CERTIFICATION_PROCESS[4],
    },
    {
      number: "05",
      title: stepsData[4],
      image: IMAGES.CERTIFICATION_PROCESS[5],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Get Lembaga section position
      if (toRedBgRef.current) {
        const toRedBgRefTop =
          toRedBgRef.current.getBoundingClientRect().top + scrollY;

        // Change to dark red background when reaching lembaga section
        if (scrollY + windowHeight * 0.35 >= toRedBgRefTop) {
          setBgColor("var(--primary-bg-dark)"); // var(--primary-bg-dark)
          setTextColor("#ffffff"); // White text
          setIsDarkBg(true);
        } else {
          setBgColor("#ffffff");
          setTextColor("#1A1A1A"); // Dark text
          setIsDarkBg(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.body.dataset.homeBg = isDarkBg ? "dark" : "light";
  }, [isDarkBg]);

  useEffect(() => {
    return () => {
      if (typeof document === "undefined") {
        return;
      }

      delete document.body.dataset.homeBg;
    };
  }, []);

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
    <>
      <SEO {...seoConfig.home} />
      <div
        className={`home ${isDarkBg ? "dark-bg" : "light-bg"}`}
        style={{
          backgroundColor: bgColor,
          "--dynamic-text-color": textColor,
          transition: "background-color 1s ease",
        }}
      >
        {/* ========= HERO SECTION ========= */}
      <section className="hero-section">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          pagination={{
            clickable: true,
            el: ".hero-pagination",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          className="hero-swiper"
          onSlideChangeTransitionStart={(swiper) => {
            // Remove animation classes from all slides
            const allSlides = swiper.slides;
            allSlides.forEach((slide) => {
              const content = slide.querySelector('.hero-content');
              if (content) {
                content.classList.remove('hero-animate');
              }
            });
          }}
          onSlideChangeTransitionEnd={(swiper) => {
            // Add animation class to active slide
            const activeSlide = swiper.slides[swiper.activeIndex];
            const content = activeSlide?.querySelector('.hero-content');
            if (content) {
              content.classList.add('hero-animate');
            }
          }}
          onInit={(swiper) => {
            // Animate first slide on init
            const activeSlide = swiper.slides[swiper.activeIndex];
            const content = activeSlide?.querySelector('.hero-content');
            if (content) {
              content.classList.add('hero-animate');
            }
          }}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero-background">
                <img
                  src={slide.image}
                  alt={`Hero slide ${index + 1}`}
                  className="hero-bg-image"
                />
                <div className="hero-overlay"></div>
              </div>

              <div className="hero-content">
                {/* <p className="hero-eyebrow">{slide.eyebrow}</p> */}
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <Button to={slide.buttonLink} variant="primary" size="large">
                  {slide.buttonText}
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-pagination"></div>
      </section>

      {/* ========= WHAT IS MUTAWIF SECTION ========= */}
      <section className="what-is-mutawif-section">
        <div className="content">
          <div className="content-row">
            <div className="content-text" ref={contentTextRef}>
              <div className="content-header">
                <p className="subtitle">{t('home.whatIsMutawif.subtitle')}</p>
                <h2 className="title">{t('home.whatIsMutawif.title')}</h2>
              </div>

              <p className="description">
                <Trans
                  i18nKey="home.whatIsMutawif.description"
                  components={{
                    0: <span className="highlight" />,
                    1: <span className="highlight" />,
                    2: <span className="highlight" />,
                    3: <span className="highlight" />
                  }}
                />
              </p>

              <div className="content-keypoints">
                <h3 className="keypoints-title">{t('home.whatIsMutawif.keypointsTitle')}</h3>

                <div className="key-points">
                  {keyPoints.map((point, index) => (
                    <div
                      key={index}
                      className="key-point-item"
                      data-index={index}
                    >
                      <div className="key-point-marker" />
                      <span className="key-point-text">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="image-container" ref={imageContainerRef}>
              <div className="image-border" />
              <div className="image-wrapper">
                <img
                  src={IMAGES.SECTIONS.MUTAWIF_GUIDE}
                  alt="Mutawif membimbing jamaah di Tanah Suci"
                  className="mutawif-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= MUTAWIF PURPOSE SECTION ========= */}
      <section className="mutawif-goal-section">
        <div className="mutawif-goal-container">
          <h2 className="mutawif-goal-title">{t('home.mutawifGoal.title')}</h2>
          <div className="mutawif-goal-grid">
            {certificationGoals.map((goal, index) => (
              <div
                key={index}
                className="goal-card"
                style={{ backgroundImage: `url(${goal.icon})` }}
              >
                <div className="goal-overlay"></div>
                <div className="goal-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="goal-content">
                  <h3 className="goal-title">{goal.title}</h3>
                  <p className="goal-description">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= LEMBAGA SECTION ========= */}
      <section className="lembaga-section">
        <div className="lembaga-inner">
          <figure className="lembaga-visual">
            <img
              src={IMAGES.SECTIONS.LEMBAGA_IMAGE}
              alt="Mutawif memberikan bimbingan ibadah kepada jamaah"
              className="lembaga-visual-image"
              loading="lazy"
            />
          </figure>

          <div className="lembaga-copy">
            <h2 className="lembaga-heading">
              {t('home.lembaga.heading', { returnObjects: true }).map((text, idx) => (
                <span key={idx}>{text}</span>
              ))}
            </h2>

            <p className="lembaga-description">
              {t('home.lembaga.description')}
            </p>

            <div className="lembaga-highlight">
              <p className="lembaga-highlight-value">{t('home.lembaga.highlightValue')}</p>
              <div className="lembaga-highlight-text">
                <p className="lembaga-highlight-title">
                  {t('home.lembaga.highlightTitle')}
                </p>
                <p className="lembaga-highlight-caption">
                  {t('home.lembaga.highlightCaption')}
                  <a
                    href="https://haji.go.id"
                    className="lembaga-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('home.lembaga.linkText')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= CTA SECTION ========= */}
      <CTA translationKey="home.cta" buttonTo="#program-mutawifnesia" />

      {/* ========= REQUIREMENTS SECTION ========= */}
      <section  ref={toRedBgRef}  className="requirements-section">
        <div className="requirements-inner">
          <div className="requirements-copy">
            <div className="requirements-header">
              <p className="requirements-eyebrow">{t('home.requirements.eyebrow')}</p>
              <h2 className="requirements-heading">{t('home.requirements.heading')}</h2>
              <p className="requirements-description">
                {t('home.requirements.description')}
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
              src={IMAGES.SECTIONS.SYARAT_IMAGE}
              alt="Calon mutawif mengikuti pembekalan di Masjid Nabawi"
              className="requirements-visual-image"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ========= PROCESS SECTION ========= */}
      <section className="process-section">
        <div className="process-header">
          <h2 className="process-title">{t('home.process.title')}</h2>
          <p className="process-description">
            {t('home.process.description')}
          </p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <p className="step-number">{step.number}</p>
                <p className="step-title">{step.title}</p>
              </div>
              <div className="timeline-dot">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="9" cy="9" r="8" fill="white" />
                </svg>
              </div>
              <div className="timeline-image">
                <div className="timeline-image-wrapper">
                  <img
                    src={
                      step.image ||
                      IMAGES.MUTAWIF[1]
                    }
                    alt={`Step ${step.number}`}
                    className="step-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========= WHY MUTAWIFNESIA SECTION ========= */}
      <section className="why-mutawifnesia-section">
        <div className="why-mutawifnesia-content">
          <div className="why-mutawifnesia-header-container">
            <div className="why-mutawifnesia-header">
              <h2 className="why-mutawifnesia-title">{t('home.whyMutawifnesia.title')}</h2>
              <p className="why-mutawifnesia-subtitle">
                {t('home.whyMutawifnesia.subtitle')}
              </p>
            </div>
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
                  <p className="why-mutawifnesia-description">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= IMPACT & BENEFITS SECTION ========= */}
      <section className="impact-section">
        <div className="impact-content">
          <div className="impact-header-container">
            <div className="impact-header">
              <h2 className="impact-title">{t('home.impact.title')}</h2>
              <p className="impact-subtitle">
                {t('home.impact.subtitle')}
              </p>
            </div>
          </div>

          <div className="impact-list">
            {impactBenefits.map((item, index) => (
              <div key={index} className="impact-card">
                <div className="impact-card-image-wrapper">
                  <div
                    className="impact-card-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="impact-card-overlay" />
                  <p className="impact-number">{item.number}</p>
                </div>
                <div className="impact-card-content">
                  <h3 className="impact-card-title">{item.title}</h3>
                  <p className="impact-description">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= DISCOVER SECTION ========= */}
      <section id="program-mutawifnesia" className="discover-section">
        <div className="discover-header">
          <h2 className="discover-title">{t('home.discover.title')}</h2>
          <p className="discover-description">
            {t('home.discover.description')}
          </p>
        </div>

        <div className="discover-card">
          <div className="card-image">
            <img
              src={IMAGES.SECTIONS.DISCOVER_PACKAGE}
              alt="Program Sertifikasi Mutawifnesia"
              className="package-image"
            />
          </div>

          <div className="card-content">
            <p className="card-subtitle">{t('home.discover.cardSubtitle')}</p>
            <h3 className="card-title">{t('home.discover.cardTitle')}</h3>

            <ul className="package-features">
              {t('home.discover.features', { returnObjects: true }).map((feature, index) => (
                <li key={index}>
                  <div className="check-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="11"
                        fill="#E4BD49"
                        stroke="#E4BD49"
                        strokeWidth="2"
                      />
                      <path
                        d="M8.5 12.5L11 15L16 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
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
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="#E4BD49"
                      strokeWidth="2"
                    />
                    <path d="M3 9H21" stroke="#E4BD49" strokeWidth="2" />
                    <path
                      d="M8 3V7"
                      stroke="#E4BD49"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 3V7"
                      stroke="#E4BD49"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>{t('home.discover.badges.date')}</span>
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
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#E4BD49"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 7V12L16 14"
                      stroke="#E4BD49"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t('home.discover.badges.duration')}</span>
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
                    <path
                      d="M12 10V14"
                      stroke="#E4BD49"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="17" r="1" fill="#E4BD49" />
                  </svg>
                  <span>{t('home.discover.badges.quota')}</span>
                </div>
              </div>

              <div className="package-price">
                <p className="price-label">{t('home.discover.priceLabel')}</p>
                <p className="price-amount">
                  <span className="currency">{t('home.discover.currency')}</span>
                  <span className="amount">{t('home.discover.amount')}</span>
                </p>
              </div>

              <div className="package-button">
                <Button
                  href={getWhatsAppUrl()}
                  variant="primary"
                  size="medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('home.discover.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= CTA SECTION (BOTTOM) ========= */}
      <CTA translationKey="home.cta" variant="bottom" buttonTo="#program-mutawifnesia" />
      </div>
    </>
  );
};

export default Home;
