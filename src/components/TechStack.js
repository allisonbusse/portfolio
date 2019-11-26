import React from 'react';
import styles from './TechStack.css';


const TechStack = () => {

  return (
    <>
      <section className={styles.TechStack}>
        <h2 data-aos="fade-right">What I Use</h2>
        <div className={styles.flex}>
          <div data-aos="fade-up">
            <h3>Languages</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h3>Front End</h3>
            <li>React</li>
            <li>Redux</li>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h3>Back End</h3>
            <li>Node.js</li>
            <li>Express</li>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h3>Databases</h3>
            <li>PostgresSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h3>Testing</h3>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>QUnit</li>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <h3>Tools</h3>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Github</li>
            <li>VSCode</li>
          </div>
        </div>
      </section>

    </>

  );
};

export default TechStack;
