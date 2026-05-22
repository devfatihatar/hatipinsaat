import { useEffect, useState } from 'react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import corporateImage from '../../assets/images/kurumsal.webp';
import corporateHeroImage from '../../assets/images/dreamhouse.jpg';
import { corporateContent } from './data/corporateData';

function CorporatePage() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const updateScrollTop = () => {
      setIsScrollTopVisible(window.scrollY > 240);
    };

    updateScrollTop();
    window.addEventListener('scroll', updateScrollTop, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollTop);
  }, []);

  return (
    <>
      <Header isCompact={true} />

      <main className="corporate-page">
        <section className="corporate-story">
          <div className="corporate-story__top">
            <div className="corporate-story__intro">
              <h1>{corporateContent.title}</h1>
              <p>{corporateContent.description}</p>
            </div>
          </div>

          <div className="corporate-story__media">
            <img src={corporateHeroImage} alt="Hatip İnşaat yaşam alanı" />
          </div>

          <div className="corporate-story__bottom">
            <p className="corporate-story__statement">
              Güven ve kalite gibi ilkelerden asla vazgeçmeden hayata değer katmak için yola çıkan{' '}
              <strong>HATİP İNŞAAT</strong>, gerçekleştirdiği projeler ile yatırım yaptığı bölgelere de
              artı değer katmıştır.
            </p>

            <div className="corporate-story__detail">
              <p>{corporateContent.detail}</p>
              <img src={corporateImage} alt="Hatip İnşaat kurumsal yapı" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions isScrollTopVisible={isScrollTopVisible} />
    </>
  );
}

export default CorporatePage;
