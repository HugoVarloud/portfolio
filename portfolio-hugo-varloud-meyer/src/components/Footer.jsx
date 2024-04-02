import React from "react";
import "./Footer.css";
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
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
  ]
  return (
    <>
        <footer className="footer-menu">
            <Box className="social-section">
              <div className="social-btns">
                {socialLinks.map((link, index) => (
                  <a target="_blank" key={index} className={link.class} href={link.url}>
                    {link.icon}
                  </a>
                ))}
              </div>
            </Box>
            <nav className="footer-nav-list">
              <ul className="footer-list">
                <li className="signature"> © 2024 un site de Hugo Varloud-Meyer </li>
              </ul>
            </nav>
        </footer>
    </>
  );
};

export default Footer;
