import React, { useState, useEffect } from 'react';
import { LogoSymbol } from './components/Icons';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ScooterBand } from './components/ScooterBand';
import { HowItWorks } from './components/HowItWorks';
import { AppScreens } from './components/AppScreens';
import { TrustSection } from './components/TrustSection';
import { PartnersSection } from './components/PartnersSection';
import { OurPartners } from './components/OurPartners';
import { AboutSection } from './components/AboutSection';
import { CareersSection } from './components/CareersSection';
import { WaitlistSection } from './components/WaitlistSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { SubPage } from './components/SubPage';
import { MERCHANTS_CONFIG, RIDERS_CONFIG } from './constants/data';

export function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash.slice(1));
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  // Handle routing via hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentHash(hash);

      const isSubpage = hash === 'vendors' || hash === 'riders';
      if (isSubpage || !hash || hash === 'top') {
        window.scrollTo(0, 0);
      } else {
        const el = document.getElementById(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 30);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial call on mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Set up intersection observer for scroll reveal elements (.rv)
  useEffect(() => {
    try {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('on');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      const elements = document.querySelectorAll('.rv:not(.on)');
      elements.forEach((el) => io.observe(el));

      return () => {
        elements.forEach((el) => io.unobserve(el));
      };
    } catch (e) {
      document.querySelectorAll('.rv').forEach((el) => el.classList.add('on'));
    }
  }, [currentHash]);

  const handleNavigate = (targetHash) => {
    window.location.hash = targetHash;
  };

  const handleOpenApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setModalOpen(true);
  };

  return (
    <>
      {/* Global SVG Symbol definitions */}
      <LogoSymbol />

      {/* Header with countdown and navigation */}
      <Header onNavigate={handleNavigate} />

      <main id="top">
        {currentHash === 'vendors' && (
          <SubPage config={MERCHANTS_CONFIG} />
        )}

        {currentHash === 'riders' && (
          <SubPage config={RIDERS_CONFIG} />
        )}

        {currentHash !== 'vendors' && currentHash !== 'riders' && (
          <div id="v-home">
            <Hero onNavigate={handleNavigate} />
            <Services />
            <ScooterBand />
            <HowItWorks />
            <AppScreens />
            <TrustSection />
            <PartnersSection onNavigate={handleNavigate} />
            <OurPartners />
            <AboutSection />
            <CareersSection onApply={handleOpenApply} />
            <WaitlistSection onNavigate={handleNavigate} />
            <FaqSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Careers Apply Modal */}
      <ApplyModal
        isOpen={modalOpen}
        jobTitle={selectedJob}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default App;
