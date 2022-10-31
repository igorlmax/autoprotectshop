import React from "react";
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Featured from '../components/Featured';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return <>
    <HeroSection/>
    <Services/>
    <Featured/>
    <Newsletter/>
  </>;
};

export default Home;
