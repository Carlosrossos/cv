import React from "react";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>CHARLES BRETON</h1>
      <h2>Développeur Web & Mobile</h2>
      <div className={styles.textBox}>
        <p>
          Pendant 15 ans en tant que chef de projet dans l’audiovisuel et la
          communication, j'ai souvent été amené à gérer des projets web et à
          endosser de nombreuses casquettes dont celle de développeur.
        </p>
        <br />
        <p>
          L'aspect technique des projets digitaux m'a toujours passionné.
          Associé à mon expérience très poussée sur la communication visuelle,
          j'ai un œil avisé pour vous accompagner sur vos projets web et mobile.
        </p>
        <br />
        <p>
          Lors de ma formation au sein de la Capsule j’ai pu approfondir mes
          connaissances et consolider mon bagage technique : JavaScript, React,
          ReactNative, Redux.
        </p>
      </div>
      <span>
        Parcourez le site ou <button>Télécharger le CV</button> pour en savoir
        plus
      </span>
    </div>
  );
}
