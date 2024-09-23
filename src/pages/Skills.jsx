import React from "react";
import styles from "../styles/pages/Skills.module.css";
import SkillsCard from "../components/SkillsCard";
import ExpCard from "../components/ExpCard";

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <SkillsCard />
        <ExpCard />
      </div>
    </div>
  );
}
