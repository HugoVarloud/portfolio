import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import CloseIcon from "@mui/icons-material/Close";
import { formatTechDisplay } from "../../utils/formatTechDisplay";
import styles from "./modal.module.css";

const Modal = ({ project, onClose }) => {
  const { t } = useTranslation();
  const { i18n } = useLanguageContext();
  const lang = i18n.language || "en";

  const bodyText = useMemo(
    () =>
      t(`${lang}.Experience.${project.title}`, {
        defaultValue: project.description,
      }),
    [project, lang, t]
  );

  const techItems = useMemo(
    () =>
      (project.techs || []).map((tech) => ({
        key: tech,
        label: formatTechDisplay(tech),
      })),
    [project.techs]
  );

  const narrativeLines = useMemo(
    () =>
      bodyText
        .split(/(?<=[.!?])\s+/)
        .map((line) => line.trim())
        .filter(Boolean),
    [bodyText]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  const titleAria = useMemo(() => `sonar-title-${project.title}`, [project.title]);

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="presentation"
      aria-hidden={false}
    >
      <div
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleAria}
      >
        <article className={`${styles.bentoPanel} ${styles.heroPanel}`}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Fermer"
          >
            <CloseIcon fontSize="small" aria-hidden="true" />
          </button>
          <header className={styles.header}>
            <p className={styles.eyebrow}>
              {t(`${lang}.Experience.Title`, { defaultValue: "Experience" })}
            </p>
            <h2 id={titleAria} className={styles.title}>
              {project.title}
            </h2>
          </header>
        </article>

        <div className={styles.modalRow}>
          <article
            className={`${styles.bentoPanel} ${styles.logoPanel}`}
            aria-label="Entreprise"
          >
            <img
              src={project.src}
              alt={`Logo ${project.title}`}
              className={styles.previewLogo}
            />
          </article>

          <article
            className={`${styles.bentoPanel} ${styles.stackPanel}`}
            aria-label="Stack technique"
          >
            <h3 className={styles.sectionTitle}>Stack</h3>
            <div className={styles.techList}>
              {techItems.map((tech) => (
                <span key={tech.key} className={styles.techChip}>
                  {tech.label}
                </span>
              ))}
            </div>
          </article>
        </div>

        <article className={`${styles.bentoPanel} ${styles.contentPanel}`}>
          <h3 className={styles.sectionTitle}>Overview</h3>
          <div className={styles.narrative}>
            {narrativeLines.map((line, index) => (
              <p key={`${line}-${index}`} style={{ "--line-delay": `${index * 90}ms` }}>
                {line}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Modal;
