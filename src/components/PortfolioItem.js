import React from 'react';
import PropTypes from 'prop-types';
import styles from './PortfolioItem.css';


const PortfolioItem = ({ title, image, description, deployed, github }) => (
  <section className={styles.PortfolioItem}>
    <a href={deployed} target='blank'><img src={image}></img></a>
    <div className={styles.text}>
      <h3>{title}</h3>
      <p><a href={deployed} target='blank'>Deployed App</a> | <a href={github} target='blank'>GitHub</a></p>
      <p>{description}</p>
    </div>
  </section>
);

PortfolioItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  deployed: PropTypes.string,
  github: PropTypes.string
};

export default PortfolioItem;
