import React from "react";
import Sidebar from "../components/Sidebar";
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
        <Sidebar/>
        <h1>HOME</h1>
      </div>
  );
}
