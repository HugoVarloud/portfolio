import React, { useState } from 'react';
import styles from './style.module.css';
import { motion } from 'framer-motion';
const projects = [
  {
    title: "ENGIE",
    src: "/public/assets/engie-logo.png",
  },
  {

    title: "SFR",

    src: "/public/assets/sfr-logo.svg",

    color: "#8C8C8C"

  },
  {

    title: "EPITECH",

    src: "/public/assets/epitech-logo.jpeg",

    color: "#EFE8D3"

  },
  {

    title: "ATIXIS",

    src: "/public/assets/atixis-logo.jpeg",

    color: "#706D63"

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
                    <h2>{project.title}</h2>
                    {/* <p className='experience-section-text'>Design & Development</p> */}
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








// <Timeline className='timeLineListElement' position="alternate">
// <TimelineItem>
//   <TimelineOppositeContent
//     sx={{ m: 'auto 0' }}
//     align="right"
//     variant="body2"
//     color="text.secondary"
//   >
//     2024
//   </TimelineOppositeContent>
//   <TimelineSeparator>
//     <TimelineConnector />
//         <Avatar alt="Engie" src="/src/assets/engie-logo.png" />
//     <TimelineConnector />
//   </TimelineSeparator>
//   <TimelineContent sx={{ py: '12px', px: 2 }}>
//     <Typography gutterBottom variant="h5">
//       Engie (Acensi)
//     </Typography>
//     <p className='xpText'>Travail à l'évolution de leur plateforme B2C sur laquelle on retrouve les informations clients et les services et équipement proposé par l'entreprise.</p>
//   </TimelineContent>
// </TimelineItem>
// <TimelineItem>
//   <TimelineOppositeContent
//     sx={{ m: 'auto 0' }}
//     variant="body2"
//     color="text.secondary"
//   >
//     2021
//   </TimelineOppositeContent>
//   <TimelineSeparator>
//     <TimelineConnector />
//           <Avatar alt="SFR" src="/src/assets/sfr-logo.svg" />
//     <TimelineConnector />
//   </TimelineSeparator>
//   <TimelineContent sx={{ py: '12px', px: 2 }}>
//     <Typography variant="h6" component="span">
//       SFR (Acensi)
//     </Typography>
//     <p className='xpText'>Développement d'un Saas ayant pour but de géréer les produits, remises et plans de financement. Le coeur de métier de l'application réside dans l'édition d'étiquettes produits en fonction du point de vente.</p>
//   </TimelineContent>
// </TimelineItem>
// <TimelineItem>
// <TimelineOppositeContent
//     sx={{ m: 'auto 0' }}
//     variant="body2"
//     color="text.secondary"
//   >
//     2021
//   </TimelineOppositeContent>
//   <TimelineSeparator>
//     <TimelineConnector />
//       <Avatar alt="Engie" src="/src/assets/epitech-logo.jpeg" />
//     <TimelineConnector/>
//   </TimelineSeparator>
//   <TimelineContent sx={{ py: '12px', px: 2 }}>
//     <Typography variant="h6" component="span">
//       Epitech
//     </Typography>
//     <p className='xpText'>Diplôme d’Expert en technologies de l’information visé par le ministère de l’Enseignement supérieur et de la Recherche Titre d’Expert en ingénierie logicielle enregistré au RNCP niveau 7.</p>
//   </TimelineContent>
// </TimelineItem>
// <TimelineItem>
// <TimelineOppositeContent
//     sx={{ m: 'auto 0' }}
//     align="right"
//     variant="body2"
//     color="text.secondary"
//   >
//     2020
//   </TimelineOppositeContent>
//   <TimelineSeparator>
//     <TimelineConnector/>
//       <Avatar alt="Engie" src="/src/assets/atixis-logo.jpeg" />
//     <TimelineConnector />
//   </TimelineSeparator>
//   <TimelineContent sx={{ py: '12px', px: 2 }}>
//     <Typography variant="h6" component="span">
//       Atixis
//     </Typography>
//     <p className='xpText'>Stage de fin d'étude dans une entreprise ayant piloté la construction du centre de formation du PSG. Création d'un CRM custom pour répondre aux besoins métier de l'entreprise.</p>
//   </TimelineContent>
// </TimelineItem>
// </Timeline>