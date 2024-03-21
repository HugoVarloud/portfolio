import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  
  const removeActive = () => {
    setIsActive(false);
  }
  return (
    <header className="navigation-menu">
      <nav className="navbar">
        <div className="container">
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li onClick={removeActive}><a href="#section1">Accueil</a></li>
              <li onClick={removeActive}><a href="#section2">Projets</a></li>
              <li onClick={removeActive}><a href="#section3">Expérience</a></li>
              <li onClick={removeActive}><a href="#section4">Contact</a></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
