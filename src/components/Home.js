import React from 'react';
import Header from './Header';
import TechStack from './TechStack';
import PortfolioSection from '../containers/PortfolioSection';
import Footer from './Footer';
import Contact from './Contact';

const Home = () => (
  <>
    <Header />
    <TechStack />
    <PortfolioSection />
    <Contact />
    <Footer />
  </>
);

export default Home;
