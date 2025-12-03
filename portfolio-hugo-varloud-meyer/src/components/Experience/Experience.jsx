import { useState } from "react";
import styles from "./style.module.css";
import { t } from "i18next";
import { useLanguageContext } from "../../context/languageContext";
import Modal from "./Modal";

const projects = [
  {
    title: "ENGIE",
    description:
      "2024 – Développement de nouvelles fonctionnalités sur la plateforme client d’ENGIE avec une stack Vue.js (Nuxt), TypeScript et Strapi. Implémentation du cache avec Redis, gestion des données via PostgreSQL, et validation des composants via une suite de tests Jest et Cypress.",
    src: "/assets/engie-logo.webp",
    techs: [
      "nuxt",
      "typescript",
      "strapi",
      "redis",
      "postgreSQL",
      "jest",
      "cypress",
      "gitlab",
    ],
  },
  {
    title: "SFR",
    description:
      "2021 – Participation au développement d’une application SaaS dédiée à la gestion des produits, étiquettes et remises en boutique pour SFR. Stack technique : React pour le front-end, Node.js avec Fastify pour le backend, Sequelize + PostgreSQL pour la couche database, tests automatisés avec Jest et Cypress, déploiement via GitLab CI/CD.",
    src: "/assets/sfr-logo.svg",
    techs: [
      "react",
      "node",
      "fastify",
      "sequelize",
      "postgreSQL",
      "jest",
      "cypress",
      "bitbucket",
    ],
  },
  {
    title: "EPITECH",
    description:
      "2021 – Diplôme d’Expert en Technologies de l’Information obtenu à EPITECH (niveau Bac+5 – RNCP niveau 7). Formation orientée projet avec un fort focus sur les fondamentaux de l’algorithmie, la programmation système et orientée objet, principalement en C, C++, Java et Python.",
    src: "/assets/epitech-logo.jpeg",
    techs: ["c", "c++", "java", "python"],
  },
  {
    title: "ATIXIS",
    description:
      "2020 – Développement d’un CRM, lors de mon stgae de fin d'étude, pour les besoins métier d’Atixis, une société de pilotage de projets immobiliers. Stack technique : Vue.js pour le front-end, backend en Node.js avec Express, base de données PostgreSQL, infrastructure Dockerisée et pipelines CI/CD pour les déploiements.",
    src: "/assets/atixis-logo.jpeg",
    techs: ["vue", "node", "express", "postgreSQL", "docker"],
  },
];

const Section = () => {
  const selectedLang = useLanguageContext().i18n.language;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={styles.sectionContainer}>
      <section className={styles.experienceSection}>
        <h1 className={styles.titleExperience}>
          {t(`${selectedLang}.Experience.Title`)}
        </h1>
        <div className={styles.experienceSectionContainer}>
          {projects.map((project) => (
            <div
              key={project.title}
              className={styles.project}
              onClick={() => setSelectedProject(project)}
            >
              <div>
                <div className={styles.experienceSubTitle}>
                  <img
                    className={styles.experienceSectionImgMobile}
                    src={project.src}
                    alt={project.title}
                  />
                  <h3 className={styles.titleList}>{project.title}</h3>
                </div>
                <p className={styles.experienceDescription}>
                  {t(`${selectedLang}.Experience.${project.title}`) ||
                    project.description}
                </p>
              </div>
              <div className={styles.experienceSectionImgContainer}>
                <img
                  className={styles.experienceSectionImg}
                  src={project.src}
                  alt={project.title}
                />
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </section>
    </div>
  );
};

export default Section;
