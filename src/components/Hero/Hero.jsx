import React from "react";
import { FaDownload } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";

import styles from "./Hero.module.css";
import HERO from '../../../assets/Hero/heroimage.jpg';
import CV from '../../../assets/CV SALIK LPU.pdf'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Salik Azeem</h1>
        <p className={styles.description}>
          I'm a <b>full-stack Web-developer</b>.
          Building bridges between Front-end and Back-end,
          Transforming ideas into Web Reality.
          I’ve always been a great problem solver, an independent introvert, and a technophile obsessed with the latest devices. Now, I’m pursuing Bachelors of Technology in Computer Science and Engineering from Lovely Professional University.
          I’m familiar with a variety of programming languages, including HTML, CSS, Javascript, but I’m always adding new skills to my reserve. I enjoy meeting people and working with them in a team environment.
        </p>
        <a
          href="https://wa.me/7209552057"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
        WhatsApp  <LuMessageCircle />
        </a>

          <a href= {CV} download class="btn primary" className={styles.cv}>
           Download CV <FaDownload />
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