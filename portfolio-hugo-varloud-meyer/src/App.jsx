import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
          <Home/>
          {/* <Section id="section2" title="Projet" /> */}
          <Experience id="section3" title="Experience" />
          <Contact id="section4" title="Contact" />
        <Footer />
      </div>
    </>

  );
}

export default App;
