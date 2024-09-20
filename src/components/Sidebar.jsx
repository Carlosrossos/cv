import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/Sidebar.module.css";

export default function Sidebar() {

  const year = new Date().getFullYear();

  return (
    <div className={styles.main}>
      <img
        className={styles.photoProfil}
        src="/photo-profil.jpg"
        alt="Portrait de Charles Bréton"
      />
      <h1 className={styles.title}>Charles Bréton</h1>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link to="/" className={styles.navLink}>Accueil</Link>
          </li>
          <li>
            <Link to="/skills" className={styles.navLink}>Skills</Link>
          </li>
          <li>
            <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.logosContainer}>
        <a href="https://www.linkedin.com/in/charles-breton89/">
          <img
            className={styles.logos}
            src="/linkedin-logo.svg"
            alt="logo linkedin"
            width="40"
            height="40"
          />
        </a>
        <a href="https://github.com/Carlosrossos">
          <img
            className={styles.logos}
            src="/github-logo.svg"
            alt="logo-github"
            width="40"
            height="40"
          />
        </a>
      </div>
      <span>Charles Bréton | {year}</span>
    </div>
  );
}
