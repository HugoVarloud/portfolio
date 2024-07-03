import React, {
  createContext,
  useContext,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext(undefined);

export const LanguageContextProvider = ({ children }) => {
  const languages = {
    en: { nativeName: "en" },
    fr: { nativeName: "fr" },
  };
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en");

  const onClickLanguageChange = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
    setCurrentLanguage(language); // update state
  };

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages, currentLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
