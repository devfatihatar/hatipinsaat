import { useEffect, useState } from 'react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import sustainabilityHeroImage from '../../assets/images/surdurulebilirlik-hero.jpg';
import sustainabilityIconImage from '../../assets/images/surdurulebilirlik-logo.png';
import sustainabilitySlideOne from '../../assets/images/surdurulebilirlik-slide1.webp';
import sustainabilitySlideTwo from '../../assets/images/surdurulebilirlik-slide2.webp';
import sustainabilitySlideThree from '../../assets/images/surdurulebilirlik-slide3.webp';
import sustainabilityLastImage from '../../assets/images/surdurulebilirlik-last.webp';
import { sustainabilityContent } from './data/sustainabilityData';

const sustainabilitySlides = [
  {
    src: sustainabilitySlideOne,
    alt: 'Sürdürülebilir yaşam alanı',
  },
  {
    src: sustainabilitySlideTwo,
    alt: 'Yeşil mimari yaklaşımı',
  },
  {
    src: sustainabilitySlideThree,
    alt: 'Doğayla uyumlu proje detayı',
  },
];

function SustainabilityPage() {
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

      <main className="sustainability-page">
        <section className="sustainability-story">
          <div
            className="sustainability-story__hero"
            style={{ '--sustainability-hero-bg': `url(${sustainabilityHeroImage})` }}
          >
            <div className="sustainability-story__hero-inner">
              <h1>{sustainabilityContent.title}</h1>
              <p>{sustainabilityContent.intro}</p>
            </div>
          </div>

          <div className="sustainability-story__content">
            <div className="sustainability-story__service">
              <div className="sustainability-story__service-copy">
                <h2>{sustainabilityContent.serviceTitle}</h2>
                <p>{sustainabilityContent.serviceText}</p>
                <p>{sustainabilityContent.serviceTextSecondary}</p>
              </div>

              <img
                className="sustainability-story__logo"
                src={sustainabilityIconImage}
                alt="Yeşil şehir ve sürdürülebilir yaşam simgesi"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="sustainability-story__slides" aria-label="Sürdürülebilirlik görselleri">
              {sustainabilitySlides.map((slide) => (
                <figure className="sustainability-story__slide" key={slide.src}>
                  <img src={slide.src} alt={slide.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </div>

          <section className="sustainability-tech">
            <div className="sustainability-tech__inner">
              <img
                src={sustainabilityLastImage}
                alt="Teknoloji ve enerji verimliliği"
                loading="lazy"
                decoding="async"
              />

              <div className="sustainability-tech__copy">
                <h2>{sustainabilityContent.techTitle}</h2>
                <p>{sustainabilityContent.techText}</p>
                <p>{sustainabilityContent.techTextSecondary}</p>
              </div>
            </div>
          </section>

          <section className="sustainability-wellness">
            <div className="sustainability-wellness__inner">
              <h2>{sustainabilityContent.wellnessTitle}</h2>
              <p>{sustainabilityContent.wellnessText}</p>
              <p>{sustainabilityContent.wellnessTextSecondary}</p>
            </div>
          </section>

          <section
            className="sustainability-responsibility"
            style={{ '--sustainability-responsibility-bg': `url(${sustainabilityHeroImage})` }}
          >
            <div className="sustainability-responsibility__inner">
              <h2>{sustainabilityContent.responsibilityTitle}</h2>
              <p>{sustainabilityContent.responsibilityText}</p>
            </div>
          </section>
        </section>
      </main>

      <Footer />
      <FloatingActions isScrollTopVisible={isScrollTopVisible} />
    </>
  );
}

export default SustainabilityPage;
