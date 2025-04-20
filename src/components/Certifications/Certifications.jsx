import React from "react";
import styles from "./Certifications.module.css";
import certifications from "../../data/certifications.json";
import { getImageUrl } from "../../utils";

const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.certifications}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <img src={getImageUrl(cert.imageSrc)} alt={cert.title} />
              </div>
              <div className={styles.details}>
                <h3>{cert.title}</h3>
                <p>{cert.organisation}</p>
                <span>{cert.date}</span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
