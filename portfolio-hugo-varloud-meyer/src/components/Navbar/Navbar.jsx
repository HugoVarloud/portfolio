import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";
import { Squash as Hamburger } from "hamburger-react";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { t } from "i18next";
import { useLanguageContext } from "../../context/languageContext";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const selectedLang = useLanguageContext().i18n.language;
  const routes = [
    {
      title: "Home",
      href: "#accueil",
      Icon: BiHomeAlt2,
    },
    {
      title: "Experience",
      href: "#experience",
      Icon: FiSearch,
    },
    {
      title: "Projects",
      href: "#projects",
      Icon: IoPricetagsOutline,
    },
    {
      title: "Contacts",
      href: "#contacts",
      Icon: PiChatCircleBold,
    },
  ];

  return (
    <header className="navigation-menu">
        {isOpen === true &&
          <LanguageSelector></LanguageSelector>
        }
      <nav className="navbar">
        <div className="title-container">
          <h1>© Code by Hugo</h1>
        </div>
        <div ref={ref}>
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
                          <span>{t(`${selectedLang}.Menu.${route.title}`)}</span>
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
