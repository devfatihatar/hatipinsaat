import { useEffect, useState } from 'react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/common/Footer';
import BlogPreview from './components/BlogPreview';
import CampaignModal from './components/CampaignModal';
import CattaIntro from './components/CattaIntro';
import DreamHome from './components/DreamHome';
import Hero from './components/Hero';
import SignatureProjects from './components/SignatureProjects';

function HomePage() {
  const [isCampaignOpen, setIsCampaignOpen] = useState(false);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const updateHeader = () => {
      setIsHeaderCompact(window.scrollY > 80);
      setIsScrollTopVisible(window.scrollY > 240);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <>
      <Hero isHeaderCompact={isHeaderCompact} />

      {isCampaignOpen && (
        <CampaignModal onClose={() => setIsCampaignOpen(false)} />
      )}

      <CattaIntro />
      <SignatureProjects />
      <DreamHome />
      <BlogPreview />
      <Footer />

      <FloatingActions
        isScrollTopVisible={isScrollTopVisible}
        onCampaignOpen={() => setIsCampaignOpen(true)}
      />
    </>
  );
}

export default HomePage;
