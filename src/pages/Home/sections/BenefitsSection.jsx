import './BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <rect x="6" y="6" width="88" height="88" rx="16" fill="white"/>
          <path d="M50 30C43.3726 30 38 35.3726 38 42C38 48.6274 43.3726 54 50 54C56.6274 54 62 48.6274 62 42C62 35.3726 56.6274 30 50 30Z" fill="#BC1F22"/>
          <path d="M50 46C46.6863 46 44 43.3137 44 40C44 36.6863 46.6863 34 50 34C53.3137 34 56 36.6863 56 40C56 43.3137 53.3137 46 50 46Z" fill="white"/>
        </svg>
      ),
      title: 'Ritual\nGuidance'
    },
    {
      icon: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <rect x="6" y="6" width="88" height="88" rx="16" fill="white"/>
          <path d="M50 30L43 38L50 46L57 38L50 30Z" fill="#BC1F22"/>
          <path d="M50 38C52.2091 38 54 36.2091 54 34C54 31.7909 52.2091 30 50 30C47.7909 30 46 31.7909 46 34C46 36.2091 47.7909 38 50 38Z" fill="#BC1F22"/>
          <path d="M36 50C36 44.4772 40.4772 40 46 40H54C59.5228 40 64 44.4772 64 50V60C64 62.2091 62.2091 64 60 64H40C37.7909 64 36 62.2091 36 60V50Z" fill="#BC1F22"/>
        </svg>
      ),
      title: 'Logistics\nSupport'
    },
    {
      icon: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <rect x="6" y="6" width="88" height="88" rx="16" fill="white"/>
          <rect x="36" y="30" width="28" height="36" rx="2" fill="#BC1F22"/>
          <circle cx="44" cy="42" r="4" fill="white"/>
          <path d="M60 46L68 50V58L60 54V46Z" fill="#BC1F22"/>
          <circle cx="64" cy="52" r="2" fill="white"/>
        </svg>
      ),
      title: 'Language\nServices'
    },
    {
      icon: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <rect x="6" y="6" width="88" height="88" rx="16" fill="white"/>
          <path d="M50 30L43 38L50 46L57 38L50 30Z" fill="#BC1F22"/>
          <path d="M50 36C51.6569 36 53 34.6569 53 33C53 31.3431 51.6569 30 50 30C48.3431 30 47 31.3431 47 33C47 34.6569 48.3431 36 50 36Z" fill="#BC1F22"/>
          <ellipse cx="50" cy="52" rx="14" ry="16" fill="#BC1F22"/>
          <path d="M43 48C43 48 45 52 50 52C55 52 57 48 57 48" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      title: 'Health &\nSafety'
    }
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <div className="benefit-icon">
              {benefit.icon}
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
