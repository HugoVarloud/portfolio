import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useLanguageContext } from "../../context/languageContext";
import "./LanguageSelector.css"
const LanguageSelector = () => {
  const { languages, onClickLanguageChange, currentLanguage } = useLanguageContext();  
  return (
    <>
      {/* <FormControl className="translation-module">
        <InputLabel>{currentLanguage}</InputLabel>
        <Select
          className="select-lang"
          label={currentLanguage}
          onChange={onClickLanguageChange}
        >
                {Object.keys(languages).map((lng) => (
                  <MenuItem className="select-opened-label" key={languages[lng].nativeName} value={lng} disabled={currentLanguage === lng}>
                    {languages[lng].nativeName}
                  </MenuItem>
                ))}
        </Select>
      </FormControl> */}
        {/* <ul
          className="dropdown"
          label={currentLanguage}
          onChange={onClickLanguageChange}
        >
          {Object.keys(languages).map((lng) => (
            <li className="select-opened-label" key={languages[lng].nativeName} value={lng} disabled={currentLanguage === lng}>
              <div value={lng.nativeName} className={lng.nativeName} ></div>
            </li>
          ))}
        </ul> */}

      <div className="lang"> 
        <div 
          className={currentLanguage}
        >
        </div>
          <ul className="dropdown" >
            {
              
              languages.map(language => {
                console.log('current >>>>> ', currentLanguage);
                
                  // if (language.code != currentLanguage) {
                    return <li key={language.code} onClick={onClickLanguageChange(language.code)}><div value={language.code} className={language.code} ></div></li>
                  // }
                })
            }
          </ul>
      </div>
      </>
  );
};    



export default LanguageSelector;