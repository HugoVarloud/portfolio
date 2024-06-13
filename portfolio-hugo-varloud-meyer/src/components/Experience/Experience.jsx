import React, { useState } from 'react';
import styles from './style.module.css';
import { motion } from 'framer-motion';
const projects = [
  {
    title: "ENGIE",
    description: "2024 - Travail à l'évolution de leur plateforme B2C sur laquelle on retrouve les informations clients et les services et équipement proposé par l'entreprise.",
    src: "/public/assets/engie-logo.png",
  },
  {
    title: "SFR",
    description: "2021 - Développement d'un Saas ayant pour but de gérer les étiquettes points de vente et générer les produits, remises et plans de financement.",
    src: "/public/assets/sfr-logo.svg"
  },
  {
    title: "EPITECH",
    description: "2021 - Diplôme d’Expert en technologies de l’information en ingénierie logicielle enregistré au RNCP de niveau 7.",
    src: "/public/assets/epitech-logo.jpeg"
  },
  {
    title: "ATIXIS",
    description: "2020 - Stage de fin d'étude dans une entreprise de pilotage de projet immobillier. Création d'un CRM custom pour répondre aux besoins métier de l'entreprise.",
    src: "/public/assets/atixis-logo.jpeg"
  }
];


const scaleAnimation = {

  initial: {scale: 0, x:"-50%", y:"-50%"},

  enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},

  closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}

}

const Section = () => {
  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;

  return (
    <div className='section-container'>
      <section className='experienceSection'>
        <div className={styles.body}>
          {
            projects.map( (project, index) => {
              return (
                <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
                    <div>
                      <h2>{project.title}</h2>
                      <p className={styles.experienceDescription}>{project.description}</p>
                    </div>
                    <div className={styles.experienceSectionImgContainer}>
                      <img className={styles.experienceSectionImg} src={project.src} alt={project.title} />
                    </div>
                </div>
              )
            })
          }
        </div>
        {/* <motion.div variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
              {
                projects.map( (project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                    <img 
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                    />
                </div>
                })
              }
            </div>
        </motion.div> */}
        {/* <motion.div className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div> */}
      </section>
    </div> 
  );
};

export default Section;
