/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import styles from './PortfolioSection.css';
import projects from '../../data/projects';

const PortfolioSection = () => {

  useEffect(() => {
    document.title = 'Allison Busse | Full-stack Software Developer';
  }, []);

  const [index, setIndex] = useState(0);

  const increment = () => {
    if(index === projects.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  const decrement = () => {
    if(index === 0) setIndex(projects.length - 1);
    else setIndex(index - 1);
  };


  return (
    <section className={styles.PortfolioSection}>
      <h2>What I've Made</h2>
      <div className={styles.flex}>
        <button onClick={() => decrement()}>←</button>
        <PortfolioItem
          {...projects[index]}
        />
        <button onClick={() => increment()}>→</button>
      </div>
    </section>
  );
};

export default PortfolioSection;
