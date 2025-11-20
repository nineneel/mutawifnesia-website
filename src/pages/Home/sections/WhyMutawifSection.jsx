import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './WhyMutawifSection.css';

const WhyMutawifSection = () => {
  const certificationGoals = [
    {
      number: '01',
      title: 'Kompetensi',
      description: 'Memberikan pengakuan resmi terhadap kompetensi pembimbing umrah.',
      image: '/images/home/mutawif/mutawif-1.webp'
    },
    {
      number: '02',
      title: 'Kualitas',
      description: 'Menjamin kualitas layanan bimbingan ibadah.',
      image: '/images/home/mutawif/mutawif-2.webp'
    },
    {
      number: '03',
      title: 'Standar',
      description: 'Mendukung standar mutu penyelenggaraan ibadah umrah sesuai SKKNI (Standar Kompetensi Kerja Nasional Indonesia).',
      image: '/images/home/mutawif/mutawif-3.webp'
    },
    {
      number: '04',
      title: 'Syarat',
      description: 'Menjadi syarat profesionalitas kerja di biro travel haji dan umrah (PPIU dan PIHK).',
      image: '/images/home/mutawif/mutawif-1.webp'
    }
  ];

  return (
    <section className="why-mutawif-section">
      <div className="why-mutawif-header">
        <h2 className="why-mutawif-title">TUJUAN SERTIFIKASI MUTAWIF</h2>
        <p className="why-mutawif-description">
          Mutawif adalah pembimbing ibadah umrah yang bertugas memastikan jamaah memahami dan melaksanakan
          ibadah sesuai tuntunan syariat Islam. Dalam praktiknya, mutawif juga dikenal sebagai pembimbing jamaah atau
          religious guide yang mendampingi sejak persiapan hingga pelaksanaan ibadah di Tanah Suci.
        </p>
      </div>

      <div className="certification-goals-carousel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={false}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {certificationGoals.map((goal, index) => (
            <SwiperSlide key={index}>
              <div
                className="certification-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${goal.image})`,
                }}
              >
                <p className="certification-number">{goal.number}</p>
                <h3 className="certification-title">{goal.title}</h3>
                <p className="certification-description">{goal.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyMutawifSection;
