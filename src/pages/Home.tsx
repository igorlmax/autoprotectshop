import React from "react";
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Featured from '../components/Featured';
import Newsletter from '../components/Newsletter';
import FqSection from '../components/FQSection';
import Pricing from '../components/Pricing';
import SpecTable from '../components/SpecTable';

const Home = () => {
  return <>
    <HeroSection/>
    <Services/>
    <Featured/>
    <SpecTable/>
    <Pricing/>
    <Newsletter/>
    <FqSection/>
  </>;
};

export default Home;
