import React, { useEffect, useState } from 'react';
import "./Sections.css";


const Section = ({ id }) => {
  window.addEventListener('scroll', () => {
    const target = document.querySelectorAll('.section1');
    const scrolled = window.scrollY;
    const rate = scrolled * 0.5;
    target.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';
  })

  const texts = ["BIENVENUE", "歡迎", "WELCOME", "WILLKOMMEN", "BIENVENIDO", "ようこそ"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000)
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className='section-container'>
      <section className={id} id={id}>
        <h1 className='section-title'>{texts[currentTextIndex]}</h1>
        <div className='clouds'>
          <img src="src/assets/cloud1.png"></img>
          <img src="src/assets/cloud1.png" className='img1'></img>
          <img src="src/assets/cloud2.png" className='img2'></img>
          <img src="src/assets/cloud3.png" className='img3'></img>
          <img src="src/assets/cloud4.png" className='img4'></img>
          <img src="src/assets/cloud5.png" className='img5'></img>
          <img src="src/assets/cloud3.png"></img>
          <img src="src/assets/cloud5.png"></img>
        </div>
      </section>
    </div> 
  );
};

export default Section;
