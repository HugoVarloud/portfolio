import "./Home.css";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";

const Home = () => {
  const { t } = useTranslation();
  const selectedLang = useLanguageContext().i18n.language;
  return (
    <>
      <section
        className="home-section"
        role="main"
        aria-label="Section d'accueil"
      >
        <div className="animated-title">
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
