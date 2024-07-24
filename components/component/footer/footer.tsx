"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.css'; // Import the CSS file
import { useTheme } from "@/components/context/themeContext";

const Footer = () => {
  const { color } = useTheme();
  return (
    <footer className={`footer bg-${color}-50`}>
      <div className="footer-content">
        <div className="footer-left">
          <p>©2024 tous droits réservés</p>
        </div>
        <div className={`footer-right`}>
          <a href="https://www.linkedin.com/in/thomas-cerdera-305ab3153/" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faLinkedin} size="2x" className={`hover:text-${color}-500`} />
          </a>
          <a href="https://github.com/ThomasC317" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className={`hover:text-${color}-500`} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
