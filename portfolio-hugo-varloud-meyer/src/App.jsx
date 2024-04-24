import React from 'react';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <body>
          <Section1 id="section1" title="Bonjour"/>
          <Section id="section2" title="Projet" />
          <Section id="section3" title="Experience" />
          <Section id="section4" title="Contact" />
        </body>
        <Footer />
      </div>
    </>

  );
}

export default App;
