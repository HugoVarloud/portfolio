

import React, { useEffect, useState } from 'react';
import "./Contact.css";


const Contact = ({ id, title }) => {
  return (
    <div className='section-container'>
      <section className="contactSection">
        <div className="AboutText">
            <div className="txtWrapper">
                <span className="subtitle">Fullstack Developpeur</span>
                <p className="excerpt">I combine the best of our skills and ideas to present you products really worth your attention that will change the way you think about design, structure, color and website itself. </p>
            </div>
        </div>
        <div className="AboutImg">
          <img src="src/assets/hugo.varloud-meyer3.jpg" alt="" />
        </div>
      </section>
    </div> 
  );
};

export default Contact;