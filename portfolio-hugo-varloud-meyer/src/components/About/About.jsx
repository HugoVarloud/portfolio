import styles from "./About.module.css";
import { t } from "i18next";
import { useLanguageContext } from "../../context/languageContext";

const About = () => {
  const selectedLang = useLanguageContext().i18n.language;

  return (
    <div className={styles.sectionContainer}>
      <section className={styles.aboutSection}>
        <h1 className={styles.titleAbout}>
          {t(`${selectedLang}.About.Title`)}
        </h1>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p
              className={styles.mainText}
              dangerouslySetInnerHTML={{
                __html: t(`${selectedLang}.About.MainText`),
              }}
            />
            <p
              className={styles.locationText}
              dangerouslySetInnerHTML={{
                __html: t(`${selectedLang}.About.Location`),
              }}
            />
            <p
              className={styles.paragraph}
              dangerouslySetInnerHTML={{
                __html: t(`${selectedLang}.About.Mission`),
              }}
            />
            <p
              className={styles.paragraph}
              dangerouslySetInnerHTML={{
                __html: t(`${selectedLang}.About.Experience`),
              }}
            />
            <p
              className={styles.paragraph}
              dangerouslySetInnerHTML={{
                __html: t(`${selectedLang}.About.Resume`),
              }}
            />
            <p
              className={styles.paragraph}
              dangerouslySetInnerHTML={{
                __html: t(`${selectedLang}.About.CaseStudies`),
              }}
            />
            <p
              className={styles.paragraph}
              dangerouslySetInnerHTML={{
                __html: t(`${selectedLang}.About.Mentoring`),
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
