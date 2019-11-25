import React from 'react';
import styles from './TechStack.css';


const TechStack = () => {

  return (
    <>
      <section className={styles.TechStack}>

        <h2>What I Use</h2>
        <div className={styles.flex}>
          <div>
            <h3>Languages</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </div>
          <div>
            <h3>Front End</h3>
            <li>React</li>
            <li>Redux</li>
          </div>
          <div>
            <h3>Back End</h3>
            <li>Node.js</li>
            <li>Express</li>
          </div>
          <div>
            <h3>Databases</h3>
            <li>PostgresSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </div>
          <div>
            <h3>Testing</h3>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>QUnit</li>
          </div>
          <div>
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
