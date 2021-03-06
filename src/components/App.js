import React, { useEffect } from 'react';
import Header from './Header';
import TechStack from './TechStack';
import PortfolioSection from '../containers/PortfolioSection';
import Footer from './Footer';
import Contact from './Contact';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './AboutMe';

const App = () => {

  AOS.init({
    duration: 1200,
  });
  useEffect(() => {
    AOS.refresh();

  }, []);



  return (
    <>
      <Header />
      <AboutMe />
      <TechStack />
      <PortfolioSection />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
