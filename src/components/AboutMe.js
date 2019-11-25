import React from 'react';
import styles from './AboutMe.css';

const AboutMe = () => (
  <section className={styles.AboutMe}>
    <img src='https://raw.githubusercontent.com/allisonbusse/portfolio/master/src/assets/headshot.JPG'/>
    <div className={styles.bio}>
      <p>Technical writer turned developer. Logical thinker. 
        <br /><span className={styles.two}>Creative problem-solver. Efficiency aficionado.</span>
        <br /><span className={styles.three}>Fan of simple, intuitive design and clear code.</span>
        <br /><span className={styles.four}>Pair coding enthusiast. Crossword nerd.</span></p>
    </div>

  </section>
);

export default AboutMe;
