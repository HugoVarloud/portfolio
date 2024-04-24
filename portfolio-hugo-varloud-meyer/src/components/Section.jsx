import React, { useEffect, useState } from 'react';
import "./Sections.css";


const Section = ({ id, title }) => {
  return (
    <div className='section-container'>
      <section className={id} id={id}>
        <h1 className='section-title'>{title}</h1>
      </section>
    </div> 
  );
};

export default Section;
