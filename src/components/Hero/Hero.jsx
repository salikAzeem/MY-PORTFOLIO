import React from "react";

import styles from "./Hero.module.css";
import HERO from '../../../assets/Hero/heroImage.png';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Salik</h1>
        <p className={styles.description}>
          I'm a full-stack developer using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:salikazeem123@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={HERO}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};