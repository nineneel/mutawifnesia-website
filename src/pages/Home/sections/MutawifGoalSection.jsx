import './MutawifGoalSection.css';

const MutawifPurposeSection = () => {
  const certificationGoals = [
    {
      icon: '/images/home/benefits/ritual-guidance.svg',
      title: 'Kompetensi',
      description: 'Memberikan pengakuan resmi terhadap kompetensi pembimbing umrah.'
    },
    {
      icon: '/images/home/benefits/logistics-support.svg',
      title: 'Kualitas',
      description: 'Menjamin kualitas layanan bimbingan ibadah.'
    },
    {
      icon: '/images/home/benefits/language-services.svg',
      title: 'Standar',
      description: 'Mendukung standar mutu penyelenggaraan ibadah umrah sesuai SKKNI (Standar Kompetensi Kerja Nasional Indonesia).'
    },
    {
      icon: '/images/home/benefits/health-safety.svg',
      title: 'Syarat',
      description: 'Menjadi syarat profesionalitas kerja di biro travel haji dan umrah (PPIU dan PIHK).'
    }
  ];

  return (
    <section className="mutawif-goal-section">
      <div className="mutawif-goal-container">
        <h2 className="mutawif-goal-title">Tujuan Sertifikasi Mutawif</h2>
        <div className="mutawif-goal-grid">
          {certificationGoals.map((goal, index) => (
            <div key={index} className="goal-card">
              <div className="goal-icon">
                <img src={goal.icon} alt={goal.title} />
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
  );
};

export default MutawifPurposeSection;
