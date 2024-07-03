import React from 'react';
import "./Home.css";
import { useTranslation } from 'react-i18next';
import { useLanguageContext } from '../../context/languageContext';

const Home = () => {
  const {t} = useTranslation();
  const selectedLang = useLanguageContext().i18n.language;
  console.log(selectedLang);
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
                      <span>{t(`${selectedLang}.Home.Occupation`)}</span>
                      <span>{t(`${selectedLang}.Home.DesignEnthusiast`)}</span>
                    </div>
                  </div>
                  <div class="text-bottom">
                    <div>{t(`${selectedLang}.Home.ContactMe`)}</div>
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
