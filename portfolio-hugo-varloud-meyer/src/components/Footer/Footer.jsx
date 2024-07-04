import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { t } from "i18next";
import { useLanguageContext } from "../../context/languageContext";

const Footer = () => {
  const selectedLang = useLanguageContext().i18n.language;
  const socialLinks = [
    {
      icon: <FacebookIcon className="fa fa-facebook" />,
      url: "https://www.facebook.com/hugo.varloudmeyer/",
      class: "btn facebook"
    },
    {
      icon: <GitHubIcon className="fa fa-github" />,
      url: "https://github.com/HugoVarloud",
      class: "btn github"
    },
    {
      icon: <LinkedInIcon className="fa fa-linkedin"/>,
      url: "https://www.linkedin.com/in/hugovarloud/",
      class: "btn linkedin"
    },
    {
      icon: <InstagramIcon className="fa fa-instagram" />,
      url: "https://www.instagram.com/meyer_hugo/",
      class: "btn instagram"
    }
  ];

  return (
    <>
      <footer className="footer-menu">
        <div className="contact">
          <div className="bottom-list-container">
            <h3>{t(`${selectedLang}.Contact.ServicesTitle`)}</h3>
            <ul className="bottom-list">
              <li>{t(`${selectedLang}.Contact.ServiceListItem.WebDesign`)}</li>
              <li>{t(`${selectedLang}.Contact.ServiceListItem.FullstackDevelopment`)}</li>
              <li>{t(`${selectedLang}.Contact.ServiceListItem.Hosting`)}</li>
            </ul>
          </div>
          <div className="bottom-list-container">
              <h3>{t(`${selectedLang}.Contact.ContactCallTitle`)}</h3>
              <ul className="bottom-list">
                <li>{t(`${selectedLang}.Contact.ContactCallText`)}</li>
              </ul>
          </div>
          <div className="bottom-list-container">
            <h3>{t(`${selectedLang}.Contact.InfosTitle`)}</h3>
            <ul className="bottom-list">
              <li>hugo.varloud@gmail.com</li>
              <li>+33 6 13 02 80 26</li>
              <li>Levallois-Perret, 92300</li>
              <li>France</li>
            </ul>
          </div>
        </div>
        <div>
        <div className="social-section">
          <div className="social-btns">
            {socialLinks.map((link, index) => (
              <a target="_blank" key={index} className={link.class} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-nav-list">
          <nav>
            <ul className="footer-list">
              <li className="signature">{t(`${selectedLang}.Contact.Signature`)}</li>
            </ul>
          </nav>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
