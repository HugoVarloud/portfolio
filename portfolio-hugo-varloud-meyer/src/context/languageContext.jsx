import React, {
  createContext,
  useContext,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import './context.css'
export const LanguageContext = createContext(undefined);

export const LanguageContextProvider = ({ children }) => {
  const languages = [
    { code: 'en', name: 'English'},
    { code: 'fr', name: 'French'},
    { code: 'deu', name: 'Deutsch'}
  ];
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en");

  const onClickLanguageChange = (e) => {
    // const language = e.target.value;
    console.log('------------------> ', e);
    
    // i18n.changeLanguage(e);
    setCurrentLanguage(e);
    console.log('-----------------XX-> ', currentLanguage);
  };

  return (
    <LanguageContext.Provider
      class="select-opened-label"
      value={{ t, i18n, onClickLanguageChange, languages, currentLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
