import "./Home.css";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import { useLoadingContext } from "../../context/loadingContext";

const Home = () => {
  const { t } = useTranslation();
  const selectedLang = useLanguageContext().i18n.language;
  const { isFadeOutComplete } = useLoadingContext();

  return (
    <>
      <section
        className="home-section"
        role="main"
        aria-label="Section d'accueil"
      >
        <div
          className={`animated-title ${
            isFadeOutComplete ? "animation-ready" : ""
          }`}
        >
          <div className="text-top">
            <div>
              <span>{t(`${selectedLang}.Home.Occupation`)}</span>
              <span className="outlined">
                {t(`${selectedLang}.Home.DesignEnthusiast`)}
              </span>
            </div>
          </div>
          <div className="text-bottom">
            <div>
              <span>{t(`${selectedLang}.Home.ContactMe`)}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
