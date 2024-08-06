import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useLanguageContext } from "../../context/languageContext";
const LanguageSelector = () => {
  const { languages, onClickLanguageChange, currentLanguage } = useLanguageContext();
  return (
    <FormControl className="translation-module">
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
    </FormControl>
  );
};    



export default LanguageSelector;