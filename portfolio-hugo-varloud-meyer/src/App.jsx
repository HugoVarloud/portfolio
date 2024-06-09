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
        <Home/>
        <Experience/>
        <Projects/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
