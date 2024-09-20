import React from "react";
import styles from "../styles/components/ContactCard.module.css";

export default function ContactCard() {
  return (
    <div className={styles.container}>
      <h2>Me Contacter</h2>
      <ul className={styles.list}>
        <li>
          <img className={styles.contactLogo} src="/location.svg" alt="logo position" />
          <a href="https://maps.app.goo.gl/z2waoy3HRHnB1jdG9">Lyon</a>
        </li>
        <li>
          <img className={styles.contactLogo} src="/phone.svg" alt="logo téléphone"/>
          <a href="tel:+33676493533">06 76 49 35 33</a>
        </li>
        <li>
          <img className={styles.contactLogo} src="/mail.svg" alt="logo mail" />
          <a href="mailto:charlesbreton@outlook.com">
            charlesbreton@outlook.com
          </a>
        </li>
      </ul>
    </div>
  );
}
