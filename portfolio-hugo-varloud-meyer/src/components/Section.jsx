import React from 'react';
import "./Sections.css";

const Section = ({ id, title }) => {
  return (
    <section className={id} id={id}>
      <h2 className='section-title'>{title}</h2>
    </section>
  );
};

export default Section;
