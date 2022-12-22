import React from "react";
import HeroSection from '../components/HeroSection';
import PricingTabs from '../components/PricingTabs';

const FQSection = React.lazy(() => import("../components/FQSection"));
const Newsletter = React.lazy(() => import("../components/Newsletter"));
const Pricing = React.lazy(() => import("../components/Pricing"));
const SpecTable = React.lazy(() => import("../components/SpecTable"));
const Featured = React.lazy(() => import("../components/Featured"));
const Services = React.lazy(() => import("../components/Services"));




const Home = () => {
  return <>
    <HeroSection/>
    <Services/>
    <Featured/>
    <SpecTable/>
    <Pricing/>
    <Newsletter/>
    <FQSection/>
  </>;
};

export default Home;
