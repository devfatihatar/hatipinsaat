import { useEffect, useState } from 'react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import { projectDetails } from './data/projectsData';

function ProjectDetailPage({ slug }) {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const project = projectDetails.find((projectItem) => projectItem.slug === slug);
  const otherProjects = projectDetails.filter((projectItem) => projectItem.slug !== slug).slice(0, 5);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [slug]);

  useEffect(() => {
    const updateScrollTop = () => {
      setIsScrollTopVisible(window.scrollY > 240);
    };

    updateScrollTop();
    window.addEventListener('scroll', updateScrollTop, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollTop);
  }, []);

  if (!project) {
    return (
      <>
        <Header isCompact={true} />

        <main className="project-detail-page">
          <section className="project-detail-missing">
            <nav className="project-breadcrumb" aria-label="Sayfa yolu">
              <a href="#home">Ana Sayfa</a>
              <span>/</span>
              <a href="#projects">Projelerimiz</a>
            </nav>

            <h1>Proje bulunamadı</h1>
            <p>Aradığın proje kaldırılmış ya da bağlantısı değişmiş olabilir.</p>
            <a href="#projects">Projelere dön</a>
          </section>
        </main>

        <Footer />
        <FloatingActions isScrollTopVisible={isScrollTopVisible} />
      </>
    );
  }

  return (
    <>
      <Header isCompact={true} />

      <main className="project-detail-page">
        <article className="project-detail">
          <section className="project-detail__hero">
            <nav className="project-breadcrumb" aria-label="Sayfa yolu">
              <a href="#home">Ana Sayfa</a>
              <span>/</span>
              <a href="#projects">Projelerimiz</a>
              <span>/</span>
              <span>{project.name}</span>
            </nav>
          </section>

          <section className="project-detail__body">
            <div className="project-detail__main">
              <header className="project-detail__intro">
                <img className="project-detail__image" src={project.image} alt={project.name} />

                <div className="project-detail__heading">
                  <p>Hatip İnşaat Projesi</p>
                  <h1>{project.name}</h1>
                  <span>{project.summary}</span>
                </div>
              </header>

              <div className="project-detail__content">
                {project.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="project-detail__features" aria-label="Proje özellikleri">
                {project.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </div>

            <aside className="project-detail__sidebar" aria-label="Diğer projeler">
              <h2>Diğer Projeler</h2>

              <div className="project-detail__other-list">
                {otherProjects.map((otherProject) => (
                  <a
                    className="project-detail__other"
                    href={`#projects/${otherProject.slug}`}
                    key={otherProject.slug}
                  >
                    <img src={otherProject.image} alt="" loading="lazy" decoding="async" />
                    <span>{otherProject.name}</span>
                  </a>
                ))}
              </div>
            </aside>
          </section>
        </article>
      </main>

      <Footer />
      <FloatingActions isScrollTopVisible={isScrollTopVisible} />
    </>
  );
}

export default ProjectDetailPage;
