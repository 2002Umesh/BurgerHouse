import React from "react";
import HeroSection from "../components/HeroSection";
import PromotionsSection from "../components/PromotionsSection";
import MenuSection from "../components/MenuSection";
import AboutSection from "../components/AboutSection";
import BookSection from "../components/BookSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PromotionsSection />
      <MenuSection />
      <AboutSection />
      <BookSection />
    </div>
  );
};

export default Home;
