import React from "react";
import Hero from "./Hero/Hero";
import Description from "./Description/Description";
import PaltanBanner from "./PaltanBanner/PaltanBanner";
import PaltanNews from "./PaltanNews/PaltanNews";
import Partners from "./Partners/Partners";

function Home() {
  return (
    <div>
      <Hero />
      <Description />
      <PaltanBanner />
      <PaltanNews />
      <Partners />
    </div>
  );
}

export default Home;
