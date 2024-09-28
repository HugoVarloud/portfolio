import { useLanguageContext } from "../../context/languageContext";
import "./LanguageSelector.css"
const LanguageSelector = () => {
  const { languages, onClickLanguageChange, currentLanguage } = useLanguageContext();  
  return (
    <>
      <div className="lang"> 
        <div className={currentLanguage}>
        </div>
          <ul className="dropdown" >
            {
              languages.map(language => {
                if (language.code != currentLanguage) {
                    return <li key={language.code} onClick={() => onClickLanguageChange(language.code)}><div value={language.code} className={language.code}></div></li>
                  }
              })
            }
          </ul>
      </div>
    </>
  );
};

export default LanguageSelector;
