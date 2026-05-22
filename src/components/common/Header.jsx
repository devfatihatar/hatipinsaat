import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import trTranslateLogo from '../../assets/images/tr-translate-logo.png';
import engTranslateLogo from '../../assets/images/eng-translate-logo.png';
import ruTranslateLogo from '../../assets/images/ru-translate-logo.png';

function Header({ isCompact }) {
  const [activePage, setActivePage] = useState('home');
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projects = [
    { name: 'Ahmet Kartal Sitesi', slug: 'ahmet-kartal' },
    { name: 'Kartal Residence', slug: 'kartal-residence' },
    { name: 'Bey Konakları', slug: 'beykonaklari' },
    { name: 'Lalepark', slug: 'lalepark' },
    { name: 'Catta Villa City', slug: 'catta-villa-city' },
    { name: 'Catta Villa Homes', slug: 'catta-villa-homes' },
    { name: 'Catta Villa Premium', slug: 'catta-villa-premium' },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      const page = hash.split('/')[0];
      setActivePage(page);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMobileMenuOpen]);

  const isActive = (page) => activePage === page;

  const languageSelector = (className = '') => (
    <div className={`site-header__language-wrap${className ? ` ${className}` : ''}`}>
      <button className="site-header__language" type="button" aria-label="TR dil seçimi">
        <img src={trTranslateLogo} alt="" aria-hidden="true" />
        <span>TR</span>
        <ChevronDown size={16} />
      </button>

      <div className="site-header__language-menu" aria-hidden="true">
        <span>
          <img src={engTranslateLogo} alt="" aria-hidden="true" />
          EN
        </span>
        <span>
          <img src={ruTranslateLogo} alt="" aria-hidden="true" />
          RU
        </span>
      </div>
    </div>
  );

  return (
    <header
      className={`site-header${isCompact ? ' site-header--compact' : ''}${isMobileMenuOpen ? ' site-header--menu-open' : ''}`}
      aria-label="Ana menü"
    >
      <div className="site-header__mobile-bar">
        {languageSelector('site-header__language-wrap--mobile')}

        <a className="site-header__mobile-logo-wrap" href="#home" aria-label="Hatip İnşaat ana sayfa">
          <img className="site-header__logo" src={logo} alt="Hatip İnşaat" />
        </a>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className="site-header__side site-header__side--left" aria-label="Sol menü">
        <a href="#corporate" className={`site-header__link${isActive('corporate') ? ' site-header__link--active' : ''}`}>Kurumsal</a>
        <a href="#sustainability" className={`site-header__link${isActive('sustainability') ? ' site-header__link--active' : ''}`}>Sürdürülebilirlik</a>
      </nav>

      <a className="site-header__logo-wrap" href="#home" aria-label="Hatip İnşaat ana sayfa">
        <img className="site-header__logo" src={logo} alt="Hatip İnşaat" />
      </a>

      <nav className="site-header__side site-header__side--right" aria-label="Sağ menü">
        <div
          className="site-header__dropdown-wrap"
          onMouseEnter={() => setIsProjectsDropdownOpen(true)}
          onMouseLeave={() => setIsProjectsDropdownOpen(false)}
        >
          <a
            href="#projects"
            className={`site-header__link site-header__dropdown-trigger${isActive('projects') ? ' site-header__link--active' : ''}`}
            aria-label="Projelerimiz"
          >
            Projelerimiz
            <ChevronDown size={16} className={`site-header__dropdown-icon${isProjectsDropdownOpen ? ' site-header__dropdown-icon--open' : ''}`} />
          </a>

          {isProjectsDropdownOpen && (
            <div className="site-header__dropdown-menu">
              {projects.map((project) => (
                <a
                  key={project.slug}
                  href={`#projects/${project.slug}`}
                  className="site-header__dropdown-item"
                >
                  {project.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="#blog" className={`site-header__link${isActive('blog') ? ' site-header__link--active' : ''}`}>Blog</a>
        <a href="#contact" className={`site-header__link${isActive('contact') ? ' site-header__link--active' : ''}`}>İletişim</a>
        {languageSelector()}
      </nav>

      {isMobileMenuOpen && (
        <nav className="site-header__mobile-panel" aria-label="Mobil menü">
          <a href="#corporate" className={isActive('corporate') ? 'site-header__mobile-link site-header__mobile-link--active' : 'site-header__mobile-link'}>Kurumsal</a>
          <a href="#sustainability" className={isActive('sustainability') ? 'site-header__mobile-link site-header__mobile-link--active' : 'site-header__mobile-link'}>Sürdürülebilirlik</a>
          <a href="#projects" className={isActive('projects') ? 'site-header__mobile-link site-header__mobile-link--active' : 'site-header__mobile-link'}>Projelerimiz</a>

          <div className="site-header__mobile-projects" aria-label="Projeler">
            {projects.map((project) => (
              <a href={`#projects/${project.slug}`} key={project.slug}>
                {project.name}
              </a>
            ))}
          </div>

          <a href="#blog" className={isActive('blog') ? 'site-header__mobile-link site-header__mobile-link--active' : 'site-header__mobile-link'}>Blog</a>
          <a href="#contact" className={isActive('contact') ? 'site-header__mobile-link site-header__mobile-link--active' : 'site-header__mobile-link'}>İletişim</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
