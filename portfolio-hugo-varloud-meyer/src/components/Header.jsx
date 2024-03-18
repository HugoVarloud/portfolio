import React from "react";
import "./Navbar.css";

const Navbar = () => {
 return (
   <header className="navigation-menu">
     <nav>
      <ul>
        <li><a href="#section1">Accueil</a></li>
        <li><a href="#section2">Projets</a></li>
        <li><a href="#section3">Expérience</a></li>
        <li><a href="#section4">Contact</a></li>
      </ul>
    </nav>
   </header>
 );
};

export default Navbar;
