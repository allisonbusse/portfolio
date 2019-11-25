import React, { useEffect } from 'react';
import Header from './Header';
import TechStack from './TechStack';
import PortfolioSection from '../containers/PortfolioSection';
import Footer from './Footer';
import Contact from './Contact';
import './App.css';
import AOS from 'aos';
import '../../data/aos.css';
import AboutMe from './AboutMe';


const App = () => {

  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      duration: 2000,
      animatedClassName: 'animated',
    });
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
