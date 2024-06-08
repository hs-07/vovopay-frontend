import React from "react";
import { Navbar, Section1, Section2, TickerBanner } from "../components";

const Home = () => {
  return (
    <div className="max-w-[1600px] w-full">
      <Navbar />
      <Section1 />
      <TickerBanner />
      <Section2 />
    </div>
  );
};

export default Home;
