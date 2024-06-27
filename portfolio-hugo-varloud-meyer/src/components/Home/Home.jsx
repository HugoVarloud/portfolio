import React from 'react';
import "./Home.css";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className='home-wrapper'>
        <div className='home-container'>
          <section className="section1"></section> 
        </div>

          <div className='topDiv'>
            <div className='topLeft'>
              <div className='topCover'></div>
            </div>
            <div className='topRight'></div>
          </div>
          <div className='bottomDiv'>
            <div className='left'>
              <div className='curve'></div>
              <div className='cover'></div>
              <div className='textPart'>
                <div class="animated-title">
                  <div class="text-top">
                    <div>
                      <span>Full Stack Developer</span>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                  <div class="text-bottom">
                    <div>Contact Me !</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='services'>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Home;
