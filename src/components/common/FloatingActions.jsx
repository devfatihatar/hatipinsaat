import { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import whatsappLogo from '../../assets/images/wpicon.png';
import CampaignModal from '../../pages/home/components/CampaignModal';

function FloatingActions({ isScrollTopVisible, onCampaignOpen }) {
  const [isLocalCampaignOpen, setIsLocalCampaignOpen] = useState(false);

  const openCampaign = () => {
    if (onCampaignOpen) {
      onCampaignOpen();
      return;
    }

    setIsLocalCampaignOpen(true);
  };

  const scrollToCurrentPageTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="floating-actions" aria-label="Hızlı erişim">
        {isScrollTopVisible && (
          <button
            className="floating-actions__button floating-actions__button--top"
            type="button"
            aria-label="Sayfanın en üstüne git"
            onClick={scrollToCurrentPageTop}
          >
            <ChevronUp size={18} />
          </button>
        )}

        <a
          className="floating-actions__button floating-actions__button--whatsapp"
          href="https://wa.me/905326158092"
          target="_blank"
          rel="noreferrer"
          aria-label="İletişime geç WhatsApp hattı"
        >
          <span className="floating-actions__hint">İLETİŞİME</span>
          <img src={whatsappLogo} alt="" aria-hidden="true" />
        </a>
      </div>

      <button
        className="floating-campaign"
        type="button"
        onClick={openCampaign}
      >
        KAMPANYA
      </button>

      {isLocalCampaignOpen && (
        <CampaignModal onClose={() => setIsLocalCampaignOpen(false)} />
      )}
    </>
  );
}

export default FloatingActions;
