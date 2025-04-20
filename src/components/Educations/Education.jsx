import React from "react";
import styles from "./Education.module.css";
import degreeIcon from "../../../assets/education/eduIcon.png";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={degreeIcon} alt="University Icon" className={styles.icon} />
          <div className={styles.cardContent}>
            <h3>Lovely Professional University, Punjab, India</h3>
            <p className={styles.degree}>B.Tech in Computer Science & Engineering</p>
            <p className={styles.meta}>CGPA: 7.28 | Since August 2022</p>
          </div>
        </div>

        <div className={styles.card}>
          <img src={degreeIcon} alt="Intermediate Icon" className={styles.icon} />
          <div className={styles.cardContent}>
            <h3>Araria Public School, Araria, Bihar, India</h3>
            <p className={styles.degree}>Intermediate (12th Grade)</p>
            <p className={styles.meta}>Percentage: 82.6% | 2022</p>
          </div>
        </div>

        <div className={styles.card}>
          <img src={degreeIcon} alt="Matriculation Icon" className={styles.icon} />
          <div className={styles.cardContent}>
            <h3>Araria Public School, Araria, Bihar, India</h3>
            <p className={styles.degree}>Matriculation (10th Grade)</p>
            <p className={styles.meta}>Percentage: 93.8% | 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};
