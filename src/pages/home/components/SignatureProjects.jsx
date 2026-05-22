import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { signatureProjects } from '../data/homeData';

function SignatureProjects() {
  const [projectSlideIndex, setProjectSlideIndex] = useState(0);

  const visibleSignatureProjects = Array.from({ length: 3 }, (_, index) => {
    return signatureProjects[(projectSlideIndex + index) % signatureProjects.length];
  });

  const showPreviousProjects = () => {
    setProjectSlideIndex((current) => (
      current === 0 ? signatureProjects.length - 1 : current - 1
    ));
  };

  const showNextProjects = () => {
    setProjectSlideIndex((current) => (current + 1) % signatureProjects.length);
  };

  return (
    <section className="signature-projects" id="projects" aria-labelledby="signature-projects-title">
      <div className="signature-projects__heading">
        <h2 id="signature-projects-title">
          <span>İmza</span> Projelerimiz
        </h2>
        <p>
          Bugüne kadar hayata geçirdiğimiz ve devam eden projelerimizle, güvenilir ve
          kalıcı yapılar üretmeye devam ediyoruz.
        </p>
      </div>

      <button
        className="signature-projects__arrow signature-projects__arrow--left"
        type="button"
        aria-label="Önceki proje"
        onClick={showPreviousProjects}
      >
        <ArrowLeft size={32} />
      </button>

      <div className="signature-projects__gallery">
        {visibleSignatureProjects.map((project) => (
          <article className="signature-projects__card" key={project.name}>
            <img src={project.image} alt={`${project.name} proje görseli`} loading="lazy" decoding="async" />
            <h3>{project.name}</h3>
          </article>
        ))}
      </div>

      <button
        className="signature-projects__arrow signature-projects__arrow--right"
        type="button"
        aria-label="Sonraki proje"
        onClick={showNextProjects}
      >
        <ArrowRight size={32} />
      </button>
    </section>
  );
}

export default SignatureProjects;
