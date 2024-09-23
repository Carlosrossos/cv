import React from "react";
import experiences from "../data/experiences";
import styles from "../styles/components/ExpCard.module.css"

export default function ExpCard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Expériences</h1>
      <ul className={styles.list}>
        {experiences.map((job, i) => {
          return (
            <li key={i}>
              <div>
                <h2>
                  {job.poste} | {job.company}
                </h2>
                <span>
                  {job.start} - {job.end}
                </span>
              </div>
              <p>{job.desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
