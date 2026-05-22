import dreamHouse from '../../../assets/images/dreamhouse.jpg';

function DreamHome() {
  return (
    <>
      <span className="site-anchor" id="sustainability" aria-hidden="true" />

      <section
        className="dream-home"
        style={{ '--dream-home-bg': `url(${dreamHouse})` }}
        aria-labelledby="dream-home-title"
      >
        <div className="dream-home__content">
          <h2 id="dream-home-title">
            <span>HAYALİNİZDEKİ EVİ</span>
            BULMANIZA YARDIMCI OLACAĞIZ.
          </h2>
          <p>
            Gayrimenkulün engin dünyasında, her mülk ortaya çıkarılmayı bekleyen eşsiz
            bir hikaye barındırır. Kapıdan içeri adım attığınız andan itibaren,
            hayallerin ve özlemlerin yankılarıyla karşılaşırsınız.
          </p>
          <a className="dream-home__button" href="#projects">
            Projelerimizi Keşfedin
          </a>
        </div>
      </section>
    </>
  );
}

export default DreamHome;
