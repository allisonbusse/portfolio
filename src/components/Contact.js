import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Contact.css';

const Contact = () => {

  return (
    <section className={styles.Contact}>
      <h2>Get in Touch</h2>
      <div>
        <ul>
          <li><FontAwesomeIcon icon={faPhone} /> 516-232-3001</li>
          <li><a href='mailto:allisonbusse@gmail.com'><FontAwesomeIcon icon={faEnvelope} /> allisonbusse@gmail.com</a></li>
          <li><a href='../../assets/AllisonBusse.pdf' target='blank'><FontAwesomeIcon icon={faFileAlt} /> View my resume</a></li>
        </ul>
        <ul className={styles.social}>
          <li><a href='http://www.linkedin.com/in/allisonbusse' target='blank'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href='http://www.twitter.com/idkallison' target='blank'><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href='http://www.linkedin.com/in/allisonbusse' target='blank'><FontAwesomeIcon icon={faGithub} /></a></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;