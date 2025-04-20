import React from "react";

import styles from "./Contact.module.css";
import email from '../../../assets/contact/emailIcon.png';
import github from '../../../assets/contact/githubIcon.png';
import linkedin from '../../../assets/contact/linkedinIcon.png';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:salikazeem123@gmail.com">salikazeem123@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/salik-azeem/">linkedin.com/salikazeem</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/salikAzeem">github.com/salikAzeem</a>
        </li>
      </ul>
    </footer>
  );
};