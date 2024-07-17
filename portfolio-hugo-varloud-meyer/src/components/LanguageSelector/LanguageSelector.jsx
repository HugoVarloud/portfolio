import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useLanguageContext } from "../../context/languageContext";
const LanguageSelector = () => {
  const { languages, onClickLanguageChange, currentLanguage } = useLanguageContext();
  return (
    <FormControl className="translation-module">
      <InputLabel id="demo-select-small-label">{currentLanguage}</InputLabel>
      <Select
        className="select-opened-label"
        label={currentLanguage}
        onChange={onClickLanguageChange}
      >
              {Object.keys(languages).map((lng) => (
                <MenuItem key={languages[lng].nativeName} value={lng} disabled={currentLanguage === lng}>
                  {languages[lng].nativeName}
                </MenuItem>
              ))}
      </Select>
    </FormControl>
  );
};    



export default LanguageSelector;