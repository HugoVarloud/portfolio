import React, { useEffect, useState } from 'react';
import "./Home.css";

const Home = () => {
  return (
    <>
    <div className='home-container'>
      <section className="section1"></section> 
    </div>
      <div className='topDiv'></div>
      <div className='topLeft'></div>
      <div className='topMiddle'></div>
      <div className='topRight'></div>
      <div className='bottomDiv'>
        <div className='left'>
          <div className='curve'></div>
          <div className='cover'></div>
          <div className='textPart'>
            <ul>
              <li>Look</li>
              <li>If you had one shot</li>
              <li>or one opportunity</li>
              <li>To seize everything you ever wanted</li>
              <li>in one moment</li>
              <li>Would you capture it</li>
              <li>or just let it slip?</li>
            </ul>
          </div>
        </div>
        <div className='right'>
          <div className='services'>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
