import React from "react";
import {
  Navbar,
  Section1,
  Section2,
  TickerBanner,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div className="max-w-[1600px] w-full">
      <Navbar />
      <Section1 />
      <TickerBanner />
      <Section2 />
      <Section3 />
      <TickerBanner />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
};

export default Home;
