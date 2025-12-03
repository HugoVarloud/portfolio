import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";
import { Squash as Hamburger } from "hamburger-react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { t } from "i18next";
import { useLanguageContext } from "../../context/languageContext";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef(null);
  const selectedLang = useLanguageContext().i18n.language;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const routes = [
    {
      title: "Home",
      href: "#accueil",
    },
    {
      title: "Experience",
      href: "#experience",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contacts",
      href: "#contacts",
    },
  ];

  return (
    <header className={`navigation-menu ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="title-container">
          <h1>Code by Hugo</h1>
        </div>
        <div className="language-container">
          {isOpen === true && <LanguageSelector></LanguageSelector>}
        </div>
        <div className="hamburger-container" ref={ref}>
          <div className="menu-icon">
            <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
          </div>
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="openMenu"
                >
                  <ul>
                    {routes.map((route, idx) => {
                      return (
                        <motion.li
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.1 + idx / 10,
                          }}
                          key={route.title}
                        >
                          <a
                            onClick={() => setOpen(false)}
                            href={route.href}
                            className="menuItemName"
                          >
                            <span>
                              {t(`${selectedLang}.Menu.${route.title}`)}
                            </span>
                          </a>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
