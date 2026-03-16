import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { 
  MdOutlineLightMode, 
  MdOutlineDarkMode, 
  MdLanguage, 
  MdArrowBack, 
  MdCheck, 
  MdMenu, 
  MdClose 
} from "react-icons/md";
import "./Navbar.css";

export default function Navbar({ toggleTheme, currentTheme, currentLang, setLang }: any) {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const location = useLocation();
  const langRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);

  // Fecha dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) setShowLangMenu(false);
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) setShowThemeMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fecha menu mobile ao navegar
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const t = currentLang === "en" 
    ? { inicio: "Home", galeria: "Gallery", serviços: "Services", path: "Services", artigos: "Articles", langTitle: "Language", themeTitle: "Theme" } 
    : { inicio: "Início", galeria: "Galeria", serviços: "Serviços", path: "Serviços", artigos: "Artigos", langTitle: "Idioma", themeTitle: "Tema" };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      {/* LADO ESQUERDO: Seta de Início (Visível apenas na Galeria) */}
      <div className="nav-left">
        <Link to="/" className="back-link">
          <MdArrowBack />
          <span>{t.inicio}</span>
        </Link>
      </div>

      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* CENTRO: Links de Navegação (Centralização Desktop) */}
      <div className="nav-center desktop-only">
        <ul className="nav-links">
          <li><HashLink smooth to="/#inicio" className={isActive("/") ? "pill-active" : ""}>{t.inicio}</HashLink></li>
          <li><Link to="/galeria" className={isActive("/galeria") ? "pill-active" : ""}>{t.galeria}</Link></li>
          <li><HashLink smooth to="/#projects" className={location.hash === "#projects" ? "pill-active" : ""}>{t.projetos}</HashLink></li>
          <li><HashLink smooth to="/#experience" className={location.hash === "#experience" ? "pill-active" : ""}>{t.path}</HashLink></li>
          <li><Link to="/articles" className={isActive("/articles") ? "pill-active" : ""}>{t.artigos}</Link></li>
        </ul>
      </div>

      {/* LADO DIREITO: Dropdowns de Idioma e Tema */}
      <div className="nav-right desktop-only">
        {/* Dropdown Idioma */}
        <div className="dropdown-wrapper" ref={langRef}>
          <button className="icon-circle" onClick={() => setShowLangMenu(!showLangMenu)}>
            <MdLanguage />
          </button>
          {showLangMenu && (
            <div className="dropdown-box">
              <div className={`drop-item ${currentLang === 'en' ? 'selected' : ''}`} onClick={() => { setLang('en'); setShowLangMenu(false); }}>
                <span className="item-content"><span className="lang-code">US</span> English</span>
                {currentLang === 'en' && <MdCheck className="check-icon" />}
              </div>
              <div className={`drop-item ${currentLang === 'pt' ? 'selected' : ''}`} onClick={() => { setLang('pt'); setShowLangMenu(false); }}>
                <span className="item-content"><span className="lang-code">AO</span> Português</span>
                {currentLang === 'pt' && <MdCheck className="check-icon" />}
              </div>
            </div>
          )}
        </div>

        {/* Dropdown Tema */}
        <div className="dropdown-wrapper" ref={themeRef}>
          <button className="icon-circle" onClick={() => setShowThemeMenu(!showThemeMenu)}>
            {currentTheme === "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </button>
          {showThemeMenu && (
            <div className="dropdown-box">
              <div className={`drop-item ${currentTheme === 'dark' ? 'selected' : ''}`} onClick={() => { if(currentTheme !== 'dark') toggleTheme(); setShowThemeMenu(false); }}>
                <span className="item-content"><MdOutlineDarkMode className="item-icon" /> Dark</span>
                {currentTheme === 'dark' && <MdCheck className="check-icon" />}
              </div>
              <div className={`drop-item ${currentTheme === 'light' ? 'selected' : ''}`} onClick={() => { if(currentTheme !== 'light') toggleTheme(); setShowThemeMenu(false); }}>
                <span className="item-content"><MdOutlineLightMode className="item-icon" /> Light</span>
                {currentTheme === 'light' && <MdCheck className="check-icon" />}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MENU MOBILE (Full Screen Modal) */}
      <div className={`nav-menu-mobile ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links-mobile">
          <li><HashLink to="/#inicio">{t.inicio}</HashLink></li>
          <li><Link to="/galeria">{t.galeria}</Link></li>
          <li><Link to="/articles">{t.artigos}</Link></li>
        </ul>
        <div className="menu-divider"></div>
        <div className="mobile-selection-section">
          <p className="section-title">{t.langTitle}</p>
          <div className={`selection-item ${currentLang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>
            <span><strong className="lang-code-mb">US</strong> English</span>
            {currentLang === 'en' && <MdCheck className="check-icon" />}
          </div>
          <div className={`selection-item ${currentLang === 'pt' ? 'active' : ''}`} onClick={() => setLang('pt')}>
            <span><strong className="lang-code-mb">AO</strong> Português</span>
            {currentLang === 'pt' && <MdCheck className="check-icon" />}
          </div>
        </div>
        <div className="mobile-selection-section">
          <p className="section-title">{t.themeTitle}</p>
          <div className={`selection-item ${currentTheme === 'dark' ? 'active' : ''}`} onClick={() => currentTheme !== 'dark' && toggleTheme()}>
            <span><MdOutlineDarkMode /> Dark</span>
            {currentTheme === 'dark' && <MdCheck className="check-icon" />}
          </div>
          <div className={`selection-item ${currentTheme === 'light' ? 'active' : ''}`} onClick={() => currentTheme !== 'light' && toggleTheme()}>
            <span><MdOutlineLightMode /> Light</span>
            {currentTheme === 'light' && <MdCheck className="check-icon" />}
          </div>
        </div>
      </div>
    </nav>
  );
}