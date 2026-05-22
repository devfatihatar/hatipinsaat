import { useEffect } from 'react';
import { blogPosts } from '../pages/home/data/homeData';
import { projectDetails } from '../pages/projects/data/projectsData';

const SITE_URL = 'https://www.hatipinsaat.com/';
const DEFAULT_IMAGE = `${SITE_URL}og-image.jpg`;

const pageSeo = {
  home: {
    title: 'Hatip İnşaat | Antalya Konut ve Villa Projeleri',
    description: "Hatip İnşaat, Antalya'da konut, villa ve modern yaşam alanları geliştiren güvenilir inşaat markasıdır.",
  },
  corporate: {
    title: 'Kurumsal | Hatip İnşaat',
    description: 'Hatip İnşaat kurumsal yaklaşımı, kalite prensipleri ve Antalya inşaat sektöründeki deneyimi.',
  },
  sustainability: {
    title: 'Sürdürülebilirlik | Hatip İnşaat',
    description: 'Hatip İnşaat sürdürülebilir yaşam, teknoloji, hizmet ve sorumluluk yaklaşımıyla değer katan projeler geliştirir.',
  },
  projects: {
    title: 'Projelerimiz | Hatip İnşaat',
    description: 'Hatip İnşaat tarafından geliştirilen Antalya konut, residence ve villa projelerini inceleyin.',
  },
  blog: {
    title: 'Haberler & Blog | Hatip İnşaat',
    description: 'İnşaat, konut, villa projeleri, yaşam alanları ve sürdürülebilir yapı yaklaşımı hakkında Hatip İnşaat blog yazıları.',
  },
  contact: {
    title: 'İletişim | Hatip İnşaat',
    description: 'Hatip İnşaat telefon, e-posta, adres ve konum bilgileriyle bize ulaşın.',
  },
};

const ensureMeta = (selector, createElement) => {
  const existingElement = document.head.querySelector(selector);

  if (existingElement) {
    return existingElement;
  }

  const element = createElement();
  document.head.appendChild(element);
  return element;
};

const setNamedMeta = (name, content) => {
  const element = ensureMeta(`meta[name="${name}"]`, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', name);
    return meta;
  });

  element.setAttribute('content', content);
};

const setPropertyMeta = (property, content) => {
  const element = ensureMeta(`meta[property="${property}"]`, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', property);
    return meta;
  });

  element.setAttribute('content', content);
};

const getCanonical = () => SITE_URL;

const getCurrentSeo = (currentPage) => {
  if (currentPage.startsWith('blog/')) {
    const slug = currentPage.replace('blog/', '');
    const post = blogPosts.find((blogPost) => blogPost.slug === slug);

    if (post) {
      return {
        title: `${post.title} | Hatip İnşaat Blog`,
        description: post.text,
      };
    }
  }

  if (currentPage.startsWith('projects/')) {
    const slug = currentPage.replace('projects/', '');
    const project = projectDetails.find((projectItem) => projectItem.slug === slug);

    if (project) {
      return {
        title: `${project.name} | Hatip İnşaat Projeleri`,
        description: project.summary,
      };
    }
  }

  return pageSeo[currentPage] || pageSeo.home;
};

export function usePageSeo(currentPage) {
  useEffect(() => {
    const seo = getCurrentSeo(currentPage);
    const canonical = getCanonical();

    document.documentElement.lang = 'tr';
    document.title = seo.title;
    setNamedMeta('description', seo.description);
    setNamedMeta('robots', 'index, follow, max-image-preview:large');
    setPropertyMeta('og:title', seo.title);
    setPropertyMeta('og:description', seo.description);
    setPropertyMeta('og:url', canonical);
    setPropertyMeta('og:image', DEFAULT_IMAGE);
    setNamedMeta('twitter:title', seo.title);
    setNamedMeta('twitter:description', seo.description);
    setNamedMeta('twitter:image', DEFAULT_IMAGE);

    const canonicalElement = ensureMeta('link[rel="canonical"]', () => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      return link;
    });

    canonicalElement.setAttribute('href', canonical);
  }, [currentPage]);
}
