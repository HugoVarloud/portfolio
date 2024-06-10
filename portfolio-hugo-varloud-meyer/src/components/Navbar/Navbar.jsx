import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  
  return (
    <header className="navigation-menu">
      <nav className="navbar">
        <div className="container">
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul className="nav-links">
              <li><a href="#accueil" className="nav-link">Accueil</a></li>
              <li><a href="#experience" className="nav-link">Expérience</a></li>
              <li><a href="#projects" className="nav-link">Projets</a></li>
              <li><a href="#contacts" className="nav-link">Contact</a></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="title-container">
          <h1>© Code by Hugo</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
