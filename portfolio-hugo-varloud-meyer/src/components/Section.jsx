import React from 'react';
import "./Sections.css";


const Section = ({ id, title }) => {
  window.addEventListener('scroll', () => {
    const target = document.querySelector('.section-title');
    const scrolled = window.scrollY;
    const rate = scrolled * 0.5;
    target.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';
  })
  return (
    <div className='section-container'>
      <section className={id} id={id}>
        <h1 className='section-title'>{title}</h1>
      </section>
    </div> 
  );
};

export default Section;
