import "./Home.css";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import { useLoadingContext } from "../../context/loadingContext";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const scrollToContact = () => {
  document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  const { t } = useTranslation();
  const selectedLang = useLanguageContext().i18n.language;
  const { isFadeOutComplete } = useLoadingContext();

  return (
    <section className="home-section" role="main" aria-label="Section d'accueil">
      <div
        className={`home-bento ${isFadeOutComplete ? "home-bento--visible" : ""}`}
      >
        <article className="home-bento__hero">
          <h1 className="home-bento__headline">
            <span className="home-bento__headline-bold">
              {t(`${selectedLang}.Home.HeroLead`)}
            </span>{" "}
            <span className="home-bento__headline-gradient">
              {t(`${selectedLang}.Home.HeroHighlight`)}
            </span>{" "}
            <span className="home-bento__headline-connector">
              {t(`${selectedLang}.Home.HeroConnector`)}
            </span>{" "}
            <span className="home-bento__headline-gradient">
              {t(`${selectedLang}.Home.HeroAccent`)}
            </span>{" "}
            <span className="home-bento__headline-bold">
              {t(`${selectedLang}.Home.HeroBusiness`)}
            </span>
          </h1>
        </article>

        <figure className="home-bento__photo">
          <img
            src="/assets/home-profile.png"
            alt="Portrait de Hugo Varloud Meyer"
            className="home-bento__photo-img"
          />
        </figure>

        <article className="home-bento__bio">
          <p>{t(`${selectedLang}.Home.Bio`)}</p>
        </article>

        <button
          type="button"
          className="home-bento__contact"
          onClick={scrollToContact}
          aria-label={t(`${selectedLang}.Home.ContactMe`)}
        >
          <span className="home-bento__contact-eyebrow">
            {t(`${selectedLang}.Home.ContactEyebrow`)}
          </span>
          <NorthEastIcon className="home-bento__contact-icon" aria-hidden="true" />
          <span className="home-bento__contact-title">
            {t(`${selectedLang}.Home.ContactMe`)}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Home;
