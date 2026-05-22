import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import { blogPosts } from '../home/data/homeData';
import { blogContent } from './data/blogData';

const POSTS_PER_PAGE = 4;

function BlogPage() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogPosts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase('tr-TR');

    if (!normalizedSearch) {
      return blogPosts;
    }

    return blogPosts.filter((post) => {
      const searchableText = `${post.title} ${post.text}`.toLocaleLowerCase('tr-TR');
      return searchableText.includes(normalizedSearch);
    });
  }, [searchTerm]);

  const pageCount = Math.max(1, Math.ceil(filteredBlogPosts.length / POSTS_PER_PAGE));
  const currentBlogPosts = filteredBlogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

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
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    if (currentPage > pageCount) {
      setCurrentPage(pageCount);
    }
  }, [currentPage, pageCount]);

  return (
    <>
      <Header isCompact={true} />

      <main className="blog-page">
        <section className="blog-hero">
          <h1>{blogContent.title}</h1>
        </section>

        <section className="blog-tools" aria-label="Blog arama">
          <label className="blog-search">
            <Search size={22} aria-hidden="true" />
            <span className="sr-only">Blog ara</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Bloglarda ara"
            />
          </label>
        </section>

        <section className="blog-list" aria-label="Blog yazıları">
          {currentBlogPosts.length > 0 ? (
            currentBlogPosts.map((post, index) => (
              <article className="blog-list__item" key={post.title}>
                <div className="blog-list__inner">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading={currentPage === 1 && index === 0 ? 'eager' : 'lazy'}
                  />

                  <div className="blog-list__copy">
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                    <a href={`#blog/${post.slug}`}>Devamını oku...</a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="blog-empty" role="status">
              <h2>Sonuç bulunamadı</h2>
              <p>Aradığın kelimeyle eşleşen bir blog yazısı yok.</p>
            </div>
          )}
        </section>

        {filteredBlogPosts.length > POSTS_PER_PAGE && (
          <nav className="blog-pagination" aria-label="Blog sayfaları">
            {Array.from({ length: pageCount }, (_, index) => {
              const pageNumber = index + 1;

              return (
                <button
                  className={`blog-pagination__button${
                    pageNumber === currentPage ? ' blog-pagination__button--active' : ''
                  }`}
                  type="button"
                  key={pageNumber}
                  aria-label={`${pageNumber}. sayfa`}
                  aria-current={pageNumber === currentPage ? 'page' : undefined}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}
          </nav>
        )}
      </main>

      <Footer />
      <FloatingActions isScrollTopVisible={isScrollTopVisible} />
    </>
  );
}

export default BlogPage;
