import React from "react";
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Featured from '../components/Featured';
import Newsletter from '../components/Newsletter';
import FqSection from '../components/FQSection';
import Pricing from '../components/Pricing';

const Home = () => {
  return <>
    <HeroSection/>
    <Services/>
    <Featured/>
    <Newsletter/>
    <Pricing/>
    <FqSection/>
  </>;
};

export default Home;
