import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/emailIcon.png" 
          alt="Email icon" />
          <a href="mailto:babysarithakamatham@gmail.com">babysarithakamatham@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/babysaritha-reddy">https://www.linkedin.com/in/babysaritha-reddy</a>
        </li>
        <li className={styles.link}>
          <img src="/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/KamathamBabySaritha">https://github.com/KamathamBabySaritha</a>
        </li>
      </ul>
    </footer>
  );
};