import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Gallery2 } from "./components/gallery2";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import  {Traditional}  from "./components/traditional";
import { Blogs } from "./components/blogs";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Traditional data={landingPageData.About}/>
      <Features data={landingPageData.Features} />
      <Gallery2 data={landingPageData.Gallery2} />
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery} />
      <Blogs/>
      <Services data={landingPageData.Services} />
      <Contact data={landingPageData.Contact} />
      
    </div>
  );
};

export default App;
