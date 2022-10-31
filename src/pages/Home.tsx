import React from "react";
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Featured from '../components/Featured';
import Newsletter from '../components/Newsletter';
import FqSection from '../components/FQSection';

const Home = () => {
  return <>
    <HeroSection/>
    <Services/>
    <Featured/>
    <Newsletter/>
    <FqSection/>
  </>;
};

export default Home;
