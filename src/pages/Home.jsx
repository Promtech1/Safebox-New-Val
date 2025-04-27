import React from "react";
import HomeIntro from "../components/Home/homeIntro";
import OurApproach from "../components/Home/OurApproach";
import InnovateSolutions from "../components/Home/InnovateSolutions";
import CaseStudiesTestimonials from "../components/Home/CaseStudiesTestimonials";
import CleanEnergySection from "../components/Home/CleanEnergySection";
import Footer from "../components/Footer";
import ImpactCarousel from "../components/Impact/ImpactCarousel";
import WhatNext from "../components/Impact/WhatNext";
import LearnMore from "../components/Education/LearnMore";
import knowledgeCards from "../data/KnowledgeCards";
import KnowledgeCardGrid from "../components/Education/KnowledgeCardGrid";
import SolutionsCarousel from "../components/Home/SolutionsCarousel";
import TestimonialsCarousel from "../components/Home/TestimonialsCarousel";


const Home = () => {
  return (
    <div>
      <HomeIntro />
      <OurApproach />
      {/* <InnovateSolutions />
        <CaseStudiesTestimonials /> */}
        <SolutionsCarousel />
        <TestimonialsCarousel />
      <CleanEnergySection />
    </div>
  );
};

export default Home;
