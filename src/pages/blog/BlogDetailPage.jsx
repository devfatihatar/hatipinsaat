import { useEffect, useState } from 'react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import { blogPosts } from '../home/data/homeData';

function BlogDetailPage({ slug }) {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const post = blogPosts.find((blogPost) => blogPost.slug === slug);
  const otherPosts = blogPosts.filter((blogPost) => blogPost.slug !== slug).slice(0, 5);

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

  if (!post) {
    return (
      <>
        <Header isCompact={true} />

        <main className="blog-detail-page">
          <section className="blog-detail-missing">
            <nav className="blog-breadcrumb" aria-label="Sayfa yolu">
              <a href="#home">Ana Sayfa</a>
              <span>/</span>
              <a href="#blog">Haberler & Blog</a>
            </nav>

            <h1>Blog yazısı bulunamadı</h1>
            <p>Aradığın blog yazısı kaldırılmış ya da bağlantı değişmiş olabilir.</p>
            <a href="#blog">Bloglara dön</a>
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

      <main className="blog-detail-page">
        <article className="blog-detail">
          <section className="blog-detail__hero">
            <nav className="blog-breadcrumb" aria-label="Sayfa yolu">
              <a href="#home">Ana Sayfa</a>
              <span>/</span>
              <a href="#blog">Haberler & Blog</a>
              <span>/</span>
              <span>{post.title}</span>
            </nav>
          </section>

          <section className="blog-detail__body">
            <div className="blog-detail__main">
              <header className="blog-detail__intro">
                <img className="blog-detail__image" src={post.image} alt={post.title} />

                <div className="blog-detail__heading">
                  <h1>{post.title}</h1>
                  <p>{post.text}</p>
                </div>
              </header>

              <div className="blog-detail__content">
                {post.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="blog-detail__sidebar" aria-label="Diğer bloglar">
              <h2>Diğer Bloglar</h2>

              <div className="blog-detail__other-list">
                {otherPosts.map((otherPost) => (
                  <a className="blog-detail__other" href={`#blog/${otherPost.slug}`} key={otherPost.slug}>
                    <img src={otherPost.image} alt="" loading="lazy" decoding="async" />
                    <span>{otherPost.title}</span>
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

export default BlogDetailPage;
