import React from 'react';
import styles from './style.module.css';
import { t } from 'i18next';
import { useLanguageContext } from '../../context/languageContext';
const projects = [
  {
    title: "ENGIE",
    description: "2024 - Travail à l'évolution de leur plateforme B2C sur laquelle on retrouve les informations clients et les services et équipement proposé par l'entreprise.",
    src: "/assets/engie-logo.webp",
  },
  {
    title: "SFR",
    description: "2021 - Développement d'un Saas ayant pour but de gérer les étiquettes et générer les produits, remises et plans de financement des 800 points de vente SFR.",
    src: "/assets/sfr-logo.svg"
  },
  {
    title: "EPITECH",
    description: "2021 - Diplôme d’Expert en technologies de l’information en ingénierie logicielle enregistré au RNCP de niveau 7.",
    src: "/assets/epitech-logo.jpeg"
  },
  {
    title: "ATIXIS",
    description: "2020 - Stage de fin d'étude dans une entreprise de pilotage de projet immobillier. Création d'un CRM custom pour répondre aux besoins métier de l'entreprise.",
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
