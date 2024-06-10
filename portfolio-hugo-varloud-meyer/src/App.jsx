import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <div id="accueil" className="section" >
          <Home/>
        </div>
        <div id="experience" className="section">
          <Experience/>
        </div>
        <div id="projects" className="section">
          <Projects/>
        </div>
        <div id="contacts" className="section">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
