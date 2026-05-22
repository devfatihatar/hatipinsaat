import { Clock, Mail, Phone } from 'lucide-react';
import { mapSrc } from '../../pages/home/data/homeData';
import evrenselLogo from '../../assets/images/evrensel-logo.png';
import instagramLogo from '../../assets/images/instagram-optimized.png';

function Footer() {
  return (
    <>
      <span className="site-anchor" id="contact" aria-hidden="true" />

      <footer className="site-footer" id="footer">
        <div className="site-footer__inner">
          <section className="site-footer__brand">
            <h2>Hatip İnşaat</h2>
            <p>
              Güvenli, estetik ve uzun ömürlü yaşam alanları için proje, uygulama ve
              yenileme süreçlerini uçtan uca yöneten yapı partneri.
            </p>
          </section>

          <section className="site-footer__contact" aria-labelledby="footer-contact-title">
            <h3 id="footer-contact-title">İletişim</h3>
            <a href="tel:+905326158092">
              <Phone size={17} />
              +90 532 615 80 92
            </a>
            <a href="mailto:info@hatipinsaat.com">
              <Mail size={17} />
              info@hatipinsaat.com
            </a>
            <span>
              <Clock size={17} />
              Hafta içi 09:00 - 18:30
            </span>
            <a
              className="site-footer__instagram"
              href="https://www.instagram.com/hatipinsaat/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramLogo} alt="" aria-hidden="true" />
              @hatipinsaat
            </a>
            <a className="site-footer__button" href="#contact">
              İletişime Geç
            </a>
          </section>

          <section className="site-footer__address" aria-labelledby="footer-address-title">
            <h3 id="footer-address-title">Adres</h3>
            <p>
              Siteler Mah. Hürriyet Cad. Kartal Residence No:11/A B Blok Kat:1
              Konyaaltı/Antalya
            </p>

            <iframe
              className="site-footer__map"
              title="Hatip İnşaat konum"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </div>

        <div className="site-footer__bottom">
          <a
            className="site-footer__credit"
            href="https://evrenselbilisim.net"
            target="_blank"
            rel="noreferrer"
            aria-label="Site tasarımı Evrensel Bilişim"
          >
            <img src={evrenselLogo} alt="Evrensel Bilişim" />
          </a>

          <span>Hatip İnşaat © 2026 | Tüm hakları saklıdır.</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
