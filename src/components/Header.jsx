import { useState, useEffect, useRef } from "react";
import { portfolioConfig } from "../data/portfolioData";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#build", label: "What I Build" },
  { href: "#experience", label: "Experience" },
];

export default function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // Monitor scroll for header background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on ESC key press
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;
    const focusableEls = menuRef.current.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    if (focusableEls.length === 0) return;

    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    function handleTab(e) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    firstEl.focus();
    const currentMenu = menuRef.current;
    currentMenu.addEventListener("keydown", handleTab);
    return () => currentMenu.removeEventListener("keydown", handleTab);
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    toggleBtnRef.current?.focus();
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        {/* Brand / Logo */}
        <a href="#top" className="brand" aria-label="Ajosh Varghese home">
          <span className="brand-first">Ajosh</span>{" "}
          <span className="brand-last">Varghese</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            {portfolioConfig.resume.enabled && (
              <a
                href={portfolioConfig.resume.path}
                className="btn-pill btn-resume"
                download={portfolioConfig.resume.filename}
                target="_blank"
                rel="noreferrer"
                aria-label="Download resume PDF"
              >
                <span>Resume</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            )}
            <a href="#contact" className="btn-pill btn-contact">
              Contact
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          ref={toggleBtnRef}
          type="button"
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="menu-bar" />
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      <div
        id="mobile-nav-drawer"
        ref={menuRef}
        className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-drawer-overlay" onClick={closeMenu} />
        <div className="mobile-drawer-content" role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="mobile-drawer-header">
            <span className="brand-mobile">Ajosh <i>Varghese</i></span>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={closeMenu}
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-links">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`mobile-nav-link ${isActive ? "active" : ""}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#contact"
                  className="mobile-nav-link mobile-nav-contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Me
                </a>
              </li>
            </ul>

            {portfolioConfig.resume.enabled && (
              <div className="mobile-resume-wrap">
                <a
                  href={portfolioConfig.resume.path}
                  className="btn btn-primary btn-block"
                  download={portfolioConfig.resume.filename}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download Resume (PDF)
                </a>
              </div>
            )}

            <div className="mobile-drawer-footer">
              <span className="domain-pill">{portfolioConfig.domain}</span>
              <a href={`mailto:${portfolioConfig.email}`} className="mobile-drawer-email">
                {portfolioConfig.email}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
