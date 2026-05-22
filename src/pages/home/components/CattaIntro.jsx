import siteCutout from '../../../assets/images/site_cutout.png';

function CattaIntro() {
  return (
    <>
      <span className="site-anchor" id="corporate" aria-hidden="true" />

      <section className="catta-intro" id="catta-intro">
        <div className="catta-intro__content">
          <h2>
            <span>Hayallerinizdeki Yaşamın</span>
            Gerçeğe Dönüşmüş Hali
          </h2>
          <p>
            Doğayla uyumlu mimarisi ve çağdaş yaşam anlayışıyla tasarlanan villamız,
            konforu ve estetiği bir arada sunan ayrıcalıklı bir yaşam alanı sunmakta.
            Yüksek kalite malzemelerle inşa edilen yapı, ferah iç mekânları, geniş cam
            yüzeyleri ve fonksiyonel planlamasıyla gün ışığından maksimum düzeyde
            faydalanacak şekilde tasarlandı.
          </p>

          <a className="catta-intro__button" href="#footer">
            Catta Villa'yı Keşfet
          </a>
        </div>

        <div className="catta-intro__visual" aria-label="Catta Villa görsel alanı">
          <img src={siteCutout} alt="Catta Villa yaşam alanı" loading="lazy" decoding="async" />
        </div>
      </section>
    </>
  );
}

export default CattaIntro;
