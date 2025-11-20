import {
  HeroSection,
  WhyMutawifSection,
  BenefitsSection,
  LembagaSection,
  RequirementsSection,
  JoinCtaSection,
  ProcessSection,
  DiscoverSection
} from './sections';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <BenefitsSection />
      <WhyMutawifSection />
      <LembagaSection />
      <RequirementsSection />
      <ProcessSection />
      <DiscoverSection />
      <JoinCtaSection />
    </div>
  );
};

export default Home;
