import React from "react"
import styles from "./TechStack.css"

const TechStack = () => {
  return (
    <>
      <section className={styles.TechStack}>
        <h2 data-aos="fade-right">What I Use</h2>
        <div className={styles.flex}>
          <div data-aos="fade-up">
            <h3>Languages</h3>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h3>Front End</h3>
            <li>React</li>
            <li>Redux</li>
            <li>Ember</li>
            <li>MobX</li>
            <li>RxJS</li>
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
            <li>Cypress</li>
            <li>Webdriver</li>
            <li>React Testing Library</li>
            <li>QUnit</li>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className={styles.small}>
            <h3>Tools</h3>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Circle CI</li>
            <li>JIRA</li>
            <li>Github</li>
            <li>VSCode</li>
          </div>
        </div>
      </section>
    </>
  )
}

export default TechStack
