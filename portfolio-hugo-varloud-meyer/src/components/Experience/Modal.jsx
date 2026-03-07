import styles from "./modal.module.css";
import { formatTechDisplay } from "../../utils/formatTechDisplay";

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

        {project.techs && project.techs.length > 0 && (
          <p className={styles.techInline}>
            {project.techs.map((tech) => formatTechDisplay(tech)).join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Modal;
