import styles from "./modal.module.css";

const Modal = ({ project, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fermer la modal"
        >
          &times;
        </button>
        <img src={project.src} alt={project.title} className={styles.logo} />
        <p className={styles.description}>{project.description}</p>

        {project.techs && (
          <div className={styles.techLogos}>
            {project.techs.map((tech) => (
              <img
                key={tech}
                src={`/assets/languages/${tech}.png`}
                alt={tech}
                className={styles.techIcon}
                title={tech}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
