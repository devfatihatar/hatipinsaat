import { Instagram, Phone, X } from 'lucide-react';
import modalImage1 from '../../../assets/images/modal-image1.jpg';
import modalImage2 from '../../../assets/images/modal-image2.jpg';

function CampaignModal({ onClose }) {
  return (
    <section className="campaign-modal" role="dialog" aria-modal="true" aria-labelledby="campaign-title">
      <button
        className="campaign-modal__backdrop"
        type="button"
        aria-label="Kampanya penceresini kapat"
        onClick={onClose}
      />

      <div className="campaign-modal__panel">
        <button
          className="campaign-modal__close"
          type="button"
          aria-label="Kampanya penceresini kapat"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <div className="campaign-modal__media">
          <img
            className="campaign-modal__image campaign-modal__image--left"
            src={modalImage1}
            alt=""
            aria-hidden="true"
            decoding="async"
          />
          <img
            className="campaign-modal__image campaign-modal__image--right"
            src={modalImage2}
            alt=""
            aria-hidden="true"
            decoding="async"
          />
        </div>

        <div className="campaign-modal__content">
          <p className="campaign-modal__eyebrow">CATTA VİLLA</p>
          <h2 id="campaign-title">CİTY VE PREMİUM PROJELERİMİZ İLE KALİTEYİ VE HUZURU HİSSEDİN</h2>
          <p>
            Modern mimari, ferah yaşam alanları ve doğayla dengeli bir villa deneyimi için ön
            görüşmenizi bugün planlayın.
          </p>
          <div className="campaign-modal__links">
            <a className="campaign-modal__phone" href="tel:+905326158092">
              <Phone size={19} />
              532 615 80 92
            </a>
            <a
              className="campaign-modal__phone"
              href="https://www.instagram.com/hatipinsaat/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={19} />
              @hatipinsaat
            </a>
          </div>

          <div className="campaign-modal__actions">
            <a className="button button--primary" href="#contact" onClick={onClose}>
              İletişime Geç
            </a>
            <button className="button button--ghost-dark" type="button" onClick={onClose}>
              Kampanyayı Kapat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampaignModal;
