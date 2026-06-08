import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { t } from "i18next";
import "./Navbar.css";
import LanguageSelectorIcons from "../LanguageSelector/LanguageSelectorIcons";
import { useLanguageContext } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";

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

const getHeaderOffset = () => {
  const height = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--header-height")
  );
  return Number.isFinite(height) ? height : 88;
};

/** Section qui occupe la zone juste sous le header. */
const getActiveSection = () => {
  const anchorY = getHeaderOffset() + 1;

  for (let i = routes.length - 1; i >= 0; i--) {
    const section = document.getElementById(routes[i].id);
    if (!section) continue;
    const rect = section.getBoundingClientRect();
    if (rect.top <= anchorY && rect.bottom > anchorY) {
      return routes[i].id;
    }
  }

  return routes[0].id;
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const ref = useRef(null);
  const pendingNavRef = useRef(null);
  const selectedLang = useLanguageContext().i18n.language;
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const header = document.querySelector(".site-header");
    const bar = document.querySelector(".header-bar");
    if (!bar || !header) return;

    const updateHeaderHeight = () => {
      const height = Math.ceil(
        bar.getBoundingClientRect().bottom - header.getBoundingClientRect().top
      );
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    };

    updateHeaderHeight();
    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(bar);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const syncActiveSection = () => setActiveSection(getActiveSection());

    const onScroll = () => {
      if (pendingNavRef.current) return;
      syncActiveSection();
    };

    const onScrollEnd = () => {
      pendingNavRef.current = null;
      syncActiveSection();
    };

    syncActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
    };
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

  const onNavClick = (sectionId) => {
    pendingNavRef.current = sectionId;
    setActiveSection(sectionId);
    setOpen(false);
    setTimeout(() => {
      if (pendingNavRef.current === sectionId) {
        pendingNavRef.current = null;
        setActiveSection(getActiveSection());
      }
    }, 800);
  };

  return (
    <header className={`site-header${isOpen ? " site-header--menu-open" : ""}`}>
      <nav className="header-bar" aria-label="Navigation principale">
        <a href="#accueil" className="header-brand">
          <span className="header-brand__text">CODE BY HUGO</span>
        </a>

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
            onClick={() => setOpen(false)}
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
                        onClick={() => onNavClick(route.id)}
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
