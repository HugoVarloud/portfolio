import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { t } from "i18next";
import "./Navbar.css";
import LanguageSelectorIcons from "../LanguageSelector/LanguageSelectorIcons";
import { useLanguageContext } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";
import {
  getScrollAnchorOffset,
  scrollToSection,
  syncHeaderHeight,
} from "../../utils/scrollAnchor";

const routes = [
  { title: "Home", href: "#accueil", id: "accueil" },
  { title: "About", href: "#about", id: "about" },
  { title: "Experience", href: "#experience", id: "experience" },
  { title: "Projects", href: "#projects", id: "projects" },
  { title: "Contacts", href: "#contacts", id: "contacts" },
];

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeTogglePill = ({ theme, setTheme }) => (
  <div className={`theme-toggle-pill theme-toggle-pill--${theme}`} role="group" aria-label="Thème">
    <button
      type="button"
      className={`theme-toggle-pill__btn ${theme === "light" ? "is-active" : ""}`}
      onClick={() => setTheme("light")}
      aria-label="Mode clair"
      aria-pressed={theme === "light"}
    >
      <SunIcon />
    </button>
    <button
      type="button"
      className={`theme-toggle-pill__btn ${theme === "dark" ? "is-active" : ""}`}
      onClick={() => setTheme("dark")}
      aria-label="Mode sombre"
      aria-pressed={theme === "dark"}
    >
      <MoonIcon />
    </button>
  </div>
);

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const ref = useRef(null);
  const selectedLang = useLanguageContext().i18n.language;
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const bar = document.querySelector(".header-bar");
    if (!bar) return;

    syncHeaderHeight();
    const ro = new ResizeObserver(syncHeaderHeight);
    ro.observe(bar);
    window.addEventListener("resize", syncHeaderHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const sections = routes
      .map((route) => document.getElementById(route.id))
      .filter(Boolean);
    if (!sections.length) return;

    let observer;

    const setupObserver = () => {
      observer?.disconnect();
      const offset = getScrollAnchorOffset();
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (visible[0]?.target?.id) {
            setActiveSection(visible[0].target.id);
          }
        },
        {
          rootMargin: `-${offset}px 0px -55% 0px`,
          threshold: [0, 0.15, 0.35],
        }
      );
      sections.forEach((section) => observer.observe(section));
    };

    setupObserver();
    window.addEventListener("resize", setupObserver);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", setupObserver);
    };
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash || !routes.some((route) => route.id === hash)) return;
      scrollToSection(hash, { smooth: false });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopNav = window.matchMedia("(min-width: 1051px)");
    const closeOnDesktop = () => {
      if (desktopNav.matches) setOpen(false);
    };
    closeOnDesktop();
    desktopNav.addEventListener("change", closeOnDesktop);
    return () => desktopNav.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMenu = () => setOpen(false);

  const handleAnchorClick = useCallback(
    (event, href) => {
      event.preventDefault();
      const sectionId = href.replace("#", "");
      if (!sectionId) return;

      closeMenu();
      window.history.pushState(null, "", href);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToSection(sectionId));
      });
    },
    []
  );

  return (
    <header className={`site-header${isOpen ? " site-header--menu-open" : ""}`}>
      <nav className="header-bar" aria-label="Navigation principale">
        <a
          href="#accueil"
          className="header-brand"
          onClick={(e) => handleAnchorClick(e, "#accueil")}
        >
          <span className="header-brand__text">CODE BY HUGO</span>
        </a>

        <ul className="header-nav">
          {routes.map((route) => (
            <li key={route.title}>
              <a
                href={route.href}
                className={`header-nav__link ${activeSection === route.id ? "is-active" : ""}`}
                onClick={(e) => handleAnchorClick(e, route.href)}
              >
                {t(`${selectedLang}.Menu.${route.title}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="header-actions">
          <LanguageSelectorIcons />
          <ThemeTogglePill theme={theme} setTheme={setTheme} />
        </div>

        <div className="header-hamburger" ref={ref}>
          <div className="header-hamburger__icon">
            <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="header-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
          >
            <motion.div
              className="header-mobile-panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <section className="header-mobile-preferences" aria-label={t(`${selectedLang}.MobileMenu.Preferences`)}>
                <p className="header-mobile-section-label">
                  {t(`${selectedLang}.MobileMenu.Preferences`)}
                </p>
                <div className="header-mobile-settings">
                  <motion.div
                    className="header-mobile-settings-grid"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="header-mobile-setting-card">
                      <span className="header-mobile-setting__label">
                        {t(`${selectedLang}.MobileMenu.Language`)}
                      </span>
                      <LanguageSelectorIcons className="language-selector-icons--menu" />
                    </div>
                    <div className="header-mobile-setting-card">
                      <span className="header-mobile-setting__label">
                        {t(`${selectedLang}.MobileMenu.Theme`)}
                      </span>
                      <ThemeTogglePill theme={theme} setTheme={setTheme} />
                    </div>
                  </motion.div>
                </div>
              </section>

              <section className="header-mobile-nav-section" aria-label={t(`${selectedLang}.MobileMenu.Navigation`)}>
                <p className="header-mobile-section-label">
                  {t(`${selectedLang}.MobileMenu.Navigation`)}
                </p>
                <ul className="header-mobile-nav">
                  {routes.map((route, idx) => (
                    <motion.li
                      key={route.title}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + idx * 0.035 }}
                    >
                      <a
                        href={route.href}
                        className={`header-mobile-nav__link ${activeSection === route.id ? "is-active" : ""}`}
                        onClick={(e) => handleAnchorClick(e, route.href)}
                      >
                        <span className="header-mobile-nav__index">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="header-mobile-nav__label">
                          {t(`${selectedLang}.Menu.${route.title}`)}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </section>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
