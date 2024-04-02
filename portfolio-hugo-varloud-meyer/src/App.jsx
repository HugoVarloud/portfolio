import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Section id="section1" title="Accueil" />
        <Section id="section2" title="Projet" />
        <Section id="section3" title="Experience" />
        <Section id="section4" title="Contact" />
        <Footer />
      </div>
    </>

  );
}

export default App;
