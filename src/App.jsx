import { useState, useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import CorporatePage from './pages/corporate/CorporatePage';
import SustainabilityPage from './pages/sustainability/SustainabilityPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import ProjectDetailPage from './pages/projects/ProjectDetailPage';
import BlogPage from './pages/blog/BlogPage';
import BlogDetailPage from './pages/blog/BlogDetailPage';
import ContactPage from './pages/contact/ContactPage';
import { usePageSeo } from './hooks/usePageSeo';

function App() {
  const [currentPage, setCurrentPage] = useState(() => window.location.hash.slice(1) || 'home');

  usePageSeo(currentPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial page

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (currentPage.startsWith('blog/')) {
      return <BlogDetailPage slug={currentPage.replace('blog/', '')} />;
    }

    if (currentPage.startsWith('projects/')) {
      return <ProjectDetailPage slug={currentPage.replace('projects/', '')} />;
    }

    switch (currentPage) {
      case 'corporate':
        return <CorporatePage />;
      case 'sustainability':
        return <SustainabilityPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <main className="site-shell">
      {renderPage()}
    </main>
  );
}

export default App;
