import React from "react";
import styles from "../styles/pages/Skills.module.css";
import SkillsCard from "../components/SkillsCard";

export default function Skills() {
  return (
      <div className={styles.container}>
        <SkillsCard/>
      </div>
  );
}
