import { useEffect, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import { mapSrc } from '../home/data/homeData';
import { contactContent } from './data/contactData';

function ContactPage() {
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

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero__inner">
            <h1>{contactContent.title}</h1>

            <div className="contact-cards" aria-label="İletişim bilgileri">
              <a className="contact-card" href={contactContent.phoneHref}>
                <Phone size={24} aria-hidden="true" />
                <span>Telefon</span>
                <strong>{contactContent.phone}</strong>
                <p>{contactContent.workingHours}</p>
              </a>

              <a className="contact-card" href={contactContent.emailHref}>
                <Mail size={24} aria-hidden="true" />
                <span>E-posta</span>
                <strong>{contactContent.email}</strong>
                <p>Talep ve sorularınız için bize yazabilirsiniz.</p>
              </a>
            </div>
          </div>
        </section>

        <section className="contact-map-section" aria-label="Konum bilgisi">
          <div className="contact-map-card">
            <iframe
              className="contact-map-card__frame"
              title="Hatip İnşaat konum"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="contact-map-card__address">
              <MapPin size={22} aria-hidden="true" />
              <div>
                <span>Adres</span>
                <strong>{contactContent.address}</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions isScrollTopVisible={isScrollTopVisible} />
    </>
  );
}

export default ContactPage;
