import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Play, X } from 'lucide-react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import projectsVideoPhoto from '../../assets/images/projects-video-photo.jpg';
import { signatureProjects } from '../home/data/homeData';
import { getProjectSlug, projectsContent } from './data/projectsData';

const VISIBLE_PROJECT_COUNT = 4;
const PROJECTS_VIDEO_EMBED_URL = 'https://www.youtube.com/embed/CVLkEyFMAyQ?autoplay=1&rel=0';

function ProjectsPage() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const [projectSlideIndex, setProjectSlideIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const visibleProjects = Array.from(
    { length: Math.min(VISIBLE_PROJECT_COUNT, signatureProjects.length) },
    (_, index) => signatureProjects[(projectSlideIndex + index) % signatureProjects.length],
  );

  const showPreviousProjects = () => {
    setProjectSlideIndex((current) => (
      current === 0 ? signatureProjects.length - 1 : current - 1
    ));
  };

  const showNextProjects = () => {
    setProjectSlideIndex((current) => (current + 1) % signatureProjects.length);
  };

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

  useEffect(() => {
    if (!isVideoModalOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };

    document.body.classList.add('is-modal-open');
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.classList.remove('is-modal-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isVideoModalOpen]);

  return (
    <>
      <Header isCompact={true} />

      <main className="projects-page">
        <section className="projects-hero">
          <h1>{projectsContent.title.toLocaleUpperCase('tr-TR')}</h1>
        </section>

        <section className="projects-gallery" aria-label="Projeler listesi">
          <div className="projects-slider">
            <button
              className="projects-slider__arrow projects-slider__arrow--left"
              type="button"
              aria-label="Önceki projeler"
              onClick={showPreviousProjects}
            >
              <ArrowLeft size={28} />
            </button>

            <div className="projects-gallery__grid" key={projectSlideIndex}>
              {visibleProjects.map((project) => (
                <a
                  className="projects-gallery__card"
                  href={`#projects/${getProjectSlug(project.name)}`}
                  key={project.name}
                >
                  <img src={project.image} alt={project.name} loading="lazy" decoding="async" />
                  <span>{project.name}</span>
                </a>
              ))}
            </div>

            <button
              className="projects-slider__arrow projects-slider__arrow--right"
              type="button"
              aria-label="Sonraki projeler"
              onClick={showNextProjects}
            >
              <ArrowRight size={28} />
            </button>
          </div>

          <div className="projects-video-promo">
            <div className="projects-video-promo__media">
              <img
                src={projectsVideoPhoto}
                alt="Mimari projelerimiz"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="projects-video-promo__content">
              <h2>
                Mimari
                <span>Projelerimizi</span>
                <span>İzleyin</span>
              </h2>

              <button
                className="projects-video-promo__link"
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <span>Videoyu İzleyin</span>
                <span className="projects-video-promo__play" aria-hidden="true">
                  <Play size={18} fill="currentColor" />
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {isVideoModalOpen && (
        <div className="projects-video-modal" role="dialog" aria-modal="true" aria-label="Mimari projeler videosu">
          <button
            className="projects-video-modal__backdrop"
            type="button"
            aria-label="Videoyu kapat"
            onClick={() => setIsVideoModalOpen(false)}
          />

          <div className="projects-video-modal__panel">
            <button
              className="projects-video-modal__close"
              type="button"
              aria-label="Videoyu kapat"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <X size={24} />
            </button>

            <iframe
              src={PROJECTS_VIDEO_EMBED_URL}
              title="Mimari projelerimizi izleyin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <Footer />
      <FloatingActions isScrollTopVisible={isScrollTopVisible} />
    </>
  );
}

export default ProjectsPage;
