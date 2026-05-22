import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/homeData';

function BlogPreview() {
  const [blogSlideIndex, setBlogSlideIndex] = useState(0);
  const [blogSlideDirection, setBlogSlideDirection] = useState('next');

  const visibleBlogPosts = Array.from({ length: 3 }, (_, index) => {
    return blogPosts[(blogSlideIndex + index) % blogPosts.length];
  });

  const showPreviousBlogs = () => {
    setBlogSlideDirection('previous');
    setBlogSlideIndex((current) => (
      current === 0 ? blogPosts.length - 1 : current - 1
    ));
  };

  const showNextBlogs = () => {
    setBlogSlideDirection('next');
    setBlogSlideIndex((current) => (current + 1) % blogPosts.length);
  };

  return (
    <section className="blog-preview" id="blog" aria-labelledby="blog-preview-title">
      <div className="blog-preview__inner">
        <h2 id="blog-preview-title">Haberler & Blog</h2>

        <button
          className="blog-preview__arrow blog-preview__arrow--left"
          type="button"
          aria-label="Önceki blog"
          onClick={showPreviousBlogs}
        >
          <ArrowLeft size={30} />
        </button>

        <div
          className={`blog-preview__grid blog-preview__grid--${blogSlideDirection}`}
          key={blogSlideIndex}
        >
          {visibleBlogPosts.map((post) => (
            <article className="blog-preview__card" key={post.title}>
              <div className="blog-preview__image">
                <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
              </div>

              <div className="blog-preview__content">
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <a href={`#blog/${post.slug}`}>
                  Devamını Oku
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <button
          className="blog-preview__arrow blog-preview__arrow--right"
          type="button"
          aria-label="Sonraki blog"
          onClick={showNextBlogs}
        >
          <ArrowRight size={30} />
        </button>
      </div>
    </section>
  );
}

export default BlogPreview;
