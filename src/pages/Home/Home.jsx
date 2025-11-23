import { useState, useEffect, useRef } from 'react';
import {
  HeroSection,
  MutawifPurposeSection,
  CTASection,
  WhyMutawifnesiaSection,
  WhatIsMutawifSection,
  LembagaSection,
  RequirementsSection,
  JoinCtaSection,
  ProcessSection,
  DiscoverSection
} from './sections';
import './Home.css';

const Home = () => {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#1A1A1A');
  const [isDarkBg, setIsDarkBg] = useState(false);
  const toRedBgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // const windowHeight = window.innerHeight;

      // Get Lembaga section position
      if (toRedBgRef.current) {
        const lembagaTop = toRedBgRef.current.getBoundingClientRect().top + scrollY;

        // Change to dark red background when reaching lembaga section
        if (scrollY + 40 >= lembagaTop) {
          setBgColor('#2e1616'); // var(--primary-red-dark)
          setTextColor('#ffffff'); // White text
          setIsDarkBg(true);
        } else {
          setBgColor('#ffffff');
          setTextColor('#1A1A1A'); // Dark text
          setIsDarkBg(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.body.dataset.homeBg = isDarkBg ? 'dark' : 'light';
  }, [isDarkBg]);

  useEffect(() => {
    return () => {
      if (typeof document === 'undefined') {
        return;
      }

      delete document.body.dataset.homeBg;
    };
  }, []);

  return (
    <div
      className={`home ${isDarkBg ? 'dark-bg' : 'light-bg'}`}
      style={{
        backgroundColor: bgColor,
        '--dynamic-text-color': textColor,
        transition: 'background-color 1s ease'
      }}
    >
      <HeroSection />
      <WhatIsMutawifSection />
      <MutawifPurposeSection />
      <CTASection />
      <WhyMutawifnesiaSection ref={toRedBgRef} />
      <LembagaSection />
      <RequirementsSection />
      <ProcessSection />
      <DiscoverSection />
      <CTASection isBottom={true} />
      {/* <JoinCtaSection /> */}
    </div>
  );
};

export default Home;
