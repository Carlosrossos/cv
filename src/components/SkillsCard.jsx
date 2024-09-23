import React, { useState, useEffect } from "react";
import styles from "../styles/components/SkillsCard.module.css";
import skills from "../data/skills";

export default function SkillsCard({ maxYears = 3 }) {
  const [progresses, setProgresses] = useState(skills.map(() => 0));

  useEffect(() => {
    const updateProgress = () => {
      setProgresses((prevProgresses) => 
        prevProgresses.map((progress, i) => {
          const experience = skills[i].years;
          const targetProgress = (experience / maxYears) * 100;

          if (progress < targetProgress) {
            const increment = Math.min(1, targetProgress - progress); // Incrément fixe
            return Math.min(progress + increment, targetProgress);
          }
          return progress; 
        })
      );

      if (progresses.some((progress, i) => progress < (skills[i].years / maxYears) * 100)) {
        requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
  }, [maxYears, progresses]);

  return (
    <div className={styles.container}>
      <h1>Compétences</h1>
      <ul className={styles.skills}>
        {skills.map((skill, i) => (
          <li key={i} className={styles.skill}>
            <p>
              {skill.skill}
            </p>
            <div className={styles.progressContainer} aria-label={`Progress for ${skill.skill}`}>
              <div
                className={styles.progressBar}
                style={{ width: `${progresses[i]}%` }}
                data-completed={progresses[i] >= 100}
                aria-valuenow={progresses[i]}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
