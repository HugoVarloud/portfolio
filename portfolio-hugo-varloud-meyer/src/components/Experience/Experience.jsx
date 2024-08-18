import React from 'react';
import styles from './style.module.css';
import { t } from 'i18next';
import { useLanguageContext } from '../../context/languageContext';
const projects = [
  {
    title: "ENGIE",
    src: "/assets/engie-logo.webp",
  },
  {
    title: "SFR",
    src: "/assets/sfr-logo.svg"
  },
  {
    title: "EPITECH",
    src: "/assets/epitech-logo.jpeg"
  },
  {
    title: "ATIXIS",
    src: "/assets/atixis-logo.jpeg"
  }
];

const Section = () => {
  const selectedLang = useLanguageContext().i18n.language;
  return (
    <div className={styles.sectionContainer}>
      <section className={styles.experienceSection}>
        <h1 className={styles.titleExperience}>{t(`${selectedLang}.Experience.Title`)}</h1>
        <div>
          {
            projects.map( (project) => {
              return (
                <div key={project.title} className={styles.project}>
                    <div>
                      <h3 className={styles.titleList}>{project.title}</h3>
                      <p className={styles.experienceDescription}>{t(`${selectedLang}.Experience.${project.title}`)}</p>
                    </div>
                    <div className={styles.experienceSectionImgContainer}>
                      <img className={styles.experienceSectionImg} src={project.src} alt={project.title} />
                    </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </div> 
  );
};

export default Section;
