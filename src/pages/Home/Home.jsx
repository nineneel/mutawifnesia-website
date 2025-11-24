import { useState, useEffect, useRef } from "react";
import Button from "../../components/common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Home.css";
import "./css/HeroSection.css";
import "./css/MutawifGoalSection.css";
import "./css/CTASection.css";
import "./css/WhyMutawifnesiaSection.css";
import "./css/WhatIsMutawifSection.css";
import "./css/LembagaSection.css";
import "./css/RequirementsSection.css";
import "./css/ProcessSection.css";
import "./css/DiscoverSection.css";
import "./css/JoinCtaSection.css";

const Home = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#1A1A1A");
  const [isDarkBg, setIsDarkBg] = useState(false);
  const toRedBgRef = useRef(null);
  const contentTextRef = useRef(null);
  const imageContainerRef = useRef(null);

  // Hero slider content
  const heroSlides = [
    {
      image: "/images/hero-bg.jpg",
      eyebrow: "Professional Certification for Future Mutawif Indonesia",
      title: (
        <>
          Sertifikasi Mutawif Profesional
        </>
      ),
      subtitle:
        "Bergabunglah dengan program sertifikasi mutawif profesional dan wujudkan impian membimbing jamaah Umrah & Haji",
      buttonText: "Gabung Sekarang",
      buttonLink: "/join",
    },
    {
      image: "/images/home/mutawif/mutawif-2.webp",
      eyebrow: "Certified & Experienced Mutawif Guides",
      title: (
        <>
          Sertifikat Berstandar Nasional
        </>
      ),
      subtitle:
        "Dapatkan sertifikasi resmi dari LSP AHLAN yang diakui BNSP dan Kementerian Haji & Umrah RI",
      buttonText: "Pelajari Lebih Lanjut",
      buttonLink: "/join",
    },
    {
      image: "/images/home/mutawif/mutawif-4.webp",
      eyebrow: "Join The Professional Mutawif Community",
      title: (
        <>
          Bergabung dengan Komunitas Mutawif
        </>
      ),
      subtitle:
        "Jalin networking dengan mutawif profesional di seluruh Indonesia dan tingkatkan karir di industri Umrah & Haji",
      buttonText: "Daftar Sekarang",
      buttonLink: "/join",
    },
  ];

  // Key points for What is Mutawif section
  const keyPoints = [
    "Pembimbing ibadah Umrah & Haji yang tersertifikasi",
    "Memastikan pelaksanaan ibadah sesuai syariat Islam",
    "Mendampingi jamaah dari persiapan hingga selesai",
    "Memiliki kompetensi berstandar nasional (SKKNI)",
  ];

  // Goals for Mutawif Purpose section
  const certificationGoals = [
    {
      icon: "/images/home/mutawif/mutawif-1.webp",
      title: "Kompetensi",
      description:
        "Memberikan pengakuan resmi terhadap kompetensi pembimbing umrah.",
    },
    {
      icon: "/images/home/mutawif/mutawif-2.webp",
      title: "Kualitas",
      description: "Menjamin kualitas layanan bimbingan ibadah.",
    },
    {
      icon: "/images/home/mutawif/mutawif-3.webp",
      title: "Standar",
      description:
        "Mendukung standar mutu penyelenggaraan ibadah Umrah & Haji sesuai SKKNI (Standar Kompetensi Kerja Nasional Indonesia).",
    },
    {
      icon: "/images/home/mutawif/mutawif-4.webp",
      title: "Syarat",
      description:
        "Menjadi syarat profesionalitas kerja di biro travel haji dan umrah (PPIU dan PIHK).",
    },
    {
      icon: "/images/home/mutawif/mutawif-1.webp",
      title: "Visa & Iqamah",
      description:
        "Menerbitkan Visa & Iqamah sesuai pekerjaan seorang Mutawif legal di Saudi (Visa Amil - Umrah & Hajj Controller)",
    },
  ];

  // Why choose us for Why Mutawifnesia section
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
        "Semua mutawif telah memiliki sertifikasi resmi dan pengalaman mendalam dalam membimbing ibadah Umrah & Haji.",
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

  // Requirements for Requirements section
  const requirements = [
    "Beragama Islam.",
    "Usia minimal 21 tahun.",
    "Pendidikan minimal SMA/MA atau sederajat.",
    "Mampu berkomunikasi dan membimbing jamaah.",
    "Menyerahkan dokumen administrasi (KTP, ijazah, pas foto, CV, dan bukti pengalaman).",
  ];

  // Steps for Process section
  const steps = [
    {
      number: "01",
      title: "Pendaftaran dan Verifikasi Dokumen.",
    },
    {
      number: "02",
      title: "Asesmen Mandiri (Self Assessment).",
    },
    {
      number: "03",
      title:
        "Uji Kompetensi: observasi praktik/simulasi bimbingan, wawancara, dan tes pengetahuan.",
    },
    {
      number: "04",
      title: "Penetapan hasil: Kompeten / Belum Kompeten.",
    },
    {
      number: "05",
      title: "Penerbitan Sertifikat Kompetensi.",
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
                <p className="subtitle">Pendamping Spiritual di Tanah Suci</p>
                <h2 className="title">Apa Itu Mutawif</h2>
              </div>

              <p className="description">
                Mutawif adalah{" "}
                <span className="highlight">
                  pembimbing ibadah Umrah & Haji
                </span>{" "}
                yang memastikan pelaksanaan ibadah sesuai{" "}
                <span className="highlight">syariat Islam</span>. Dikenal juga
                sebagai <span className="highlight">religious guide</span> yang
                mendampingi jamaah dari persiapan hingga pelaksanaan di{" "}
                <span className="highlight">Tanah Suci</span>.
              </p>

              <div className="content-keypoints">
                <h3 className="keypoints-title">Peran Utama Mutawif</h3>

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
                  src="/images/home/what-is-mutawif/mutawif-guide.png"
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
          <h2 className="mutawif-goal-title">Tujuan Sertifikasi Mutawif</h2>
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

      {/* ========= CTA SECTION ========= */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Mulai Perjalanan Anda Menjadi Mutawif Profesional
          </h2>
          <p className="cta-subtitle">
            Bergabunglah dengan program sertifikasi mutawif dan wujudkan impian
            membimbing jamaah Umrah & Haji
          </p>
          <Button variant="primary" size="large">
            Daftar Sekarang
          </Button>
        </div>
      </section>

      {/* ========= WHY MUTAWIFNESIA SECTION ========= */}
      <section ref={toRedBgRef} className="why-mutawifnesia-section">
        <div className="why-mutawifnesia-content">
          <div className="why-mutawifnesia-header-container">
            <div className="why-mutawifnesia-header">
              <h2 className="why-mutawifnesia-title">Mengapa Mutawifnesia?</h2>
              <p className="why-mutawifnesia-subtitle">
                Platform terpercaya yang menghubungkan jamaah dengan mutawif
                bersertifikat untuk pengalaman ibadah yang berkualitas.
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

      {/* ========= LEMBAGA SECTION ========= */}
      <section className="lembaga-section">
        <div className="lembaga-inner">
          <figure className="lembaga-visual">
            <img
              src="/images/sections/lembaga-image.jpg"
              alt="Mutawif memberikan bimbingan ibadah kepada jamaah"
              className="lembaga-visual-image"
              loading="lazy"
            />
          </figure>

          <div className="lembaga-copy">
            <h2 className="lembaga-heading">
              <span>Lembaga</span>
              <span>Penyelenggara</span>
              <span>Sertifikasi</span>
            </h2>

            <p className="lembaga-description">
              Sertifikasi Mutawif dilaksanakan oleh LSP AHLAN, lembaga
              sertifikasi profesi yang telah mendapat lisensi dari Badan
              Nasional Sertifikasi Profesi (BNSP) dan memiliki skema sertifikasi
              yang disahkan oleh Kementerian Haji &amp; Umrah RI.
            </p>

            <div className="lembaga-highlight">
              <p className="lembaga-highlight-value">221K+</p>
              <div className="lembaga-highlight-text">
                <p className="lembaga-highlight-title">
                  jamaah Umrah & Haji Tahunan
                </p>
                <p className="lembaga-highlight-caption">
                  Dengan warga Indonesia yang membentuk salah satu kontingen
                  nasional terbesar setiap tahunnya –{" "}
                  <a
                    href="https://haji.go.id"
                    className="lembaga-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    haji.go.id
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= REQUIREMENTS SECTION ========= */}
      <section className="requirements-section">
        <div className="requirements-inner">
          <div className="requirements-copy">
            <div className="requirements-header">
              <p className="requirements-eyebrow">Persyaratan Umum</p>
              <h2 className="requirements-heading">Syarat Sertifikasi</h2>
              <p className="requirements-description">
                Calon mutawif wajib memenuhi persyaratan berikut sebagai
                komitmen terhadap profesionalisme dalam mendampingi jamaah Umrah
                & Haji dan umrah Indonesia.
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

      {/* ========= PROCESS SECTION ========= */}
      <section className="process-section">
        <div className="process-header">
          <h2 className="process-title">Proses Sertifikasi</h2>
          <p className="process-description">
            Ikuti alur sertifikasi dari pendaftaran dan verifikasi berkas,
            asesmen mandiri, uji kompetensi, penetapan hasil hingga penerbitan
            sertifikat.
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
                      whyChooseUs[index % whyChooseUs.length]?.image ||
                      "/images/home/mutawif/mutawif-1.webp"
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

      {/* ========= DISCOVER SECTION ========= */}
      <section className="discover-section">
        <div className="discover-header">
          <h2 className="discover-title">Program Mutawifnesia</h2>
          <p className="discover-description">
            Mutawifnesia menghadirkan program sertifikasi mutawif profesional
            dengan kurikulum eksklusif, mentor bersertifikat, dan pengalaman
            lapangan langsung di Tanah Suci.
          </p>
        </div>

        <div className="discover-card">
          <div className="card-image">
            <img
              src="/images/sections/discover-package.webp"
              alt="Program Sertifikasi Mutawifnesia"
              className="package-image"
            />
          </div>

          <div className="card-content">
            <p className="card-subtitle">Program Sertifikasi</p>
            <h3 className="card-title">Batch 1 Mutawifnesia 2025</h3>

            <ul className="package-features">
              <li>
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
                <span>
                  Kurikulum berbasis SKKNI dengan mentor praktisi ibadah
                </span>
              </li>
              <li>
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
                <span>
                  Simulasi bimbingan jamaah dan praktik lapangan terpandu
                </span>
              </li>
              <li>
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
                <span>Sertifikasi resmi dari LSP AHLAN &amp; BNSP</span>
              </li>
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
                  <span>Januari 2026</span>
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
                  <span>1-2 Bulan</span>
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
                  <span>Kuota Terbatas</span>
                </div>
              </div>

              <div className="package-price">
                <p className="price-label">Investasi Mulai</p>
                <p className="price-amount">
                  <span className="currency">Rp</span>
                  <span className="amount">34.500.000</span>
                </p>
              </div>

              <Button variant="primary" size="medium">
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========= CTA SECTION (BOTTOM) ========= */}
      <section className="cta-section cta-bottom">
        <div className="cta-container">
          <h2 className="cta-title">
            Mulai Perjalanan Anda Menjadi Mutawif Profesional
          </h2>
          <p className="cta-subtitle">
            Bergabunglah dengan program sertifikasi mutawif dan wujudkan impian
            membimbing jamaah Umrah & Haji
          </p>
          <Button variant="primary" size="large">
            Daftar Sekarang
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
