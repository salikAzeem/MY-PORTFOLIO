import React from "react";

import styles from "./About.module.css";
import a from '../../../assets/about/aboutImage.png';
import b from '../../../assets/about/cursorIcon.png';
import c from '../../../assets/about/serverIcon.png';
import d from '../../../assets/about/uiIcon.png';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={a}share
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={b} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience HTML,CSS,React and Javascript in building responsive
                and optimized sites . 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={c} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in Nodejs,Mongodb and json in developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};