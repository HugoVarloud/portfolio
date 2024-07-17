import { FormControl } from "@mui/material";
import { useLanguageContext } from "../../context/languageContext";
const LanguageSelector = () => {
  const { languages, onClickLanguageChange, currentLanguage } = useLanguageContext();
  return (
<FormControl className="translation-module">
  <div class="select-dropdown">
    <select
      labelId="demo-select-small-label"
      id="demo-simple-select"
      label={currentLanguage}
      onChange={onClickLanguageChange}
    >
          {Object.keys(languages).map((lng) => (
            <option key={languages[lng].nativeName} value={lng}>
              {languages[lng].nativeName}
            </option>
          ))}
    </select>
  </div>
</FormControl>
  );
};

export default LanguageSelector;